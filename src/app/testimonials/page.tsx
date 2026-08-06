import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | LA Sports World",
  description: "Learn more about LA Sports World programs for families and organizations in Los Angeles.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="What Families Say"
        subtitle="Updated family stories are coming soon."
        tag="Testimonials"
        image="/images/gallery-kids-4.jpg"
      />

      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-7 text-white/65">
            We&apos;re refreshing this page as the LA Sports World team grows. In the meantime, explore the current programs and find the right place to start.
          </p>
          <div className="mt-8">
            <Link
              href="/registration"
              className="button-gold"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
