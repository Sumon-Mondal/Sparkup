import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-light text-text-primary mb-8 leading-tight tracking-tight">
          Fuel Your Drive.
          <br />
          <span className="font-normal">Find Your Calm.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Curated motivation for every moment—whether you need a spark or a breath.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/content">
            <Button 
              size="lg" 
              className="bg-text-primary hover:bg-text-primary/90 text-white px-8 py-3 text-base font-normal border-0 shadow-none hover:shadow-sm transition-all duration-200"
            >
              Explore Content
            </Button>
          </Link>
          <Link href="/relief">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-text-primary/20 text-text-primary hover:bg-text-primary/5 px-8 py-3 text-base font-normal transition-all duration-200"
            >
              Try Stress Relief
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection