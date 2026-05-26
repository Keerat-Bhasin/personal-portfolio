type Annotation = { id: string; tag: string; note: string };

export function AnnotationList({
  items,
  columns = 2,
}: {
  items: readonly Annotation[];
  columns?: 1 | 2 | 3;
}) {
  const colClass =
    columns === 3
      ? "md:grid-cols-3"
      : columns === 1
        ? "grid-cols-1"
        : "md:grid-cols-2";

  return (
    <ul className={`grid gap-3 ${colClass}`}>
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-lg border border-border/35 bg-bg-panel/30 px-4 py-3"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-signal">
            {item.tag}
          </p>
          <p className="mt-1.5 text-sm leading-snug text-text-secondary">{item.note}</p>
        </li>
      ))}
    </ul>
  );
}
