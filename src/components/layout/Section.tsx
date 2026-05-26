import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: ReactNode;
  takeaway?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  title,
  takeaway,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative border-t border-border/30 py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-baseline justify-between gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-text-muted">
            {index}
          </p>
          <div className="hidden h-px flex-1 bg-border/30 md:block" />
        </div>
        <h2 className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-text-primary md:text-5xl">
          {title}
        </h2>
        {takeaway ? (
          <p className="mt-4 max-w-xl font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
            {takeaway}
          </p>
        ) : null}
        <div className="mt-12 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
