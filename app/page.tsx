import HeroSection from "@/components/landing/HeroSection";
import FeatureSection from "@/components/landing/FeatureSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PreviewSection from "@/components/landing/PreviewSection";

import CTASection from "@/components/landing/CTASection";
import Navbar from "@/components/landing/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#08090c] text-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <PreviewSection />
      <CTASection />
    </main>
  );
}
