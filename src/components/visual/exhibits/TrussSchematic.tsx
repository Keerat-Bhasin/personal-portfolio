import { trussImage } from "@/lib/assets";
import Image from "next/image";

export function TrussSchematic() {
  return (
    <div className="absolute inset-0 bg-bg-base">
      <Image
        src={trussImage}
        alt="Strike-resistant truss optimization schematic with load and redundancy analysis"
        fill
        sizes="(max-width: 768px) 100vw, 560px"
        className="object-contain object-center p-4 md:p-6"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(7,8,10,0.4)_100%)]"
        aria-hidden
      />
    </div>
  );
}
