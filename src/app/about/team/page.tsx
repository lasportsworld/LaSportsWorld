import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { teamMembers } from "@/lib/data/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Our Team | LA Sports World",
  description: "Meet the people leading LA Sports World and learn how our team approaches youth sports and activity programming.",
  path: "/about/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero title="Our Team" subtitle="The people leading LA Sports World and shaping the experiences we bring to families, schools, and businesses." tag="About LASW" image="/images/about-us.jpg" imageAlt="LA Sports World coaches leading children in a gym" />
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-gold-dark">The people behind the play</p>
            <h2 className="mt-3 font-condensed text-4xl font-extrabold uppercase leading-none text-navy sm:text-5xl">Meet the team behind LA Sports World</h2>
            <p className="mt-5 text-base leading-7 text-navy/60">LA Sports World is led by co-owners Eitan Jalali and Adina Mashiach. As our team grows, we’ll introduce more of the coaches and staff who bring our programs to life.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-[1.75rem] bg-navy text-white">
                {member.image ? <div className="relative h-80 sm:h-96"><Image src={member.image} alt={member.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" /></div> : <div className="relative grid h-80 place-items-center overflow-hidden bg-[linear-gradient(135deg,#274035,#1c3325_55%,#122019)] sm:h-96" aria-hidden="true"><div className="brand-grid absolute inset-0 opacity-25" /><div className="relative grid h-32 w-32 place-items-center rounded-full border border-gold/40 bg-gold/10 font-condensed text-6xl font-extrabold text-gold">{member.name.split(" ").map((part) => part[0]).join("")}</div></div>}
                <div className="p-6"><p className="text-xs font-bold uppercase tracking-[.16em] text-gold">{member.role}</p><h3 className="mt-2 font-condensed text-3xl font-extrabold uppercase">{member.name}</h3>{member.bio && <p className="mt-3 text-sm leading-6 text-white/60">{member.bio}</p>}</div>
              </article>
            ))}
          </div>
          <Link href="/about/safety-standards" className="mt-10 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.14em] text-navy transition hover:text-gold">Safety & standards <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
