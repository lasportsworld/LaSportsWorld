import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Choose A Program",
    description: "Pick the program that's the best fit for your child.",
  },
  {
    num: "2",
    title: "Book Your Spot",
    description: "Reserve online in just a few easy steps.",
  },
  {
    num: "3",
    title: "Show Up & Play",
    description: "We'll handle the rest. They have fun. You relax.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-16">
      <div className="absolute inset-x-0 top-0 h-10 bg-[#eef2e6] [clip-path:polygon(0_0,100%_0,100%_44%,82%_58%,63%_45%,45%_59%,25%_46%,8%_60%,0_47%)]" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            How It Works
          </p>
          <h2 className="font-condensed text-navy text-4xl font-extrabold uppercase leading-none md:text-5xl">
            Three Simple Steps
          </h2>
        </div>

        <div className="relative grid gap-5 md:grid-cols-3">
          <div className="absolute left-[17%] right-[17%] top-1/2 hidden border-t border-dashed border-gold/55 md:block" />
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative flex items-center gap-4 rounded-lg bg-cream p-5 shadow-sm"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-navy font-condensed text-3xl font-extrabold text-white shadow-lg">
                {step.num}
              </div>
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wide text-navy">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-navy/60">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — prominent, right below the steps */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/registration"
            className="inline-flex items-center gap-3 rounded-lg bg-gold px-10 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-xl shadow-gold/30 transition hover:bg-gold-dark"
          >
            Book Your Spot Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
