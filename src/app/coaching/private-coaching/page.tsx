import type { Metadata } from "next";
import {
  Activity,
  CalendarDays,
  Clock3,
  Compass,
  HeartHandshake,
  MapPin,
  PackageCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
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
  title: "Private Coaching | LA Sports World",
  description: "Personalized one-on-one coaching shaped around your child’s goals, experience, pace, location, and schedule.",
};

const inquiryHref = "/coaching/request?format=private&source=private-coaching";

const sports = ["Basketball", "Flag football", "Soccer", "Volleyball", "Baseball", "Fitness & movement"];
const goals = ["Beginner fundamentals", "Confidence", "Coordination", "Sport-specific development", "Tryout preparation", "Consistent movement"];

const customizable = [
  { icon: MapPin, title: "Location", description: "Choose a home, nearby park, school, or another agreed setting that works for the session." },
  { icon: CalendarDays, title: "Schedule & frequency", description: "Build a one-time or recurring rhythm around school, family routines, and availability." },
  { icon: Clock3, title: "Session length", description: "Shape the session duration around age, attention, goals, and the type of work being done." },
  { icon: Target, title: "Sport & goals", description: "Focus on a specific sport, foundational movement, confidence, or a defined next milestone." },
  { icon: SlidersHorizontal, title: "Pace & experience", description: "Start at the child’s current level and adjust the challenge as skills and comfort grow." },
  { icon: PackageCheck, title: "Equipment & setup", description: "We plan what the session needs and bring age-appropriate equipment when applicable." },
];

const familyBenefits = [
  { title: "Individual attention", description: "The coach can notice the small things, respond in real time, and keep the session centered on one child." },
  { title: "Progress at their pace", description: "There is room to repeat, slow down, build up, or add challenge without pressure from a larger group." },
  { title: "Confidence through consistency", description: "A familiar routine and focused encouragement can help kids feel safer trying, learning, and improving." },
  { title: "Support for a specific goal", description: "Sessions stay anchored to what matters now, from first exposure to focused preparation." },
];

const processSteps = [
  { title: "Tell us about your child", description: "Share their age, interests, experience, and what you hope coaching can support." },
  { title: "We clarify the goals", description: "We learn about the sport, schedule, preferred location, pace, and any useful context." },
  { title: "We recommend a setup", description: "We shape the right session format, cadence, and practical plan for your family." },
  { title: "We match & schedule", description: "We identify a fitting coach and coordinate the details needed to begin." },
  { title: "Coaching begins", description: "Your child starts with a focused experience that can evolve as their needs change." },
];

const pricingFactors = [
  ["Session length", "The amount of focused coaching time that fits the child and goal."],
  ["Location", "Travel, setting, and any facility considerations connected to the session."],
  ["Schedule & frequency", "Whether coaching is one-time, recurring, or built around a particular timeline."],
  ["Coaching setup", "The sport, equipment, preparation, and support the experience requires."],
];

export default function PrivateCoachingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Coaching"
        title="One-on-one coaching built around your child"
        description="Personalized support shaped around your child’s experience, interests, pace, and goals, with the flexibility to work for your family."
        imageAlt="Future LA Sports World private coaching hero photo"
        primaryCta={{ label: "Request Private Coaching", href: inquiryHref }}
        secondaryCta={{ label: "How It Works", href: "#how-it-works" }}
        note="Personal goals · Flexible location · Thoughtful coach matching"
      />

      <EditorialSplit
        eyebrow="A coaching plan that fits"
        title="Focused attention for the child in front of us"
        imageAlt="Future photo of a child receiving one-on-one coaching"
        reverse
        accent="Their pace. Their goals."
      >
        <p>Private coaching gives one child the space to learn, move, and build confidence with a coach focused on their needs. It can begin with the basics, target a specific skill, or simply create a more comfortable way to engage with sports.</p>
        <p>The experience is not pulled from a fixed template. We use your child’s age, experience, interests, and goals to shape a practical starting point, then adjust from there.</p>
        <Checklist items={["Focused skill-building", "Confidence-building", "Individualized pacing", "A first introduction to sport", "More personalized attention", "Support for specific goals"]} />
      </EditorialSplit>

      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
        <div className="brand-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <SectionHeading eyebrow="Common sports & goals" title="A flexible format for what matters now" light />
            <p className="max-w-xl text-base leading-7 text-white/65 lg:ml-auto">Private coaching can support a familiar sport, a new interest, or a developmental goal that benefits from closer attention. These examples are not limits.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[1.75rem] border border-white/10 bg-white/[.055] p-6 sm:p-8">
              <div className="flex items-center gap-3"><Activity className="h-6 w-6 text-gold" /><h3 className="font-condensed text-2xl font-extrabold uppercase">Sports & activities</h3></div>
              <p className="mt-3 text-sm leading-6 text-white/55">Build familiarity, sharpen fundamentals, or develop sport-specific skills.</p>
              <div className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">{sports.map((item) => <span key={item} className="flex items-center gap-2 text-sm font-semibold text-white/78"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{item}</span>)}</div>
            </article>
            <article className="rounded-[1.75rem] border border-gold/30 bg-gold/[.08] p-6 sm:p-8">
              <div className="flex items-center gap-3"><Compass className="h-6 w-6 text-gold" /><h3 className="font-condensed text-2xl font-extrabold uppercase">Goals we can build around</h3></div>
              <p className="mt-3 text-sm leading-6 text-white/55">Use one-on-one time to focus on the progress that feels most useful to your child.</p>
              <div className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">{goals.map((item) => <span key={item} className="flex items-center gap-2 text-sm font-semibold text-white/78"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{item}</span>)}</div>
            </article>
          </div>
          <p className="mt-7 text-sm text-white/48">Have something different in mind? Tell us what your child is interested in and we’ll help determine the right next step.</p>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <SectionHeading eyebrow="Flexible by design" title="What we customize" />
            <p className="max-w-xl text-base leading-7 text-navy/62 lg:ml-auto">The best coaching setup comes from considering the details together. We shape the experience around your child, then make the logistics work around your family.</p>
          </div>
          <FeaturePanels items={customizable} />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-16 lg:px-8">
          <div className="relative">
            <PhotoPlaceholder className="aspect-[4/5] rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4] lg:aspect-[4/5]" />
            <div className="absolute -bottom-5 right-4 max-w-xs rounded-2xl bg-gold p-5 text-navy shadow-xl sm:right-8">
              <HeartHandshake className="h-6 w-6" />
              <p className="mt-3 font-condensed text-2xl font-extrabold uppercase leading-none">Progress feels different when support feels personal.</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Why families choose private coaching" title="More space to learn. Less pressure to keep up." description="For many children, one-on-one coaching creates the conditions for better connection, clearer feedback, and more confident progress." />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {familyBenefits.map((benefit, index) => (
                <article key={benefit.title} className="rounded-2xl border border-navy/8 bg-cream p-5 sm:p-6">
                  <span className="font-condensed text-4xl font-extrabold text-gold/35">0{index + 1}</span>
                  <h3 className="mt-2 font-condensed text-xl font-extrabold uppercase text-navy">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy/58">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="How private coaching works" title="A thoughtful setup without the guesswork" description="You do not need to arrive with a complete plan. Tell us what you know, and we’ll help shape the rest." />
            <p className="font-condensed text-7xl font-extrabold leading-none text-gold/20 sm:text-8xl">01–05</p>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute -right-24 top-12 h-72 w-72 rounded-full border-[40px] border-gold/10" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="Clear, tailored pricing" title="Pricing follows the setup" description="Private coaching pricing depends on the experience we build, not a one-size-fits-all package. A short inquiry gives us enough context to recommend an appropriate setup and explain the pricing clearly." />
            <p className="mt-5 max-w-md text-sm leading-6 text-navy/50">Not sure what session length or cadence makes sense? That is completely fine. We can help you think it through.</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-navy text-white shadow-xl shadow-navy/10">
            <div className="border-b border-white/10 p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-gold">What shapes your quote</p>
              <h3 className="mt-3 font-condensed text-3xl font-extrabold uppercase sm:text-4xl">A clear recommendation for your family</h3>
            </div>
            <dl className="divide-y divide-white/10 px-6 sm:px-8">
              {pricingFactors.map(([term, detail], index) => (
                <div key={term} className="grid gap-2 py-5 sm:grid-cols-[3rem_10rem_1fr] sm:items-start sm:gap-4">
                  <span className="font-condensed text-2xl font-extrabold text-gold/55">0{index + 1}</span>
                  <dt className="font-condensed text-lg font-extrabold uppercase text-white">{term}</dt>
                  <dd className="text-sm leading-6 text-white/58">{detail}</dd>
                </div>
              ))}
            </dl>
            <div className="m-5 rounded-2xl bg-white/[.07] p-5 sm:m-7 sm:p-6">
              <p className="flex items-center gap-3 text-sm font-bold text-white/82"><Sparkles className="h-5 w-5 shrink-0 text-gold" /> We’ll recommend the setup and pricing together before coaching begins.</p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="A personal next step"
        title="Tell us what would help your child thrive"
        description="Share a few details about your child, their interests, and your goals. We’ll review the request and help shape a private coaching setup that fits."
        cta={{ label: "Request Private Coaching", href: inquiryHref }}
        imageAlt="Future LA Sports World private coaching inquiry photo"
      />
    </>
  );
}
