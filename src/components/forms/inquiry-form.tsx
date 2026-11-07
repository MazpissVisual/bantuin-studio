"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { pickDefaults } from "@/lib/contact";
import { site } from "@/lib/site";
import { inquirySchema } from "@/lib/validation/inquiry";
import { whatsAppUrl } from "@/lib/whatsapp/link";
import { buildInquiryMessage } from "@/lib/whatsapp/message";

type Category = { slug: string; name: string; services: { slug: string; name: string }[] };
type Sent = { whatsapp: string | null } | null;

const budgets = ["Belum tahu", "Di bawah Rp100.000", "Rp100.000 - Rp500.000", "Rp500.000 - Rp1.000.000", "Di atas Rp1.000.000"];

const field =
  "mt-1 block w-full min-h-11 rounded-lg border border-rule bg-panel px-3 py-2 text-base text-ink focus:border-ink";

// Situs ini statis (tanpa server/database). Form divalidasi di browser lalu isinya dijadikan pesan WhatsApp
// ke nomor Bantuin Studio. Tidak ada data yang disimpan di situs ini.
export function InquiryForm({ categories }: { categories: Category[] }) {
  const [categorySlug, setCategorySlug] = useState("");
  const serviceRef = useRef<HTMLSelectElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [pendingService, setPendingService] = useState<string>();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<Sent>(null);

  // Isian awal dari URL (?kategori=&layanan=&pesan=) diterapkan SETELAH halaman tampil, jadi /kontak tetap
  // statis dan cepat. Nilai divalidasi oleh pickDefaults. Ini sinkronisasi dengan sumber eksternal (URL browser)
  // yang tidak tersedia saat render di server, jadi setState di efek ini disengaja.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const d = pickDefaults(
      { kategori: sp.get("kategori") ?? undefined, layanan: sp.get("layanan") ?? undefined, pesan: sp.get("pesan") ?? undefined },
      categories,
    );
    if (d.categorySlug) setCategorySlug(d.categorySlug);
    if (d.serviceSlug) setPendingService(d.serviceSlug);
    if (d.description && descRef.current && !descRef.current.value) descRef.current.value = d.description;
  }, [categories]);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Pilihan layanan baru ada setelah kategori terpasang; pilih setelah select-nya dirender.
  useEffect(() => {
    if (pendingService && serviceRef.current) {
      serviceRef.current.value = pendingService;
      setPendingService(undefined);
    }
  }, [pendingService, categorySlug]);

  const services = categories.find((c) => c.slug === categorySlug)?.services ?? [];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = (k: string) => String(fd.get(k) ?? "");
    const parsed = inquirySchema.safeParse({
      name: text("name"),
      categorySlug: text("categorySlug"),
      serviceSlug: text("serviceSlug"),
      description: text("description"),
      deadline: text("deadline"),
      budgetRange: text("budgetRange"),
      referenceUrl: text("referenceUrl"),
      privacyConsent: fd.get("privacyConsent") === "on",
    });
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) errors[String(issue.path[0] ?? "form")] ??= issue.message;
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});

    const d = parsed.data;
    const category = categories.find((c) => c.slug === d.categorySlug);
    const service = category?.services.find((s) => s.slug === d.serviceSlug);
    const message = buildInquiryMessage({
      name: d.name,
      categoryName: category?.name ?? d.categorySlug,
      serviceName: service?.name,
      description: d.description,
      deadline: d.deadline,
      budgetRange: d.budgetRange,
      referenceUrl: d.referenceUrl,
    });
    const whatsapp = whatsAppUrl(site.whatsappNumber, message);
    setSent({ whatsapp });
    // Dipanggil langsung dari aksi kirim (gestur pengguna) agar tidak diblokir pop-up blocker.
    if (whatsapp) window.open(whatsapp, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div role="status" className="rounded-panel border border-accent bg-accent/5 p-6">
        <h2 className="text-xl">Tinggal satu langkah lagi: kirim pesannya.</h2>
        <p className="mt-2 text-sm">
          Pesanmu sudah disusun otomatis. WhatsApp seharusnya terbuka sekarang, tinggal tekan kirim. Kalau tidak terbuka, pakai tombol di bawah.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {sent.whatsapp && (
            <a href={sent.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Buka WhatsApp
            </a>
          )}
          <button type="button" onClick={() => setSent(null)} className="btn btn-secondary">
            Ubah isian
          </button>
        </div>
        <p className="mt-4 text-xs">
          Pesan hanya terkirim setelah kamu menekan kirim di WhatsApp. Situs ini tidak menyimpan isian formulirmu.
        </p>
      </div>
    );
  }

  const err = (k: string) =>
    fieldErrors[k] ? (
      <p id={`${k}-error`} className="mt-1 text-sm font-medium text-red-700">
        {fieldErrors[k]}
      </p>
    ) : null;
  const aria = (k: string) => ({ "aria-invalid": fieldErrors[k] ? true : undefined, "aria-describedby": fieldErrors[k] ? `${k}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {Object.keys(fieldErrors).length > 0 && (
        <div role="alert" className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm font-medium text-red-800">
          Periksa kembali isian yang ditandai merah.
        </div>
      )}

      <div>
        <label htmlFor="name" className="text-sm font-semibold text-ink">Nama <span aria-hidden>*</span></label>
        <input id="name" name="name" required autoComplete="name" className={field} {...aria("name")} />
        {err("name")}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="categorySlug" className="text-sm font-semibold text-ink">Kategori layanan <span aria-hidden>*</span></label>
          <select
            id="categorySlug"
            name="categorySlug"
            required
            value={categorySlug}
            onChange={(e) => setCategorySlug(e.target.value)}
            className={field}
            {...aria("categorySlug")}
          >
            <option value="">Pilih kategori</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
          {err("categorySlug")}
        </div>
        <div>
          <label htmlFor="serviceSlug" className="text-sm font-semibold text-ink">Layanan spesifik (opsional)</label>
          <select key={categorySlug} ref={serviceRef} id="serviceSlug" name="serviceSlug" disabled={!services.length} className={field}>
            <option value="">{services.length ? "Pilih layanan" : "Pilih kategori dulu"}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="text-sm font-semibold text-ink">Ceritakan kebutuhanmu <span aria-hidden>*</span></label>
        <textarea ref={descRef} id="description" name="description" required rows={5} className={field} {...aria("description")} />
        {err("description")}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="deadline" className="text-sm font-semibold text-ink">Deadline (opsional)</label>
          <input id="deadline" name="deadline" type="date" className={field} />
        </div>
        <div>
          <label htmlFor="budgetRange" className="text-sm font-semibold text-ink">Kisaran budget (opsional)</label>
          <select id="budgetRange" name="budgetRange" className={field}>
            <option value="">Pilih kisaran</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="referenceUrl" className="text-sm font-semibold text-ink">Link referensi (opsional)</label>
        <input id="referenceUrl" name="referenceUrl" type="url" placeholder="https://" className={field} {...aria("referenceUrl")} />
        <p className="mt-1 text-xs text-ink-2">Pastikan akses link sudah dibuka. Jangan sertakan password atau data sensitif.</p>
        {err("referenceUrl")}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="privacyConsent" className="mt-0.5 size-5 shrink-0" {...aria("privacyConsent")} />
          <span>
            Saya menyetujui <Link href="/kebijakan-privasi" className="font-semibold text-ink underline">Kebijakan Privasi</Link>.
            Isian ini dikirim ke kami lewat WhatsApp. <span aria-hidden>*</span>
          </span>
        </label>
        {err("privacyConsent")}
      </div>

      <button type="submit" className="btn btn-primary">
        Lanjut ke WhatsApp
      </button>
    </form>
  );
}
