'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const ContentTypeSelector = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const contentTypes = [
    {
      id: 'posts',
      icon: '📝',
      title: 'Posts',
      description: 'Quick motivation bites to energize your day',
      color: 'from-blue-400 to-primary',
    },
    {
      id: 'blogs',
      icon: '📖',
      title: 'Blogs/Stories',
      description: 'Deep dives into inspiring journeys and insights',
      color: 'from-purple-400 to-primary',
    },
    {
      id: 'videos',
      icon: '🎬',
      title: 'Short-form Videos',
      description: 'Visual stories that spark and inspire',
      color: 'from-orange-100 to-amber-50',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Choose Your Format
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Different moments call for different types of inspiration. Pick what resonates with you right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentTypes.map((type) => (
            <Link key={type.id} href={`/content?tab=${type.id}`}>
              <Card 
                className={`h-full cursor-pointer smooth-transition hover-lift ${
                  hoveredCard === type.id ? 'scale-105 shadow-2xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard(type.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${type.color} flex items-center justify-center text-3xl`}>
                    {type.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-text-secondary">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <span className="text-primary font-medium hover:underline">
                      Explore {type.title} →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentTypeSelector