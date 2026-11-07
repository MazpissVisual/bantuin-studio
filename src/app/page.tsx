import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClosingCta } from "@/components/sections/closing-cta";
import { ConsultButton } from "@/components/ui/cta-button";
import { CategoryIcon } from "@/components/ui/category-icon";
import { HeroChat } from "@/components/sections/hero-chat";
import { ServiceFinder } from "@/components/sections/service-finder";
import { TrustRow } from "@/components/sections/trust-row";
import { Testimonials } from "@/components/sections/testimonials";
import { listCategories } from "@/server/services/catalog";
import { faqs } from "@/content/faq";
import { processSteps } from "@/content/process";
import { site } from "@/lib/site";

// Beranda sengaja ringkas: hero, pencari layanan, kategori, cara kerja, testimoni, FAQ, penutup.
// Detail harga ada di /harga, alasan memilih kami di /tentang, dan situasi pelanggan ditangani pencari layanan.
export default async function HomePage() {
  const categories = await listCategories();

  return (
    <>
      <section className="hero-bg relative isolate mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <p className="rise inline-flex items-center gap-2 rounded-full border border-rule bg-panel px-3 py-1 text-sm font-semibold text-ink" style={{ ["--i" as string]: 0 }}>
              <span aria-hidden className="size-2 rounded-full bg-accent" />
              {site.tagline}
            </p>
            <h1 className="rise mt-4 text-4xl sm:text-6xl" style={{ ["--i" as string]: 1 }}>Punya Ide? Yuk, Kita Wujudkan!</h1>
            <p className="rise mt-5 max-w-2xl text-lg" style={{ ["--i" as string]: 2 }}>{site.description}</p>
            <div data-cta className="rise mt-8 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
              <ConsultButton />
              <Link href="/layanan" className="btn btn-secondary">
                Lihat Layanan
              </Link>
            </div>
            <div className="rise" style={{ ["--i" as string]: 4 }}>
              <TrustRow />
            </div>
          </div>
          <div className="rise" style={{ ["--i" as string]: 2 }}>
            <HeroChat />
          </div>
        </div>
      </section>

      <section aria-labelledby="finder" className="pat-dots relative isolate overflow-hidden bg-ground-muted py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-accent">Bingung mulai dari mana?</p>
            <h2 id="finder" className="mt-2 text-3xl sm:text-4xl">Jawab 3 pertanyaan, kami arahkan.</h2>
            <p className="mt-3">Tidak perlu tahu istilah teknis. Pilih yang paling dekat dengan situasimu.</p>
          </div>
          <div className="mt-8">
            <ServiceFinder
              categories={categories.map((c) => ({
                slug: c.slug,
                name: c.name,
                description: c.description,
                services: c.services.map((s) => ({ slug: s.slug, name: s.name })),
              }))}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="kategori" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-accent">Layanan</p>
          <h2 id="kategori" className="mt-2 text-3xl sm:text-4xl">Apa yang bisa kami bantu?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {categories.map((c) => (
              <div key={c.slug} className="card reveal group p-6 transition-colors duration-[160ms] hover:border-accent">
                <div className="flex items-start gap-4">
                  <CategoryIcon icon={c.icon} />
                  <div>
                    <h3 className="text-xl">
                      <Link href={`/layanan/${c.slug}`} className="hover:text-accent">{c.name}</Link>
                    </h3>
                    <p className="mt-2 text-[15px]">{c.description}</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2 border-t border-rule pt-4">
                  {c.services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/layanan/${c.slug}/${s.slug}`}
                        className="inline-flex min-h-9 items-center rounded-full bg-ground-muted px-3 text-sm font-medium text-ink transition-colors duration-[160ms] hover:bg-accent hover:text-on-accent"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={`/layanan/${c.slug}`} className="mt-2 inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold text-accent">
                  Lihat semua <ArrowRight aria-hidden className="arrow-nudge size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="alur" className="pat-field relative isolate overflow-hidden on-field bg-field py-16 text-on-field-2">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-on-field">Cara kerja</p>
          <h2 id="alur" className="mt-2 text-3xl sm:text-4xl">Bagaimana cara kerjanya?</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-5 sm:gap-6">
            {processSteps.map((s, i) => (
              <li
                key={s}
                className="reveal relative flex items-center gap-4 sm:block sm:after:absolute sm:after:left-12 sm:after:right-[-12px] sm:after:top-[18px] sm:after:h-px sm:after:bg-on-field/25 sm:last:after:hidden"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent">{i + 1}</span>
                <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-on-field sm:mt-4 sm:block">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials />

      <section aria-labelledby="faq" className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="text-sm font-semibold text-accent">FAQ</p>
            <h2 id="faq" className="mt-2 text-3xl sm:text-4xl">Pertanyaan umum</h2>
            <p className="mt-3 max-w-sm">Jawaban singkat sebelum kamu mulai berkonsultasi.</p>
            <Link href="/faq" className="btn btn-secondary mt-6">
              Lihat semua FAQ
            </Link>
          </div>
          <div className="border-t border-rule">
            {faqs.slice(0, 3).map((f) => (
              <details key={f.question} className="disclosure">
                <summary>{f.question}</summary>
                <p className="pb-5 pr-8">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
