import Link from "next/link";
import { ArrowRight, Heart, MapPin, Sparkles, Wrench } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | LA Sports World",
  description:
    "How LA Sports World meets every child and group where they are, keeps them engaged, and adapts the experience to fit.",
};

const inclusion = [
  {
    title: "Beginners",
    desc: "Patient, fundamentals-first coaching that builds real confidence.",
  },
  {
    title: "Experienced athletes",
    desc: "Coaching that pushes skill development further.",
  },
  {
    title: "Hesitant participants",
    desc: "We meet kids where they are and build trust first.",
  },
  {
    title: "Mixed groups",
    desc: "Activities adapted so every skill level stays engaged.",
  },
];

const planning = ["Goals", "Interests", "Ability level", "Location", "Group size", "Available space"];

const execution = [
  { icon: Wrench, title: "Equipment", desc: "We bring everything the activity needs." },
  { icon: Sparkles, title: "Coaches", desc: "Matched to the athlete or group." },
  { icon: MapPin, title: "Setup & delivery", desc: "We handle logistics start to finish." },
  { icon: Heart, title: "Breakdown", desc: "We leave the space how we found it." },
];

const services = [
  { title: "Coaching", href: "/coaching" },
  { title: "Parties", href: "/parties" },
  { title: "Classes & Camps", href: "/classes-camps" },
  { title: "Schools & Organizations", href: "/schools-organizations" },
];

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        title="Our Approach"
        subtitle="We meet every child and group where they are, keep them engaged, and adapt the experience to fit."
        tag="About LASW"
        image="/images/lasw_slideshow_003.jpg"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            Our core philosophy is simple: meet kids and groups where they are, keep
            them engaged, and adapt the experience as we go. That means the plan
            changes based on the athlete in front of us, not the other way around.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Confidence & inclusion
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {inclusion.map((i) => (
              <div key={i.title} className="border-t border-navy/12 py-6">
                <div className="text-base font-extrabold text-navy">{i.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Customized planning
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {planning.map((item) => (
              <span
                key={item}
                className="rounded-md bg-navy/[.055] px-4 py-2.5 text-sm font-semibold text-navy/72"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Full-service execution
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {execution.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border-t border-navy/12 py-6 text-center">
                <Icon className="mx-auto mb-3 h-7 w-7 text-gold" />
                <div className="text-base font-extrabold text-navy">{title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Find your program
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-extrabold text-white transition hover:border-gold/50 hover:bg-white/15"
              >
                {s.title}
                <ArrowRight className="ml-2 inline-block h-3.5 w-3.5 text-gold transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
