import { CategoryIcon } from "@/components/ui/category-icon";
import type { CatalogCategory } from "@/content/catalog";

// Pengganti gambar sampai ada pratinjau asli (foto/screenshot dengan izin). Bukan gambar karya.
export function ProjectThumb({ icon, className = "h-40" }: { icon: CatalogCategory["icon"]; className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative flex ${className} flex-col items-center justify-center gap-3 overflow-hidden bg-ground-muted`}
      style={{
        backgroundImage: "radial-gradient(var(--dp-color-rule) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <CategoryIcon icon={icon} />
      <span className="rounded-full border border-rule bg-panel px-3 py-1 text-xs font-semibold text-ink">Pratinjau segera hadir</span>
    </div>
  );
}
