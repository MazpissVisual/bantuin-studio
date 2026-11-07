import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ClosingCta } from "@/components/sections/closing-cta";
import { ProjectThumb } from "@/components/ui/project-thumb";
import { categories } from "@/content/catalog";
import { portfolio } from "@/content/portfolio";

// Aturan tampil portfolio dari PRD bagian 6.4.
const rules = [
  "Proyek demonstrasi dijelaskan sebagai contoh, bukan pekerjaan pelanggan",
  "Tidak ada identitas, dokumen, atau data pelanggan tanpa izin",
  "Tidak ada hasil, angka, atau testimoni yang dikarang",
];

// Filter memakai rute statis (/portfolio dan /portfolio/kategori/[slug]), bukan ?query,
// agar semua halaman portfolio diprerender dan bisa di-cache CDN.
export function PortfolioListing({ activeSlug }: { activeSlug?: string }) {
  const active = categories.find((c) => c.slug === activeSlug);
  const items = active ? portfolio.filter((p) => p.categorySlug === active.slug) : portfolio;

  const chip = (isActive: boolean) => `btn ${isActive ? "btn-primary" : "btn-secondary"} !min-h-10 !px-4`;
  const count = (slug: string) => portfolio.filter((p) => p.categorySlug === slug).length;

  return (
    <>
      <section className="hero-bg relative isolate mx-auto max-w-6xl px-4 pb-12 pt-14 sm:pt-20">
        <div className="grid items-end gap-8 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <p className="rise text-sm font-semibold text-accent">Portfolio</p>
            <h1 className="rise mt-3 text-4xl sm:text-6xl" style={{ ["--i" as string]: 1 }}>Lihat contoh cara kami bekerja.</h1>
            <p className="rise mt-5 max-w-2xl text-lg" style={{ ["--i" as string]: 2 }}>
              Setiap proyek menjelaskan masalah, pendekatan, dan tools yang dipakai. Proyek di halaman ini adalah <strong className="text-ink">contoh demonstrasi (Concept Project)</strong>, bukan pekerjaan untuk pelanggan.
            </p>
          </div>
          <div className="card rise p-5" style={{ ["--i" as string]: 2 }}>
            <p className="text-sm font-semibold text-ink">Aturan kami menampilkan karya</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              {rules.map((r) => (
                <li key={r} className="flex gap-2">
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="daftar" className="pat-dots relative isolate overflow-hidden bg-ground-muted py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="daftar" className="sr-only">Daftar proyek</h2>
          <nav aria-label="Filter kategori" className="flex flex-wrap gap-2">
            <Link href="/portfolio" className={chip(!active)} aria-current={!active ? "page" : undefined}>
              Semua ({portfolio.length})
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/portfolio/kategori/${c.slug}`}
                className={chip(active?.slug === c.slug)}
                aria-current={active?.slug === c.slug ? "page" : undefined}
              >
                {c.name} ({count(c.slug)})
              </Link>
            ))}
          </nav>

          {items.length === 0 ? (
            <div className="card mt-8 p-10 text-center">
              <h3 className="text-xl">Belum ada proyek di kategori ini.</h3>
              <p className="mt-2">Kategori ini sedang kami siapkan. Kalau kamu punya kebutuhan serupa, ceritakan saja.</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link href="/portfolio" className="btn btn-secondary">Lihat semua proyek</Link>
                {active && <Link href={`/layanan/${active.slug}`} className="btn btn-primary">Lihat layanan</Link>}
              </div>
            </div>
          ) : (
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => {
                const cat = categories.find((c) => c.slug === p.categorySlug);
                return (
                  <li key={p.slug}>
                    <Link href={`/portfolio/${p.slug}`} className="card reveal group flex h-full flex-col overflow-hidden">
                      <ProjectThumb icon={cat?.icon ?? "palette"} />
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-bold uppercase text-accent">{cat?.name}</p>
                        <h3 className="mt-1 text-lg">{p.title}</h3>
                        <p className="mt-2 flex-1 text-[15px]">{p.summary}</p>
                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {p.tools.map((t) => (
                            <li key={t} className="rounded-md bg-ground-muted px-2 py-0.5 text-xs font-medium text-ink">{t}</li>
                          ))}
                        </ul>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                          Lihat detail <ArrowRight aria-hidden className="arrow-nudge size-4" />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      <ClosingCta title="Punya proyek serupa? Ceritakan ke kami." categoryName={active?.name} />
    </>
  );
}
