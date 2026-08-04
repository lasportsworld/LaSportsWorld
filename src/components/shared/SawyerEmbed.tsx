"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SawyerEmbedProps {
  src?: string;
  title: string;
  minHeight?: number;
  fallbackMessage?: string;
}

function widgetIdFromSrc(src: string) {
  const match = src.match(/\/embed\/([^/.]+)\.js/);
  return match ? `SA_${match[1]}` : undefined;
}

export default function SawyerEmbed({
  src,
  title,
  minHeight = 900,
  fallbackMessage = "Online registration for this program is being connected. Reach out and we'll get you signed up directly.",
}: SawyerEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!src || !container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.type = "application/javascript";
    script.setAttribute("data-sawyertools", "sawyertools");
    script.async = true;
    const widgetId = widgetIdFromSrc(src);
    if (widgetId) script.id = widgetId;
    script.src = src;

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [src]);

  if (!src) {
    return (
      <div className="rounded-2xl border border-navy/10 bg-cream px-6 py-10 text-center sm:px-10">
        <p className="mx-auto max-w-md text-sm leading-relaxed text-navy/60">
          {fallbackMessage}
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-navy-light"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={title}
      className="w-full overflow-hidden rounded-2xl"
      style={{ minHeight }}
    />
  );
}
