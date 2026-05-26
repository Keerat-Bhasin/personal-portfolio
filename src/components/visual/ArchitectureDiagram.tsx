type Node = { id: string; label: string; sub?: string };
type Edge = { from: string; to: string };

export function ArchitectureDiagram({
  nodes,
  edges,
  variant = "horizontal",
}: {
  nodes: readonly Node[];
  edges: readonly Edge[];
  variant?: "horizontal" | "vertical";
}) {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div
      className={`flex h-full w-full items-center justify-center p-6 md:p-8 ${
        variant === "vertical" ? "flex-col" : "flex-row flex-wrap gap-2"
      }`}
      aria-label="System architecture diagram"
    >
      {variant === "horizontal" ? (
        <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-1 md:flex-nowrap md:gap-0">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex items-center">
              <div className="min-w-[72px] rounded-lg border border-border/50 bg-bg-base/50 px-3 py-2 text-center md:min-w-[88px]">
                <p className="font-mono text-[10px] uppercase tracking-wider text-signal">
                  {node.label}
                </p>
                {node.sub ? (
                  <p className="mt-0.5 font-mono text-[8px] text-text-muted">{node.sub}</p>
                ) : null}
              </div>
              {i < nodes.length - 1 ? (
                <span className="mx-1 font-mono text-text-muted md:mx-2" aria-hidden>
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-stretch gap-2">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex flex-col items-center">
              <div className="w-full max-w-xs rounded-lg border border-border/50 bg-bg-base/50 px-4 py-2 text-center">
                <p className="font-mono text-[10px] uppercase tracking-wider text-signal">
                  {node.label}
                </p>
                {node.sub ? (
                  <p className="mt-0.5 font-mono text-[8px] text-text-muted">{node.sub}</p>
                ) : null}
              </div>
              {i < nodes.length - 1 ? (
                <span className="my-1 font-mono text-[10px] text-text-muted" aria-hidden>
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
      )}
      <span className="sr-only">
        Connections: {edges.map((e) => `${nodeMap[e.from]?.label} to ${nodeMap[e.to]?.label}`).join("; ")}
      </span>
    </div>
  );
}
