import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { listCategories } from "@/server/services/catalog";
import { buildWhatsAppLink } from "@/lib/whatsapp/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi",
  description: "Ceritakan kebutuhanmu lewat formulir atau WhatsApp. Kami bantu tentukan solusinya.",
};

// Halaman ini statis. Isian awal dari URL diterapkan di browser oleh <InquiryForm> setelah halaman tampil.
export default async function KontakPage() {
  const categories = (await listCategories()).map((c) => ({
    slug: c.slug,
    name: c.name,
    services: c.services.map((s) => ({ slug: s.slug, name: s.name })),
  }));
  const whatsappUrl = buildWhatsAppLink({ number: site.whatsappNumber });

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="text-3xl sm:text-4xl">Kontak & Konsultasi</h1>
      <p className="mt-3 max-w-2xl">Ceritakan kebutuhanmu, kami bantu tentukan solusinya. Tidak perlu membuat akun.</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="card p-5 sm:p-8">
          <InquiryForm categories={categories} />
        </div>

        <aside className="space-y-5 text-sm">
          <div className="card p-5">
            <h2 className="flex items-center gap-2 text-lg">
              <MessageCircle aria-hidden className="size-5 text-accent" /> WhatsApp
            </h2>
            <p className="mt-2">{site.whatsappDisplay}</p>
            {whatsappUrl && (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold text-ink underline">
                Chat lewat WhatsApp
              </a>
            )}
          </div>
          <div className="card p-5">
            <h2 className="flex items-center gap-2 text-lg">
              <Mail aria-hidden className="size-5 text-accent" /> Email
            </h2>
            <a href={`mailto:${site.email}`} className="mt-2 inline-block break-all font-semibold text-ink underline">
              {site.email}
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
