"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { aboutTimeline, toolStack } from "@/lib/content";

function ToolchainLine() {
  return (
    <p className="font-mono text-[11px] leading-relaxed tracking-wide text-text-muted">
      Toolchain: {toolStack.join(" · ")}
    </p>
  );
}

export function About() {
  return (
    <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <MotionReveal>
        <div>
          <p className="max-w-2xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-text-primary md:text-4xl">
            I build systems where <span className="text-aluminum">constraints</span>,{" "}
            <span className="text-aluminum">signal flow</span>, and{" "}
            <span className="text-aluminum">validation</span> decide whether the product works.
          </p>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-text-secondary md:text-lg">
            <p>
              I&apos;m a Systems Engineering &amp; Design student at UIUC (Computer Science minor),
              focused on robotics, vehicle systems, and embedded controls—where packaging,
              mechanics, and software behavior meet.
            </p>
            <p>
              My work spans autonomy stacks on embedded hardware, structural optimization under
              load, and digital prototyping workflows that translate scan data into
              compliance-driven redesigns.
            </p>
          </div>

          <div className="mt-12 max-w-2xl border-l border-border/25 pl-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-text-muted">
              Systems lens
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
              I like problems where mechanical design, embedded control, and verification must
              be solved together—so the system behaves predictably outside the lab.
            </p>
          </div>

          <div className="mt-10">
            <ToolchainLine />
          </div>
        </div>
      </MotionReveal>

      <MotionReveal delay={0.12}>
        <div className="space-y-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-text-muted">
            Trajectory
          </p>

          <ol className="space-y-8">
            {aboutTimeline.map((item, i) => (
              <li key={item.id} className="relative pl-8">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-border/55" />
                <p className="font-display text-lg font-semibold text-text-primary">
                  {String(i + 1).padStart(2, "0")} · {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </MotionReveal>
    </div>
  );
}
