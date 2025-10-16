import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import MotivationalQuotes from '@/components/content/MotivationalQuotes'

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Curated Content
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose your preferred format and dive into motivational content designed to fuel your drive.
          </p>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="posts">📝 Posts</TabsTrigger>
            <TabsTrigger value="blogs">📖 Blogs/Stories</TabsTrigger>
            <TabsTrigger value="videos">🎬 Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            <MotivationalQuotes count={6} />
          </TabsContent>

          <TabsContent value="blogs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="hover-lift smooth-transition">
                  <CardHeader>
                    <CardTitle>Inspiring Story #{i}</CardTitle>
                    <CardDescription>
                      Real stories of triumph and perseverance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-4">
                      This is a placeholder for blog/story content. Replace with actual curated stories and longer-form content.
                    </p>
                    <div className="text-sm text-text-secondary">
                      5 min read • Inspiration
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="hover-lift smooth-transition">
                  <CardHeader>
                    <div className="w-full h-48 bg-surface rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-6xl">🎬</div>
                    </div>
                    <CardTitle>Video #{i}</CardTitle>
                    <CardDescription>
                      Short-form motivational content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary text-sm">
                      Placeholder for video content. Replace with actual video embeds or links.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}