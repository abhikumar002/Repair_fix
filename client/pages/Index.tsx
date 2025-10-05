import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Index() {
  return (
    <div className="space-y-20 lg:space-y-24">
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <PricingSection />
      <TestimonialsSection />
      <CoverageSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
