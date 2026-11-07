import { GraduationCap, Palette, BookOpen, Code } from "lucide-react";
import type { CatalogCategory } from "@/content/catalog";

const icons = { "graduation-cap": GraduationCap, palette: Palette, "book-open": BookOpen, code: Code };

export function CategoryIcon({ icon }: { icon: CatalogCategory["icon"] }) {
  const Icon = icons[icon];
  return (
    <span className="icon-tile inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
      <Icon aria-hidden className="size-5" />
    </span>
  );
}
