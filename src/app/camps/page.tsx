import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { camps } from "@/lib/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camps | LA Sports World",
  description: "Summer, Winter, Day, and Passover sports camps for youth ages 4–18 in Los Angeles.",
};

export default function CampsPage() {
  return (
    <>
      <PageHero
        title="Our Camps"
        subtitle="Skill-building, fun, and memories that last a lifetime — across every season."
        tag="Seasonal Programs"
        image="/images/Summer-Camp-Header-Image.jpg"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {camps.map((camp) => (
              <Link
                key={camp.slug}
                href={`/camps/${camp.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-gold/40 bg-navy-light transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={camp.image}
                    alt={camp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-navy/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-navy text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
                      {camp.subtitle}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h2 className="font-condensed font-extrabold text-white text-4xl uppercase mb-3">
                    {camp.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-5 text-sm">{camp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {camp.sports.slice(0, 4).map((s) => (
                      <span key={s} className="text-xs font-semibold text-white/50 border border-white/10 rounded-full px-3 py-1">
                        {s}
                      </span>
                    ))}
                    {camp.sports.length > 4 && (
                      <span className="text-xs font-semibold text-gold/70 border border-gold/20 rounded-full px-3 py-1">
                        +{camp.sports.length - 4} more
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/registration"
              className="inline-block bg-gold text-navy font-bold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-gold-light transition-colors text-base"
            >
              Register for Camp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
