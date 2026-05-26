"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { ExhibitFrame } from "@/components/visual/ExhibitFrame";
import { SkillsGraph } from "@/components/visual/exhibits/SkillsGraph";
import { skillGroups } from "@/lib/content";
import { useState } from "react";

type GroupId = (typeof skillGroups)[number]["id"];

export function SystemsMap() {
  const [active, setActive] = useState<GroupId>(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active)!;

  return (
    <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
      <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
        {skillGroups.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setActive(g.id)}
            className={`rounded-lg border px-3 py-2 text-left transition ${
              active === g.id
                ? "border-signal/35 bg-bg-panel/40"
                : "border-transparent hover:border-border/40"
            }`}
          >
            <p
              className={`font-display text-sm ${
                active === g.id ? "text-text-primary" : "text-text-secondary"
              }`}
            >
              {g.title}
            </p>
          </button>
        ))}
      </div>

      <MotionReveal key={group.id}>
        <ExhibitFrame label="Subsystem graph" badge={group.id.toUpperCase()} aspect="video">
          <SkillsGraph active={active} groups={skillGroups} />
        </ExhibitFrame>
        <div className="mt-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-signal">
            Proof artifact
          </p>
          <p className="mt-2 font-mono text-[11px] text-text-muted">{group.proof}</p>
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-text-secondary">
            {group.skills.join(" · ")}
          </p>
        </div>
      </MotionReveal>
    </div>
  );
}
