# Bantuin Studio

Website company profile dan katalog layanan. **Situs statis**: tanpa server, database, atau admin. Formulir konsultasi
mengubah isiannya menjadi pesan WhatsApp ke Bantuin Studio.

Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Zod.

## Menjalankan
```bash
npm install
npm run dev          # http://localhost:3000
```

Perintah lain: `npm run build`, `npm start` (hasil build), `npm run typecheck`, `npm run lint`, `npm test`.

## Konfigurasi
Nilai bawaan ada di `src/lib/site.ts` (nama, tagline, nomor WhatsApp). Untuk menimpanya, salin `.env.example`
ke `.env.local`:

| Variabel | Fungsi |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Alamat asli situs. **Wajib diisi saat deploy** (dipakai sitemap dan gambar pratinjau). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor WhatsApp, format internasional tanpa `+`. |

## Mengubah konten
Semua konten ada di `src/content/`:

| File | Isi |
|---|---|
| `catalog.ts` | Kategori dan layanan (juga dipakai menu, footer, form, dan sitemap) |
| `pricing.ts` | Paket harga. Semua `amount: null` (tampil "Hubungi kami") sampai harga ditetapkan |
| `faq.ts` | Pertanyaan umum |
| `process.ts` | Langkah alur kerja |
| `testimonials.ts` | Testimoni. Contoh (`isDemo: true`) hanya tampil di development dan tidak ikut ke produksi |
| `portfolio.ts`, `features.ts` | Portfolio, disembunyikan lewat `portfolioEnabled = false` |

Halaman legal ada di `src/app/kebijakan-privasi`, `ketentuan-layanan`, dan `integritas-akademik`.

## Deploy
Semua halaman diprerender saat build. Cara termudah: Vercel, Netlify, atau Cloudflare Pages (pilih framework Next.js).
Header keamanan di `next.config.ts` aktif di hosting yang menjalankan Next.js.

## Yang masih perlu diputuskan pemilik
- Harga resmi per paket (`src/content/pricing.ts`).
- Alamat domain (`NEXT_PUBLIC_SITE_URL`).
- Media sosial resmi dan jam operasional (belum ditampilkan).
- Karya portfolio yang boleh dipamerkan, lalu nyalakan `portfolioEnabled`.
- Testimoni asli dengan izin pelanggan (ganti isi `testimonials.ts`).
- Logo sudah ada (huruf B dalam gelembung chat, berkas di `public/brand/`). Minta desainer menyempurnakan bila perlu.
