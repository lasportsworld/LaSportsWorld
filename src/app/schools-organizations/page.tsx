import { Building2, CalendarCheck, ClipboardList, ShieldCheck, Users } from "lucide-react";
import {
  EditorialSplit,
  FeaturePanels,
  PageCTA,
  ProcessTimeline,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/MarketingSections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Schools & Businesses | LA Sports World",
  description: "Turnkey sports and activity programming for schools, businesses, camps, nonprofits, and community partners.",
  path: "/schools-businesses",
});

const services = [
  { title: "PE curriculum & after-school", description: "Consistent, age-appropriate programming designed to fit your calendar, space, and student groups.", href: "/schools-businesses/pe-curriculum-after-school", image: "/images/lasw-photo-44.jpg", label: "Schools" },
  { title: "Programming", description: "Coach-led sports blocks and specialty activities that add structure and variety to your camp, workplace, or community program.", href: "/schools-businesses/programming", image: "/images/lasw_slideshow_004.jpg", label: "Programs" },
  { title: "Events", description: "Scalable activity zones, clinics, and soft-play experiences for private, business, and community events.", href: "/schools-businesses/events", image: "/images/lasw-event-3.jpg", label: "Events" },
];

const capabilities = [
  { icon: ClipboardList, title: "Program design", description: "We shape the curriculum, format, and session flow around your objectives." },
  { icon: Users, title: "Coach staffing", description: "Trained coaches are assigned for the ages, group size, and activity mix." },
  { icon: CalendarCheck, title: "Scheduling & logistics", description: "We coordinate timing, equipment, setup, and operational details." },
  { icon: ShieldCheck, title: "Professional standards", description: "Live Scanned, background-checked coaches and clear communication throughout." },
];

const steps = [
  { title: "Discovery", description: "Share your audience, goals, space, and calendar." },
  { title: "Program design", description: "We recommend the right format and activity mix." },
  { title: "Scope & quote", description: "You receive a clear plan with staffing and logistics." },
  { title: "Launch", description: "We coordinate coaches, equipment, and the first session." },
  { title: "Ongoing support", description: "We adapt and communicate as the program develops." },
];

export default function OrganizationsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Schools & Businesses"
        title="A complete activity program, brought to you"
        description="Flexible sports, enrichment, and event programming for schools, camps, nonprofits, businesses, and community organizations across Los Angeles."
        image="/images/lasw-design-1.jpg"
        imageAlt="Children participating in an organized LA Sports World group activity"
        imagePosition="center 38%"
        primaryCta={{ label: "Talk About Your Program", href: "/schools-businesses/request?source=schools-businesses-hero" }}
        secondaryCta={{ label: "Explore Services", href: "#organization-services" }}
        note="Program design · Coaches · Equipment · On-site delivery"
      />

      <EditorialSplit
        eyebrow="A true operating partner"
        title="More than an instructor at the door"
        image="/images/lasw-event-1.jpg"
        imageAlt="Outdoor activity stations prepared for an LA Sports World program"
        imagePosition="center"
        accent="Built to work in the real world"
      >
        <p>Strong programming takes more than a list of games. It takes planning, staffing, equipment, communication, and a team that understands how to work within your environment.</p>
        <p>We build around your audience and objectives, then bring the people and tools to make the experience run smoothly.</p>
      </EditorialSplit>

      <section id="organization-services" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="Ways we partner" title="Programming that fits your setting" />
            <p className="max-w-xl text-base leading-7 text-navy/60 lg:ml-auto">From one-day community events to recurring school programs, the service model scales without losing the human touch.</p>
          </div>
          <FeaturePanels items={services} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
        <div className="brand-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="What we handle" title="The details that make programs dependable" light />
            <p className="max-w-lg text-base leading-7 text-white/60 lg:ml-auto">A single partner for the visible experience and the operational work behind it.</p>
          </div>
          <FeaturePanels items={capabilities} dark />
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="From brief to launch" title="A process built for clarity" description="You know what is included, who is responsible, and what comes next." />
            <Building2 className="h-20 w-20 text-gold/30" strokeWidth={1} />
          </div>
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      <PageCTA
        eyebrow="Start a conversation"
        title="Tell us what your school or business needs"
        description="Share the setting, audience, timing, and idea—even if the details are still taking shape."
        cta={{ label: "Talk About Your Program", href: "/schools-businesses/request?source=schools-businesses-final-cta" }}
        image="/images/about-us.jpg"
        imageAlt="LA Sports World coaches leading children in a gym"
      />
    </>
  );
}
