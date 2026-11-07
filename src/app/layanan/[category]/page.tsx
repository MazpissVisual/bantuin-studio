import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ClosingCta } from "@/components/sections/closing-cta";
import { CategoryIcon } from "@/components/ui/category-icon";
import { ConsultButton } from "@/components/ui/cta-button";
import { getCategory, listCategories } from "@/server/services/catalog";

type Params = { category: string };

export async function generateStaticParams() {
  return (await listCategories()).map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const category = await getCategory((await params).category);
  if (!category) return {};
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const category = await getCategory((await params).category);
  if (!category) notFound();

  return (
    <>
      <section className="hero-bg relative isolate mx-auto max-w-6xl px-4 pb-12 pt-12 sm:pt-16">
        <nav aria-label="Breadcrumb" className="text-sm">
          <Link href="/layanan" className="hover:text-ink">Layanan</Link> / <span className="text-ink">{category.name}</span>
        </nav>
        <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <CategoryIcon icon={category.icon} />
            <h1 className="mt-4 text-4xl sm:text-5xl">{category.name}</h1>
            <p className="mt-4 max-w-2xl text-lg">{category.description}</p>
            <div className="mt-6">
              <ConsultButton categoryName={category.name} />
            </div>
          </div>
          <div className="card p-5">
            <p className="text-sm font-semibold text-ink">Cocok untuk</p>
            <ul className="mt-2 space-y-1 text-[15px]">
              {category.audience.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="daftar" className="pat-dots relative isolate overflow-hidden bg-ground-muted py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="daftar" className="text-2xl sm:text-3xl">Layanan di kategori ini</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.services.map((s) => (
              <li key={s.slug}>
                <Link href={`/layanan/${category.slug}/${s.slug}`} className="card reveal group flex h-full flex-col p-5">
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

      <ClosingCta categoryName={category.name} />
    </>
  );
}
