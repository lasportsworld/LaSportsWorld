import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Users } from "lucide-react";
import SawyerEmbed from "@/components/shared/SawyerEmbed";
import {
  EditorialSplit,
  FeaturePanels,
  PageCTA,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/MarketingSections";

export const metadata: Metadata = {
  title: "Classes & Camps | LA Sports World",
  description: "Browse LA Sports World's ongoing classes, holiday camps, and upcoming summer camp.",
};

const programs = [
  { title: "Classes", description: "Ongoing and pop-up programs that turn weekly movement into steady confidence and new skills.", href: "/classes-camps/classes", image: "/images/LASW_Clinics_Header_Image.jpg", label: "Weekly & pop-up" },
  { title: "Holiday Camps", description: "Full, active days built around school breaks—with variety, structure, and plenty of movement.", href: "/classes-camps/holiday-camps", image: "/images/Winter-Camp-Header-Image.jpg", label: "School-break energy" },
  { title: "Summer Camp", description: "A community-focused summer program in development. Join the interest list to hear first.", href: "/classes-camps/summer-camp", image: "/images/Summer-Camp-Header-Image.jpg", label: "Coming soon" },
];

const expectations = [
  { icon: Users, title: "Age-appropriate planning", description: "Sessions are paced around the ages, abilities, and group dynamic in front of us." },
  { icon: Sparkles, title: "Confidence-building", description: "Coaches meet children where they are and create real reasons to keep trying." },
  { icon: Shield, title: "Consistent coaching quality", description: "Every class and camp carries the same thoughtful standards as our private programs." },
];

export default function ClassesCampsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Scheduled Programs"
        title="Where movement becomes community"
        description="Join organized classes and camps filled with sports, variety, encouraging coaches, and the kind of fun kids ask to do again."
        image="/images/Summer-Camp-Header-Image.jpg"
        imageAlt="Children participating in an LA Sports World camp"
        imagePosition="center 45%"
        primaryCta={{ label: "View Open Programs", href: "#open-programs" }}
        secondaryCta={{ label: "Full Schedule", href: "/register" }}
        note="Classes · Holiday camps · Summer programs"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <SectionHeading eyebrow="Find your next program" title="Three ways to jump in" />
            <p className="max-w-xl text-base leading-7 text-navy/60 lg:ml-auto">Unlike custom coaching and parties, these programs have set dates and locations that families can browse and join.</p>
          </div>
          <FeaturePanels items={programs} />
        </div>
      </section>

      <EditorialSplit
        eyebrow="What it feels like"
        title="Structured enough to grow. Joyful enough to belong."
        image="/images/Day-Camp-Header-Image.jpg"
        imageAlt="Kids enjoying a day camp activity"
        imagePosition="center 38%"
        reverse
        accent="Play hard. Cheer louder."
      >
        <p>Kids get variety without chaos: a thoughtful rhythm of skill-building, games, challenges, and group moments that keeps the day moving.</p>
        <p>Our coaches build an environment where first-timers feel welcome and experienced athletes stay challenged.</p>
        <FeaturePanels items={expectations} />
      </EditorialSplit>

      <section id="open-programs" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Live registration" title="Current opportunities" description="Browse what is open now. Availability and program details come directly from our registration system." />
            <Link href="/register" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.15em] text-navy transition hover:text-gold">See full schedule <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-[2rem] border border-navy/10 bg-cream p-3 shadow-sm sm:p-6">
            <SawyerEmbed
              src={process.env.SAWYER_CLASSES_CAMPS_EMBED_URL || process.env.SAWYER_REGISTER_EMBED_URL}
              title="LA Sports World classes and camps registration"
              minHeight={700}
              fallbackMessage="Live registration is being connected here. In the meantime, pick a program type above or contact us directly."
            />
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Come play with us"
        title="Find the program that fits your family"
        description="See everything open for registration, or reach out if you need help finding the right class or camp."
        cta={{ label: "Explore the Schedule", href: "/register" }}
        image="/images/hero-kids-camp-2.jpg"
        imageAlt="Kids participating in a group sports activity"
      />
    </>
  );
}
