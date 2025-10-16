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
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-text-primary mb-6 tracking-tight">
              Daily Inspiration
            </h2>
            <p className="text-base text-text-secondary max-w-lg mx-auto font-light leading-relaxed">
              Start your day with wisdom from great minds.
            </p>
          </div>
          <MotivationalQuotes count={3} />
        </div>
      </section>
      
      <StressReliefSection />
    </div>
  )
}