import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import RegistrationForm from "@/components/registration/RegistrationForm";
import type { Metadata } from "next";

const programs: Record<string, { title: string; description: string; image?: string }> = {
  "summer-camp": {
    title: "Summer Camp",
    description: "Multi-week summer camp for grades Pre-1 through 8th. Sports, activities, and memories.",
    image: "/images/Summer-Camp-Header-Image.jpg",
  },
  "winter-camp": {
    title: "Winter Camp",
    description: "January break camp for grades Pre-1 through 8th.",
    image: "/images/Winter-Camp-Header-Image.jpg",
  },
  "day-camp": {
    title: "Day Camp",
    description: "Flexible sessions for school-off days — one day or a full week.",
    image: "/images/Day-Camp-Header-Image.jpg",
  },
  "passover-camp": {
    title: "Passover Camp",
    description: "Our Matza Ballers Passover camp for grades Pre-1 through 6th.",
    image: "/images/Passover-Camp-Header-Image-3.jpg",
  },
  "private-lessons": {
    title: "Private Lessons",
    description: "1-on-1 coaching for any sport, any age.",
    image: "/images/LASW_Private_Lessons_Header_Image.jpg",
  },
  "clinics": {
    title: "Clinics",
    description: "8–10 week group training programs for 6+ athletes.",
    image: "/images/LASW_Clinics_Header_Image.jpg",
  },
  "parties": {
    title: "Parties & Events",
    description: "$495 for 2 hours, up to 30 guests, choose any 2 sports.",
    image: "/images/LASW_Parties_Header_Image.jpg",
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
  if (!programs[slug]) notFound();

  const program = programs[slug];

  return (
    <>
      <PageHero
        title={`Register: ${program.title}`}
        subtitle={program.description}
        tag="Sign Up"
        image={program.image}
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
