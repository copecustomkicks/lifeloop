import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

function MockupCard({
  emoji,
  name,
  due,
  badge,
  badgeVariant,
  iconBg,
}: {
  emoji: string;
  name: string;
  due: string;
  badge: string;
  badgeVariant: "overdue" | "soon" | "done" | "brand";
  iconBg: string;
}) {
  return (
    <div className="bg-[var(--surface-2)] rounded-xl px-3 py-2.5 mb-2 flex items-center gap-2.5 border border-[var(--border)]">
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 ${iconBg}`}
      >
        {emoji}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-heading truncate">{name}</p>
        <p className="text-[11px] text-soft mt-0.5">{due}</p>
      </div>
      <Badge variant={badgeVariant} className="text-[10px] px-2 py-0.5 flex-shrink-0">
        {badge}
      </Badge>
    </div>
  );
}

function AppMockup() {
  return (
    <div
      className="bg-[var(--surface-2)] rounded-2xl border border-[var(--border)] overflow-hidden"
      style={{ boxShadow: "0 24px 64px rgba(124,58,237,0.18), 0 0 0 1px var(--border)" }}
    >
      {/* Window chrome */}
      <div className="bg-[var(--bg-2,var(--bg))] border-b border-[var(--border)] px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-md h-5 flex items-center px-2">
          <span className="text-[10px] text-soft">Life Loop — Dashboard</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 bg-[var(--bg)]">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { n: "2", label: "Overdue", color: "text-red-500 dark:text-red-400" },
            { n: "3", label: "Due soon", color: "text-amber-600 dark:text-amber-400" },
            { n: "14", label: "Active", color: "text-purple-600 dark:text-purple-400" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[var(--surface-2)] rounded-xl p-2.5 text-center border border-[var(--border)]"
            >
              <p className={`text-xl font-black font-display leading-none ${s.color}`}>
                {s.n}
              </p>
              <p className="text-[10px] text-soft mt-1 font-semibold">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Overdue */}
        <p className="text-[10px] font-black uppercase tracking-widest text-soft mb-2">
          ⚠️ Overdue
        </p>
        <MockupCard
          emoji="🚗"
          name="Oil Change"
          due="Was due 12 days ago"
          badge="Late"
          badgeVariant="overdue"
          iconBg="bg-red-50 dark:bg-red-900/20"
        />
        <MockupCard
          emoji="💊"
          name="Medication Refill"
          due="Was due 5 days ago"
          badge="Late"
          badgeVariant="overdue"
          iconBg="bg-red-50 dark:bg-red-900/20"
        />

        {/* Due soon */}
        <p className="text-[10px] font-black uppercase tracking-widest text-soft mb-2 mt-3">
          📅 Due This Week
        </p>
        <MockupCard
          emoji="🦷"
          name="Dentist Cleaning"
          due="Due in 3 days"
          badge="3d"
          badgeVariant="soon"
          iconBg="bg-amber-50 dark:bg-amber-900/20"
        />
        <MockupCard
          emoji="🐾"
          name="Dog's Flea Treatment"
          due="Due in 6 days"
          badge="6d"
          badgeVariant="brand"
          iconBg="bg-purple-50 dark:bg-purple-900/20"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-bg px-4 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="animate-fade-up-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--badge-bg)] border border-[var(--border-mid)] text-[var(--badge-text)] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full bg-current"
              style={{ animation: "pulseDot 2s ease-in-out infinite" }}
            />
            Your life has recurring tasks. Track them all.
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-heading mb-5">
            Never forget the{" "}
            <span className="grad-text">important&nbsp;stuff</span> again.
          </h1>

          <p className="text-lg text-mid leading-relaxed mb-8 max-w-lg">
            Track recurring appointments, maintenance, and life admin in one place. Create,
            complete, auto-regenerate — never lose track of what matters.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button variant="primary" size="lg" href="#waitlist">
              Get Started Free →
            </Button>
            <Button variant="outline" size="lg" href="#how-it-works">
              View Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                { initials: "J", from: "#7c3aed", to: "#a855f7" },
                { initials: "M", from: "#db2777", to: "#7c3aed" },
                { initials: "S", from: "#a855f7", to: "#db2777" },
                { initials: "R", from: "#f59e0b", to: "#db2777" },
              ].map((a) => (
                <div
                  key={a.initials}
                  className="w-8 h-8 rounded-full border-2 border-[var(--bg)] flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${a.from}, ${a.to})`,
                  }}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-soft">
              <span className="font-bold text-mid">2,400+</span> people staying on top of life
            </p>
          </div>
        </div>

        {/* Right – mockup */}
        <div
          className="relative animate-fade-up-2"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          {/* Floating pill 1 */}
          <div className="absolute -top-4 right-4 z-10 bg-[var(--surface-2)] border border-[var(--border)] rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-bold text-heading shadow-[var(--shadow-brand)] whitespace-nowrap">
            <span className="w-5 h-5 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-sm">
              🦷
            </span>
            Dentist — due in 3 days
          </div>

          {/* Floating pill 2 */}
          <div className="absolute -bottom-4 -left-4 z-10 bg-[var(--surface-2)] border border-[var(--border)] rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-bold text-heading shadow-[var(--shadow-brand)] whitespace-nowrap">
            <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-sm">
              ✅
            </span>
            Oil change — marked done!
          </div>

          <AppMockup />
        </div>
      </div>
    </section>
  );
}
