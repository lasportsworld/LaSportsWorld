import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Star } from "lucide-react";
import {
  getGoogleReviews,
  type GoogleReviewsSummary,
} from "@/lib/google-reviews";
import { ExpandableGoogleReview, LaswTrustCard } from "@/components/reviews/GoogleReviewDisplay";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

/* ─── Service mini-badges ─── */
const miniFeatures = [
  {
    label: "Vetted & trained coaches you can trust",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 shrink-0 text-navy/40"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.5C17.25 22.15 21 17.25 21 12V7z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: "Premium, age-appropriate equipment provided",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 shrink-0 text-navy/40"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    label: "We handle the planning, setup, and breakdown",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 shrink-0 text-navy/40"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2" />
        <line x1="12" y1="14" x2="12" y2="14" strokeWidth="2" />
        <line x1="16" y1="14" x2="16" y2="14" strokeWidth="2" />
      </svg>
    ),
  },
];

/* ─── Photo service cards ─── */
const serviceCards = [
  {
    title: "Pods & Groups",
    description:
      "Ongoing coaching and small group sessions tailored to your goals.",
    image: "/images/lasw_slideshow_003.jpg",
    href: "/pods-groups",
  },
  {
    title: "Parties & Private Events",
    description:
      "Unforgettable birthday parties and special events. Zero stress.",
    image: "/images/lasw-photo-real-1.jpg",
    href: "/parties-private-events",
  },
  {
    title: "Classes & Camps",
    description:
      "Engaging classes and seasonal camps that build skills and confidence.",
    image: "/images/lasw_slideshow_001.jpg",
    href: "/classes-camps",
  },
];

/* ─── Why steps ─── */
const whySteps = [
  {
    n: "1",
    title: "You tell us what you need",
    desc: "Share your goals, group size, location, and preferences.",
  },
  {
    n: "2",
    title: "We handle the details",
    desc: "We customize your experience and bring everything to you.",
  },
  {
    n: "3",
    title: "You enjoy the experience",
    desc: "We run an incredible session and handle the breakdown.",
  },
];

function formatReviewCount(count: number) {
  return new Intl.NumberFormat("en-US").format(count);
}

function GoogleWord({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-normal ${className}`}>
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#DB4437]">o</span>
      <span className="text-[#F4B400]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#0F9D58]">l</span>
      <span className="text-[#DB4437]">e</span>
    </span>
  );
}

function GoogleReviewsBrand({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`inline-flex items-baseline gap-1 ${
        compact ? "text-xs" : "text-lg"
      }`}
    >
      <GoogleWord />
      <span className="font-extrabold text-navy">Reviews</span>
    </span>
  );
}

function StarRating({
  rating,
  className = "h-4 w-4",
}: {
  rating: number;
  className?: string;
}) {
  const fullStars = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <span
      className="inline-flex items-center gap-0.5 text-gold"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`${className} ${
            index < fullStars ? "fill-current" : "fill-transparent opacity-35"
          }`}
        />
      ))}
    </span>
  );
}

function GoogleRatingBadge({
  summary,
  className = "mb-5",
}: {
  summary: GoogleReviewsSummary | null;
  className?: string;
}) {
  if (!summary || !summary.rating) {
    return null;
  }

  const content = (
    <span className="flex flex-col gap-1.5">
      <span className="flex items-center gap-2">
        <span className="font-condensed text-3xl font-extrabold leading-none text-navy">
          {summary.rating.toFixed(1)}
        </span>
        <StarRating rating={summary.rating} className="h-4 w-4" />
      </span>
      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-navy/45">
        <span className="opacity-75 transition-opacity group-hover:opacity-100">
          <GoogleReviewsBrand compact />
        </span>
        <span aria-hidden="true">·</span>
        <span>
          {summary.userRatingCount
            ? `${formatReviewCount(summary.userRatingCount)} reviews`
            : "Reviews"}
        </span>
      </span>
    </span>
  );

  if (!summary.googleMapsUri) {
    return (
      <div className={`${className} inline-flex py-1`}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={summary.googleMapsUri}
      target="_blank"
      rel="noreferrer"
      className={`${className} group inline-flex py-1 text-left transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold`}
      aria-label={`Read LA Sports World reviews on Google Maps. ${summary.rating.toFixed(
        1,
      )} out of 5 stars.`}
    >
      {content}
    </a>
  );
}

function GoogleReviewsBlock({
  summary,
}: {
  summary: GoogleReviewsSummary;
}) {
  return (
    <div className="relative">
      <div className="mb-9 flex flex-col gap-6 border-b border-navy/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-dark">From Los Angeles families</p>
          <h2 className="mt-3 font-condensed text-4xl font-extrabold uppercase leading-none text-navy sm:text-5xl">Real words from real families</h2>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-navy/50"><span className="font-condensed text-3xl font-extrabold text-navy">{summary.rating.toFixed(1)}</span><StarRating rating={summary.rating} className="h-3.5 w-3.5" /><span><GoogleReviewsBrand compact /> · {formatReviewCount(summary.userRatingCount)} reviews</span></div>
        </div>
        <Link href="/testimonials" className="inline-flex w-fit items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em] text-navy transition hover:text-gold">See all reviews <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-[repeat(2,minmax(0,1fr))_minmax(270px,0.82fr)]">
        {summary.reviews.slice(0, 2).map((review) => <ExpandableGoogleReview key={review.id} review={review} className="min-h-[360px]" />)}
        <LaswTrustCard className="min-h-[360px]" />
      </div>
      <p className="mt-4 text-xs leading-relaxed text-navy/40">Reviews are provided by Google and ordered by Google&apos;s default relevance.</p>
    </div>
  );
}

export default async function HomePage() {
  const googleReviews = await getGoogleReviews();

  return (
    <div className="bg-cream">
      {/* ══════════════════════════════════════
          HERO: oval image on right, cream background
      ══════════════════════════════════════ */}
      <section className="relative min-h-[640px] overflow-hidden bg-cream pt-20 lg:min-h-[740px]">
        {/* SVG clipPath definition for the hero photo's curved left edge */}
        <svg aria-hidden="true" width="0" height="0" className="absolute">
          <defs>
            <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
              {/*
                Hand-traced S-curve in objectBoundingBox units (0–1).
                Top anchor ~54% across, preserving enough cream space for the
                headline, then tucks back left through the middle of the hero.
              */}
              <path d="M 0.54 0 C 0.45 0.22, 0.56 0.42, 0.47 0.60 C 0.40 0.78, 0.57 0.92, 0.55 1 L 1 1 L 1 0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Desktop photo that bleeds to the top, right, and bottom edges */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden lg:block"
          style={{
            clipPath: "url(#hero-curve)",
            WebkitClipPath: "url(#hero-curve)",
          }}
        >
          <Image
            src="/images/hero-lasw.jpg"
            alt="LA Sports World coaches with kids"
            fill
            priority
            className="object-cover object-center"
            sizes="80vw"
          />
        </div>

        {/* Play-diagram shapes */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-12 left-6 opacity-45 sm:left-12"
          width="150"
          height="110"
          viewBox="0 0 150 110"
          fill="none"
        >
          <line
            x1="10"
            y1="52"
            x2="24"
            y2="66"
            stroke="#C4852A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="52"
            x2="10"
            y2="66"
            stroke="#C4852A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="72"
            x2="64"
            y2="86"
            stroke="#C4852A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="64"
            y1="72"
            x2="50"
            y2="86"
            stroke="#C4852A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 86 30 C 100 20 120 14 138 10"
            stroke="#C4852A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 132 6 L 142 14 L 132 18"
            stroke="#C4852A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="36" cy="34" r="5" fill="#C4852A" />
          <circle cx="16" cy="90" r="3.5" fill="#C4852A" />
        </svg>

        {/* Text content */}
        <div className="relative z-10 mx-auto flex min-h-[600px] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 lg:min-h-[700px] lg:px-10 xl:px-12">
          <div className="max-w-[520px] lg:max-w-[430px] xl:ml-6 2xl:ml-10">
            <GoogleRatingBadge summary={googleReviews} />
            <h1 className="font-condensed text-5xl font-extrabold uppercase leading-[0.92] text-navy sm:text-6xl lg:text-[5.5rem]">
              Where Kids
              <br />
              <span className="text-gold">Play,</span> Learn
              <br />
              &amp; Grow
            </h1>
            <p className="mt-5 max-w-[330px] text-base leading-relaxed text-navy/60 sm:text-lg">
              We bring customized sports and kids&apos; activities straight to
              your home, school, or community. Full-service coaching and
              planning for ages 6 months to 17 years, anywhere in Los Angeles.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/parties-private-events"
                className="button-gold"
              >
                Book a Party <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/register"
                className="button-outline"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile image */}
        <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 lg:hidden">
          <Image
            src="/images/hero-lasw.jpg"
            alt="LA Sports World coaches with kids"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/20 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT ARE YOU LOOKING FOR
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mini feature strip */}
          <div className="mb-12 grid gap-5 border-b border-navy/8 pb-10 sm:grid-cols-3">
            {miniFeatures.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 text-sm font-medium text-navy/60"
              >
                {f.icon}
                {f.label}
              </div>
            ))}
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              What are you looking for?
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>

          {/* 3 photo cards with dark overlay */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative block overflow-hidden rounded-xl"
                style={{ height: 340 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-navy p-5">
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/65 leading-relaxed">
                    {card.description}
                  </p>
                  <ArrowRight className="mt-3 h-5 w-5 text-gold" />
                </div>
              </Link>
            ))}
          </div>

          {/* Schools & Businesses horizontal row */}
          <Link
            href="/schools-businesses"
            className="group mt-5 flex items-center gap-5 rounded-xl border border-navy/12 bg-cream px-6 py-5 transition hover:border-gold/40 hover:shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8 shrink-0 text-navy/35"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21h18" />
              <path d="M5 21V7l7-4 7 4v14" />
              <rect x="9" y="14" width="6" height="7" />
              <rect x="7" y="10" width="3" height="3" />
              <rect x="14" y="10" width="3" height="3" />
            </svg>
            <div className="flex-1">
              <div className="text-base font-extrabold text-navy">
                Schools &amp; Businesses
              </div>
              <div className="mt-0.5 text-sm text-navy/55">
                Turnkey sports and activities for students, teams, employees,
                and community audiences.
              </div>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-gold transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY LASW
      ══════════════════════════════════════ */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy lg:text-4xl">
                Why LASW?
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-navy/60">
                We make it easy. Our turnkey mobile model brings everything to
                you: coaches, equipment, and a whole lot of energy.
              </p>
              <div className="mt-5 mb-8 h-0.5 w-12 rounded-full bg-gold" />
              <div className="space-y-6">
                {whySteps.map((step) => (
                  <div key={step.n} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-extrabold text-white">
                      {step.n}
                    </span>
                    <div>
                      <div className="text-base font-extrabold text-navy">
                        {step.title}
                      </div>
                      <div className="mt-0.5 text-sm leading-relaxed text-navy/55">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-xl lg:h-[480px]">
                <Image
                  src="/images/about-us.jpg"
                  alt="LASW coaches with kids"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-5 right-5 flex items-start gap-3 max-w-[190px] rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                <Shield className="h-5 w-5 shrink-0 text-navy mt-0.5" />
                <p className="text-xs font-semibold leading-relaxed text-navy">
                  Confidence-building. Customized for every kid. We handle the
                  planning so you can be present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SOCIAL PROOF: 3 boxes
      ══════════════════════════════════════ */}
      {googleReviews ? (
        <section id="reviews" className="scroll-mt-24 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <GoogleReviewsBlock summary={googleReviews} />
          </div>
        </section>
      ) : null}

      {/* ══════════════════════════════════════
          CURRENT PROGRAMS
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-navy/8 bg-white px-6 py-14 text-center shadow-sm sm:px-12">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Current Programs
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-navy/60">
              New classes, camps, and sessions are added regularly. Browse everything
              currently open and grab your spot before it fills up.
            </p>
            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:bg-navy-light"
            >
              View Full Schedule <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-navy py-14 lg:py-16">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-20"
          viewBox="0 0 400 200"
          preserveAspectRatio="xMaxYMin slice"
          fill="none"
        >
          <path
            d="M 60 220 C 140 130, 220 50, 400 24"
            stroke="#C4852A"
            strokeWidth="1.5"
          />
          <path
            d="M 100 220 C 170 150, 240 90, 400 64"
            stroke="#C4852A"
            strokeWidth="1.5"
          />
          <path
            d="M 140 220 C 190 170, 250 130, 400 104"
            stroke="#C4852A"
            strokeWidth="1.5"
          />
        </svg>
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-lg font-serif text-2xl italic leading-snug text-white lg:text-3xl">
              Not sure what&apos;s right for you?
              <br />
              We&apos;ll help you find the{" "}
              <span className="relative inline-block">
                perfect fit.
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gold" />
              </span>
            </p>
            <div className="hidden text-gold lg:block">
              <ArrowRight className="h-10 w-10" />
            </div>
            <div className="flex flex-col items-center gap-3 sm:items-start">
              <Link
                href="/plan"
                className="inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy shadow-lg transition hover:bg-gold hover:text-white"
              >
                Tell Us What You Need
              </Link>
              <p className="text-sm text-white/55">
                or call{" "}
                <Link
                  href="tel:2133016226"
                  className="font-bold text-gold hover:underline"
                >
                  (213) 301-6226
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breathing room between the navy CTA and the navy footer */}
      <div className="h-10 bg-cream sm:h-14 lg:h-3" />
    </div>
  );
}
