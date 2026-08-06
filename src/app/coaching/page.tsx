import type { Metadata } from "next";
import { MapPin, ShieldCheck, Sliders, Users } from "lucide-react";
import {
  Checklist,
  EditorialSplit,
  FeaturePanels,
  PageCTA,
  ProcessTimeline,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/MarketingSections";

export const metadata: Metadata = {
  title: "Coaching | LA Sports World",
  description: "Private and group coaching built around your child, group, sport, goals, location, and schedule.",
};

const formats = [
  {
    title: "Private Coaching",
    description: "Focused one-on-one coaching that moves at one athlete's pace and stays centered on their goals.",
    href: "/coaching/private",
    image: "/images/LASW_Private_Lessons_Header_Image.jpg",
    label: "One athlete · One coach",
  },
  {
    title: "Group Coaching & Pods",
    description: "High-energy coaching for an existing group—or help forming a recurring group of similarly aged athletes.",
    href: "/coaching/groups-pods",
    image: "/images/hero-kids-group.jpg",
    label: "Friends · Siblings · Small groups",
  },
];

const customizable = [
  { icon: Sliders, title: "Sport & experience", description: "From first-timers learning the basics to experienced athletes sharpening technique." },
  { icon: Users, title: "Confidence & engagement", description: "We coach the whole child, adjusting pace and communication to help them stay engaged." },
  { icon: MapPin, title: "Location & schedule", description: "Your home, local park, or another agreed location—on a cadence that works for you." },
  { icon: ShieldCheck, title: "A purposeful curriculum", description: "Each session has a plan shaped by what the athlete or group actually needs next." },
];

const steps = [
  { title: "Inquiry", description: "Tell us about the athlete, group, and goals." },
  { title: "Needs assessment", description: "We ask the right questions to understand the fit." },
  { title: "Recommended setup", description: "We shape the sport, format, and coaching plan." },
  { title: "Scheduling", description: "Together, we lock in times that work." },
  { title: "Coach assignment", description: "The right matched coach gets started." },
];

export default function CoachingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Coaching & Groups"
        title="Coaching that meets kids where they are"
        description="Private and small-group sessions shaped around the athlete—not a fixed package. We bring the coach, equipment, and a thoughtful plan to you."
        image="/images/LASW_Private_Lessons_Header_Image.jpg"
        imageAlt="LA Sports World coach working with a young athlete"
        imagePosition="64% center"
        primaryCta={{ label: "Request Coaching", href: "/contact?service=private-coaching" }}
        secondaryCta={{ label: "Explore Formats", href: "#formats" }}
        note="Private coaching · Groups & pods · Ages 2–14"
      />

      <EditorialSplit
        eyebrow="The LASW approach"
        title="Built around the child in front of us"
        image="/images/lasw_slideshow_003.jpg"
        imageAlt="Coach encouraging kids during a sports session"
        imagePosition="center 35%"
        accent="Progress should feel like play"
      >
        <p>Every coaching plan starts with who the athlete is today: what excites them, what challenges them, and what would make the experience feel successful.</p>
        <p>Whether it is one child working on a specific skill or friends who want to train together, we match the sport, schedule, and coach to the people—not the other way around.</p>
        <Checklist items={["Age-appropriate coaching", "Confidence at the center", "Equipment brought to you", "A plan that can evolve"]} />
      </EditorialSplit>

      <section id="formats" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow="Choose your format" title="Personal attention, two ways" />
            <p className="max-w-xl text-base leading-7 text-navy/60 lg:ml-auto">Both formats are customized and coach-led. The difference is simply whether the energy is focused on one athlete or shared across a small group.</p>
          </div>
          <FeaturePanels items={formats} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
        <div className="brand-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="Built around your child" title="The details are the program" light />
            <p className="max-w-lg text-base leading-7 text-white/60 lg:ml-auto">The right coaching experience lives in the details. We tune the format around four connected decisions.</p>
          </div>
          <FeaturePanels items={customizable} dark />
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="A clear path forward" title="How coaching works" description="From the first note to the first session, we keep the process personal, transparent, and easy to follow." />
            <p className="font-condensed text-7xl font-extrabold leading-none text-gold/20 sm:text-8xl">01—05</p>
          </div>
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      <EditorialSplit
        eyebrow="Coaches you can trust"
        title="The right match matters"
        image="/images/about-us.jpg"
        imageAlt="LA Sports World coaching team with children"
        imagePosition="center 35%"
        reverse
        dark
      >
        <p>Every LA Sports World coach is Live Scanned and background checked. We also match coaches with the athlete or group in mind, because trust and connection are part of great coaching.</p>
        <p className="border-l-2 border-gold pl-5 font-condensed text-2xl font-bold uppercase leading-tight text-white">Skill matters. So does knowing how to bring confidence out of a child.</p>
      </EditorialSplit>

      <PageCTA
        eyebrow="Ready when you are"
        title="Let’s build the right coaching setup"
        description="Tell us about your athlete or group. We’ll recommend a format, schedule, and coach that makes sense."
        cta={{ label: "Request Coaching", href: "/contact?service=private-coaching" }}
        image="/images/hero-soccer-2.jpg"
        imageAlt="Kids playing soccer with LA Sports World"
      />
    </>
  );
}
