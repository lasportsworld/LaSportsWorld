import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { campRules } from "@/lib/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camp Rules | LA Sports World",
  description: "Camp rules and expectations for all LA Sports World camps and programs.",
};

export default function RulesPage() {
  return (
    <>
      <PageHero
        title="Camp Rules"
        subtitle="To ensure a safe, fun, and productive experience for every camper."
        tag="Policies"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-light border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-8 h-8 text-gold" />
              <h2 className="font-condensed font-bold text-white text-3xl uppercase">
                Expectations for All Campers
              </h2>
            </div>

            <p className="text-white/60 leading-relaxed mb-8">
              All campers are expected to obey their coaches and listen to directions given each day. The goal is for campers to appreciate the guidance of professionals who are genuinely invested in their personal development.
            </p>

            <ul className="space-y-4">
              {campRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4 text-white/70">
                  <span className="w-6 h-6 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 bg-navy border border-white/10 rounded-2xl">
              <p className="text-white/50 text-sm italic">
                All campers must agree to follow all camp rules and respect the property of the camp and others. Camp will be a great experience for all children who follow the rules!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
