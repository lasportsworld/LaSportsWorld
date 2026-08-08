"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Shield, Star } from "lucide-react";
import type { GoogleReviewCard as GoogleReviewData, GoogleReviewsSummary } from "@/lib/google-reviews";

export function formatReviewCount(count: number) {
  return new Intl.NumberFormat("en-US").format(count);
}

export function GoogleWord({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-normal ${className}`} translate="no">
      <span className="text-[#4285F4]">G</span><span className="text-[#DB4437]">o</span><span className="text-[#F4B400]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#0F9D58]">l</span><span className="text-[#DB4437]">e</span>
    </span>
  );
}

export function GoogleReviewsBrand({ compact = false }: { compact?: boolean }) {
  return <span className={`inline-flex items-baseline gap-1 ${compact ? "text-xs" : "text-base"}`}><GoogleWord /><span className="font-bold text-navy/65">Reviews</span></span>;
}

export function ReviewStars({ rating, className = "h-3.5 w-3.5" }: { rating: number; className?: string }) {
  const fullStars = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <span className="inline-flex items-center gap-0.5 text-gold" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => <Star key={index} className={`${className} ${index < fullStars ? "fill-current" : "fill-transparent opacity-30"}`} />)}
    </span>
  );
}

function getInitials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
}

function ReviewAvatar({ review }: { review: GoogleReviewData }) {
  if (review.authorPhotoUri) {
    return <Image src={review.authorPhotoUri} alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" referrerPolicy="no-referrer" />;
  }
  return <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-navy/8 text-[10px] font-extrabold text-navy/60">{getInitials(review.authorName) || "G"}</span>;
}

export function ExpandableGoogleReview({ review, featured = false, className = "" }: { review: GoogleReviewData; featured?: boolean; className?: string }) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = review.text.length > 230;
  const textId = `review-${review.id.replace(/[^a-zA-Z0-9_-]/g, "-")}`;

  return (
    <article className={`flex flex-col border border-navy/10 bg-[#fffdf8] ${featured ? "p-7 sm:p-9" : "p-6 sm:p-7"} ${className}`}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <ReviewStars rating={review.rating} className="h-3 w-3" />
        <GoogleWord className="text-[11px] opacity-55" />
      </div>
      <p id={textId} className={`${featured ? "text-xl leading-8 sm:text-2xl sm:leading-9" : "text-base leading-7 sm:text-lg sm:leading-8"} font-medium text-navy/88 ${!expanded && canExpand ? "line-clamp-6" : ""}`}>
        “{review.text}”
      </p>
      {canExpand ? (
        <button type="button" aria-expanded={expanded} aria-controls={textId} onClick={() => setExpanded((value) => !value)} className="mt-4 inline-flex w-fit cursor-pointer items-center gap-1 text-xs font-extrabold uppercase tracking-[0.12em] text-navy/55 transition hover:text-gold">
          {expanded ? "Show less" : "Read more"}<ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      ) : null}
      <div className="mt-auto flex items-center gap-3 border-t border-navy/8 pt-5">
        <ReviewAvatar review={review} />
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-navy/65">{review.authorName}</p>
          <p className="text-[11px] text-navy/40">{review.relativePublishTimeDescription || "Google review"}</p>
        </div>
      </div>
    </article>
  );
}

export function LaswTrustCard({ className = "" }: { className?: string }) {
  return (
    <aside className={`flex flex-col justify-between border border-navy/12 bg-cream-dark/45 p-7 sm:p-8 ${className}`}>
      <div>
        <Shield className="h-7 w-7 text-gold" strokeWidth={1.7} />
        <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-dark">The LASW standard</p>
        <h3 className="mt-3 font-condensed text-3xl font-extrabold uppercase leading-none text-navy">Safety is part of every plan</h3>
        <p className="mt-4 text-sm leading-6 text-navy/58">Every coach is Live Scanned and background checked, with programming shaped around the children, setting, and goals in front of us.</p>
      </div>
      <Link href="/about/coaches-safety" className="mt-8 inline-flex w-fit items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-navy transition hover:text-gold">Our coaching standards <ArrowRight className="h-4 w-4" /></Link>
    </aside>
  );
}

export function GoogleRatingSummary({ summary, large = false }: { summary: GoogleReviewsSummary; large?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span className={`font-condensed font-extrabold leading-none text-navy ${large ? "text-6xl sm:text-7xl" : "text-4xl"}`}>{summary.rating.toFixed(1)}</span>
      <div>
        <ReviewStars rating={summary.rating} className={large ? "h-4 w-4 sm:h-5 sm:w-5" : "h-4 w-4"} />
        <p className="mt-1 text-xs font-medium text-navy/45"><GoogleReviewsBrand compact /> · {formatReviewCount(summary.userRatingCount)} reviews</p>
      </div>
    </div>
  );
}
