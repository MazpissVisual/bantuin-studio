import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioListing } from "@/components/sections/portfolio-listing";
import { categories } from "@/content/catalog";
import { portfolioEnabled } from "@/content/features";

type Params = { category: string };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  return cat ? { title: `Portfolio ${cat.name}`, description: `Contoh hasil kerja di kategori ${cat.name}.` } : {};
}

export default async function PortfolioCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  if (!portfolioEnabled || !categories.some((c) => c.slug === category)) notFound();
  return <PortfolioListing activeSlug={category} />;
}
