"use client";

import { useEffect, useRef } from "react";

export function TelemetryBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animation = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const t = reduce ? 0 : time * 0.00015;

      // Dominant hero motif: sparse telemetry arcs only (no stacked motifs).
      ctx.strokeStyle = "rgba(207, 208, 204, 0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(w * 0.78, h * 0.42, 140 + i * 58, t + i * 0.4, t + i * 0.4 + 1.05);
        ctx.stroke();
      }

      // Rare signal accent (single pass, subtle).
      ctx.strokeStyle = "rgba(77, 163, 255, 0.05)";
      ctx.beginPath();
      ctx.arc(w * 0.78, h * 0.42, 140, t + 0.12, t + 0.55);
      ctx.stroke();

      if (!reduce) {
        animation = requestAnimationFrame(draw);
      }
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animation);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
    />
  );
}
