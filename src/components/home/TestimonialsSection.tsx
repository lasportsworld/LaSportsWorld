"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/content";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-bold text-xs uppercase tracking-widest mb-3">Real Parents. Real Results.</p>
          <h2 className="font-condensed font-extrabold text-white text-5xl md:text-6xl uppercase">
            What Families Say
          </h2>
          <div className="divider-gold mx-auto mt-4" />
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-navy-light border border-white/10 rounded-3xl p-8 md:p-12">
            <Quote className="text-gold/30 w-12 h-12 mb-6" />
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gold text-lg">— {testimonials[current].author}</div>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-sm">★</span>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-gold hover:text-gold flex items-center justify-center text-white/60 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-gold hover:text-gold flex items-center justify-center text-white/60 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-8" : "bg-white/20 w-4"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
