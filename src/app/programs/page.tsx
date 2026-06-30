import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { programs } from "@/lib/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | LA Sports World",
  description: "Private lessons, clinics, and sports parties for youth athletes ages 4–18 in Los Angeles.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Our Programs"
        subtitle="Tailored coaching for every athlete — one-on-one, group clinics, and unforgettable parties."
        tag="Training"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {programs.map((program, i) => (
            <div
              key={program.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""} relative rounded-3xl overflow-hidden aspect-video`}>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>

              {/* Content side */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-gold font-bold text-xs uppercase tracking-widest mb-2">{program.subtitle}</p>
                <h2 className="font-condensed font-extrabold text-white text-4xl md:text-5xl uppercase mb-4">
                  {program.title}
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">{program.description}</p>

                <ul className="space-y-2 mb-8">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center gap-2 bg-gold text-navy font-bold uppercase tracking-wide px-7 py-3.5 rounded-full hover:bg-gold-light transition-colors text-sm"
                >
                  {program.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
