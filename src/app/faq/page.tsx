import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | LA Sports World",
  description:
    "Answers to common questions about ages, service area, scheduling, pricing, safety, and how customization works at LA Sports World.",
};

const categories = [
  {
    id: "general",
    title: "General",
    questions: [
      {
        q: "What ages do you work with?",
        a: "We coach a broad range of ages — the exact fit depends on the sport and program. Let us know your child's age when you reach out and we'll confirm.",
      },
      {
        q: "What areas do you serve?",
        a: "We're based on LA's Westside and serve neighborhoods including Beverly Hills, Beverlywood, Culver City, Westwood, La Cienega, La Brea, Brentwood, and Bel Air. Broader LA service may be available depending on the program — see our Service Area page.",
      },
      {
        q: "How much does it cost?",
        a: "Pricing depends on the service, group size, schedule, and location. Reach out with what you're planning and you'll get a clear, tailored quote.",
      },
      {
        q: "How does customization work?",
        a: "Every plan is built around the child, group, or event in front of us — sport, schedule, location, and goals are all flexible rather than fixed packages.",
      },
    ],
  },
  {
    id: "coaching",
    title: "Coaching & Groups",
    questions: [
      {
        q: "What's the difference between Private Coaching and Group Coaching & Pods?",
        a: "Private Coaching is one-on-one, focused on a single athlete's goals. Group Coaching & Pods is for an existing group of friends or teammates — or one we help you form.",
      },
      {
        q: "What sports do you coach?",
        a: "Basketball, flag football, soccer, baseball, volleyball, surfing, street hockey, and personal fitness, among others. Ask us about anything not listed — we'll confirm feasibility.",
      },
      {
        q: "How do I get started?",
        a: "Submit an inquiry through our Coaching page, and we'll follow up to understand your goals before recommending a setup.",
      },
    ],
  },
  {
    id: "parties",
    title: "Parties",
    questions: [
      {
        q: "What's included in a party?",
        a: "Organized sports, games, and activities — the exact mix is chosen together during planning based on age, guest count, and what you're going for.",
      },
      {
        q: "Do you handle permits?",
        a: "Some park locations require a permit for group activities. We'll confirm who's responsible for that during planning — we don't assume permits, food, decor, or rentals are included unless they're in your quote.",
      },
      {
        q: "How far in advance should I book?",
        a: "The earlier the better, especially for weekend dates. Reach out as soon as you have a date in mind.",
      },
    ],
  },
  {
    id: "classes-camps",
    title: "Classes & Camps",
    questions: [
      {
        q: "How do I register?",
        a: "Browse everything currently open on our Register page and sign up directly.",
      },
      {
        q: "What if nothing is currently open?",
        a: "Join the interest list for the program you're waiting on and we'll reach out as soon as something opens.",
      },
      {
        q: "Are classes pop-up or recurring?",
        a: "Both — some classes start as limited-run pop-ups and become regular offerings if they go well.",
      },
    ],
  },
  {
    id: "schools-organizations",
    title: "Schools & Organizations",
    questions: [
      {
        q: "Do you work with schools?",
        a: "Yes — PE programs, enrichment and after-school activities, camp support, and community events. See our Schools & Organizations page for details.",
      },
      {
        q: "Can you supplement an existing camp instead of running the whole thing?",
        a: "Yes — we're happy to just cover the sports and activity portion of a camp or program you're already running.",
      },
      {
        q: "How do we start a conversation?",
        a: "Fill out our organization inquiry form and we'll follow up with options that fit.",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety & Logistics",
    questions: [
      {
        q: "Are coaches background checked?",
        a: "Yes — every LA Sports World coach is Live Scanned and background checked.",
      },
      {
        q: "What happens if weather affects an outdoor session?",
        a: "We'll reach out to registered families as early as possible with next steps.",
      },
      {
        q: "Who do I contact with an urgent question?",
        a: "Call us directly — see our Contact page for the number.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="FAQ"
        subtitle="Answers to common questions about ages, pricing, scheduling, and how it all works."
        tag="Help Center"
        image="/images/kids-bg-1.jpg"
      />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="FAQ categories" className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-navy/10 bg-cream px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-navy transition hover:border-gold/40"
              >
                {c.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="scroll-mt-24 border-t border-navy/8 bg-cream py-12 lg:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold text-navy lg:text-3xl">
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.questions.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-navy/8 bg-white px-5 py-4 open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold text-navy marker:content-none">
                    {item.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-navy/40 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-navy/60">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Still need help?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Reach out and we&apos;ll get you the right answer.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy shadow-lg transition hover:bg-gold hover:text-white"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
