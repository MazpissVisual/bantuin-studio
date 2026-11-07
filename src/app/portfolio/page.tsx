import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioEnabled } from "@/content/features";
import { PortfolioListing } from "@/components/sections/portfolio-listing";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Contoh hasil kerja Bantuin Studio di desain, media pembelajaran, dan pengembangan web.",
};

export default function PortfolioPage() {
  if (!portfolioEnabled) notFound();
  return <PortfolioListing />;
}
