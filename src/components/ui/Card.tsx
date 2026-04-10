import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
}

export default function Card({
  children,
  className,
  hover = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-surface-2 rounded-2xl border border-[var(--border)] shadow-[var(--shadow-sm,0_2px_8px_rgba(124,58,237,0.06))]",
        hover &&
          "transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-brand)] hover:border-[var(--border-mid)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
