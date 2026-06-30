const sports = [
  { name: "Basketball", emoji: "🏀" },
  { name: "Flag Football", emoji: "🏈" },
  { name: "Soccer", emoji: "⚽" },
  { name: "Baseball", emoji: "⚾" },
  { name: "Volleyball", emoji: "🏐" },
  { name: "Surfing", emoji: "🏄" },
  { name: "Street Hockey", emoji: "🏒" },
  { name: "Personal Fitness", emoji: "💪" },
];

export default function SportsSection() {
  return (
    <section className="py-20 bg-navy-light border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-bold text-xs uppercase tracking-widest mb-3">Specialties</p>
          <h2 className="font-condensed font-extrabold text-white text-5xl md:text-6xl uppercase">
            8 Sports. One Place.
          </h2>
          <div className="divider-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {sports.map((sport) => (
            <div
              key={sport.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/10 hover:border-gold/40 bg-navy hover:bg-navy-light transition-all duration-300 cursor-default"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                {sport.emoji}
              </span>
              <span className="text-white/70 text-xs font-semibold uppercase tracking-wide text-center leading-tight">
                {sport.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
