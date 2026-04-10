import { FEATURES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const colorMap: Record<string, string> = {
  purple: "bg-purple-50 dark:bg-purple-900/20",
  pink:   "bg-pink-50 dark:bg-pink-900/20",
  amber:  "bg-amber-50 dark:bg-amber-900/20",
  emerald:"bg-emerald-50 dark:bg-emerald-900/20",
  red:    "bg-red-50 dark:bg-red-900/20",
};

export default function Features() {
  return (
    <section id="features" className="bg-[var(--surface)] py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Features"
            title={
              <>
                One home for{" "}
                <span className="grad-text">everything recurring</span>
              </>
            }
            subtitle="Every feature is designed around one truth: the important things in life repeat on a schedule."
            centered
            className="mb-14"
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 50}>
              <div className="group bg-[var(--surface-2)] rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--border-mid)] hover:-translate-y-1 hover:shadow-[var(--shadow-brand)] transition-all duration-200 relative overflow-hidden h-full">
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 grad-btn opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4 ${
                    colorMap[f.color] ?? colorMap.purple
                  }`}
                >
                  {f.emoji}
                </div>
                <h3 className="font-display text-base font-bold text-heading mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-mid leading-relaxed">{f.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
