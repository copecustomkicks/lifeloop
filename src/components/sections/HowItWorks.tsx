import { STEPS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[var(--bg-2,var(--bg))] py-24 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="How It Works"
            title={
              <>
                Simple by design.{" "}
                <span className="grad-text">Powerful by default.</span>
              </>
            }
            subtitle="Getting started takes under 5 minutes. Staying on top of everything takes zero effort after that."
            centered
            className="mb-16"
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden sm:block absolute top-10 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px"
            style={{
              background:
                "linear-gradient(90deg, #7c3aed, #db2777)",
              opacity: 0.2,
            }}
          />

          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 80}>
              <div className="flex flex-col items-center text-center px-4 py-8">
                {/* Step number */}
                <div
                  className="w-14 h-14 rounded-full grad-btn flex items-center justify-center text-white font-display text-xl font-extrabold mb-6 relative z-10 flex-shrink-0"
                  style={{ boxShadow: "0 6px 24px rgba(124,58,237,0.4)" }}
                >
                  {step.number}
                </div>
                <h3 className="font-display text-lg font-bold text-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-mid leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
