"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "LA Sports World has been amazing for my son. He's more confident, stays active, and looks forward to camp every day!",
    author: "Jessica M.",
    role: "Soccer Camp Parent",
    image: "/images/testimonial-1.png",
  },
  {
    text: "The coaches truly care and it shows. My daughter has learned so much and made friends she adores.",
    author: "David R.",
    role: "Basketball Camp Parent",
    image: "/images/testimonial-2.png",
  },
  {
    text: "Best birthday party we've ever had. Easy to plan and the kids had an absolute blast.",
    author: "Amanda T.",
    role: "Birthday Party Parent",
    image: "/images/testimonial-3.png",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="rounded-lg border border-navy/10 bg-white p-6 shadow-lg shadow-navy/5">
      <Quote className="mb-3 h-7 w-7 text-gold/55" />
      <p className="min-h-[84px] text-sm italic leading-6 text-navy/70">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full bg-cream">
            <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-extrabold text-navy">{testimonial.author}</p>
            <p className="text-xs text-navy/45">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="bg-cream py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">What Parents Are Saying</p>
          <h2 className="font-condensed text-navy text-4xl font-extrabold uppercase leading-none md:text-5xl">
            Trusted by Families
          </h2>
        </div>

        <div className="hidden grid-cols-[auto_1fr_auto] items-center gap-7 lg:grid">
          <button
            onClick={prev}
            className="grid h-12 w-12 place-items-center rounded-full border border-gold/45 text-gold transition hover:bg-gold hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="grid grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} testimonial={testimonial} />
            ))}
          </div>
          <button
            onClick={next}
            className="grid h-12 w-12 place-items-center rounded-full border border-gold/45 text-gold transition hover:bg-gold hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="lg:hidden">
          <TestimonialCard testimonial={testimonials[current]} />
          <div className="mt-5 flex justify-center gap-3">
            <button
              onClick={prev}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/45 text-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/45 text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
