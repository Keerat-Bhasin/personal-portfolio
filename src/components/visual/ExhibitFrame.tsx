import type { ReactNode } from "react";

type ExhibitFrameProps = {
  label: string;
  caption?: string;
  takeaway?: string;
  badge?: string;
  children: ReactNode;
  className?: string;
  aspect?: "video" | "wide" | "square";
};

const aspectClass = {
  video: "aspect-[16/9]",
  wide: "aspect-[16/7]",
  square: "aspect-square",
} as const;

export function ExhibitFrame({
  label,
  caption,
  takeaway,
  badge,
  children,
  className = "",
  aspect = "wide",
}: ExhibitFrameProps) {
  return (
    <figure className={className}>
      <div className="mb-3 flex items-center justify-between gap-4">
        <figcaption className="font-mono text-[10px] uppercase tracking-[0.34em] text-text-muted">
          {label}
        </figcaption>
        {badge ? (
          <span className="rounded border border-border/35 bg-bg-base/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-text-muted">
            {badge}
          </span>
        ) : null}
      </div>
      <div
        className={`exhibit-frame relative isolate overflow-hidden rounded-2xl border border-border/35 bg-bg-elevated/80 ${aspectClass[aspect]}`}
      >
        {children}
      </div>
      {takeaway ? (
        <p className="mt-3 font-display text-lg font-semibold tracking-tight text-text-primary">
          {takeaway}
        </p>
      ) : null}
      {caption ? (
        <p className="mt-2 max-w-2xl font-mono text-[11px] leading-relaxed text-text-muted">
          {caption}
        </p>
      ) : null}
    </figure>
  );
}
