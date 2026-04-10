import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "brand" | "overdue" | "soon" | "done" | "neutral";
  dot?: boolean;
}

const variantClasses = {
  brand: "bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--border-mid)]",
  overdue: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",
  soon: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
  done: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400",
  neutral: "bg-[var(--surface)] text-soft border border-[var(--border)]",
};

export default function Badge({
  children,
  className,
  variant = "brand",
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold",
        variantClasses[variant],
        className
      )}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-current"
          style={{ animation: "pulseDot 2s ease-in-out infinite" }}
        />
      )}
      {children}
    </span>
  );
}
