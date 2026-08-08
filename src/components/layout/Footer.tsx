import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/content";

const services = [
  { label: "Pods & Groups", href: "/pods-groups" },
  { label: "Parties & Private Events", href: "/parties-private-events" },
  { label: "Classes & Camps", href: "/classes-camps" },
  { label: "Schools & Businesses", href: "/schools-businesses" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Our Approach", href: "/about/approach" },
  { label: "Our Team", href: "/about/team" },
  { label: "Safety & Standards", href: "/about/safety-standards" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 – Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-color.png"
                alt="LA Sports World"
                width={130}
                height={130}
                className="h-16 rounded-md bg-white/95 p-1.5"
                style={{ width: "auto" }}
              />
            </div>
            <p className="max-w-[210px] text-sm leading-6 text-white/50">
              We bring the action to you with custom sports and activities across Los Angeles.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: "https://www.instagram.com/lasportsworld/", label: "Instagram", icon: <InstagramIcon /> },
                { href: `mailto:${siteConfig.email}`, label: "Email", icon: <MailIcon /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/65 transition hover:border-gold hover:text-gold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 – Services */}
          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-widest text-white/40">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/60 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – About */}
          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-widest text-white/40">
              About
            </h4>
            <ul className="space-y-2.5">
              {aboutLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/60 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Contact */}
          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-widest text-white/40">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-white/60">
              <li>
                <Link href="tel:2133016226" className="flex items-center gap-3 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  (213) 301-6226
                </Link>
              </li>
              <li>
                <Link href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.email}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  Los Angeles, CA<br />
                  <span className="text-xs text-white/35">Serving all LA neighborhoods</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} LA Sports World. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-white/60">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
