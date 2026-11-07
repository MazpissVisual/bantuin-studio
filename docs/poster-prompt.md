# Panduan Prompt Poster Bantuin Studio

Dokumen ini dipakai supaya **semua poster tampil seragam** dengan situs: warna, huruf, gaya, dan cara bicaranya sama.
Cara pakai: (1) pilih jenis poster, (2) isi variabel di **Prompt Induk** (bagian 4) dengan teks dari bagian 5,
(3) tempel ke alat pembuat poster, lalu cek dengan **Checklist** (bagian 8).

---

## 1. Identitas visual (jangan diubah)

| Elemen | Nilai |
|---|---|
| Biru utama (aksen, tombol, ikon) | `#074ce0` |
| Hitam (judul, blok gelap) | `#16191f` |
| Putih tulang (latar utama) | `#fcfcfd` |
| Abu pucat (latar bagian) | `#f3f4f6` |
| Garis halus | `#dde0e6` |
| Teks isi | `#454c58` |
| Huruf judul | **Host Grotesk**, bold, rapat (tracking sempit), baris padat |
| Huruf isi | **Instrument Sans**, regular/medium |
| Logo | Huruf **B dalam gelembung percakapan** berwarna biru + tulisan "**Bantuin** Studio" |
| Berkas logo | `public/brand/` (`logo-horizontal.png`, `logo-horizontal-white.png`, `logo-stacked.png`, `logo-mark.svg`, dll.) |
| Tagline | **Dari Ide Menjadi Karya.** |

**Gaya:** bersih, lega, ramah, praktis. Dominan terang, dengan **satu blok gelap** untuk penekanan. Kartu putih bersudut
membulat sedang (sekitar 12 px) dengan garis tipis dan bayangan lembut. Pola titik halus dan satu cahaya biru lembut sebagai
dekorasi. Ikon garis sederhana (gaya Lucide): topi wisuda, palet, buku terbuka, kode.

**Biru hanya untuk hal penting** (tombol ajakan, ikon, kata kunci). Jangan menambah warna aksen lain.

---

## 2. Aturan isi (wajib dipatuhi)

**Boleh:** nama layanan, tagline, proses kerja, ajakan konsultasi, kontak resmi, tips yang benar dan bermanfaat.

**Dilarang:**
- Janji hasil: "dijamin lulus", "nilai A", "pasti diterima", atau klaim waktu yang belum pasti.
- **Angka harga** atau diskon yang belum diputuskan pemilik. Tulis "Hubungi kami" atau "Minta estimasi".
- Testimoni atau jumlah pelanggan yang dikarang. Testimoni hanya boleh asli dan berizin.
- Nama, foto, atau dokumen pelanggan tanpa izin.
- Kata atau kesan "joki", mengerjakan ujian, atau tugas yang diaku karya sendiri. Layanan akademik **hanya**:
  konsultasi, feedback, proofreading, formatting, dan bantuan teknis atas karya pelanggan sendiri.
- Maskot, foto stok generik (orang berjabat tangan, laptop di meja kayu), gradien acak, efek neon atau kaca buram.

**Suara tulisan:** ramah, santai tapi profesional, pakai "kamu". Contoh: "Ceritakan kebutuhanmu, kami bantu tentukan solusinya."

**Kontak yang boleh dicantumkan:**
- WhatsApp: **0851-6779-9904**
- Situs: *[isi alamat situs setelah online]*

---

## 3. Ukuran dan tata letak

| Pemakaian | Ukuran |
|---|---|
| Feed Instagram (potret, disarankan) | 1080 × 1350 px (4:5) |
| Feed Instagram (kotak) | 1080 × 1080 px |
| Story / Reels / Status WhatsApp | 1080 × 1920 px (9:16) |
| Cetak A4 / A3 | 2480 × 3508 px / 3508 × 4961 px (300 dpi) |

**Susunan zona dari atas ke bawah** (sisakan margin aman sekitar 6% di semua sisi):
1. **Logo** (kiri atas, ukuran kecil) dan label kategori (kanan atas, huruf kecil biru).
2. **Judul** besar, maksimal 2 baris, 3 sampai 7 kata.
3. **Subjudul** satu kalimat (maksimal 15 kata).
4. **Visual** (ikon besar atau ilustrasi geometris sederhana di dalam kartu putih).
5. **Tiga poin** berikon centang biru (isi singkat, maksimal 6 kata per poin).
6. **Tombol ajakan** biru ("Konsultasi Sekarang") dan **footer kontak** di blok gelap.

Satu poster = **satu pesan**. Kalau terasa penuh, kurangi poin, jangan kecilkan huruf.

---

## 4. Prompt Induk (salin, lalu isi variabel dalam `[ ]`)

```text
Buat poster media sosial berukuran [UKURAN, mis. 1080x1350 px] untuk "Bantuin Studio", studio kreatif dan digital
yang terjangkau di Indonesia. Tagline: "Dari Ide Menjadi Karya."

GAYA VISUAL:
Flat vector, bersih, lega, geometris, terasa ramah dan modern. Latar utama putih tulang (#fcfcfd) dengan pola titik
sangat halus dan satu cahaya radial biru lembut di sudut. Satu blok gelap (#16191f) di bagian bawah untuk ajakan dan
kontak. Kartu putih dengan sudut membulat sekitar 12 px, garis abu tipis (#dde0e6), dan bayangan lembut. Warna aksen
tunggal: biru #074ce0. Teks isi abu tua #454c58. Ikon garis sederhana bergaya Lucide. Tidak ada gradien selain cahaya
biru lembut, tidak ada neon, tidak ada efek kaca, tidak ada maskot, tidak ada foto stok.

TIPOGRAFI:
Judul: sans-serif geometris tebal (mirip Host Grotesk Bold), tracking rapat, line-height padat, warna #16191f.
Isi: sans-serif bersih (mirip Instrument Sans), warna #454c58. Semua teks dalam Bahasa Indonesia.

TATA LETAK (atas ke bawah):
1. Kiri atas: logo Bantuin Studio (huruf B putih di dalam gelembung percakapan biru #074ce0, di sebelahnya
   tulisan "Bantuin Studio" dengan "Bantuin" tebal dan "Studio" lebih ringan). Kanan atas: label kecil biru "[KATEGORI]".
2. Judul besar: "[JUDUL]"
3. Subjudul: "[SUBJUDUL]"
4. Visual utama: [VISUAL, mis. ikon palet besar berwarna biru di dalam kartu putih dengan pola titik]
5. Tiga poin dengan ikon centang biru: "[POIN 1]", "[POIN 2]", "[POIN 3]"
6. Blok gelap bawah: tombol biru bersudut membulat bertuliskan "[AJAKAN]", di bawahnya baris kontak putih:
   "WhatsApp 0851-6779-9904"

JANGAN: menambahkan teks, harga, angka, testimoni, atau klaim lain di luar yang tertulis di atas. Ejaan teks harus
persis seperti yang saya tulis. Jangan memakai foto orang atau maskot.
```

> **Catatan penting:** banyak AI gambar sering salah mengeja teks. Cara teraman: minta AI membuat **latar dan visualnya
> saja** (hapus bagian teks dari prompt), lalu pasang teks, logo (`public/brand/`), dan tombol di Canva atau Figma
> dengan huruf Host Grotesk dan Instrument Sans (gratis di Google Fonts).

---

## 5. Isi siap pakai per layanan

Salin ke variabel pada Prompt Induk.

### Academic Support
- **Kategori:** Academic Support
- **Judul:** Tulisanmu, lebih rapi.
- **Subjudul:** Proofreading, formatting, dan konsultasi untuk karyamu sendiri.
- **Visual:** ikon topi wisuda biru
- **Poin:** Cek ejaan dan tata bahasa · Format sesuai pedoman · Isi tetap karyamu
- **Ajakan:** Konsultasi Sekarang

### Creative Design
- **Kategori:** Creative Design
- **Judul:** Slide yang enak dibaca.
- **Subjudul:** PPT, poster, infografis, dan CV yang rapi dan jelas.
- **Visual:** ikon palet biru
- **Poin:** Tampilan bersih · Revisi sesuai kesepakatan · File siap pakai
- **Ajakan:** Konsultasi Sekarang

### Educational Media
- **Kategori:** Educational Media
- **Judul:** Belajar jadi lebih hidup.
- **Subjudul:** LKPD, modul ajar, dan website pembelajaran untuk guru dan calon guru.
- **Visual:** ikon buku terbuka biru
- **Poin:** LKPD digital · Modul ajar rapi · Website belajar interaktif
- **Ajakan:** Konsultasi Sekarang

### Web & Digital Development
- **Kategori:** Web & Digital
- **Judul:** Usahamu, punya rumah online.
- **Subjudul:** Landing page dan website untuk UMKM, organisasi, dan komunitas.
- **Visual:** ikon kode biru
- **Poin:** Tampil rapi di HP · Mudah diubah isinya · Siap dipublikasikan
- **Ajakan:** Konsultasi Sekarang

---

## 6. Varian jenis poster

Pakai Prompt Induk yang sama. Ganti hanya isi tata letak nomor 2 sampai 5.

| Jenis | Isi | Catatan |
|---|---|---|
| **Pengenalan layanan** | Judul + subjudul + tiga poin (bagian 5) | Poster utama, paling sering dipakai |
| **Cara kerja** | Judul "Begini cara kerjanya." + lima langkah bernomor: Konsultasi · Estimasi · Konfirmasi · Pengerjaan · Review & serah terima | Visual: garis horizontal berlingkaran biru bernomor |
| **Tips / edukasi** | Satu tips benar dan berguna (mis. cara menyiapkan brief) | Tanpa klaim hasil, boleh berupa daftar singkat |
| **Pertanyaan umum** | Satu pertanyaan FAQ + jawaban singkat | Ambil dari halaman FAQ situs agar konsisten |
| **Pengumuman** | Info nyata (jam layanan, kuota, promo) | **Hanya** jika sudah pasti. Tulis detail apa adanya |
| **Testimoni** | Kutipan pelanggan | **Hanya testimoni asli dengan izin.** Pakai inisial. Jangan dikarang |

---

## 7. Prompt negatif (tempel di kolom "negative prompt" bila ada)

```text
misspelled text, gibberish letters, stock photo, handshake, 3D mascot, cartoon character, neon glow, glassmorphism,
random gradients, multiple accent colors, cluttered layout, tiny text, watermark, price numbers, discount badge,
fake testimonial, star ratings, guarantee claims
```

---

## 8. Checklist sebelum poster dipublikasikan

- [ ] Warna hanya biru `#074ce0`, hitam `#16191f`, putih tulang, dan abu. Tidak ada warna aksen lain.
- [ ] Logo yang dipakai dari `public/brand/`, tidak digambar ulang atau diubah proporsinya.
- [ ] Ejaan semua teks sudah dibaca ulang satu per satu.
- [ ] Nomor WhatsApp **persis** sama dengan bagian 2.
- [ ] Tidak ada harga, klaim hasil, testimoni palsu, atau kata "joki".
- [ ] Layanan akademik hanya menyebut konsultasi, feedback, proofreading, formatting, bantuan teknis.
- [ ] Teks terbaca jelas saat poster dikecilkan seukuran layar HP.
- [ ] Satu poster hanya membawa satu pesan.

---

## 9. Pembaruan

Kalau warna, logo, tagline, atau kontak di situs berubah, **perbarui bagian 1 dan 2 dulu** di dokumen ini, baru buat poster
baru. Sumber kebenaran visual ada di kode situs: `src/app/globals.css` (warna dan huruf), `src/lib/site.ts` (kontak dan
tagline), dan `public/brand/` (logo).
