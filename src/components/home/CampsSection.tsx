import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { camps } from "@/lib/data/content";

export default function CampsSection() {
  return (
    <section className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-bold text-xs uppercase tracking-widest mb-3">Summer & Beyond</p>
          <h2 className="font-condensed font-extrabold text-white text-5xl md:text-6xl uppercase">
            Our Camps
          </h2>
          <div className="divider-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {camps.map((camp, i) => (
            <Link
              key={camp.slug}
              href={`/camps/${camp.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] flex flex-col justify-end cursor-pointer"
            >
              <Image
                src={camp.image}
                alt={camp.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gold text-navy text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                  {camp.subtitle}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5">
                <h3 className="font-condensed font-bold text-white text-3xl uppercase leading-tight mb-2">
                  {camp.title}
                </h3>
                <p className="text-white/60 text-sm line-clamp-2 mb-4">
                  {camp.description}
                </p>
                <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/registration"
            className="inline-block bg-gold text-navy font-bold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-gold-light transition-colors text-base"
          >
            Register for Camp
          </Link>
        </div>
      </div>
    </section>
  );
}
