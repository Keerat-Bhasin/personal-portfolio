"use client";

import { gt40Images } from "@/lib/assets";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Layer = "mesh" | "wireframe" | "compliance";

const layerSrc: Record<Layer, string> = {
  mesh: gt40Images.mesh,
  wireframe: gt40Images.wireframe,
  compliance: gt40Images.compliance,
};

const layerAlt: Record<Layer, string> = {
  mesh: "1966 Ford GT40 Mk II digital twin hero render",
  wireframe: "GT40 scanned mesh from 3D scanning pipeline",
  compliance: "GT40 exterior solid model for FIA LMH compliance redesign",
};

export function Gt40Viewport({ layer }: { layer: Layer }) {
  const src = layerSrc[layer];

  return (
    <div className="absolute inset-0 bg-bg-base">
      <AnimatePresence mode="wait">
        <motion.div
          key={layer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={layerAlt[layer]}
            fill
            priority={layer === "mesh"}
            sizes="(max-width: 1200px) 100vw, 1152px"
            className={`object-cover object-center ${
              layer === "wireframe" ? "brightness-[0.92] contrast-[1.05]" : ""
            }`}
          />
        </motion.div>
      </AnimatePresence>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,8,10,0.55)_100%)]"
        aria-hidden
      />
    </div>
  );
}
