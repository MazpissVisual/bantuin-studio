import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ClosingCta } from "@/components/sections/closing-cta";
import { ConsultButton } from "@/components/ui/cta-button";
import { ProjectThumb } from "@/components/ui/project-thumb";
import { categories } from "@/content/catalog";
import { portfolio } from "@/content/portfolio";
import { portfolioEnabled } from "@/content/features";

type Params = { slug: string };

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolio.find((p) => p.slug === slug);
  return item ? { title: item.title, description: item.summary } : {};
}

export default async function PortfolioDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = portfolio.findIndex((p) => p.slug === slug);
  if (!portfolioEnabled || index === -1) notFound();
  const item = portfolio[index];
  const cat = categories.find((c) => c.slug === item.categorySlug);
  const related = cat?.services.find((s) => s.name === item.role);
  const others = portfolio.filter((p) => p.slug !== item.slug);
  const prev = portfolio[index - 1];
  const next = portfolio[index + 1];
  const isConcept = item.projectType === "CONCEPT";

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:pt-16">
        <nav aria-label="Breadcrumb" className="text-sm">
          <Link href="/portfolio" className="hover:text-ink">Portfolio</Link> / <span className="text-ink">{item.title}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {isConcept && <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-bold uppercase text-on-accent">Concept Project</span>}
              <span className="text-sm font-semibold text-accent">{cat?.name}</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl">{item.title}</h1>
            <p className="mt-4 max-w-2xl text-lg">{item.summary}</p>

            <div className="card mt-8 overflow-hidden">
              <ProjectThumb icon={cat?.icon ?? "palette"} className="h-64" />
            </div>

            {isConcept && (
              <p role="note" className="mt-6 rounded-lg border border-accent bg-accent/10 p-4 text-[15px] text-ink">
                Ini proyek demonstrasi untuk menunjukkan pendekatan kami, bukan pekerjaan untuk pelanggan, dan tidak memuat klaim hasil.
              </p>
            )}

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="card p-6">
                <span className="flex size-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent">1</span>
                <h2 className="mt-4 text-xl">Masalah</h2>
                <p className="mt-2">{item.problem}</p>
              </div>
              <div className="card p-6">
                <span className="flex size-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent">2</span>
                <h2 className="mt-4 text-xl">Pendekatan</h2>
                <p className="mt-2">{item.solution}</p>
              </div>
            </div>
          </div>

          <aside aria-label="Ringkasan proyek" className="lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <p className="text-sm font-semibold text-ink">Ringkasan proyek</p>
              <dl className="mt-4 space-y-4 text-[15px]">
                <div>
                  <dt className="text-sm text-ink-2">Jenis</dt>
                  <dd className="font-semibold text-ink">{isConcept ? "Concept Project (demo)" : "Proyek pelanggan"}</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-2">Kategori</dt>
                  <dd className="font-semibold text-ink">{cat?.name}</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-2">Layanan</dt>
                  <dd className="font-semibold text-ink">{item.role}</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-2">Tools</dt>
                  <dd>
                    <ul className="mt-1 flex flex-wrap gap-1.5">
                      {item.tools.map((t) => (
                        <li key={t} className="rounded-md bg-ground-muted px-2 py-0.5 text-sm font-medium text-ink">{t}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col gap-3 border-t border-rule pt-6 [&>a]:w-full">
                <ConsultButton label="Konsultasi layanan serupa" categoryName={cat?.name} serviceName={item.role} />
                {cat && related && (
                  <Link href={`/layanan/${cat.slug}/${related.slug}`} className="btn btn-secondary">
                    Lihat layanan {related.name}
                  </Link>
                )}
              </div>
            </div>
          </aside>
        </div>

        <nav aria-label="Proyek lain" className="mt-12 grid gap-4 border-t border-rule pt-6 sm:grid-cols-2">
          {prev ? (
            <Link href={`/portfolio/${prev.slug}`} className="card group flex items-center gap-3 p-4">
              <ArrowLeft aria-hidden className="size-4 shrink-0 text-accent" />
              <span>
                <span className="block text-xs text-ink-2">Sebelumnya</span>
                <span className="font-semibold text-ink">{prev.title}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/portfolio/${next.slug}`} className="card group flex items-center justify-between gap-3 p-4 text-right">
              <span>
                <span className="block text-xs text-ink-2">Berikutnya</span>
                <span className="font-semibold text-ink">{next.title}</span>
              </span>
              <ArrowRight aria-hidden className="arrow-nudge size-4 shrink-0 text-accent" />
            </Link>
          )}
        </nav>
      </div>

      {others.length > 0 && (
        <section aria-labelledby="lainnya" className="pat-dots relative isolate overflow-hidden bg-ground-muted py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="lainnya" className="text-2xl sm:text-3xl">Proyek lainnya</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {others.slice(0, 2).map((p) => {
                const c = categories.find((x) => x.slug === p.categorySlug);
                return (
                  <li key={p.slug}>
                    <Link href={`/portfolio/${p.slug}`} className="card reveal flex h-full flex-col overflow-hidden">
                      <ProjectThumb icon={c?.icon ?? "palette"} className="h-32" />
                      <div className="p-5">
                        <p className="text-xs font-bold uppercase text-accent">{c?.name}</p>
                        <h3 className="mt-1 text-lg">{p.title}</h3>
                        <p className="mt-2 text-[15px]">{p.summary}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <ClosingCta categoryName={cat?.name} serviceName={item.role} />
    </>
  );
}
