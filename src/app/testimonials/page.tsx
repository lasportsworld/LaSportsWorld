import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ExpandableGoogleReview, GoogleRatingSummary, GoogleReviewsBrand, LaswTrustCard } from "@/components/reviews/GoogleReviewDisplay";
import { GOOGLE_REVIEW_WRITE_URL, getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Google Reviews | LA Sports World",
  description: "Read Google reviews from families who have experienced LA Sports World coaching, parties, camps, and programs.",
  alternates: { canonical: "/testimonials" },
};

export default async function TestimonialsPage() {
  const summary = await getGoogleReviews();

  return (
    <div className="bg-cream pt-20">
      <section className="relative overflow-hidden border-b border-navy/10 py-20 sm:py-24 lg:py-28">
        <div className="brand-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold-dark">Family experiences, in their words</p>
            <h1 className="mt-5 font-condensed text-6xl font-extrabold uppercase leading-[0.88] text-navy sm:text-7xl lg:text-8xl">Reviews of LA Sports World</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-navy/60">Read what families are sharing about the care, energy, organization, and connection behind their LA Sports World experiences.</p>
          </div>
          <div className="border-l border-navy/12 pl-6 sm:pl-8">
            {summary ? <GoogleRatingSummary summary={summary} large /> : <GoogleReviewsBrand />}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {summary?.googleMapsUri ? <a href={summary.googleMapsUri} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-navy transition hover:text-gold">View on Google <ExternalLink className="h-3.5 w-3.5" /></a> : null}
              <a href={GOOGLE_REVIEW_WRITE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-navy transition hover:text-gold">Review LASW on Google <ExternalLink className="h-3.5 w-3.5" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-dark">Verified Google reviews</p>
            <h2 className="mt-3 font-condensed text-4xl font-extrabold uppercase leading-none text-navy sm:text-5xl">What families are saying</h2>
            <p className="mt-4 text-sm leading-7 text-navy/52">Review text and reviewer details are provided by Google and displayed without rewriting.</p>
          </div>

          {summary?.reviews.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-12">
              {summary.reviews.map((review, index) => {
                const featured = index === 0;
                const wide = index > 0 && index % 3 === 0;
                return <ExpandableGoogleReview key={review.id} review={review} featured={featured} className={`${featured ? "md:col-span-2 xl:col-span-7" : wide ? "md:col-span-2 xl:col-span-7" : "xl:col-span-5"} min-h-[330px]`} />;
              })}
            </div>
          ) : (
            <div className="border-y border-navy/10 py-12">
              <p className="max-w-2xl text-lg leading-8 text-navy/60">Google reviews are temporarily unavailable here. You can still share your experience directly on Google.</p>
              <a href={GOOGLE_REVIEW_WRITE_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-navy transition hover:text-gold">Review LASW on Google <ExternalLink className="h-4 w-4" /></a>
            </div>
          )}
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <LaswTrustCard className="min-h-[360px]" />
          <div className="flex min-h-[360px] flex-col justify-center border-y border-navy/12 px-2 py-12 sm:px-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-dark">Find the right next step</p>
            <h2 className="mt-4 max-w-xl font-condensed text-4xl font-extrabold uppercase leading-none text-navy sm:text-5xl">Ready to plan something for your family or community?</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-navy/58">Tell us what you have in mind and we’ll guide you to the coaching, party, or program experience that fits.</p>
            <Link href="/plan" className="mt-8 inline-flex w-fit items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-navy transition hover:text-gold">Plan an activity <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
