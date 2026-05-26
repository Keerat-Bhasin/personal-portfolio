import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <span className="font-display text-text-primary">{site.name}</span>
        <span className="font-mono text-xs">
          Systems Engineering & Design · UIUC · {site.grad}
        </span>
      </div>
    </footer>
  );
}
