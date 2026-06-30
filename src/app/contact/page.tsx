import { MapPin, Mail, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | LA Sports World",
  description: "Get in touch with LA Sports World about programs, camps, and private lessons.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Questions about a program or camp? We'd love to hear from you."
        tag="Get in Touch"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-condensed font-bold text-white text-4xl uppercase mb-6">
                  Get in Touch
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Whether you have questions about registration, want to book a party, or just want to learn more — reach out and we'll get back to you quickly.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-navy-light border border-white/10 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">Location</p>
                    <p className="text-white/60 text-sm">
                      {siteConfig.address.name}<br />
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-navy-light border border-white/10 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">Email</p>
                    <p className="text-white/60 text-sm">{siteConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-navy-light border border-white/10 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">Response Time</p>
                    <p className="text-white/60 text-sm">We typically respond within 24 hours.</p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5723420189333!2d-118.4027528847849!3d34.054839680605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbe423a1fd27%3A0x3641aa9857b71432!2s9717+W+Pico+Blvd%2C+Los+Angeles%2C+CA+90035!5e0!3m2!1sen!2sus!4v1560562726384!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="LA Sports World Location"
                  className="grayscale"
                />
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
