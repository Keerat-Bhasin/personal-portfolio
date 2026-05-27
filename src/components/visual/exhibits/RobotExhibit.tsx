"use client";

import { robotImages } from "@/lib/assets";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type View = "platform" | "pipeline" | "hardware";

const views: { id: View; label: string; src: string; alt: string; fit: "cover" | "contain" }[] = [
  {
    id: "platform",
    label: "Assembly",
    src: robotImages.platform,
    alt: "Autonomous robot car — assembled hardware platform",
    fit: "cover",
  },
  {
    id: "pipeline",
    label: "Data flow",
    src: robotImages.pipeline,
    alt: "Sense-plan-act data flow from sensors through planning to motor control",
    fit: "contain",
  },
  {
    id: "hardware",
    label: "Wiring",
    src: robotImages.hardware,
    alt: "MCU, sensor, and actuator wiring — UART and SPI connections",
    fit: "contain",
  },
];

export function RobotExhibit() {
  const [view, setView] = useState<View>("platform");
  const current = views.find((v) => v.id === view)!;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-bg-base"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className={
              current.fit === "cover"
                ? "object-cover object-center"
                : "object-contain object-center p-3 md:p-5"
            }
          />
        </motion.div>
      </AnimatePresence>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,8,10,0.45)_100%)]"
        aria-hidden
      />
      <div className="absolute right-3 top-3 z-10 flex gap-1.5">
        {views.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setView(v.id)}
            className={`rounded border px-2 py-1 font-mono text-[9px] uppercase tracking-wider transition ${
              view === v.id
                ? "border-signal/40 bg-bg-base/60 text-text-primary"
                : "border-border/30 bg-bg-base/30 text-text-muted hover:text-text-secondary"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
    </>
  );
}
