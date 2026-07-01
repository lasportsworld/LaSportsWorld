import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cake, GraduationCap, Tent, Trophy, Users } from "lucide-react";

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
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">Our Programs</p>
          <h2
            className="font-condensed text-navy font-extrabold uppercase leading-none"
            style={{ fontSize: "clamp(2.3rem, 4.6vw, 3.8rem)" }}
          >
            Something for Every Kid
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {homepagePrograms.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group overflow-hidden rounded-lg border border-navy/10 bg-white shadow-lg shadow-navy/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative px-5 pb-6 pt-8 text-center">
                <div className="absolute left-1/2 top-0 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-navy text-white shadow-lg">
                  <program.Icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-navy">{program.title}</h3>
                <p className="mt-3 min-h-[54px] text-xs leading-5 text-navy/60">{program.description}</p>
                <span className="mt-4 inline-flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wide text-gold">
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
