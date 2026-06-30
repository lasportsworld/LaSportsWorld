import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration | LA Sports World",
  description: "Register for LA Sports World camps, clinics, private lessons, and parties.",
};

const registrationOptions = [
  {
    title: "Summer Camp",
    description: "Multi-week summer camp for grades Pre-1 through 8th.",
    href: "/registration/summer-camp",
    badge: "Most Popular",
  },
  {
    title: "Winter Camp",
    description: "January break camp for grades Pre-1 through 8th.",
    href: "/registration/winter-camp",
    badge: null,
  },
  {
    title: "Day Camp",
    description: "Flexible camp sessions for school-off days.",
    href: "/registration/day-camp",
    badge: null,
  },
  {
    title: "Passover Camp",
    description: '"Matza Ballers" camp during the Passover holiday.',
    href: "/registration/passover-camp",
    badge: null,
  },
  {
    title: "Private Lessons",
    description: "1-on-1 coaching for any sport, any age.",
    href: "/registration/private-lessons",
    badge: null,
  },
  {
    title: "Clinics",
    description: "8–10 week group training programs.",
    href: "/registration/clinics",
    badge: null,
  },
  {
    title: "Parties & Events",
    description: "Sports birthday party packages for up to 30 guests.",
    href: "/registration/parties",
    badge: null,
  },
  {
    title: "Work With Us",
    description: "Interested in coaching? Apply to join the team.",
    href: "/registration/work-with-us",
    badge: null,
  },
];

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        title="Registration"
        subtitle="Choose your program below and secure your spot. Spaces fill up fast!"
        tag="Sign Up"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {registrationOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className="group relative bg-navy-light border border-white/10 hover:border-gold/40 rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/10"
              >
                {option.badge && (
                  <span className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold uppercase px-3 py-1 rounded-full">
                    {option.badge}
                  </span>
                )}

                <h3 className="font-condensed font-bold text-white text-2xl uppercase mb-2">
                  {option.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">{option.description}</p>
                <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                  Register <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/40 text-sm">
              Not sure which program is right for your child?{" "}
              <Link href="/contact" className="text-gold hover:underline">
                Contact us
              </Link>{" "}
              and we'll help you choose.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
