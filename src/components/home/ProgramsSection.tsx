import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/data/content";

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-bold text-xs uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="font-condensed font-extrabold text-white text-5xl md:text-6xl uppercase">
            Our Programs
          </h2>
          <div className="divider-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-navy-light border border-white/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-navy/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                  {program.subtitle}
                </p>
                <h3 className="font-condensed font-bold text-white text-3xl uppercase mb-3">
                  {program.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-3">
                  {program.description}
                </p>
                <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
