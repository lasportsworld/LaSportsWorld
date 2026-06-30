import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { staff, sports } from "@/lib/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | LA Sports World",
  description: "Learn about LA Sports World, our coaches, and our mission to develop youth athletes in Los Angeles.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About LA Sports World"
        subtitle="Building confident, skilled athletes — and better people — since 2012."
        tag="Our Story"
        image="/images/lasw_slideshow_005.jpg"
      />

      {/* Concept */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-bold text-xs uppercase tracking-widest mb-3">The Concept</p>
              <h2 className="font-condensed font-bold text-white text-4xl md:text-5xl uppercase mb-6">
                You Bring the Kids. We Bring the Coaching.
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  LA Sports World offers children and teens private and group lessons for specific sport fundamentals, team fundamentals, or simply for the joy of improving their skills. Extra attention is given to focus on particular needs — individually or as a group.
                </p>
                <p>
                  All coaches are well experienced in teaching youth and are matched to the particular group of kids and/or individual.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                {[
                  { label: "Sports Offered", value: "8+" },
                  { label: "Age Range", value: "4–18" },
                  { label: "Years Experience", value: "15+" },
                  { label: "Expert Coaches", value: "5" },
                ].map((item) => (
                  <div key={item.label} className="border border-white/10 rounded-2xl p-5">
                    <div className="font-condensed font-extrabold text-gold text-4xl">{item.value}</div>
                    <div className="text-white/50 text-sm uppercase tracking-wide mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/lasw_slideshow_008.jpg"
                  alt="Coach with youth athletes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold rounded-2xl p-5">
                <div className="font-condensed font-extrabold text-navy text-3xl">Ages</div>
                <div className="font-condensed font-extrabold text-navy text-5xl leading-none">4–18</div>
                <div className="text-navy/70 text-xs font-semibold mt-1">Adult training available too</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports offered */}
      <section className="py-16 bg-navy-dark border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-bold text-xs uppercase tracking-widest mb-2 text-center">Specialties</p>
          <h2 className="font-condensed font-bold text-white text-4xl md:text-5xl uppercase text-center mb-10">Sports We Teach</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {sports.map((sport) => (
              <span
                key={sport.name}
                className="bg-navy border border-white/10 rounded-full px-5 py-2.5 text-white/80 font-semibold text-sm uppercase tracking-wide"
              >
                {sport.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold font-bold text-xs uppercase tracking-widest mb-3">The Team</p>
            <h2 className="font-condensed font-extrabold text-white text-5xl md:text-6xl uppercase">Our Coaches</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, i) => (
              <div
                key={member.name}
                className={`bg-navy-light border border-white/10 rounded-3xl overflow-hidden ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-light to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-condensed font-bold text-white text-2xl uppercase">{member.name}</h3>
                  <p className="text-gold text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-dark border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-condensed font-bold text-white text-4xl uppercase mb-4">Ready to Get Started?</h2>
          <p className="text-white/60 mb-8">Register for a camp, clinic, or private lesson today.</p>
          <Link
            href="/registration"
            className="inline-block bg-gold text-navy font-bold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-gold-light transition-colors"
          >
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}
