"use client";

import { TelemetryBackdrop } from "@/components/hero/TelemetryBackdrop";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { site } from "@/lib/content";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <TelemetryBackdrop />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <MotionReveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-bg-panel/50 px-3 py-1 font-mono text-xs text-text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {site.availability}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.05}>
            <h1 className="mt-8 font-display text-6xl font-semibold leading-[0.98] tracking-tight text-text-primary md:text-7xl lg:text-8xl">
              {site.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="text-aluminum">
                {site.name.split(" ").slice(2).join(" ")}
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <p className="mt-4 font-mono text-sm tracking-wide text-text-secondary">
              {site.title}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <p className="mt-10 max-w-xl text-xl leading-relaxed text-text-secondary">
              {site.positioning}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="rounded-lg bg-aluminum px-5 py-3 text-sm font-medium text-bg-base transition hover:bg-aluminum/90"
              >
                Explore Work
              </Link>
              <Link
                href="/resume.pdf"
                className="rounded-lg border border-border px-5 py-3 text-sm text-text-secondary transition hover:border-signal/40 hover:text-text-primary"
              >
                Download Resume
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.25}>
            <p className="mt-8 font-mono text-xs text-text-muted">
              GPA {site.gpa} / 4.0 · {site.school} · Expected {site.grad}
            </p>
          </MotionReveal>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -right-10 top-8 h-px w-40 bg-border/30" />
          <div className="absolute -right-10 top-8 h-10 w-px bg-border/30" />
          <div className="mt-20 text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-text-muted">
              Current focus
            </p>
            <p className="mt-4 max-w-sm font-display text-2xl leading-tight text-text-primary">
              Robotics + embedded controls, packaged into real products.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              I care about constraints, signal flow, validation, and shipping systems that behave
              predictably in the real world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
