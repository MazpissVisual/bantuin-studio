import type { Metadata } from "next";
import { faqs } from "@/content/faq";
import { ConsultButton } from "@/components/ui/cta-button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Pertanyaan yang sering ditanyakan tentang pemesanan, harga, revisi, dan data pelanggan.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl sm:text-5xl">Pertanyaan yang Sering Ditanyakan</h1>
      <div className="mt-8 border-t border-rule">
        {faqs.map((f) => (
          <details key={f.question} className="disclosure">
            <summary>{f.question}</summary>
            <p className="pb-5 pr-8 text-ink-2">{f.answer}</p>
          </details>
        ))}
      </div>
      <p className="mt-10">Pertanyaanmu belum terjawab?</p>
      <div className="mt-3">
        <ConsultButton />
      </div>
    </div>
  );
}
