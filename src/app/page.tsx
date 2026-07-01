import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import GalleryStripSection from "@/components/home/GalleryStripSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <WhyUsSection />
      <HowItWorksSection />
      <GalleryStripSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
