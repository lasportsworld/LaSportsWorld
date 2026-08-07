import type { Metadata } from "next";
import { ClipboardCheck, HeartHandshake, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import {
  EditorialSplit,
  FeaturePanels,
  PageCTA,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/MarketingSections";

export const metadata: Metadata = {
  title: "Coach Standards & Safety | LA Sports World",
  description: "Safety, engagement, and professional conduct are core to how every LA Sports World coach shows up.",
};

const standards = [
  { icon: ShieldCheck, title: "Screened", description: "Every LA Sports World coach is Live Scanned and background checked." },
  { icon: HeartHandshake, title: "Matched thoughtfully", description: "We consider age, goals, group dynamic, and the kind of coach who can build trust." },
  { icon: ClipboardCheck, title: "Prepared", description: "Coaches arrive with an activity plan, appropriate equipment, and a clear purpose for the session." },
  { icon: MessageCircleQuestion, title: "Communicative", description: "Families and organizations should know what to expect and have a clear way to ask questions." },
];

export default function CoachStandardsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Our Coaches"
        title="Good coaching starts with trust"
        description="Safety, engagement, preparation, and professional conduct are not extras. They shape every LA Sports World experience."
        image="/images/about-us.jpg"
        imageAlt="LA Sports World coaches leading children in a group activity"
        imagePosition="center 28%"
        primaryCta={{ label: "Ask a Question", href: "/contact" }}
        secondaryCta={{ label: "Meet the Team", href: "/about#coaches" }}
      />

      <EditorialSplit
        eyebrow="The standard"
        title="A coach kids want to learn from and adults can rely on"
        image="/images/lasw-action-1.jpg"
        imageAlt="An LA Sports World coach supporting a young child during soft play"
        imagePosition="center 30%"
        accent="Safe. Prepared. Fully present."
      >
        <p>Technical knowledge matters, but youth coaching asks for more: patience, awareness, adaptability, and the ability to make every child feel included.</p>
        <p>We expect our coaches to create an environment where children can take healthy risks, make mistakes, and keep building confidence.</p>
      </EditorialSplit>

      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
        <div className="brand-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="How we show up" title="The expectations behind every session" light />
            <p className="max-w-lg text-base leading-7 text-white/60 lg:ml-auto">Clear standards create the freedom for kids to focus on playing, learning, and connecting.</p>
          </div>
          <FeaturePanels items={standards} dark />
        </div>
      </section>

      <section className="bg-gold py-20 text-navy lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:px-8">
          <ShieldCheck className="h-28 w-28 text-navy/25" strokeWidth={1} />
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.22em] text-navy/55">Screening</p>
            <h2 className="mt-3 font-condensed text-5xl font-extrabold uppercase leading-[.92] sm:text-6xl">Every coach is Live Scanned and background checked</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-navy/68">Screening is one important layer of safety. Attentive coaching, age-appropriate planning, clear communication, and professional judgment matter every day too.</p>
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Questions are welcome"
        title="Talk with us about safety or fit"
        description="Whether you are a parent or an organization, we want you to feel confident about the people leading your program."
        cta={{ label: "Contact LA Sports World", href: "/contact" }}
        image="/images/lasw-event-5.jpg"
        imageAlt="Two LA Sports World coaches ready to lead an outdoor activity"
      />
    </>
  );
}
