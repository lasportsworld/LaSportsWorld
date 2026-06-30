import { Quote } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { testimonials } from "@/lib/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | LA Sports World",
  description: "See what parents are saying about LA Sports World youth sports coaching in Los Angeles.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="What Families Say"
        subtitle="Real parents. Real kids. Real results."
        tag="Testimonials"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`bg-navy-light border border-white/10 rounded-3xl p-8 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <Quote className="text-gold/30 w-8 h-8 mb-4" />
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-gold">— {t.author}</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/registration"
              className="inline-block bg-gold text-navy font-bold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-gold-light transition-colors"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
