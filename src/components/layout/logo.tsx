import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "./logo-mark";

// Wordmark: "Bantuin" tebal + "Studio" lebih ringan, dengan simbol B dalam gelembung percakapan di kiri.
export function Logo({ onField = false }: { onField?: boolean }) {
  return (
    <Link href="/" aria-label={`${site.name} - beranda`} className="group inline-flex min-h-11 items-center gap-2.5">
      <LogoMark
        className="size-9 shrink-0 text-accent transition-transform duration-[160ms] ease-out group-hover:-rotate-6"
      />
      <span className={`font-[family-name:var(--font-display)] text-lg tracking-tight ${onField ? "text-on-field" : "text-ink"}`}>
        <span className="font-bold">Bantuin</span> <span className="font-medium">Studio</span>
      </span>
    </Link>
  );
}
