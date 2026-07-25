import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const services = [
  { label: "Coaching & Groups", href: "/coaching" },
  { label: "Parties & Events", href: "/parties" },
  { label: "Classes & Camps", href: "/classes-camps" },
  { label: "Schools & Organizations", href: "/schools-organizations" },
  { label: "View Schedule", href: "/register" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Our Coaches", href: "/about/coaches-safety" },
  { label: "Service Area", href: "/about/service-area" },
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

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
        stroke="currentColor" strokeWidth="2" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
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
                { href: "#", label: "Facebook", icon: <FacebookIcon /> },
                { href: "#", label: "YouTube", icon: <YouTubeIcon /> },
                { href: "mailto:hello@lasportsworld.com", label: "Email", icon: <MailIcon /> },
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
                <Link href="tel:3105550199" className="flex items-center gap-3 transition hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  (310) 555-0199
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@lasportsworld.com" className="flex items-center gap-3 transition hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  hello@lasportsworld.com
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
            <Link href="/terms" className="transition hover:text-white/60">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
