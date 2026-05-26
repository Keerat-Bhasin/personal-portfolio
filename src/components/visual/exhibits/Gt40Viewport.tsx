"use client";

type Layer = "mesh" | "wireframe" | "compliance";

export function Gt40Viewport({ layer }: { layer: Layer }) {
  const stroke =
    layer === "compliance"
      ? "rgba(255, 184, 107, 0.55)"
      : layer === "wireframe"
        ? "rgba(77, 163, 255, 0.45)"
        : "rgba(207, 208, 204, 0.35)";
  const fill =
    layer === "compliance"
      ? "rgba(255, 184, 107, 0.06)"
      : "rgba(77, 163, 255, 0.04)";

  return (
    <svg
      viewBox="0 0 800 340"
      className="h-full w-full"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="gt40-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="rgba(207,208,204,0.06)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="800" height="340" fill="url(#gt40-grid)" />
      {/* Ground plane */}
      <line x1="60" y1="260" x2="740" y2="260" stroke="rgba(42,49,56,0.8)" strokeWidth="1" />
      {/* GT40 silhouette — schematic body */}
      <path
        d="M 120 250 L 180 220 L 280 200 L 420 195 L 560 200 L 640 215 L 700 240 L 680 250 L 120 250 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={layer === "wireframe" ? 0.8 : 1.2}
        strokeDasharray={layer === "wireframe" ? "4 3" : undefined}
      />
      {/* Cabin / greenhouse */}
      <path
        d="M 300 200 L 340 165 L 480 160 L 520 195"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        strokeDasharray={layer === "mesh" ? "2 4" : undefined}
      />
      {/* Diffuser (compliance highlight) */}
      {layer === "compliance" ? (
        <path
          d="M 640 250 L 700 240 L 720 255 L 650 265 Z"
          fill="rgba(255,184,107,0.12)"
          stroke="rgba(255,184,107,0.6)"
          strokeWidth="1"
        />
      ) : null}
      {/* Scan origin */}
      <circle cx="140" cy="248" r="4" fill="rgba(77,163,255,0.5)" />
      <text x="150" y="252" fill="rgba(124,122,118,0.9)" fontSize="9" fontFamily="monospace">
        SCAN ORIGIN
      </text>
      {/* Dimension callouts */}
      <line x1="120" y1="270" x2="700" y2="270" stroke="rgba(124,122,118,0.4)" strokeWidth="0.5" />
      <text x="380" y="285" fill="rgba(124,122,118,0.85)" fontSize="8" fontFamily="monospace" textAnchor="middle">
        LMH HOMOLOGATION ENVELOPE
      </text>
      {/* Layer label */}
      <text x="24" y="28" fill="rgba(124,122,118,0.9)" fontSize="10" fontFamily="monospace">
        {layer.toUpperCase()} · GT40 MK II
      </text>
    </svg>
  );
}
