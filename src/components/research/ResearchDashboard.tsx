"use client";

import { AnnotationList } from "@/components/visual/AnnotationList";
import { ExhibitFrame } from "@/components/visual/ExhibitFrame";
import { TelemetryStrip } from "@/components/visual/TelemetryStrip";
import { Gt40Viewport } from "@/components/visual/exhibits/Gt40Viewport";
import { research } from "@/lib/content";
import { useState } from "react";

type Layer = "render" | "scan" | "solid";

const layerLabel: Record<Layer, string> = {
  render: "render",
  scan: "point cloud",
  solid: "reference solid",
};

type HotspotId = (typeof research.hotspots)[number]["id"];

export function ResearchDashboard() {
  const [layer, setLayer] = useState<Layer>("render");
  const [activeHotspot, setActiveHotspot] = useState<HotspotId>(research.hotspots[0].id);
  const hotspot = research.hotspots.find((h) => h.id === activeHotspot)!;

  const annotations = research.hotspots.map((h) => ({
    id: h.id,
    tag: h.label,
    note: h.body,
  }));

  return (
    <div className="space-y-10">
      <TelemetryStrip items={research.telemetry} />

      <ExhibitFrame
        label="Exhibit B · GT40 scan pipeline"
        takeaway={research.takeaway}
        badge={layer.toUpperCase()}
        immersive
      >
        <div className="absolute inset-0 grid-overlay opacity-[0.07]" />
        <div className="exhibit-corner exhibit-corner-tl" />
        <div className="exhibit-corner exhibit-corner-br" />
        <Gt40Viewport layer={layer} />
        <div className="absolute right-4 top-4 z-10 flex gap-1.5">
          {(["render", "scan", "solid"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLayer(l)}
              className={`rounded border px-2 py-1 font-mono text-[9px] uppercase tracking-wider transition ${
                layer === l
                  ? "border-signal/40 bg-bg-base/60 text-text-primary"
                  : "border-border/30 bg-bg-base/30 text-text-muted hover:text-text-secondary"
              }`}
            >
              {layerLabel[l]}
            </button>
          ))}
        </div>
        <p className="absolute bottom-4 left-4 z-10 max-w-xs font-mono text-[10px] text-text-muted">
          {hotspot.label}: {hotspot.body}
        </p>
      </ExhibitFrame>

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          <h3 className="font-display text-xl font-semibold text-text-primary md:text-2xl">
            {research.title}
          </h3>
          <p className="mt-2 font-mono text-[11px] text-text-muted">
            {research.org} · {research.date} · {research.role}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {research.hotspots.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={() => setActiveHotspot(h.id)}
              className={`rounded border px-3 py-1.5 font-mono text-[10px] transition ${
                activeHotspot === h.id
                  ? "border-signal/35 text-text-primary"
                  : "border-border/40 text-text-muted hover:border-border/70"
              }`}
            >
              {h.label}
            </button>
          ))}
        </div>
      </div>

      <AnnotationList items={annotations} columns={2} />
    </div>
  );
}
