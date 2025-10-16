'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const ContentTypeSelector = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const contentTypes = [
    {
      id: 'posts',
      icon: '·',
      title: 'Posts',
      description: 'Quick motivation bites to energize your day',
      color: 'bg-white border border-gray-100',
    },
    {
      id: 'blogs',
      icon: '·',
      title: 'Blogs/Stories',
      description: 'Deep dives into inspiring journeys and insights',
      color: 'bg-white border border-gray-100',
    },
    {
      id: 'videos',
      icon: '·',
      title: 'Short-form Videos',
      description: 'Visual stories that spark and inspire',
      color: 'bg-white border border-gray-100',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-6 tracking-tight">
            Choose Your Format
          </h2>
          <p className="text-base text-text-secondary max-w-xl mx-auto font-light leading-relaxed">
            Different moments call for different types of inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentTypes.map((type) => (
            <Link key={type.id} href={`/content?tab=${type.id}`}>
              <Card 
                className={`h-full cursor-pointer transition-all duration-200 hover:shadow-sm ${
                  hoveredCard === type.id ? 'transform -translate-y-1' : ''
                } ${type.color}`}
                onMouseEnter={() => setHoveredCard(type.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="text-center p-8">
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center text-2xl text-text-primary font-light">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl font-normal text-text-primary mb-3">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-text-secondary font-light text-sm leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-8">
                  <div className="text-center">
                    <span className="text-text-primary/60 text-sm font-light">
                      Explore →
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