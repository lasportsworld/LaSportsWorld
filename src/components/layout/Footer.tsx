import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "@/lib/data/content";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const programLinks = [
  { label: "Camps", href: "/camps" },
  { label: "Birthday Parties", href: "/programs/parties" },
  { label: "School Programs", href: "/programs" },
  { label: "Private Coaching", href: "/programs/private-lessons" },
  { label: "Group Sessions", href: "/programs/clinics" },
];

const socialLinks = ["f", "ig", "yt", "mail"];

export default function Footer() {
  return (
    <footer className="bg-navy pt-10 text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-9 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_.8fr_1fr_1.2fr]">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="LA Sports World"
              width={168}
              height={64}
              className="mb-4 h-12 w-auto object-contain"
            />
            <p className="max-w-xs text-sm leading-6 text-white/58">
              Youth sports and enrichment programs that build confidence, character, and a lifelong love of movement.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item}
                  href={item === "mail" ? `mailto:${siteConfig.email}` : "#"}
                  aria-label={item}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-[10px] font-extrabold uppercase text-white/75 transition hover:border-gold hover:text-gold"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-extrabold uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/58 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-extrabold uppercase tracking-widest">Programs</h4>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/58 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-extrabold uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/58">
              <li>
                <Link href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 transition hover:text-white">
                  <Phone className="h-4 w-4 shrink-0" /> {siteConfig.phone}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-white">
                  <Mail className="h-4 w-4 shrink-0" /> {siteConfig.email}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}
                </span>
              </li>
              <li className="text-white/45">Mon - Fri: 9am - 6pm</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-extrabold uppercase tracking-widest">Stay in the Loop</h4>
            <p className="mb-4 text-sm leading-6 text-white/58">Get the latest updates on camps, events, and special offers.</p>
            <div className="flex overflow-hidden rounded-lg bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 px-4 py-3 text-sm text-navy outline-none placeholder:text-navy/35"
              />
              <button className="grid w-12 place-items-center bg-gold text-white transition hover:bg-gold-light" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-5 text-xs text-white/42 sm:flex-row">
          <p>© {new Date().getFullYear()} LA Sports World. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/rules" className="transition hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
