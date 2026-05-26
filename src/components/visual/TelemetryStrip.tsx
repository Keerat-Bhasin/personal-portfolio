type TelemetryItem = {
  label: string;
  value: string;
  unit?: string;
};

export function TelemetryStrip({
  items,
  className = "",
}: {
  items: readonly TelemetryItem[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap gap-px overflow-hidden rounded-lg border border-border/40 bg-bg-panel/60 ${className}`}
      role="list"
    >
      {items.map((item) => (
        <div
          key={item.label}
          role="listitem"
          className="min-w-[120px] flex-1 border-r border-border/30 px-4 py-3 last:border-r-0"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-text-muted">
            {item.label}
          </p>
          <p className="mt-1 font-mono text-sm tabular-nums text-text-primary">
            {item.value}
            {item.unit ? (
              <span className="ml-1 text-[10px] text-text-muted">{item.unit}</span>
            ) : null}
          </p>
        </div>
      ))}
    </div>
  );
}
