import { PROBLEM_ITEMS, CHAOS_ITEMS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Problem() {
  return (
    <section className="bg-[var(--bg-2,var(--bg))] py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <AnimatedSection>
              <SectionHeader
                eyebrow="The Problem"
                title={
                  <>
                    Life runs on cycles.{" "}
                    <span className="block">
                      Your reminders <span className="grad-text">don't.</span>
                    </span>
                  </>
                }
                subtitle="Recurring tasks are different. They come back — monthly, quarterly, yearly — but your calendar, notes, and memory weren't built for that. So things fall through."
                className="mb-8"
              />
            </AnimatedSection>

            <div className="space-y-3">
              {PROBLEM_ITEMS.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 60}>
                  <div className="flex items-start gap-3 bg-[var(--surface-2)] rounded-xl p-4 border border-[var(--border)] hover:border-[var(--border-mid)] transition-colors">
                    <span className="text-xl mt-0.5 flex-shrink-0">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-bold text-heading mb-0.5">{item.title}</p>
                      <p className="text-xs text-soft leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right – chaos box */}
          <AnimatedSection delay={100}>
            <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-soft mb-4">
                Where your recurring tasks actually live
              </p>
              <div className="space-y-2">
                {CHAOS_ITEMS.map((item, i) => {
                  const emojis = ["📱", "🗒️", "📧", "🧠", "💬", "📋"];
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-mid bg-[var(--bg)] rounded-lg px-3 py-2.5 border border-[var(--border)]"
                    >
                      <span className="text-base flex-shrink-0">{emojis[i]}</span>
                      <span className="flex-1 text-xs">{item}</span>
                      <div className="w-4 h-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-[9px] font-black text-red-500 dark:text-red-400">
                          ✕
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 bg-[var(--badge-bg)] border border-[var(--border-mid)] rounded-xl p-3 text-center">
                <p className="text-xs text-mid font-semibold">
                  None of these know your life runs on cycles.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
