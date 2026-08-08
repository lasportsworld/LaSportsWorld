"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  {
    label: "Pods & Groups",
    href: "/pods-groups",
  },
  { label: "Parties & Private Events", href: "/parties-private-events" },
  {
    label: "Classes & Camps",
    href: "/classes-camps",
    children: [
      { label: "Overview", href: "/classes-camps" },
      { label: "Classes", href: "/classes-camps/classes" },
      { label: "Holiday Camps", href: "/classes-camps/holiday-camps" },
      { label: "Summer Camp (Coming Soon!)", href: "/classes-camps/summer-camp" },
    ],
  },
  {
    label: "Schools & Businesses",
    href: "/schools-businesses",
    b2b: true,
    children: [
      { label: "Overview", href: "/schools-businesses" },
      { label: "Events", href: "/schools-businesses/events" },
      { label: "Programming", href: "/schools-businesses/programming" },
      { label: "PE Curriculum & After-School", href: "/schools-businesses/pe-curriculum-after-school" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Approach", href: "/about/approach" },
      { label: "Our Team", href: "/about/team" },
      { label: "Safety & Standards", href: "/about/safety-standards" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "h-16 shadow-md border-b border-gray-100" : "h-20 border-b border-gray-100"
      }`}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/horizontal-logo.png"
            alt="LA Sports World"
            width={320}
            height={132}
            className={`h-auto object-contain transition-all duration-300 ${
              scrolled ? "w-32 sm:w-36" : "w-36 sm:w-44"
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-bold transition hover:text-navy ${
                  link.b2b ? "border-b border-gold/45 text-navy" : "text-navy/80"
                } ${isActive(link.href) ? "text-navy" : ""
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </Link>

              {link.children && openDropdown === link.label && (
                <div className="absolute left-0 top-full min-w-[230px] pt-1">
                  <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block border-b border-gray-50 px-5 py-3 text-sm font-semibold text-navy/70 transition last:border-0 hover:bg-cream hover:text-navy"
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
          href="/plan"
          className="button-gold hidden min-h-11 px-5 py-2.5 lg:inline-flex"
        >
          Plan an Activity
        </Link>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 text-navy lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white px-4 py-5 shadow-xl lg:hidden"
        >
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className={`block py-2.5 text-base font-bold text-navy ${
                  link.b2b ? "border-l-2 border-gold pl-3" : ""
                } ${isActive(link.href) ? "text-gold" : ""
                }`}
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
                      className="block py-1.5 text-sm text-navy/55"
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
            href="/plan"
            className="button-gold mt-4 flex w-full"
            onClick={() => setMobileOpen(false)}
          >
            Plan an Activity
          </Link>
        </div>
      )}
    </header>
  );
}
