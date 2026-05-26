import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative border-t border-border/30 py-24 md:py-36 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-baseline justify-between gap-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-text-muted">
            {index}
          </p>
          <div className="hidden h-px flex-1 bg-border/30 md:block" />
        </div>
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-text-primary md:text-6xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-16 md:mt-20">{children}</div>
      </div>
    </section>
  );
}
