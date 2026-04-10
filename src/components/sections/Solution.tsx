import { SOLUTION_POINTS, CATEGORIES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Check } from "lucide-react";

export default function Solution() {
  return (
    <section className="bg-bg py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <AnimatedSection>
              <SectionHeader
                eyebrow="The Solution"
                title={
                  <>
                    One place for{" "}
                    <span className="grad-text">everything that repeats.</span>
                  </>
                }
                subtitle="Life Loop is built specifically for recurring life tasks. Not a calendar. Not a to-do list. A dedicated tracker that understands things come back around."
                className="mb-8"
              />
            </AnimatedSection>

            <div className="space-y-5">
              {SOLUTION_POINTS.map((pt, i) => (
                <AnimatedSection key={pt.title} delay={i * 70}>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full grad-btn flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} color="white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-heading mb-0.5">{pt.title}</p>
                      <p className="text-sm text-soft leading-relaxed">{pt.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right – category cards + next up */}
          <AnimatedSection delay={80}>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-4 hover:border-[var(--border-mid)] hover:-translate-y-0.5 transition-all"
                >
                  <p className="text-2xl mb-2">{cat.emoji}</p>
                  <p className="text-sm font-bold text-heading">{cat.name}</p>
                  <p className="text-xs text-soft mt-0.5">{cat.count} active tasks</p>
                </div>
              ))}
            </div>

            {/* Next up box */}
            <div className="bg-[var(--badge-bg)] border border-[var(--border-mid)] rounded-xl p-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-[var(--badge-text)] mb-3">
                Next up this month
              </p>
              <div className="space-y-2.5">
                {[
                  { emoji: "🔧", name: "HVAC Filter", days: "8 days" },
                  { emoji: "💊", name: "Prescription Refill", days: "14 days" },
                  { emoji: "📋", name: "Annual Eye Exam", days: "22 days" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-2.5 text-sm text-mid">
                    <span>{item.emoji}</span>
                    <span>{item.name} —</span>
                    <strong className="text-heading">Due in {item.days}</strong>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
