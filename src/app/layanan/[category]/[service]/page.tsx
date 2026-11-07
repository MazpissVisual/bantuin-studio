import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ClipboardList, Handshake, MessageCircle, PackageCheck, PenTool } from "lucide-react";
import { ClosingCta } from "@/components/sections/closing-cta";
import { CategoryIcon } from "@/components/ui/category-icon";
import { ConsultButton } from "@/components/ui/cta-button";
import { faqs } from "@/content/faq";
import { prepareList, processDetails } from "@/content/process";
import { getService, listCategories } from "@/server/services/catalog";

type Params = { category: string; service: string };

// Ikon tiap langkah alur kerja (urutan sama dengan processDetails).
const stepIcons = [MessageCircle, ClipboardList, Handshake, PenTool, PackageCheck];

export async function generateStaticParams() {
  const categories = await listCategories();
  return categories.flatMap((c) => c.services.map((s) => ({ category: c.slug, service: s.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, service } = await params;
  const found = await getService(category, service);
  if (!found) return {};
  return { title: found.service.name, description: found.service.shortDescription };
}

// FAQ umum yang relevan untuk halaman layanan: harga, waktu, revisi.
const relatedFaqs = [faqs[1], faqs[3], faqs[4]];

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { category, service } = await params;
  const found = await getService(category, service);
  if (!found) notFound();
  const { category: cat, service: svc } = found;
  const others = cat.services.filter((s) => s.slug !== svc.slug);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:pt-16">
        <nav aria-label="Breadcrumb" className="text-sm">
          <Link href="/layanan" className="hover:text-ink">Layanan</Link> /{" "}
          <Link href={`/layanan/${cat.slug}`} className="hover:text-ink">{cat.name}</Link> /{" "}
          <span className="text-ink">{svc.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <CategoryIcon icon={cat.icon} />
              <span className="text-sm font-semibold text-accent">{cat.name}</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl">{svc.name}</h1>
            <p className="mt-4 max-w-2xl text-lg">{svc.shortDescription}</p>
            <div className="mt-6 lg:hidden">
              <ConsultButton categoryName={cat.name} serviceName={svc.name} />
            </div>

            <h2 className="mt-14 text-2xl sm:text-3xl">Yang kamu dapatkan</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {svc.deliverables.map((d) => (
                <li key={d} className="card reveal flex gap-3 p-4">
                  <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-ink">{d}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 text-2xl sm:text-3xl">Cocok untuk</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.audience.map((a) => (
                <li key={a} className="rounded-lg border border-rule bg-panel px-3 py-1.5 text-[15px] text-ink">{a}</li>
              ))}
            </ul>

            <h2 className="mt-14 text-2xl sm:text-3xl">Alur kerja</h2>
            {/* Timeline: garis vertikal menyambung lingkaran ikon; tiap langkah berupa kartu dengan penjelasan. */}
            <ol className="relative mt-6 space-y-4 before:absolute before:bottom-8 before:left-5 before:top-8 before:w-px before:-translate-x-1/2 before:bg-rule">
              {processDetails.map((s, i) => {
                const Icon = stepIcons[i];
                return (
                  <li key={s.title} className="reveal relative flex gap-4">
                    <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent ring-4 ring-ground">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <div className="card min-w-0 flex-1 p-4 sm:p-5">
                      <p className="text-xs font-semibold text-accent">Langkah {i + 1}</p>
                      <h3 className="mt-0.5 text-lg">{s.title}</h3>
                      <p className="mt-1 text-[15px]">{s.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <h2 className="mt-14 text-2xl sm:text-3xl">Yang perlu kamu siapkan</h2>
            <ul className="mt-4 list-disc space-y-1 pl-5">
              {prepareList.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <aside data-cta aria-label="Ringkasan layanan" className="lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <p className="text-sm text-ink-2">Harga</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink">{svc.priceLabel}</p>
              <p className="mt-2 text-[15px]">Ceritakan kebutuhanmu, kami bantu hitungkan sesuai ruang lingkupnya.</p>
              <dl className="mt-5 space-y-3 border-t border-rule pt-5 text-[15px]">
                <div className="flex justify-between gap-4">
                  <dt>Kategori</dt>
                  <dd className="text-right font-semibold text-ink">{cat.name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Estimasi waktu</dt>
                  <dd className="text-right font-semibold text-ink">Dibahas saat konsultasi</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col gap-3 [&>a]:w-full">
                <ConsultButton categoryName={cat.name} serviceName={svc.name} />
                <Link href="/harga" className="btn btn-secondary">Lihat panduan harga</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {others.length > 0 && (
        <section aria-labelledby="terkait" className="pat-dots relative isolate overflow-hidden bg-ground-muted py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="terkait" className="text-2xl sm:text-3xl">Layanan terkait</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link href={`/layanan/${cat.slug}/${s.slug}`} className="card reveal group flex h-full flex-col p-5">
                    <h3 className="text-lg">{s.name}</h3>
                    <p className="mt-2 flex-1 text-[15px]">{s.shortDescription}</p>
                    <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent">
                      Lihat detail <ArrowRight aria-hidden className="arrow-nudge size-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section aria-labelledby="faq-terkait" className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 id="faq-terkait" className="text-2xl sm:text-3xl">Pertanyaan umum</h2>
            <Link href="/faq" className="btn btn-secondary mt-6">Lihat semua FAQ</Link>
          </div>
          <div className="border-t border-rule">
            {relatedFaqs.map((f) => (
              <details key={f.question} className="disclosure">
                <summary>{f.question}</summary>
                <p className="pb-5 pr-8">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta categoryName={cat.name} serviceName={svc.name} />
    </>
  );
}
