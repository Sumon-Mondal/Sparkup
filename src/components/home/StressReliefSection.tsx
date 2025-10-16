import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const StressReliefSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-surface to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Need a Moment to Breathe?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Sometimes the best motivation comes from taking a step back. Explore our stress relief tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="border-none shadow-2xl bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="text-3xl">🟢</span>
                  Interactive Digital Slime
                </CardTitle>
                <CardDescription className="text-lg">
                  Stretch, squish, and play your stress away
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-gradient-to-br from-green-200 to-green-400 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden cursor-pointer group">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-300/50 to-green-500/50 group-hover:from-green-400/50 group-hover:to-green-600/50 smooth-transition"></div>
                  <div className="relative z-10 text-green-800 text-6xl animate-bounce">
                    🟢
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-green-700 font-medium">Click to interact →</span>
                  </div>
                </div>
                <p className="text-text-secondary mb-6">
                  Our digital slime responds to your touch with realistic physics. Perfect for releasing tension and anxiety.
                </p>
                <Link href="/relief">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white smooth-transition">
                    Try Digital Slime
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="hover-lift smooth-transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🫁 Breathing Exercises
                </CardTitle>
                <CardDescription>
                  Guided patterns for instant calm
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift smooth-transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎵 Ambient Soundscapes
                </CardTitle>
                <CardDescription>
                  Nature sounds and white noise for focus
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift smooth-transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🧘 Meditation Timer
                </CardTitle>
                <CardDescription>
                  Customizable mindfulness sessions
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="pt-4">
              <Link href="/relief">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white smooth-transition">
                  Explore All Relief Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StressReliefSection