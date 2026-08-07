import PageHero from "@/components/shared/PageHero";
import SawyerEmbed from "@/components/shared/SawyerEmbed";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Register | LA Sports World",
  description:
    "Browse and register for all current LA Sports World classes, camps, and scheduled programs.",
  path: "/register",
});

export default function RegisterPage() {
  return (
    <>
      <PageHero
        title="Register"
        subtitle="Browse everything currently open for registration and grab your spot."
        tag="Sign Up"
        image="/images/sports-clinic.jpg"
        imageAlt="Children taking part in an indoor LA Sports World sports activity"
      />

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SawyerEmbed
            src={process.env.SAWYER_REGISTER_EMBED_URL}
            title="LA Sports World program registration"
            fallbackMessage="Online registration is unavailable right now. Contact us and we'll help you register for a class, camp, or program."
          />

          <div className="mt-10 text-center">
            <p className="text-sm text-navy/55">
              Don&apos;t see what you&apos;re looking for, or planning something custom?{" "}
              <a href="/contact" className="font-bold text-navy hover:text-gold hover:underline">
                Contact us
              </a>{" "}
              and we&apos;ll help you find the right fit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
