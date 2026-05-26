export function TrussSchematic() {
  const stroke = "rgba(207, 208, 204, 0.4)";
  const load = "rgba(255, 184, 107, 0.7)";

  return (
    <svg viewBox="0 0 800 340" className="h-full w-full" aria-hidden>
      <rect width="800" height="340" fill="transparent" />
      {/* Supports */}
      <line x1="200" y1="260" x2="200" y2="120" stroke={stroke} strokeWidth="2" />
      <line x1="600" y1="260" x2="600" y2="120" stroke={stroke} strokeWidth="2" />
      {/* Top chord */}
      <line x1="200" y1="120" x2="600" y2="120" stroke={stroke} strokeWidth="2" />
      {/* Bottom chord */}
      <line x1="200" y1="260" x2="600" y2="260" stroke={stroke} strokeWidth="2" />
      {/* Diagonals */}
      <line x1="200" y1="260" x2="400" y2="120" stroke={stroke} strokeWidth="1.2" />
      <line x1="400" y1="120" x2="600" y2="260" stroke={stroke} strokeWidth="1.2" />
      <line x1="200" y1="120" x2="400" y2="260" stroke="rgba(77,163,255,0.35)" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="400" y1="260" x2="600" y2="120" stroke="rgba(77,163,255,0.35)" strokeWidth="1" strokeDasharray="3 2" />
      {/* Load arrow */}
      <line x1="400" y1="80" x2="400" y2="115" stroke={load} strokeWidth="1.5" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={load} />
        </marker>
      </defs>
      <text x="410" y="75" fill={load} fontSize="9" fontFamily="monospace">
        100 kN
      </text>
      {/* Removed member ghost */}
      <line x1="300" y1="190" x2="500" y2="190" stroke="rgba(255,80,80,0.25)" strokeWidth="2" strokeDasharray="6 4" />
      <text x="24" y="28" fill="rgba(124,122,118,0.9)" fontSize="10" fontFamily="monospace">
        REDUNDANT TRUSS · SINGLE-MEMBER REMOVAL
      </text>
      <text x="24" y="310" fill="rgba(124,122,118,0.85)" fontSize="9" fontFamily="monospace">
        SF &gt; 1.5 · −52% MASS · BUCKLING CHECK PASS
      </text>
    </svg>
  );
}
