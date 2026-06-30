import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import { camps } from "@/lib/data/content";
import type { Metadata } from "next";

export function generateStaticParams() {
  return camps.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const camp = camps.find((c) => c.slug === slug);
  if (!camp) return {};
  return { title: `${camp.title} | LA Sports World`, description: camp.description };
}

export default async function CampDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const camp = camps.find((c) => c.slug === slug);
  if (!camp) notFound();

  return (
    <>
      <PageHero
        title={camp.title}
        subtitle={camp.description}
        tag={camp.subtitle}
        image={camp.image}
      />

      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* Sports */}
              <div className="bg-navy-light border border-white/10 rounded-3xl p-8">
                <h2 className="font-condensed font-bold text-white text-3xl uppercase mb-6">Sports</h2>
                <div className="flex flex-wrap gap-3">
                  {camp.sports.map((sport) => (
                    <span key={sport} className="bg-navy border border-gold/30 text-gold rounded-full px-4 py-2 text-sm font-semibold">
                      {sport}
                    </span>
                  ))}
                </div>
              </div>

              {/* Activities */}
              {camp.activities && (
                <div className="bg-navy-light border border-white/10 rounded-3xl p-8">
                  <h2 className="font-condensed font-bold text-white text-3xl uppercase mb-6">Activities</h2>
                  <ul className="grid grid-cols-2 gap-3">
                    {camp.activities.map((activity) => (
                      <li key={activity} className="flex items-center gap-3 text-white/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Special note */}
              {camp.note && (
                <div className="bg-gold/10 border border-gold/20 rounded-3xl p-6">
                  <p className="text-white/80 text-sm leading-relaxed">
                    <span className="text-gold font-bold">Exclusive Offering: </span>
                    {camp.note}
                  </p>
                </div>
              )}

              {/* Camp Rules preview */}
              <div className="bg-navy-light border border-white/10 rounded-3xl p-8">
                <h2 className="font-condensed font-bold text-white text-3xl uppercase mb-4">Camp Policy</h2>
                <p className="text-white/60 text-sm mb-4">
                  All campers are expected to follow our camp rules and respect their coaches and fellow campers.
                </p>
                <Link href="/rules" className="text-gold font-semibold text-sm hover:underline">
                  View Full Camp Rules →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-navy-light border border-white/10 rounded-3xl p-8 sticky top-24 space-y-4">
                <h3 className="font-condensed font-bold text-white text-2xl uppercase">
                  Sign Up for {camp.title}
                </h3>
                <p className="text-white/60 text-sm">
                  Secure your spot. Spaces fill up fast!
                </p>
                <Link
                  href="/registration"
                  className="block text-center bg-gold text-navy font-bold uppercase tracking-wide px-6 py-4 rounded-full hover:bg-gold-light transition-colors"
                >
                  Register Now
                </Link>
                <Link
                  href="/contact"
                  className="block text-center border border-white/20 text-white font-semibold uppercase tracking-wide px-6 py-4 rounded-full hover:border-gold hover:text-gold transition-colors text-sm"
                >
                  Ask a Question
                </Link>
                <Link
                  href="/locations"
                  className="block text-center text-white/40 hover:text-gold text-sm transition-colors pt-2"
                >
                  View Locations →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
