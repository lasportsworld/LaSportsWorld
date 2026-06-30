"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/lasw_slideshow_0014.jpg", alt: "Youth basketball training" },
  { src: "/images/lasw_slideshow_013.jpg", alt: "Summer camp action" },
  { src: "/images/lasw_slideshow_0015.jpg", alt: "Coaching session" },
  { src: "/images/lasw_slideshow_001.jpg", alt: "Sports camp kids" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slideshow */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Los Angeles Youth Sports
            </span>
          </div>

          <h1
            className="font-condensed font-extrabold text-white leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            GO BEYOND THE{" "}
            <span className="text-gradient">FUNDAMENTALS.</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Elite youth sports coaching for ages 4–18. Private lessons, camps, clinics, and parties — built for kids who want to get serious about sport.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/camps"
              className="bg-gold text-navy font-bold uppercase tracking-wide px-8 py-4 rounded-full hover:bg-gold-light transition-all hover:scale-105 text-base"
            >
              Explore Camps
            </Link>
            <Link
              href="/programs"
              className="border border-white/30 text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-full hover:border-gold hover:text-gold transition-all text-base"
            >
              View Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-white/30 w-4"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  );
}
