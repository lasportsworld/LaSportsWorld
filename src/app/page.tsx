import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProgramsSection from "@/components/home/ProgramsSection";
import CampsSection from "@/components/home/CampsSection";
import SportsSection from "@/components/home/SportsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProgramsSection />
      <SportsSection />
      <CampsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
