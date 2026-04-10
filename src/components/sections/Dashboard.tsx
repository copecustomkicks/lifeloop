import {
  DASHBOARD_STATS,
  OVERDUE_TASKS,
  DUE_SOON_TASKS,
  COMPLETED_TASKS,
} from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/cn";

type TaskType = "overdue" | "soon" | "done";

const badgeStyles: Record<TaskType, string> = {
  overdue: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",
  soon:    "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
  done:    "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400",
};

const iconBgStyles: Record<TaskType, string> = {
  overdue: "bg-red-50 dark:bg-red-900/20",
  soon:    "bg-amber-50 dark:bg-amber-900/20",
  done:    "bg-emerald-50 dark:bg-emerald-900/20",
};

function DashCard({
  emoji,
  name,
  sub,
  badge,
  type,
}: {
  emoji: string;
  name: string;
  sub: string;
  badge: string;
  type: TaskType;
}) {
  return (
    <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-xl px-3 py-2.5 mb-2 flex items-center gap-2.5 hover:border-[var(--border-mid)] transition-colors">
      <div
        className={cn(
          "w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0",
          iconBgStyles[type]
        )}
      >
        {emoji}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-heading truncate">{name}</p>
        <p className="text-[10px] text-soft mt-0.5">{sub}</p>
      </div>
      <span
        className={cn(
          "text-[10px] font-black px-2 py-0.5 rounded-full flex-shrink-0",
          badgeStyles[type]
        )}
      >
        {badge}
      </span>
    </div>
  );
}

export default function Dashboard() {
  return (
    <section className="bg-[var(--surface)] py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="The Dashboard"
            title={
              <>
                Everything at <span className="grad-text">a glance</span>
              </>
            }
            subtitle="Your life tracker in one clean view. No hunting, no digging, no forgetting."
            centered
            className="mb-12"
          />
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <div
            className="bg-[var(--bg)] rounded-2xl border border-[var(--border)] overflow-hidden max-w-4xl mx-auto"
            style={{ boxShadow: "0 24px 64px rgba(124,58,237,0.14), 0 0 0 1px var(--border)" }}
          >
            {/* Top bar */}
            <div className="bg-[var(--surface)] border-b border-[var(--border)] px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2 font-display font-bold text-sm text-heading">
                <div className="w-5 h-5 rounded grad-btn flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5" />
                    <path d="M9 5v4l2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                Life Loop
              </div>
              <div className="flex gap-1.5">
                {["Dashboard", "All Items", "History"].map((tab, i) => (
                  <span
                    key={tab}
                    className={cn(
                      "text-[11px] font-semibold px-3 py-1.5 rounded-lg cursor-default",
                      i === 0
                        ? "bg-[var(--badge-bg)] text-[var(--badge-text)]"
                        : "text-soft"
                    )}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 border-b border-[var(--border)]">
              {DASHBOARD_STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-3 text-center"
                >
                  <p className={cn("font-display text-2xl font-black leading-none mb-1", s.color)}>
                    {s.value}
                  </p>
                  <p className="text-[10px] text-soft font-semibold">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Three columns */}
            <div className="grid sm:grid-cols-3 gap-4 p-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-soft mb-3">
                  ⚠️ Overdue
                </p>
                {OVERDUE_TASKS.map((t) => (
                  <DashCard key={t.name} {...t} />
                ))}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-soft mb-3">
                  📅 Due Soon
                </p>
                {DUE_SOON_TASKS.map((t) => (
                  <DashCard key={t.name} {...t} />
                ))}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-soft mb-3">
                  ✅ Completed Recently
                </p>
                {COMPLETED_TASKS.map((t) => (
                  <DashCard key={t.name} {...t} />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
