"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  {
    label: "Coaching",
    href: "/coaching",
    children: [
      { label: "Coaching Overview", href: "/coaching" },
      { label: "Private Coaching", href: "/coaching/private-coaching" },
      { label: "Group Coaching & Pods", href: "/coaching/groups-pods" },
    ],
  },
  { label: "Parties", href: "/parties" },
  {
    label: "Classes & Camps",
    href: "/classes-camps",
    children: [
      { label: "Overview", href: "/classes-camps" },
      { label: "Classes", href: "/classes-camps/classes" },
      { label: "Holiday Camps", href: "/classes-camps/holiday-camps" },
      { label: "Summer Camp", href: "/classes-camps/summer-camp" },
    ],
  },
  {
    label: "Schools & Organizations",
    href: "/schools-organizations",
    children: [
      { label: "Overview", href: "/schools-organizations" },
      { label: "School PE Programs", href: "/schools-organizations/school-pe" },
      { label: "Enrichment & After-School", href: "/schools-organizations/enrichment-after-school" },
      { label: "Camps & Activity Programming", href: "/schools-organizations/camps-activity-programming" },
      { label: "Community & Organization Events", href: "/schools-organizations/community-events" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About LASW", href: "/about" },
      { label: "Our Approach", href: "/about/approach" },
      { label: "Coach Standards & Safety", href: "/about/coaches-safety" },
      { label: "Service Area", href: "/about/service-area" },
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
            src="/images/logo-color.png"
            alt="LA Sports World"
            width={180}
            height={60}
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`}
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
                className={`flex items-center gap-1 px-3 py-2 text-sm font-bold text-navy/80 transition hover:text-navy ${
                  isActive(link.href) ? "text-navy" : ""
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

          <Link
            href="/register"
            className="px-3 py-2 text-sm font-bold text-navy/80 transition hover:text-navy ml-1"
          >
            View Schedule
          </Link>
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
                  isActive(link.href) ? "text-gold" : ""
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
            href="/register"
            className="block py-2.5 text-base font-bold text-navy"
            onClick={() => setMobileOpen(false)}
          >
            View Schedule
          </Link>
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
