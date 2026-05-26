"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { skillGroups } from "@/lib/content";
import { useState } from "react";

export function SystemsMap() {
  type GroupId = (typeof skillGroups)[number]["id"];
  const [active, setActive] = useState<GroupId>(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active)!;

  return (
    <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
      <div className="space-y-3">
        {skillGroups.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setActive(g.id)}
            className="group block w-full text-left"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-1.5 w-1.5 rounded-full transition ${
                  active === g.id ? "bg-signal" : "bg-border/60"
                }`}
                aria-hidden
              />
              <p
                className={`font-display text-sm tracking-tight transition ${
                  active === g.id
                    ? "text-text-primary"
                    : "text-text-secondary group-hover:text-text-primary"
                }`}
              >
                {g.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      <MotionReveal key={group.id}>
        <div className="min-h-[240px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-text-muted">
            Subsystem
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary md:text-3xl">
            {group.title}
          </h3>
          <p className="mt-6 font-mono text-[11px] leading-relaxed text-text-muted">
            Capabilities: {group.skills.join(" · ")}
          </p>
          <p className="mt-10 font-mono text-[11px] text-text-muted">
            v2: connected-node graph with project/experience edges
          </p>
        </div>
      </MotionReveal>
    </div>
  );
}
