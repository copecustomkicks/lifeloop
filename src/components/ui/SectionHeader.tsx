import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-black tracking-widest uppercase text-purple-600 dark:text-purple-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-heading mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base text-mid leading-relaxed",
            centered && "mx-auto",
            "max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
