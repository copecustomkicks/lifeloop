import { PRICING_PLANS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Pricing"
            title={
              <>
                Simple pricing for <span className="grad-text">real life</span>
              </>
            }
            subtitle="Start free. Upgrade when life gets more complex. Cancel anytime — no recurring regrets."
            centered
            className="mb-14"
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto items-start">
          {PRICING_PLANS.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 70}>
              <div
                className={cn(
                  "bg-[var(--surface-2)] rounded-2xl p-7 border relative transition-all duration-200",
                  plan.featured
                    ? "border-purple-500 shadow-[0_0_0_3px_rgba(124,58,237,0.1),var(--shadow-brand)] scale-[1.022]"
                    : "border-[var(--border)] hover:border-[var(--border-mid)] hover:shadow-[var(--shadow-brand)]"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 grad-btn text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <p className="text-xs font-black uppercase tracking-widest text-soft mb-2">
                  {plan.name}
                </p>

                <div className="flex items-start gap-0.5 mb-1">
                  {plan.price !== "0" && (
                    <span className="text-xl font-bold text-heading mt-2">$</span>
                  )}
                  <span className="font-display text-5xl font-extrabold text-heading leading-none tracking-tight">
                    {plan.price === "0" ? "$0" : plan.price}
                  </span>
                </div>

                <p className="text-xs text-soft mb-4">{plan.period}</p>
                <p className="text-sm text-mid leading-relaxed mb-5">{plan.description}</p>

                <div className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-sm text-mid">
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                          plan.featured
                            ? "grad-btn"
                            : "bg-[var(--badge-bg)]"
                        )}
                      >
                        <Check
                          size={9}
                          strokeWidth={3}
                          className={plan.featured ? "text-white" : "text-purple-600 dark:text-purple-400"}
                        />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                {plan.featured ? (
                  <Button variant="primary" size="md" href="#waitlist" className="w-full justify-center">
                    {plan.cta}
                  </Button>
                ) : (
                  <Button variant="outline" size="md" href="#waitlist" className="w-full justify-center">
                    {plan.cta}
                  </Button>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
