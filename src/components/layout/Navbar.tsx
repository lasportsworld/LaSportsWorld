"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "All Camps", href: "/camps" },
      { label: "Private Lessons", href: "/programs/private-lessons" },
      { label: "Clinics", href: "/programs/clinics" },
      { label: "Birthday Parties", href: "/programs/parties" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo-white.png"
            alt="LA Sports World"
            width={190}
            height={190}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 border-b-2 px-3 py-7 text-sm font-extrabold text-white transition ${
                  isActive(link.href) ? "border-gold" : "border-transparent hover:border-gold/55"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>

              {link.children && openDropdown === link.label && (
                <div className="absolute left-0 top-full min-w-[220px] pt-2">
                  <div className="overflow-hidden rounded-lg border border-navy/10 bg-white shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block border-b border-navy/5 px-5 py-3 text-sm font-semibold text-navy/70 transition last:border-0 hover:bg-cream hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/registration"
          className="hidden items-center gap-3 rounded-lg bg-gold px-7 py-3.5 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-gold-light lg:inline-flex"
        >
          Book Now <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy px-4 py-5 shadow-xl lg:hidden">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className={`block py-2 text-base font-extrabold text-white ${isActive(link.href) ? "text-gold" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pb-2 pl-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-1.5 text-sm text-white/60"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/registration"
            className="mt-4 flex items-center justify-center gap-3 rounded-lg bg-gold px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-white"
            onClick={() => setMobileOpen(false)}
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
