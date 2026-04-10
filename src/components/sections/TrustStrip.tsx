import { TRUST_PILLS } from "@/lib/constants";

export default function TrustStrip() {
  return (
    <div className="bg-[var(--surface)] border-y border-[var(--border)] py-7 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold text-soft mb-5">
          Built for{" "}
          <strong className="text-mid">busy professionals</strong>,{" "}
          <strong className="text-mid">homeowners</strong>,{" "}
          <strong className="text-mid">parents</strong>, and anyone managing recurring
          responsibilities.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {TRUST_PILLS.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-1.5 bg-[var(--surface-2)] border border-[var(--border)] rounded-full px-3.5 py-1.5 text-xs font-semibold text-mid"
            >
              <span>{pill.emoji}</span>
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
