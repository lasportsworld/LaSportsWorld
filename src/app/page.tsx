import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users, Shield, Star } from "lucide-react";
import {
  getGoogleReviews,
  type GoogleReviewCard as GoogleReviewData,
  type GoogleReviewsSummary,
} from "@/lib/google-reviews";

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
    title: "Coaching & Groups",
    description:
      "Ongoing coaching and small group sessions tailored to your goals.",
    image: "/images/lasw_slideshow_003.jpg",
    href: "/coaching",
  },
  {
    title: "Parties & Events",
    description:
      "Unforgettable birthday parties and special events—zero stress.",
    image: "/images/lasw-photo-real-1.jpg",
    href: "/parties",
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

/* ─── Programs ─── */
const currentPrograms = [
  {
    title: "Soccer Skills",
    ages: "Ages 6–9",
    starts: "STARTS JUN 3",
    schedule: "Tuesdays, Jun 3 – Jul 22",
    location: "Playa Vista",
    image: "/images/kidsplayingsoccer.webp",
    href: "/register",
  },
  {
    title: "Basketball Fundamentals",
    ages: "Ages 8–12",
    starts: "STARTS JUN 5",
    schedule: "Thursdays, Jun 5 – Jul 24",
    location: "Culver City",
    image: "/images/lasw_slideshow_005.jpg",
    href: "/register",
  },
  {
    title: "Multi-Sport Camp",
    ages: "Ages 5–10",
    starts: "STARTS JUN 9",
    schedule: "Mon–Fri, Jun 9 – Jun 13",
    location: "Brentwood",
    image: "/images/lasw_slideshow_001.jpg",
    href: "/register",
  },
];

function formatReviewCount(count: number) {
  return new Intl.NumberFormat("en-US").format(count);
}

function GoogleMapsAttribution({ className = "" }: { className?: string }) {
  return (
    <span
      translate="no"
      className={`text-xs font-normal tracking-normal text-[#5E5E5E] ${className}`}
    >
      Google Maps
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
    <>
      <span className="text-lg font-extrabold leading-none text-navy">
        {summary.rating.toFixed(1)}
      </span>
      <span className="flex flex-col gap-1">
        <StarRating rating={summary.rating} className="h-3.5 w-3.5" />
        <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-navy/60">
          {summary.userRatingCount
            ? `${formatReviewCount(summary.userRatingCount)} reviews`
            : "Google reviews"}
        </span>
      </span>
      <GoogleMapsAttribution className="ml-1" />
    </>
  );

  if (!summary.googleMapsUri) {
    return (
      <div
        className={`${className} inline-flex items-center gap-3 rounded-full border border-gold/30 bg-white/80 px-4 py-2 shadow-sm`}
      >
        {content}
      </div>
    );
  }

  return (
    <a
      href={summary.googleMapsUri}
      target="_blank"
      rel="noreferrer"
      className={`${className} inline-flex items-center gap-3 rounded-full border border-gold/30 bg-white/80 px-4 py-2 shadow-sm transition hover:border-gold/60 hover:bg-white`}
      aria-label={`Read LA Sports World reviews on Google Maps. ${summary.rating.toFixed(
        1,
      )} out of 5 stars.`}
    >
      {content}
    </a>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function ReviewAvatar({ review }: { review: GoogleReviewData }) {
  const fallback = (
    <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-xs font-extrabold text-white">
      {getInitials(review.authorName) || "G"}
    </span>
  );

  const avatar = review.authorPhotoUri ? (
    <Image
      src={review.authorPhotoUri}
      alt={`${review.authorName} profile`}
      width={40}
      height={40}
      className="h-10 w-10 rounded-full object-cover"
      referrerPolicy="no-referrer"
    />
  ) : (
    fallback
  );

  if (!review.authorUri) {
    return avatar;
  }

  return (
    <a
      href={review.authorUri}
      target="_blank"
      rel="noreferrer"
      aria-label={`${review.authorName} on Google Maps`}
    >
      {avatar}
    </a>
  );
}

function GoogleReviewCard({ review }: { review: GoogleReviewData }) {
  const sourceHref = review.googleMapsUri || review.authorUri;

  return (
    <article className="rounded-2xl border border-navy/8 bg-cream p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <StarRating rating={review.rating} className="h-3.5 w-3.5" />
        {review.relativePublishTimeDescription ? (
          <span className="text-xs font-medium text-navy/45">
            {review.relativePublishTimeDescription}
          </span>
        ) : null}
      </div>
      <p className="text-sm font-medium leading-relaxed text-navy">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <ReviewAvatar review={review} />
        <div className="min-w-0">
          {review.authorUri ? (
            <a
              href={review.authorUri}
              target="_blank"
              rel="noreferrer"
              className="block truncate text-sm font-extrabold text-navy hover:text-gold"
            >
              {review.authorName}
            </a>
          ) : (
            <div className="truncate text-sm font-extrabold text-navy">
              {review.authorName}
            </div>
          )}
          {sourceHref ? (
            <a
              href={sourceHref}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-navy/45 hover:text-gold"
            >
              View on Google Maps
            </a>
          ) : (
            <GoogleMapsAttribution />
          )}
        </div>
      </div>
    </article>
  );
}

function GoogleReviewsBlock({
  summary,
}: {
  summary: GoogleReviewsSummary | null;
}) {
  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            Parent Reviews
          </p>
          <h2 className="text-3xl font-bold text-navy lg:text-4xl">
            Loved by LA Families
          </h2>
        </div>
        <GoogleRatingBadge summary={summary} className="mb-0" />
      </div>

      {summary?.reviews.length ? (
        <>
          <div className="grid gap-4 md:grid-cols-3">
            {summary.reviews.map((review) => (
              <GoogleReviewCard key={review.id} review={review} />
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-navy/45">
            Reviews are shown from Google Maps and ordered by Google&apos;s
            default relevance.
          </p>
        </>
      ) : (
        <div className="rounded-2xl border border-navy/8 bg-cream p-6">
          <StarRating rating={summary?.rating || 5} />
          <p className="mt-3 text-sm font-medium leading-relaxed text-navy">
            Families share their LA Sports World experiences on Google Maps.
            Check back soon for the latest reviews.
          </p>
          <GoogleMapsAttribution className="mt-4 block" />
        </div>
      )}
    </div>
  );
}

export default async function HomePage() {
  const googleReviews = await getGoogleReviews();

  return (
    <div className="bg-cream">
      {/* ══════════════════════════════════════
          HERO — oval image on right, cream bg
      ══════════════════════════════════════ */}
      <section className="relative min-h-[640px] overflow-hidden bg-cream pt-20 lg:min-h-[740px]">
        {/* SVG clipPath def — curved left edge for the hero photo (matches traced mockup line) */}
        <svg aria-hidden="true" width="0" height="0" className="absolute">
          <defs>
            <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
              {/*
                Hand-traced S-curve in objectBoundingBox units (0–1).
                Top anchor ~36% across, bulges left near the top third,
                tucks back right near the bottom, exits at ~48% across.
              */}
              <path d="M 0.36 0 C 0.30 0.22, 0.44 0.42, 0.36 0.60 C 0.30 0.78, 0.50 0.92, 0.48 1 L 1 1 L 1 0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Photo — desktop only, bleeds to top/right/bottom edges, curved left edge */}
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
          <div className="max-w-[520px] lg:max-w-[42%] xl:ml-6 xl:max-w-[500px] 2xl:ml-12">
            <GoogleRatingBadge summary={googleReviews} />
            <h1 className="font-condensed text-5xl font-extrabold uppercase leading-[0.92] text-navy sm:text-6xl lg:text-[5.5rem]">
              Where Kids
              <br />
              <span className="text-gold">Play,</span> Learn
              <br />
              &amp; Grow
            </h1>
            <p className="mt-5 max-w-[340px] text-base leading-relaxed text-navy/60 sm:text-lg">
              We bring customized sports and kids&apos; activities straight to
              your home, school, or community — full-service coaching and
              planning for ages 2–14, anywhere in Los Angeles.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/parties"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-navy-light"
              >
                Book a Party <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-navy px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy transition hover:bg-navy/5"
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

          {/* Schools & Organizations horizontal row */}
          <Link
            href="/schools-organizations"
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
                Schools &amp; Organizations
              </div>
              <div className="mt-0.5 text-sm text-navy/55">
                Enrich your programs with turnkey sports and activities for
                students.
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
                you—coaches, equipment, and a whole lot of energy.
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
          SOCIAL PROOF — 3 boxes
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)]">
            <GoogleReviewsBlock summary={googleReviews} />

            {/* Safety */}
            <div className="rounded-2xl border border-navy/8 bg-cream p-7">
              <Shield className="mb-3 h-8 w-8 text-navy" />
              <div className="text-base font-extrabold text-navy">
                Safety is our priority
              </div>
              <p className="mt-2 text-sm leading-relaxed text-navy/55">
                All coaches are Live Scanned, background checked, and
                committed to your child&apos;s well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CURRENT PROGRAMS
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Current Programs
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentPrograms.map((p) => (
              <div
                key={p.title}
                className="overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-sm"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-navy px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    {p.starts}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-base font-extrabold text-navy">
                    {p.title}{" "}
                    <span className="font-semibold text-navy/50">
                      ({p.ages})
                    </span>
                  </div>
                  <div className="mt-3 space-y-1.5 text-xs text-navy/55">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      {p.schedule}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {p.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 shrink-0" />
                      {p.ages}
                    </div>
                  </div>
                  <Link
                    href={p.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-navy transition hover:text-gold"
                  >
                    View Schedule <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/register"
              className="inline-block rounded-lg border-2 border-navy px-8 py-3 text-sm font-extrabold uppercase tracking-wide text-navy transition hover:bg-navy hover:text-white"
            >
              View Full Schedule
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
                href="/contact"
                className="inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy shadow-lg transition hover:bg-gold hover:text-white"
              >
                Tell Us What You Need
              </Link>
              <p className="text-sm text-white/55">
                or call{" "}
                <Link
                  href="tel:3105550199"
                  className="font-bold text-gold hover:underline"
                >
                  (310) 555-0199
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
