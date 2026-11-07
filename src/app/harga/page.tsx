import type { Metadata } from "next";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { ConsultButton } from "@/components/ui/cta-button";
import { categories } from "@/content/catalog";
import { pricingByCategory } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Harga",
  description: "Cara kami menentukan harga: transparan, sesuai ruang lingkup, dan bisa disesuaikan dengan budget.",
};

const factors = [
  "Ruang lingkup dan jumlah deliverable (misalnya jumlah slide, halaman, atau fitur)",
  "Tingkat kesulitan dan kebutuhan riset atau materi",
  "Jumlah revisi yang disepakati",
  "Tenggat pengerjaan",
  "Add-on tambahan, misalnya file sumber atau pendampingan",
];

export default function HargaPage() {
  const groups = categories
    .filter((c) => pricingByCategory[c.slug])
    .map((c) => ({ slug: c.slug, name: c.name, plans: pricingByCategory[c.slug] }));

  return (
    <>
      <PricingPlans groups={groups} />

      <div className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl">Faktor penentu harga</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {factors.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          Harga bersifat indikatif. Proyek web atau media yang kompleks menggunakan penawaran custom.
        </p>
        <div className="mt-8">
          <ConsultButton label="Minta Estimasi" />
        </div>
      </div>
    </>
  );
}
