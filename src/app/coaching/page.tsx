import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ClipboardList,
  MapPin,
  Sliders,
  Target,
  Users,
} from "lucide-react";
import {
  Checklist,
  EditorialSplit,
  FeaturePanels,
  PageCTA,
  PhotoPlaceholder,
  ProcessTimeline,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/MarketingSections";

export const metadata: Metadata = {
  title: "Coaching | LA Sports World",
  description: "Compare private and group coaching options built around your child, group, goals, location, and schedule.",
};

const formats = [
  {
    number: "01",
    title: "Private Coaching",
    description: "One-on-one coaching with individualized attention, pacing, and feedback.",
    href: "/coaching/private",
    details: [
      ["Best for", "Focused skill-building, confidence, and individual progress"],
      ["Format", "One athlete with one coach"],
      ["Atmosphere", "Focused, flexible, and highly personalized"],
    ],
  },
  {
    number: "02",
    title: "Group Coaching & Pods",
    description: "Shared coaching for a small group that learns, moves, and progresses together.",
    href: "/coaching/groups-pods",
    details: [
      ["Best for", "Friends, classmates, siblings, and recurring groups"],
      ["Format", "A small group with a matched coach"],
      ["Atmosphere", "Social, energetic, and collaborative"],
    ],
  },
];

const customizable = [
  { icon: Sliders, title: "Sport & experience", description: "Choose the sport and start at the right level—from first exposure to focused refinement." },
  { icon: Target, title: "Confidence & goals", description: "Shape sessions around engagement, specific skills, and the progress that matters most." },
  { icon: Users, title: "Group size", description: "Keep the attention one-on-one or build the right small-group dynamic." },
  { icon: MapPin, title: "Location", description: "Meet at your home, a local park, or another agreed setting that supports the session." },
  { icon: CalendarDays, title: "Schedule", description: "Find a useful cadence and timing that works with family or group routines." },
  { icon: ClipboardList, title: "Curriculum", description: "Build a practical session plan around age, ability, format, and next-step goals." },
];

const steps = [
  { title: "Inquiry", description: "Share who coaching is for, what you are looking for, and any timing preferences." },
  { title: "Needs assessment", description: "We clarify goals, experience, group dynamics, location, and the best format." },
  { title: "Recommended setup", description: "You receive a straightforward recommendation for private or group coaching." },
  { title: "Scheduling", description: "Together, we find a recurring or one-time schedule that works." },
  { title: "Coach assignment", description: "We match the child or group with a coach suited to the experience." },
];

export default function CoachingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Coaching Overview"
        title="Coaching that meets kids where they are"
        description="LA Sports World offers two flexible ways to coach: individualized Private Coaching and social Group Coaching & Pods. Explore both and choose the format that fits."
        imageAlt="Future LA Sports World coaching overview photo"
        primaryCta={{ label: "Request Coaching", href: "/contact?service=coaching" }}
        secondaryCta={{ label: "Explore Formats", href: "#formats" }}
        note="Two formats · One thoughtful, flexible approach"
      />

      <EditorialSplit
        eyebrow="What LASW coaching means"
        title="Built around the child—or the group—in front of us"
        imageAlt="Future photo showing LA Sports World coaching"
        accent="Flexible by design"
      >
        <p>Coaching is not a one-size-fits-all package. We shape the experience around the people participating, the sport they want to explore, and the progress they want to make.</p>
        <p>Private and group formats are both flexible. Age, experience, goals, setting, and schedule help determine what the right setup looks like.</p>
        <Checklist items={["The child or group", "Sport & experience", "Goals & confidence", "Location & schedule"]} />
      </EditorialSplit>

      <section id="formats" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow="Choose a format" title="Two ways to make coaching fit" />
            <p className="max-w-xl text-base leading-7 text-navy/60 lg:ml-auto">The best choice comes down to how your child learns, the kind of attention they need, and whether shared energy helps them thrive.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {formats.map((format) => (
              <article key={format.title} className="group overflow-hidden rounded-[1.75rem] border border-navy/10 bg-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <PhotoPlaceholder className="h-64 border-0 border-b border-navy/10 sm:h-72" />
                <div className="p-6 sm:p-8">
                  <p className="font-condensed text-6xl font-extrabold leading-none text-gold/25">{format.number}</p>
                  <h3 className="mt-2 font-condensed text-3xl font-extrabold uppercase text-navy sm:text-4xl">{format.title}</h3>
                  <p className="mt-3 max-w-lg text-base leading-7 text-navy/62">{format.description}</p>
                  <dl className="mt-7 divide-y divide-navy/10 border-y border-navy/10">
                    {format.details.map(([term, detail]) => (
                      <div key={term} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                        <dt className="text-[11px] font-extrabold uppercase tracking-[.16em] text-gold">{term}</dt>
                        <dd className="text-sm leading-6 text-navy/68">{detail}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link href={format.href} className="mt-7 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.14em] text-navy transition hover:text-gold">
                    Explore {format.title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
        <div className="brand-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="Shaped around your needs" title="The variables we can customize" light />
            <p className="max-w-lg text-base leading-7 text-white/60 lg:ml-auto">These connected details help us recommend a format and create a coaching experience that feels considered from day one.</p>
          </div>
          <FeaturePanels items={customizable} dark />
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="What happens after you reach out" title="A simple path to the right setup" description="You do not need to know the perfect format before contacting us. We use a clear five-step process to make the recommendation together." />
            <p className="font-condensed text-7xl font-extrabold leading-none text-gold/20 sm:text-8xl">01—05</p>
          </div>
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      <EditorialSplit
        eyebrow="Standards, trust & fit"
        title="The right match is more than technical skill"
        imageAlt="Future photo showing a trusted LA Sports World coach"
        reverse
        dark
      >
        <p>We look for coaches who can connect with kids, communicate clearly, and create the conditions for confident progress—not simply demonstrate a sport.</p>
        <Checklist light items={["Live Scanned & background checked", "Thoughtful coach matching", "Confidence-building approach", "Quality equipment & preparation"]} />
        <p className="border-l-2 border-gold pl-5 font-condensed text-2xl font-bold uppercase leading-tight text-white">Safe, professional, prepared—and fully present with the child or group.</p>
        <Link href="/contact?service=coaching" className="button-gold">Request Coaching <ArrowRight className="h-4 w-4" /></Link>
        <Link href="#formats" className="ml-1 inline-flex items-center text-xs font-extrabold uppercase tracking-[.14em] text-white/60 transition hover:text-gold">Review the two formats</Link>
      </EditorialSplit>

      <PageCTA
        eyebrow="Ready when you are"
        title="Let’s find the coaching format that fits"
        description="Tell us about your child or group. We’ll help you choose the format, schedule, and coaching setup that makes sense."
        cta={{ label: "Request Coaching", href: "/contact?service=coaching" }}
        imageAlt="Future LA Sports World coaching inquiry photo"
      />
    </>
  );
}
