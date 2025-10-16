'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

interface SlimeBlob {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  targetRadius: number
  hue: number
}

const SlimeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const [isInteracting, setIsInteracting] = useState(false)
  const [blobs, setBlobs] = useState<SlimeBlob[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Initialize slime blobs
  const initializeBlobs = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const newBlobs: SlimeBlob[] = []
    for (let i = 0; i < 5; i++) {
      newBlobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: 20 + Math.random() * 30,
        targetRadius: 20 + Math.random() * 30,
        hue: 120 + Math.random() * 60, // Green to lime range
      })
    }
    setBlobs(newBlobs)
  }, [])

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Create gradient background
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
    )
    gradient.addColorStop(0, 'rgba(134, 239, 172, 0.1)')
    gradient.addColorStop(1, 'rgba(34, 197, 94, 0.2)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Update and draw blobs
    blobs.forEach((blob, index) => {
      // Physics
      blob.x += blob.vx
      blob.y += blob.vy

      // Bounce off walls
      if (blob.x <= blob.radius || blob.x >= canvas.width - blob.radius) {
        blob.vx *= -0.8
        blob.x = Math.max(blob.radius, Math.min(canvas.width - blob.radius, blob.x))
      }
      if (blob.y <= blob.radius || blob.y >= canvas.height - blob.radius) {
        blob.vy *= -0.8
        blob.y = Math.max(blob.radius, Math.min(canvas.height - blob.radius, blob.y))
      }

      // Interaction with mouse
      if (isInteracting) {
        const dx = mousePos.x - blob.x
        const dy = mousePos.y - blob.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          blob.vx += (dx / distance) * force * 0.5
          blob.vy += (dy / distance) * force * 0.5
          blob.targetRadius = blob.radius * (1 + force * 0.5)
        }
      }

      // Smooth radius changes
      blob.radius += (blob.targetRadius - blob.radius) * 0.1

      // Friction
      blob.vx *= 0.99
      blob.vy *= 0.99

      // Draw blob with glow effect
      ctx.save()
      
      // Glow
      ctx.shadowColor = `hsl(${blob.hue}, 70%, 60%)`
      ctx.shadowBlur = 20
      
      // Main blob
      ctx.beginPath()
      ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
      const blobGradient = ctx.createRadialGradient(
        blob.x - blob.radius * 0.3, blob.y - blob.radius * 0.3, 0,
        blob.x, blob.y, blob.radius
      )
      blobGradient.addColorStop(0, `hsla(${blob.hue}, 70%, 80%, 0.9)`)
      blobGradient.addColorStop(0.7, `hsla(${blob.hue}, 60%, 60%, 0.7)`)
      blobGradient.addColorStop(1, `hsla(${blob.hue}, 50%, 40%, 0.5)`)
      ctx.fillStyle = blobGradient
      ctx.fill()
      
      // Highlight
      ctx.beginPath()
      ctx.arc(blob.x - blob.radius * 0.3, blob.y - blob.radius * 0.3, blob.radius * 0.3, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${blob.hue}, 80%, 90%, 0.6)`
      ctx.fill()
      
      ctx.restore()
    })

    animationFrameRef.current = requestAnimationFrame(animate)
  }, [blobs, isInteracting, mousePos])

  // Handle mouse/touch events
  const handleInteractionStart = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    setMousePos({
      x: clientX - rect.left,
      y: clientY - rect.top
    })
    setIsInteracting(true)
  }

  const handleInteractionMove = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    if (!canvas || !isInteracting) return

    const rect = canvas.getBoundingClientRect()
    setMousePos({
      x: clientX - rect.left,
      y: clientY - rect.top
    })
  }

  const handleInteractionEnd = () => {
    setIsInteracting(false)
  }

  // Initialize canvas and start animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    initializeBlobs()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [initializeBlobs])

  // Start animation when blobs are ready
  useEffect(() => {
    if (blobs.length > 0) {
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animate, blobs])

  return (
    <div className="w-full h-96 relative rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer touch-none"
        onMouseDown={(e) => handleInteractionStart(e.clientX, e.clientY)}
        onMouseMove={(e) => handleInteractionMove(e.clientX, e.clientY)}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={(e) => {
          e.preventDefault()
          const touch = e.touches[0]
          handleInteractionStart(touch.clientX, touch.clientY)
        }}
        onTouchMove={(e) => {
          e.preventDefault()
          const touch = e.touches[0]
          handleInteractionMove(touch.clientX, touch.clientY)
        }}
        onTouchEnd={(e) => {
          e.preventDefault()
          handleInteractionEnd()
        }}
      />
      
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-green-700 text-sm font-medium">
          {isInteracting ? 'Keep playing to release stress! 🟢' : 'Click or tap to interact with the slime'}
        </p>
      </div>
    </div>
  )
}

export default SlimeGame