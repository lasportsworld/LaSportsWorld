import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import RegistrationForm from "@/components/registration/RegistrationForm";
import type { Metadata } from "next";

const programs: Record<string, { title: string; description: string; image?: string }> = {
  "summer-camp": {
    title: "Summer Camp",
    description: "Multi-week summer camp for grades Pre-1 through 8th. Sports, activities, and memories.",
    image: "/images/lasw-design-1.jpg",
  },
  "winter-camp": {
    title: "Winter Camp",
    description: "January break camp for grades Pre-1 through 8th.",
    image: "/images/lasw-design-2.jpg",
  },
  "day-camp": {
    title: "Day Camp",
    description: "Flexible sessions for school-off days, from one day to a full week.",
    image: "/images/lasw-photo-44.jpg",
  },
  "passover-camp": {
    title: "Passover Camp",
    description: "Our Matza Ballers Passover camp for grades Pre-1 through 6th.",
    image: "/images/sports-clinic.jpg",
  },
  "private-lessons": {
    title: "Private Coaching",
    description: "One-on-one coaching for children ages 6 months to 17 years.",
    image: "/images/lasw-photo-43.jpg",
  },
  "clinics": {
    title: "Pods & Groups",
    description: "Recurring small-group coaching for six or more athletes.",
    image: "/images/sports-clinic.jpg",
  },
  "parties": {
    title: "Parties & Private Events",
    description: "Custom sports and activity parties planned around your group, location, and goals.",
    image: "/images/lasw-photo-real-1.jpg",
  },
  "work-with-us": {
    title: "Work With Us",
    description: "Join the LA Sports World coaching team.",
  },
};

export function generateStaticParams() {
  return Object.keys(programs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs[slug];
  if (!program) return {};
  return {
    title: `Register: ${program.title} | LA Sports World`,
    description: program.description,
  };
}

export default async function RegistrationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "private-lessons") permanentRedirect("/pods-groups/request?format=private&source=legacy-registration");
  if (slug === "clinics") permanentRedirect("/pods-groups/request?format=group&source=legacy-registration");
  if (slug === "parties") permanentRedirect("/parties-private-events/request?source=legacy-registration");
  if (!programs[slug]) notFound();

  const program = programs[slug];

  return (
    <>
      <PageHero
        title={`Register: ${program.title}`}
        subtitle={program.description}
        tag="Sign Up"
        image={program.image}
        imageAlt={`${program.title} registration at LA Sports World`}
      />

      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/registration"
            className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all programs
          </Link>

          <RegistrationForm slug={slug} />
        </div>
      </section>
    </>
  );
}
