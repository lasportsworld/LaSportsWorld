import { MapPin } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | LA Sports World",
  description: "Find LA Sports World camp and program locations in Los Angeles.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title="Locations"
        subtitle="Drop-off, pick-up, and activity locations across Los Angeles."
        tag="Where We Are"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-light border border-white/10 rounded-3xl overflow-hidden">
            {/* Location card */}
            <div className="p-8 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">
                    Drop-Off & Pick-Up
                  </p>
                  <h2 className="font-condensed font-bold text-white text-3xl uppercase mb-1">
                    Mogen David
                  </h2>
                  <p className="text-white/60">
                    9717 Pico Blvd, Los Angeles, CA 90019<br />
                    <span className="text-white/40 text-sm">On Daniels Dr</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5723420189333!2d-118.4027528847849!3d34.054839680605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbe423a1fd27%3A0x3641aa9857b71432!2s9717+W+Pico+Blvd%2C+Los+Angeles%2C+CA+90035!5e0!3m2!1sen!2sus!4v1560562726384!5m2!1sen!2sus"
                width="100%"
                height="100%"
                loading="lazy"
                title="Mogen David Location"
                className="grayscale"
              />
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mt-8">
            Activity locations vary by program and season. Contact us for specific field locations.
          </p>
        </div>
      </section>
    </>
  );
}
