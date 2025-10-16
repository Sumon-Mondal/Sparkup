import SlimeGame from '@/components/relief/SlimeGame'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReliefPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Find Your Calm
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Interactive tools and games designed to help you relax, de-stress, and find your center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🟢 Interactive Digital Slime
              </CardTitle>
              <CardDescription>
                Stretch, squish, and play with our digital slime to release tension and anxiety
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SlimeGame />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover-lift smooth-transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🫁 Breathing Exercise
              </CardTitle>
              <CardDescription>
                Guided breathing patterns for relaxation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary text-sm">
                4-7-8 breathing technique and other calming patterns to help you relax.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift smooth-transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎵 Ambient Sounds
              </CardTitle>
              <CardDescription>
                Nature sounds and white noise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary text-sm">
                Rain, ocean waves, forest sounds, and other ambient audio for focus and relaxation.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift smooth-transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🧘 Meditation Timer
              </CardTitle>
              <CardDescription>
                Customizable meditation sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary text-sm">
                Set your preferred duration and background sounds for mindful meditation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}