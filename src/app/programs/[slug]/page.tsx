import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import { programs } from "@/lib/data/content";
import type { Metadata } from "next";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return { title: `${program.title} | LA Sports World`, description: program.description };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <>
      <PageHero
        title={program.title}
        subtitle={program.description}
        tag={program.subtitle}
        image={program.image}
      />

      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Sports taught */}
              <div className="bg-navy-light border border-white/10 rounded-3xl p-8">
                <h2 className="font-condensed font-bold text-white text-3xl uppercase mb-6">
                  Sports Covered
                </h2>
                <div className="flex flex-wrap gap-3">
                  {program.sports.map((sport) => (
                    <span
                      key={sport}
                      className="bg-navy border border-gold/30 text-gold rounded-full px-4 py-2 text-sm font-semibold"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-navy-light border border-white/10 rounded-3xl p-8">
                <h2 className="font-condensed font-bold text-white text-3xl uppercase mb-6">
                  What's Covered
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-white/70">
                      <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partner note (Basement Fitness) */}
              {program.slug !== "parties" && (
                <div className="bg-gold/10 border border-gold/20 rounded-3xl p-6">
                  <p className="text-white/80 text-sm leading-relaxed">
                    <span className="text-gold font-bold">Unique Partnership:</span> Our affiliate{" "}
                    <strong>Basement Fitness</strong> gym gives us access to a full weight training and boxing facility — giving your youth athlete the complete training experience.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-navy-light border border-white/10 rounded-3xl p-8 sticky top-24">
                <h3 className="font-condensed font-bold text-white text-2xl uppercase mb-2">
                  Ready to Start?
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Register for {program.title.toLowerCase()} or contact us to learn more.
                </p>
                <Link
                  href="/registration"
                  className="block text-center bg-gold text-navy font-bold uppercase tracking-wide px-6 py-4 rounded-full hover:bg-gold-light transition-colors mb-3"
                >
                  {program.cta}
                </Link>
                <Link
                  href="/contact"
                  className="block text-center border border-white/20 text-white font-semibold uppercase tracking-wide px-6 py-4 rounded-full hover:border-gold hover:text-gold transition-colors text-sm"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
