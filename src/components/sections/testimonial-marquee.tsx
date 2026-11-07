import { Quote } from "lucide-react";
import type { TestimonialItem } from "@/content/testimonials";

// Carousel otomatis (CSS murni, hanya transform: ringan untuk GPU). Berhenti saat disorot atau difokus,
// dan statis + bisa digeser pada prefers-reduced-motion (lihat globals.css).
// Grup kedua hanya duplikat visual untuk loop mulus, disembunyikan dari pembaca layar.
function Cards({ items }: { items: TestimonialItem[] }) {
  return (
    <>
      {items.map((t) => (
        <li key={t.displayName} className="card flex w-[290px] shrink-0 flex-col p-6 sm:w-[340px]">
          <Quote aria-hidden className="size-6 text-accent" />
          <blockquote className="mt-4 flex-1 font-[family-name:var(--font-display)] text-lg font-medium leading-snug text-ink">
            {t.quote}
          </blockquote>
          <footer className="mt-6 flex items-center gap-3 border-t border-rule pt-4">
            <span aria-hidden className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 font-[family-name:var(--font-display)] text-sm font-bold text-accent">
              {t.displayName}
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-semibold text-ink">{t.displayName}</span>
              <span className="block text-sm">{t.serviceLabel}</span>
            </span>
          </footer>
        </li>
      ))}
    </>
  );
}

export function TestimonialMarquee({ items }: { items: TestimonialItem[] }) {
  return (
    <div className="marquee mt-8" role="region" aria-label="Testimoni" tabIndex={0}>
      <div className="marquee-track">
        <ul className="marquee-group">
          <Cards items={items} />
        </ul>
        <ul className="marquee-group marquee-clone" aria-hidden inert>
          <Cards items={items} />
        </ul>
      </div>
    </div>
  );
}
