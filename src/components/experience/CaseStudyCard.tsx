"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import type { experiences } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Experience = (typeof experiences)[number];

export function CaseStudyCard({ experience }: { experience: Experience }) {
  const [open, setOpen] = useState(false);

  return (
    <MotionReveal>
      <article className="relative rounded-2xl p-7 md:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/25" />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-text-primary">
              {experience.role}
            </h3>
            <p className="mt-1 font-mono text-xs text-text-secondary">{experience.org}</p>
          </div>
          <p className="font-mono text-xs text-text-muted">{experience.date}</p>
        </div>

        <p className="mt-4 text-sm text-text-secondary">{experience.mission}</p>
        <p className="mt-3 font-mono text-xs text-accent-amber">{experience.impact}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-5 font-mono text-xs text-text-secondary underline decoration-border/50 underline-offset-4 transition hover:text-text-primary hover:decoration-border/80 focus:outline-none focus-visible:decoration-signal/60"
          aria-expanded={open}
        >
          {open ? "Close mission log" : "Open mission log"}
        </button>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-6 space-y-2 overflow-hidden border-t border-border/25 pt-6 text-sm text-text-secondary"
            >
              {experience.outcomes.map((outcome) => (
                <li key={outcome}>▸ {outcome}</li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </article>
    </MotionReveal>
  );
}

export function ExperienceList({ items }: { items: readonly Experience[] }) {
  return (
    <div className="space-y-10">
      {items.map((exp) => (
        <CaseStudyCard key={exp.id} experience={exp} />
      ))}
    </div>
  );
}
