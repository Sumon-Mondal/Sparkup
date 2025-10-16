import HeroSection from '@/components/home/HeroSection'
import ContentTypeSelector from '@/components/home/ContentTypeSelector'
import StressReliefSection from '@/components/home/StressReliefSection'
import MotivationalQuotes from '@/components/content/MotivationalQuotes'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ContentTypeSelector />
      
      {/* Featured Motivational Quotes */}
      <section className="py-20 bg-gradient-to-br from-background to-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Daily Inspiration
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Start your day with wisdom from great minds. Fresh quotes to fuel your motivation.
            </p>
          </div>
          <MotivationalQuotes count={3} />
        </div>
      </section>
      
      <StressReliefSection />
    </div>
  )
}