import { USE_CASES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function UseCases() {
  return (
    <section id="categories" className="bg-bg py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Real-World Examples"
            title={
              <>
                The tasks you{" "}
                <span className="grad-text">always</span> forget
              </>
            }
            subtitle="These are the recurring things that slip — until now."
            centered
            className="mb-12"
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {USE_CASES.map((uc, i) => (
            <AnimatedSection key={uc.name} delay={i * 50}>
              <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--border-mid)] hover:-translate-y-1 hover:shadow-[var(--shadow-brand)] transition-all duration-200 flex flex-col gap-2.5 h-full">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{uc.emoji}</span>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--border-mid)] px-2.5 py-1 rounded-full">
                    {uc.frequency}
                  </span>
                </div>
                <p className="font-bold text-sm text-heading">{uc.name}</p>
                <p className="text-xs text-soft leading-relaxed flex-1">{uc.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-soft mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Next: {uc.nextDue}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
