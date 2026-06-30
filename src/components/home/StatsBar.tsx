const stats = [
  { value: "15+", label: "Years Coaching" },
  { value: "8", label: "Sports Offered" },
  { value: "4–18", label: "Ages Served" },
  { value: "5", label: "Expert Coaches" },
];

export default function StatsBar() {
  return (
    <section className="bg-gold py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-navy/20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <div className="font-condensed font-extrabold text-navy text-4xl md:text-5xl leading-none">
                {stat.value}
              </div>
              <div className="text-navy/70 font-semibold text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
