"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { contactHref } from "@/lib/contact";
import { buildWhatsAppLink } from "@/lib/whatsapp/link";
import { site } from "@/lib/site";

type Category = {
  slug: string;
  name: string;
  description: string;
  services: { slug: string; name: string }[];
};

const needs = [
  { label: "Merapikan tulisan atau dokumen", hint: "Proofreading, formatting, konsultasi", slug: "academic-support" },
  { label: "Desain visual", hint: "PPT, poster, infografis, CV", slug: "creative-design" },
  { label: "Media untuk mengajar", hint: "LKPD, modul ajar, website belajar", slug: "educational-media" },
  { label: "Website atau halaman online", hint: "Landing page, website, dashboard", slug: "digital-development" },
];

const audiences = [
  { label: "Mahasiswa atau pelajar", phrase: "mahasiswa/pelajar" },
  { label: "Guru atau calon guru", phrase: "guru/calon guru" },
  { label: "Organisasi atau komunitas", phrase: "bagian dari organisasi/komunitas" },
  { label: "Pemilik usaha atau UMKM", phrase: "pemilik usaha/UMKM" },
];

const timings = [
  { label: "Dalam minggu ini", phrase: "dalam minggu ini" },
  { label: "Dalam 2-4 minggu", phrase: "dalam 2-4 minggu" },
  { label: "Belum ditentukan", phrase: "belum ditentukan" },
];

const questions = ["Kamu butuh bantuan apa?", "Kamu sebagai siapa?", "Kapan kamu butuh hasilnya?"];

const option =
  "group flex w-full min-h-14 flex-col items-start rounded-lg border border-rule bg-panel px-4 py-3 text-left transition-[border-color,transform] duration-[160ms] ease-out hover:-translate-y-px hover:border-accent";

export function ServiceFinder({ categories }: { categories: Category[] }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);
  const heading = useRef<HTMLHeadingElement>(null);
  const interacted = useRef(false);

  // Pindahkan fokus ke judul langkah baru agar pembaca layar dan keyboard tidak kehilangan posisi.
  // Hanya setelah pengunjung berinteraksi: jangan pernah memfokus saat komponen pertama dimuat
  // (itu menggulirkan halaman ke sini; juga terjadi dua kali di React Strict Mode saat development).
  useEffect(() => {
    if (!interacted.current) return;
    heading.current?.focus();
  }, [step]);

  const done = step >= 3;
  const goTo = (next: number) => {
    interacted.current = true;
    setStep(next);
  };
  const choose = (i: number) => {
    setAnswers((a) => a.map((v, k) => (k === step ? i : v)));
    goTo(step + 1);
  };
  const reset = () => {
    setAnswers([null, null, null]);
    goTo(0);
  };

  const category = done ? categories.find((c) => c.slug === needs[answers[0]!].slug) : undefined;
  const message = done
    ? `Saya ${audiences[answers[1]!].phrase} dan butuh bantuan di ${category?.name}. Waktu yang saya butuhkan: ${timings[answers[2]!].phrase}. Detail kebutuhan saya: `
    : "";
  const whatsapp = done
    ? buildWhatsAppLink({ number: site.whatsappNumber, categoryName: category?.name, note: message })
    : null;

  return (
    <div data-cta className="card mx-auto max-w-3xl p-5 sm:p-8">
      <div aria-hidden className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-[160ms] ${i <= step ? "bg-accent" : "bg-rule"}`} />
        ))}
      </div>

      <div aria-live="polite" key={step} className="swap">
        {!done ? (
          <>
            <p className="mt-5 text-sm font-semibold text-accent">Langkah {step + 1} dari 3</p>
            <h3 ref={heading} tabIndex={-1} className="mt-1 text-2xl outline-none sm:text-3xl">{questions[step]}</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {(step === 0 ? needs : step === 1 ? audiences : timings).map((o, i) => (
                <li key={o.label}>
                  <button type="button" onClick={() => choose(i)} className={option}>
                    <span className="font-semibold text-ink">{o.label}</span>
                    {"hint" in o && <span className="text-sm">{o.hint}</span>}
                  </button>
                </li>
              ))}
            </ul>
            {step > 0 && (
              <button type="button" onClick={() => goTo(step - 1)} className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent">
                <ArrowLeft aria-hidden className="size-4" /> Kembali
              </button>
            )}
          </>
        ) : (
          category && (
            <>
              <p className="mt-5 text-sm font-semibold text-accent">Rekomendasi untukmu</p>
              <h3 ref={heading} tabIndex={-1} className="mt-1 text-2xl outline-none sm:text-3xl">{category.name}</h3>
              <p className="mt-3 max-w-xl">{category.description}</p>

              <p className="mt-5 text-sm font-semibold text-ink">Layanan yang mungkin kamu cari</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {category.services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/layanan/${category.slug}/${s.slug}`}
                      className="inline-flex min-h-9 items-center rounded-full bg-ground-muted px-3 text-sm font-medium text-ink transition-colors duration-[160ms] hover:bg-accent hover:text-on-accent"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={contactHref({ categorySlug: category.slug, message })} className="btn btn-primary">
                  Lanjut isi kebutuhan <ArrowRight aria-hidden className="ml-2 size-4" />
                </Link>
                {whatsapp && (
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Chat lewat WhatsApp
                  </a>
                )}
                <button type="button" onClick={reset} className="btn btn-secondary">
                  <RotateCcw aria-hidden className="mr-2 size-4" /> Ulangi
                </button>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}
