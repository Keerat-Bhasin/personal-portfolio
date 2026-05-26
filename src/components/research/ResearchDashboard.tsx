"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { research } from "@/lib/content";
import { useState } from "react";

export function ResearchDashboard() {
  type HotspotId = (typeof research.hotspots)[number]["id"];
  const [activeHotspot, setActiveHotspot] = useState<HotspotId>(research.hotspots[0].id);
  const hotspot = research.hotspots.find((h) => h.id === activeHotspot)!;

  return (
    <div className="relative">
      {/* One dominant idea: the viewport frame */}
      <div className="overflow-hidden rounded-[32px] border border-border/40 bg-bg-panel">
        <div className="relative min-h-[640px]">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_15%,rgba(255,184,107,0.07),transparent_55%),radial-gradient(1000px_circle_at_85%_70%,rgba(207,208,204,0.05),transparent_60%)]" />
          <div className="absolute inset-0 grid-overlay opacity-10" />

          <div className="group relative z-10 flex h-full flex-col justify-between p-12 md:p-14">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-text-muted">
                GT40 · digital twin review
              </p>
              <div className="hidden gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                {["Mesh", "Wireframe", "Compliance"].map((layer) => (
                  <span
                    key={layer}
                    className="rounded border border-border/30 bg-bg-base/25 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-text-muted"
                  >
                    {layer}
                  </span>
                ))}
              </div>
            </div>

            <div className="mx-auto my-14 w-full max-w-5xl">
              <div className="aspect-[16/7] w-full rounded-3xl border border-border/30 bg-bg-elevated/65 shadow-[0_40px_160px_rgba(0,0,0,0.68)]">
                <div className="flex h-full items-center justify-center font-mono text-xs text-text-muted">
                  viewport placeholder · replace with GT40 render / wireframe loop
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-8">
              <p className="font-mono text-[10px] text-text-muted">
                {research.org} · {research.date} · {research.role}
              </p>
              <div className="hidden md:block">
                <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-text-muted">
                  Annotation
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary">
                  {hotspot.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sparse controls (no heavy chrome) */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <h3 className="font-display text-2xl font-semibold text-text-primary md:text-3xl">
            {research.title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
            {research.summary}
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-text-muted">
            Hotspots
          </p>
          <div className="flex flex-col gap-2">
            {research.hotspots.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setActiveHotspot(h.id)}
                className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left transition ${
                  activeHotspot === h.id
                    ? "border-signal/35 bg-bg-panel/40"
                    : "border-border/50 hover:border-border/80"
                }`}
              >
                <span className="font-mono text-xs text-text-secondary">{h.label}</span>
                <span className="font-mono text-[10px] text-text-muted">↗</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
