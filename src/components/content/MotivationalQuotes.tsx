'use client'

import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Quote {
  q: string
  a: string
  h: string
}

interface MotivationalQuotesProps {
  count?: number
}

const MotivationalQuotes = ({ count = 6 }: MotivationalQuotesProps) => {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const fetchQuotes = useCallback(async () => {
    try {
      setRefreshing(true)
      const quotesPromises = Array(count).fill(null).map(() => 
        fetch('https://zenquotes.io/api/random').then(res => res.json())
      )
      const quotesData = await Promise.all(quotesPromises)
      setQuotes(quotesData.map(data => data[0]))
    } catch (error) {
      console.error('Error fetching quotes:', error)
      // Fallback quotes if API fails
      setQuotes([
        { q: "The only way to do great work is to love what you do.", a: "Steve Jobs", h: "" },
        { q: "Life is what happens to you while you're busy making other plans.", a: "John Lennon", h: "" },
        { q: "The future belongs to those who believe in the beauty of their dreams.", a: "Eleanor Roosevelt", h: "" },
        { q: "It is during our darkest moments that we must focus to see the light.", a: "Aristotle", h: "" },
        { q: "The way to get started is to quit talking and begin doing.", a: "Walt Disney", h: "" },
        { q: "Don't let yesterday take up too much of today.", a: "Will Rogers", h: "" }
      ].slice(0, count))
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [count])

  useEffect(() => {
    fetchQuotes()
  }, [count, fetchQuotes])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(count).fill(null).map((_, i) => (
          <Card key={i} className="hover-lift smooth-transition animate-pulse">
            <CardHeader>
              <div className="h-4 bg-surface rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-surface rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-surface rounded"></div>
                <div className="h-3 bg-surface rounded w-4/5"></div>
                <div className="h-3 bg-surface rounded w-3/5"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-light text-text-primary">Daily Motivation</h3>
        <Button 
          onClick={fetchQuotes} 
          disabled={refreshing}
          variant="outline"
          className="border-gray-200 text-text-secondary hover:bg-gray-50 hover:text-text-primary transition-all duration-200 font-light text-sm"
        >
          {refreshing ? 'Refreshing...' : 'New Quotes'}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quotes.map((quote, i) => (
          <Card key={i} className="transition-all duration-200 hover:shadow-sm border border-gray-100 bg-white">
            <CardHeader className="p-8">
              <CardTitle className="text-base font-light text-text-primary leading-relaxed">
                &ldquo;{quote.q}&rdquo;
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <CardDescription className="text-right text-text-secondary font-light text-sm">
                {quote.a}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default MotivationalQuotes