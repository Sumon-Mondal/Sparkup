import HeroSection from '@/components/home/HeroSection'
import ContentTypeSelector from '@/components/home/ContentTypeSelector'
import StressReliefSection from '@/components/home/StressReliefSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ContentTypeSelector />
      <StressReliefSection />
    </div>
  )
}