"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="bg-[var(--bg-2,var(--bg))] py-28 px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Get Started"
            title={
              <>
                Start organizing the{" "}
                <span className="grad-text">recurring parts</span> of life.
              </>
            }
            subtitle="Join thousands of people who've stopped relying on memory and started trusting a system built for how life actually works."
            centered
            className="mb-10"
          />

          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={`
                    flex-1 sm:max-w-xs px-5 py-3.5 rounded-full border text-sm font-medium
                    bg-[var(--surface-2)] text-heading placeholder:text-soft
                    outline-none transition-colors duration-150
                    ${
                      error
                        ? "border-red-500"
                        : "border-[var(--border-mid)] focus:border-purple-500"
                    }
                  `}
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="grad-btn text-white font-bold text-sm px-7 py-3.5 rounded-full hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(124,58,237,0.45)] active:translate-y-0 transition-all duration-200 shadow-[0_4px_14px_rgba(124,58,237,0.38)] whitespace-nowrap"
                >
                  Get Started Free →
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-xs mt-2">
                  Please enter a valid email address.
                </p>
              )}
              <p className="text-xs text-soft mt-4">
                No credit card required. Free plan available. Setup takes under 5 minutes.
              </p>
            </form>
          ) : (
            <div className="inline-flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full grad-btn flex items-center justify-center text-2xl shadow-[var(--shadow-brand)]">
                ✓
              </div>
              <p className="text-lg font-bold text-heading">You&apos;re on the list!</p>
              <p className="text-sm text-soft">
                We&apos;ll be in touch at <strong>{email}</strong>
              </p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
