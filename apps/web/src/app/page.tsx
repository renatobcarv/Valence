import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { NetworkBackground } from '@/components/landing/interactive/NetworkBackground';
import { HeroCalculator } from '@/components/landing/interactive/HeroCalculator';
import { ProblemCards } from '@/components/landing/interactive/ProblemCards';
import { PipelineStory } from '@/components/landing/interactive/PipelineStory';
import { ProductInsights } from '@/components/landing/interactive/ProductInsights';
import { HowItWorksAnimated } from '@/components/landing/interactive/HowItWorksAnimated';
import { RevenueLeakMap } from '@/components/landing/interactive/RevenueLeakMap';
import { DataUploadDemo } from '@/components/landing/interactive/DataUploadDemo';
import { FinalCTA } from '@/components/landing/interactive/FinalCTA';

export default function Home() {
  return (
    <>
      <NetworkBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroCalculator />
        <ProblemCards />
        <PipelineStory />
        <ProductInsights />
        <HowItWorksAnimated />
        <DataUploadDemo />
        <RevenueLeakMap />
        <FinalCTA />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}

