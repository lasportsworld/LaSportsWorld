import { MapPin, Mail, Phone } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/data/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact Us | LA Sports World",
  description: "Get in touch with LA Sports World about coaching, parties, classes, camps, and organization programs.",
  path: "/contact",
});

interface ContactPageProps {
  searchParams: Promise<{
    service?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a general question or need help choosing where to start? We’d love to hear from you."
        tag="Get in Touch"
        image="/images/lasw-photo-real-2.jpg"
        imageAlt="LA Sports World coaches leading a movement activity with young children"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-condensed font-bold text-white text-4xl uppercase mb-6">
                  Contact LA Sports World
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Use this page for general questions, registration help, or to choose the right service. Coaching, party, and organization requests will move you directly into the matching LASW inquiry experience.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 border-t border-white/15 py-5">
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

                <div className="flex items-start gap-4 border-t border-white/15 py-5">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">Email</p>
                    <a className="text-sm text-white/60 transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-y border-white/15 py-5">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">Phone</p>
                    <a className="text-sm text-white/60 transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="tel:2133016226">(213) 301-6226</a>
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
            <ContactForm
              initialService={params.service || ""}
              utmSource={params.utm_source || ""}
              utmMedium={params.utm_medium || ""}
              utmCampaign={params.utm_campaign || ""}
            />
          </div>
        </div>
      </section>
    </>
  );
}
