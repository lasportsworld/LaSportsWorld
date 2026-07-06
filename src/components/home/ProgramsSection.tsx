import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Cake, GraduationCap, Tent, Trophy, Users } from "lucide-react";

const homepagePrograms = [
  {
    title: "Camps",
    description: "Seasonal day camps packed with sports, games, and unforgettable memories.",
    image: "/images/gallery-kids-4.jpg",
    href: "/camps",
    Icon: Tent,
  },
  {
    title: "Birthday Parties",
    description: "Action-packed parties that make birthdays easy and extra special.",
    image: "/images/gallery-birthday.jpg",
    href: "/programs/parties",
    Icon: Cake,
  },
  {
    title: "School Programs",
    description: "In-school and after-school programs that keep kids active and engaged.",
    image: "/images/lasw-event-5.jpg",
    href: "/programs",
    Icon: GraduationCap,
  },
  {
    title: "Private Coaching",
    description: "One-on-one training designed to build skills and confidence.",
    image: "/images/lasw-event-1.jpg",
    href: "/programs/private-lessons",
    Icon: Trophy,
  },
  {
    title: "Group Sessions",
    description: "Small group training that builds teamwork and pushes potential.",
    image: "/images/gallery-kids-1.jpg",
    href: "/programs/clinics",
    Icon: Users,
  },
];

export default function ProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-12 bg-white [clip-path:polygon(0_0,100%_0,100%_44%,88%_58%,70%_44%,52%_60%,34%_48%,16%_62%,0_46%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading + Business CTA */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">Our Programs</p>
          <h2
            className="font-condensed text-navy font-extrabold uppercase leading-none"
            style={{ fontSize: "clamp(2.3rem, 4.6vw, 3.8rem)" }}
          >
            Something for Every Kid
          </h2>

          {/* Business / Org CTA */}
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-navy/25 bg-white px-6 py-3 text-sm font-semibold text-navy/70 shadow-sm transition hover:border-gold hover:text-navy"
            >
              <Building2 className="h-4 w-4 shrink-0 text-gold" />
              <span>Business or Organization?</span>
              <span className="font-extrabold text-gold transition group-hover:underline underline-offset-2">
                Ask about on-site programs <ArrowRight className="inline h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Program cards — 3 columns on desktop for bigger, more prominent cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {homepagePrograms.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group overflow-hidden rounded-xl border border-navy/10 bg-white shadow-lg shadow-navy/8 transition hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/15"
            >
              {/* Taller image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative px-7 pb-8 pt-10 text-center">
                {/* Icon circle — bigger */}
                <div className="absolute left-1/2 top-0 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-navy text-white shadow-lg">
                  <program.Icon className="h-7 w-7" strokeWidth={1.7} />
                </div>
                <h3 className="text-base font-extrabold uppercase tracking-wide text-navy">{program.title}</h3>
                <p className="mt-3 text-sm leading-6 text-navy/60">{program.description}</p>
                <span className="mt-5 inline-flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wide text-gold">
                  Learn More <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
