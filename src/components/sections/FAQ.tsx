"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/cn";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={cn(
        "w-full text-left bg-[var(--surface-2)] border rounded-xl px-5 py-4 transition-all duration-200",
        open
          ? "border-purple-500"
          : "border-[var(--border)] hover:border-[var(--border-mid)]"
      )}
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-sm font-bold text-heading">{question}</span>
        <div
          className={cn(
            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200",
            open ? "grad-btn text-white rotate-0" : "bg-[var(--badge-bg)] text-[var(--badge-text)]"
          )}
        >
          {open ? <X size={10} strokeWidth={3} /> : <Plus size={10} strokeWidth={3} />}
        </div>
      </div>

      {open && (
        <p className="text-sm text-mid leading-relaxed mt-3 pt-3 border-t border-[var(--border)] text-left">
          {answer}
        </p>
      )}
    </button>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-[var(--surface)] py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="grad-text">answered</span>
              </>
            }
            subtitle="Everything you need to know before getting started."
            centered
            className="mb-12"
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {FAQS.map((faq, i) => (
            <AnimatedSection key={faq.question} delay={i * 40}>
              <FAQItem {...faq} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
