import { Calendar, Layers, MapPin, PartyPopper, Users } from "lucide-react";
import {
  EditorialSplit,
  FeaturePanels,
  PageCTA,
  PhotoMosaic,
  ProcessTimeline,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/MarketingSections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Birthday Parties | LA Sports World",
  description: "LA Sports World brings organized sports, games, and activities to your child's birthday party.",
  path: "/parties",
});

const experiences = [
  { icon: PartyPopper, title: "Sports & games", description: "Choose two favorite sports or activities, led by a coach who knows how to keep a party moving." },
  { icon: Layers, title: "Obstacle & coordination", description: "Fast-moving courses and games that give every child a way into the action." },
  { icon: Users, title: "Soft play", description: "Age-appropriate setups that invite younger guests to explore, move, and play safely." },
  { icon: MapPin, title: "Equipment & setup", description: "We bring the activity equipment, organize the space, and handle the breakdown." },
];

const steps = [
  { title: "Inquiry", description: "Share the date, age, group size, and party vision." },
  { title: "Consultation", description: "We talk through activities, space, and logistics." },
  { title: "Party plan", description: "You receive a recommended mix that fits." },
  { title: "Confirmation", description: "Approve the clear quote and lock in the date." },
  { title: "Party day", description: "We arrive, set up, lead the fun, and break down." },
];

export default function BirthdayPartiesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Parties & Events"
        title="A party they’ll talk about all year"
        description="Organized sports and games, expertly led at your park, home, backyard, or venue."
        image="/images/lasw-event-3.jpg"
        imageAlt="An outdoor LA Sports World soft-play and activity setup"
        imagePosition="center 42%"
        primaryCta={{ label: "Plan a Party", href: "/parties/request?source=parties-hero" }}
        secondaryCta={{ label: "See the Experience", href: "#experience" }}
        note="Custom activities · Equipment included · We come to you"
      />

      <EditorialSplit
        eyebrow="Your party, in motion"
        title="You bring the guests. We bring the energy."
        image="/images/lasw-photo-real-1.jpg"
        imageAlt="An LA Sports World coach creating bubbles at a decorated first birthday party"
        imagePosition="center"
        accent="More playing. Less planning."
      >
        <p>LA Sports World is the organized activity partner for your child’s celebration. We create a flow that keeps kids included, engaged, and happily moving.</p>
        <p>Every party is shaped around the age group, guest count, space, and personality of the celebration. It feels spontaneous to the kids because the planning is handled for you.</p>
      </EditorialSplit>

      <section id="experience" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="Build the experience" title="Pick the ingredients. We shape the flow." />
            <p className="max-w-xl text-base leading-7 text-navy/60 lg:ml-auto">Mix sports, movement, and setup elements into one experience made for the children who will actually be there.</p>
          </div>
          <FeaturePanels items={experiences} />
        </div>
      </section>

      <section className="overflow-hidden bg-gold py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.22em] text-navy/60">Made to fit</p>
            <h2 className="mt-3 font-condensed text-5xl font-extrabold uppercase leading-[.9] text-navy sm:text-6xl">No two parties need the same playbook</h2>
            <div className="mt-8 space-y-5">
              {[
                { icon: Users, title: "Age & guest count", text: "Shapes activity choices and coach count." },
                { icon: Calendar, title: "Duration", text: "Sets the pace and number of activity beats." },
                { icon: MapPin, title: "Location & space", text: "Park, home, backyard, or another venue." },
                { icon: Layers, title: "Requested setup", text: "Adds the extras that make it feel like your party." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 border-t border-navy/20 pt-4">
                  <Icon className="h-6 w-6 shrink-0 text-navy" />
                  <div><h3 className="font-bold text-navy">{title}</h3><p className="mt-1 text-sm text-navy/65">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <PhotoMosaic images={[
            { src: "/images/lasw-event-2.jpg", alt: "Inflatable activity tunnel set up for an LASW event" },
            { src: "/images/lasw-event-5.jpg", alt: "LA Sports World coaches ready to lead party games" },
            { src: "/images/lasw-event-1.jpg", alt: "Outdoor party activity stations arranged on a lawn" },
          ]} />
        </div>
      </section>

      <section className="relative bg-navy py-20 text-white lg:py-28">
        <div className="brand-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="From idea to party day" title="Planning made simple" description="A clear five-step process means you always know what is happening next." light />
            <p className="max-w-md text-sm leading-6 text-white/50">Pricing depends on guest count, duration, activities, and location. You’ll receive a clear quote before confirming.</p>
          </div>
          <ProcessTimeline steps={steps} light />
          <p className="mt-10 max-w-3xl text-xs leading-5 text-white/40">Some park locations require a permit for group activities. We’ll clarify permit, food, decor, rental, and setup responsibilities during planning.</p>
        </div>
      </section>

      <PageCTA
        eyebrow="Let’s celebrate"
        title="Give them the best kind of tired"
        description="Tell us the date, age, and kind of energy you want. We’ll turn it into a party plan."
        cta={{ label: "Plan a Party", href: "/parties/request?source=parties-final-cta" }}
        image="/images/lasw-event-4.jpg"
        imageAlt="A child enjoying an LA Sports World soft-play activity"
      />
    </>
  );
}
