import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staff, sports } from "@/lib/data/content";
import {
  EditorialSplit,
  PageCTA,
  PhotoMosaic,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/MarketingSections";

export const metadata: Metadata = {
  title: "About Us | LA Sports World",
  description: "Learn about LA Sports World, our coaches, and our mission to develop youth athletes in Los Angeles.",
};

export default function AboutPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Our Story"
        title="Sports are the setting. Confidence is the outcome."
        description="LA Sports World creates thoughtful, high-energy experiences that help kids move, connect, learn, and feel proud of what they can do."
        image="/images/lasw_slideshow_005.jpg"
        imageAlt="LA Sports World coach connecting with young athletes"
        imagePosition="center 35%"
        primaryCta={{ label: "Meet Our Coaches", href: "#coaches" }}
        secondaryCta={{ label: "Our Approach", href: "/about/approach" }}
        note="Los Angeles · Since 2012 · Built around kids"
      />

      <EditorialSplit
        eyebrow="The idea behind LASW"
        title="You bring the kids. We bring the coaching."
        image="/images/lasw_slideshow_008.jpg"
        imageAlt="Coach working closely with youth athletes"
        imagePosition="center 28%"
        accent="Individual attention. Group energy."
      >
        <p>LA Sports World began with a simple belief: great youth coaching should be personal, encouraging, and easier for families and organizations to access.</p>
        <p>We bring private lessons, group programs, parties, camps, and community activities directly to the people we serve. Every experience is shaped around the age, ability, personality, and goals of the children in front of us.</p>
        <Link href="/about/approach" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-gold">Read about our approach <ArrowRight className="h-4 w-4" /></Link>
      </EditorialSplit>

      <section className="bg-navy py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <SectionHeading eyebrow="What we teach" title="A world of ways to move" description="Different sports create different entry points. The coaching principle stays the same: meet kids where they are, then help them take the next step." light />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {sports.map((sport) => <span key={sport.name} className="rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/75">{sport.name}</span>)}
            </div>
          </div>
          <PhotoMosaic images={[
            { src: "/images/kids-action-1.jpg", alt: "Children taking part in a sports activity" },
            { src: "/images/hero-football-boy.jpg", alt: "Young athlete holding a football" },
            { src: "/images/soccer-player.jpg", alt: "Youth soccer player in action" },
          ]} />
        </div>
      </section>

      <section className="bg-gold py-14 text-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { value: "8+", label: "Sports offered" },
            { value: "4–18", label: "Core age range" },
            { value: "15+", label: "Years experience" },
            { value: "LA", label: "Across the city" },
          ].map((item) => <div key={item.label} className="border-l border-navy/20 pl-5"><p className="font-condensed text-5xl font-extrabold leading-none sm:text-6xl">{item.value}</p><p className="mt-2 text-xs font-extrabold uppercase tracking-[.15em] text-navy/60">{item.label}</p></div>)}
        </div>
      </section>

      <section id="coaches" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="The people behind the play" title="Coaches kids can connect with" />
            <p className="max-w-xl text-base leading-7 text-navy/60 lg:ml-auto">Experienced in sport and in teaching youth, our coaches bring skill, patience, personality, and plenty of encouragement.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {staff.map((member, index) => (
              <article key={member.name} className={`group overflow-hidden rounded-[1.75rem] bg-navy text-white ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="relative h-80 overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-gold">{member.role}</p>
                  <h3 className="mt-2 font-condensed text-3xl font-extrabold uppercase">{member.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center"><Link href="/about/coaches-safety" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-navy hover:text-gold">Coach standards & safety <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <PageCTA
        eyebrow="Find your way in"
        title="Come see what the right coach can unlock"
        description="Explore coaching, classes, camps, parties, and organization programs built around real kids and real connection."
        cta={{ label: "Plan an Activity", href: "/contact" }}
        image="/images/about-us.jpg"
        imageAlt="LA Sports World coaches with a group of children"
      />
    </>
  );
}
