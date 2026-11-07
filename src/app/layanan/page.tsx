import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClosingCta } from "@/components/sections/closing-cta";
import { CategoryIcon } from "@/components/ui/category-icon";
import { listCategories } from "@/server/services/catalog";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Empat kategori layanan Bantuin Studio: Academic Support, Creative Design, Educational Media, dan Web & Digital Development.",
};

export default async function LayananPage() {
  const categories = await listCategories();

  return (
    <>
      <section className="hero-bg relative isolate mx-auto max-w-6xl px-4 pb-12 pt-14 sm:pt-20">
        <p className="text-sm font-semibold text-accent">Layanan</p>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-6xl">Pilih bantuan yang kamu butuhkan.</h1>
        <p className="mt-5 max-w-2xl text-lg">
          Empat kategori, satu tujuan: membantu ide kamu jadi karya. Belum yakin harus mulai dari mana? Ceritakan saja, kami bantu arahkan.
        </p>
        <nav aria-label="Lompat ke kategori" className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="btn btn-secondary">
              {c.name}
            </a>
          ))}
        </nav>
      </section>

      {categories.map((c, i) => (
        <section
          key={c.slug}
          id={c.slug}
          aria-labelledby={`${c.slug}-judul`}
          className={`relative isolate overflow-hidden scroll-mt-20 py-14 ${i % 2 === 0 ? "pat-dots bg-ground-muted" : "bg-ground"}`}
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_1.8fr]">
            <div>
              <CategoryIcon icon={c.icon} />
              <h2 id={`${c.slug}-judul`} className="mt-4 text-3xl">{c.name}</h2>
              <p className="mt-3">{c.description}</p>
              <p className="mt-4 text-sm font-semibold text-ink">Cocok untuk</p>
              <ul className="mt-1 text-sm">
                {c.audience.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <Link href={`/layanan/${c.slug}`} className="btn btn-secondary mt-6">
                Lihat kategori
              </Link>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {c.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/layanan/${c.slug}/${s.slug}`} className="card reveal group flex h-full flex-col p-5">
                    <h3 className="text-lg">{s.name}</h3>
                    <p className="mt-2 flex-1 text-[15px]">{s.shortDescription}</p>
                    <p className="mt-4 flex items-center justify-between border-t border-rule pt-3 text-sm font-semibold text-ink">
                      {s.priceLabel}
                      <ArrowRight aria-hidden className="arrow-nudge size-4 text-accent" />
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <ClosingCta />
    </>
  );
}
