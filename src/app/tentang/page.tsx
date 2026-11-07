import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Smile, Sparkles, Wallet } from "lucide-react";
import { ClosingCta } from "@/components/sections/closing-cta";
import { CategoryIcon } from "@/components/ui/category-icon";
import { ConsultButton } from "@/components/ui/cta-button";
import { categories } from "@/content/catalog";
import { processSteps } from "@/content/process";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali Bantuin Studio: partner kreatif dan digital yang terjangkau untuk kebutuhan akademik, desain, media belajar, dan web.",
};

// Prinsip layanan dan brand promise berasal dari PRD bagian 1.2. Tidak ada klaim jumlah tim,
// pengalaman, sertifikasi, atau mitra karena belum dapat diverifikasi (PRD bagian 6.6).
const principles = ["Transparan", "Terjangkau", "Komunikatif", "Bertanggung jawab"];

const values = [
  { icon: Smile, title: "Friendly", text: "Ramah dan tidak menghakimi. Tanya apa saja, sekecil apa pun." },
  { icon: Wallet, title: "Affordable", text: "Harga bersahabat dengan ruang lingkup yang jelas sejak awal." },
  { icon: Sparkles, title: "Creative", text: "Solusi visual dan digital yang rapi, fungsional, dan enak dipakai." },
  { icon: ShieldCheck, title: "Responsible", text: "Transparan, menjaga data pelanggan, dan menjunjung integritas akademik." },
];

const commitments = [
  "Harga dan ruang lingkup dijelaskan sebelum pengerjaan dimulai",
  "Tidak ada klaim tanpa bukti, termasuk hasil, nilai, atau kelulusan",
  "Data pelanggan diminta seminimal mungkin dan aksesnya dibatasi",
  "Portfolio dan testimoni hanya tampil dengan izin",
  "Kami dapat menolak permintaan yang melanggar integritas akademik",
  "Perubahan brief dibahas bersama, tidak sepihak",
];

export default function TentangPage() {
  return (
    <>
      <section className="hero-bg relative isolate mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <p className="rise text-sm font-semibold text-accent">Tentang {site.name}</p>
            <h1 className="rise mt-3 text-4xl sm:text-6xl" style={{ ["--i" as string]: 1 }}>
              Partner kreatif untuk ide yang ingin jadi karya.
            </h1>
            <p className="rise mt-5 max-w-2xl text-lg" style={{ ["--i" as string]: 2 }}>
              {site.name} adalah partner kreatif dan digital yang terjangkau bagi individu maupun organisasi yang membutuhkan dukungan akademik yang etis, desain kreatif, media pembelajaran, dan solusi website.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
              <ConsultButton />
              <Link href="/layanan" className="btn btn-secondary">Lihat Layanan</Link>
            </div>
          </div>

          <div className="card rise p-6" style={{ ["--i" as string]: 2 }}>
            <p className="text-sm font-semibold text-ink">Prinsip layanan kami</p>
            <ul className="mt-4 space-y-3">
              {principles.map((p) => (
                <li key={p} className="flex items-center gap-3 font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                  <span aria-hidden className="size-2.5 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="misi" className="pat-dots relative isolate overflow-hidden bg-ground-muted py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="text-sm font-semibold text-accent">Janji kami</p>
            <h2 id="misi" className="mt-2 text-3xl sm:text-4xl">Dari ide menjadi karya.</h2>
          </div>
          <blockquote className="reveal font-[family-name:var(--font-display)] text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
            Membantu pelanggan mengembangkan kebutuhan akademik, kreatif, dan digital melalui layanan yang ramah, terencana, dan memiliki harga yang jelas.
          </blockquote>
        </div>
      </section>

      <section aria-labelledby="nilai" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-accent">Nilai kerja</p>
          <h2 id="nilai" className="mt-2 text-3xl sm:text-4xl">Cara kami bekerja</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="card reveal group p-6">
                <span className="icon-tile inline-flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon aria-hidden className="size-5" />
                </span>
                <h3 className="mt-4 text-xl">{title}</h3>
                <p className="mt-2 text-[15px]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="kompetensi" className="pat-dots relative isolate overflow-hidden bg-ground-muted py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-accent">Kompetensi utama</p>
          <h2 id="kompetensi" className="mt-2 text-3xl sm:text-4xl">Empat bidang yang kami tekuni</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/layanan/${c.slug}`} className="card reveal group flex h-full gap-4 p-5">
                  <CategoryIcon icon={c.icon} />
                  <span>
                    <span className="block font-[family-name:var(--font-display)] text-lg font-semibold text-ink">{c.name}</span>
                    <span className="mt-1 block text-[15px]">{c.description}</span>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Lihat layanan <ArrowRight aria-hidden className="arrow-nudge size-4" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="komitmen" className="pat-field relative isolate overflow-hidden on-field bg-field py-16 text-on-field-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="text-sm font-semibold text-on-field">Komitmen</p>
            <h2 id="komitmen" className="mt-2 text-3xl sm:text-4xl">Yang bisa kamu pegang dari kami.</h2>
            <p className="mt-4">
              Detailnya ada di{" "}
              <Link href="/integritas-akademik" className="font-semibold text-on-field underline">Integritas Akademik</Link>,{" "}
              <Link href="/kebijakan-privasi" className="font-semibold text-on-field underline">Kebijakan Privasi</Link>, dan{" "}
              <Link href="/ketentuan-layanan" className="font-semibold text-on-field underline">Ketentuan Layanan</Link>.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {commitments.map((c) => (
              <li key={c} className="reveal flex gap-3 border-t border-on-field/15 pt-4">
                <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-on-field" />
                <span className="text-on-field">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="alur" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-accent">Cara kerja</p>
          <h2 id="alur" className="mt-2 text-3xl sm:text-4xl">Dari konsultasi sampai serah terima</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-5">
            {processSteps.map((s, i) => (
              <li key={s} className="card reveal flex items-center gap-3 p-4 sm:block">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent">{i + 1}</span>
                <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink sm:mt-3 sm:block">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
