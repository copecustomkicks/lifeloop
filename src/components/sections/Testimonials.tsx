import { TESTIMONIALS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Testimonials() {
  return (
    <section className="bg-[var(--bg-2,var(--bg))] py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Testimonials"
            title={
              <>
                People who stopped <span className="grad-text">forgetting</span>
              </>
            }
            centered
            className="mb-12"
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 70}>
              <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--border-mid)] hover:-translate-y-1 hover:shadow-[var(--shadow-brand)] transition-all duration-200 h-full">
                {/* Stars */}
                <div className="text-amber-400 text-sm tracking-widest">★★★★★</div>

                {/* Quote */}
                <p className="text-sm text-mid leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Person */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-heading">{t.name}</p>
                    <p className="text-xs text-soft mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
