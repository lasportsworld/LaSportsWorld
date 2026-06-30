import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data/content";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo_header_wh_v2.png"
              alt="LA Sports World"
              width={160}
              height={48}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Elite youth sports coaching in Los Angeles. Building champions on and off the field since 2012.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-gold font-bold text-xs uppercase tracking-widest mb-4">Programs</h4>
            <ul className="space-y-2">
              {[
                { label: "Private Lessons", href: "/programs/private-lessons" },
                { label: "Clinics", href: "/programs/clinics" },
                { label: "Parties & Events", href: "/programs/parties" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Camps */}
          <div>
            <h4 className="text-gold font-bold text-xs uppercase tracking-widest mb-4">Camps</h4>
            <ul className="space-y-2">
              {[
                { label: "Summer Camp", href: "/camps/summer" },
                { label: "Winter Camp", href: "/camps/winter" },
                { label: "Day Camp", href: "/camps/day" },
                { label: "Passover Camp", href: "/camps/passover" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold text-xs uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.name}<br />
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}
                </span>
              </li>
              <li>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  {siteConfig.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} LA Sports World. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-white/30 hover:text-white text-sm transition-colors">About</Link>
            <Link href="/rules" className="text-white/30 hover:text-white text-sm transition-colors">Camp Rules</Link>
            <Link href="/contact" className="text-white/30 hover:text-white text-sm transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
