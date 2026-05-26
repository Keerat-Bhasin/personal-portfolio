"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import type { featuredProjects } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Project = (typeof featuredProjects)[number];

export function ProjectShowcaseCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <MotionReveal>
      <article
        className={`relative rounded-2xl p-7 md:p-8 ${
          project.featured ? "" : ""
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/25" />
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
            {project.type}
          </p>
          {project.featured ? (
            <span className="rounded-full border border-border/35 px-2 py-0.5 font-mono text-[10px] text-text-muted">
              Featured
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold text-text-primary">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.summary}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-6 font-mono text-xs text-text-secondary underline decoration-border/50 underline-offset-4 transition hover:text-text-primary hover:decoration-border/80 focus:outline-none focus-visible:decoration-signal/60"
          aria-expanded={open}
        >
          {open ? "Hide technical deep dive" : "View technical deep dive"}
        </button>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-5 border-t border-border/25 pt-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    Engineering challenges
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-text-secondary">
                    {project.challenges.map((c) => (
                      <li key={c}>· {c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    System architecture
                  </p>
                  <p className="mt-2 font-mono text-xs text-aluminum">{project.architecture}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    Metrics / results
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-text-secondary">
                    {project.metrics.map((m) => (
                      <li key={m}>· {m}</li>
                    ))}
                  </ul>
                </div>
                <p className="font-mono text-[11px] leading-relaxed text-text-muted">
                  Tools: {project.tools.join(" · ")}
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </article>
    </MotionReveal>
  );
}

export function ProjectGrid({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="grid gap-14 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectShowcaseCard key={project.id} project={project} />
      ))}
    </div>
  );
}
