type Node = {
  x: number;
  y: number;
  label: string;
  sub: string;
  sub2?: string;
};

export function SystemsIntegrationDiagram() {
  const nodes: Node[] = [
    { x: 120, y: 170, label: "MECH", sub: "CAD · FEA" },
    { x: 280, y: 100, label: "CTRL", sub: "freq. domain", sub2: "state space" },
    { x: 440, y: 170, label: "VALID", sub: "bench · scope" },
    { x: 600, y: 100, label: "BUILD", sub: "prototyping", sub2: "3D printing" },
    { x: 400, y: 250, label: "DATA", sub: "MATLAB · Python" },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [4, 2],
    [1, 4],
  ];

  return (
    <svg viewBox="0 0 720 320" className="h-full w-full" aria-label="Systems integration diagram">
      <rect width="720" height="320" fill="transparent" />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="rgba(42,49,56,0.9)"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="36" fill="rgba(16,20,24,0.9)" stroke="rgba(77,163,255,0.35)" strokeWidth="1" />
          <text x={n.x} y={n.y - (n.sub2 ? 8 : 4)} textAnchor="middle" fill="rgba(231,231,227,0.95)" fontSize="11" fontFamily="monospace" fontWeight="600">
            {n.label}
          </text>
          <text x={n.x} y={n.y + (n.sub2 ? 5 : 10)} textAnchor="middle" fill="rgba(124,122,118,0.95)" fontSize="8" fontFamily="monospace">
            {n.sub}
          </text>
          {n.sub2 && (
            <text x={n.x} y={n.y + 16} textAnchor="middle" fill="rgba(124,122,118,0.95)" fontSize="8" fontFamily="monospace">
              {n.sub2}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
