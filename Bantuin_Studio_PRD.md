# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Bantuin Studio — Website Company Profile, Service Catalog & Inquiry Platform

**Versi:** 1.0  
**Tanggal:** 2 November 2026  
**Status:** Baseline untuk implementasi  
**Pemilik produk:** Bantuin Studio  
**Target pasar:** Indonesia  
**Platform:** Responsive website (mobile-first)  
**Teknologi utama:** Node.js ecosystem

---

## 1. Ringkasan Produk

### 1.1 Latar Belakang

Bantuin Studio adalah brand layanan **Academic Support, Creative Design, Educational Media, dan Web & Digital Development**. Website berfungsi sebagai pusat informasi, katalog layanan, portfolio, referensi harga, dan kanal akuisisi pelanggan.

Website tidak boleh terlihat seperti brosur jasa yang hanya menampilkan daftar pekerjaan dan nomor WhatsApp. Pengalaman yang dituju adalah sebuah **modern friendly creative studio**: ramah, bersih, mudah dipahami, profesional, dan terjangkau.

### 1.2 Identitas Brand

| Elemen | Keputusan |
|---|---|
| Nama | Bantuin Studio |
| Tagline | Dari Ide Menjadi Karya. |
| Positioning | Affordable Academic & Digital Creative Studio |
| Brand personality | Friendly, helpful, creative, youthful |
| Target pasar | Mahasiswa, pelajar, guru/pendidik, organisasi/komunitas, UMKM, dan masyarakat umum di Indonesia |
| Bahasa utama | Bahasa Indonesia |
| Kanal konversi utama | WhatsApp dan formulir konsultasi |
| Prinsip layanan | Transparan, terjangkau, komunikatif, bertanggung jawab |

**Brand promise:** Membantu pelanggan mengembangkan kebutuhan akademik, kreatif, dan digital melalui layanan yang ramah, terencana, dan memiliki harga yang jelas.

### 1.3 Pernyataan Produk

Website Bantuin Studio adalah platform pemasaran dan pengelolaan inquiry yang memungkinkan pengunjung memahami layanan, melihat bukti kemampuan melalui portfolio, mempelajari kisaran harga dan alur kerja, lalu mengirim kebutuhan melalui WhatsApp atau formulir konsultasi. Admin dapat mengelola konten utama website dan menindaklanjuti inquiry melalui dashboard.

### 1.4 Tujuan Produk

1. Memperkenalkan Bantuin Studio sebagai studio kreatif dan digital yang terpercaya.
2. Membantu pengunjung menemukan layanan yang sesuai tanpa harus bertanya dari nol.
3. Mengubah pengunjung menjadi inquiry atau percakapan WhatsApp yang berkualitas.
4. Menampilkan portfolio aktual sebagai bukti kompetensi.
5. Menyampaikan kisaran harga, ruang lingkup, waktu pengerjaan, dan kebijakan layanan secara transparan.
6. Memudahkan admin memperbarui layanan, portfolio, FAQ, testimoni, dan informasi harga.
7. Menjaga pengalaman mobile yang cepat, mudah, dan konsisten.

### 1.5 Metrik Keberhasilan

| Metrik | Definisi / cara ukur | Target awal |
|---|---|---|
| Inquiry conversion rate | Inquiry terkirim ÷ sesi website | Baseline dikumpulkan 30 hari pertama; target awal 2–5% |
| WhatsApp click-through | Klik WhatsApp ÷ sesi website | Dipantau per halaman dan kategori |
| Form completion rate | Form terkirim ÷ form dimulai | Target awal ≥ 60% |
| Portfolio engagement | Klik detail portfolio ÷ tampilan portfolio | Baseline 30 hari pertama |
| Mobile usability | Tidak ada overflow horizontal dan CTA dapat digunakan | 100% halaman inti |
| Performance | Core Web Vitals | Diupayakan memenuhi ambang “Good” |
| Content freshness | Layanan dan portfolio diperbarui | Minimal satu review per bulan |

Target numerik adalah sasaran awal, bukan jaminan. Evaluasi ulang setelah tersedia data penggunaan nyata.

---

## 2. Ruang Lingkup Produk

### 2.1 In Scope — MVP

- Website publik responsive.
- Homepage dengan pengenalan brand dan kategori layanan.
- Halaman katalog layanan dan detail setiap layanan.
- Halaman portfolio dengan filter kategori dan halaman detail proyek.
- Halaman harga dengan harga mulai dari atau mekanisme penawaran custom.
- Halaman Tentang Kami.
- FAQ.
- Kontak dan formulir konsultasi.
- Tombol WhatsApp dengan pesan awal yang kontekstual.
- Halaman kebijakan privasi, ketentuan layanan, dan kebijakan integritas akademik.
- Dashboard admin dengan autentikasi.
- CRUD kategori dan layanan.
- CRUD portfolio dan media portfolio.
- CRUD FAQ, testimoni, dan item harga.
- Daftar inquiry dan perubahan status inquiry.
- SEO teknis dasar.
- Analytics event dasar untuk CTA dan formulir.
- Validasi input, perlindungan spam, dan keamanan dasar.

### 2.2 In Scope — Setelah MVP / Phase 2

- Kalkulator estimasi harga interaktif dengan aturan yang dapat diubah admin.
- Upload lampiran pada formulir inquiry.
- Pengelolaan kupon atau program referral.
- Email notifikasi untuk admin dan pelanggan.
- Dashboard statistik inquiry dan sumber trafik.
- Blog/artikel edukasi untuk SEO.
- Multi-admin dengan role berbeda.
- Integrasi object storage untuk file.
- Integrasi CRM atau sistem operasional eksternal.

### 2.3 Out of Scope

- Pembayaran online dan payment gateway pada MVP.
- Akun pelanggan dan pelacakan pesanan mandiri.
- Live chat real-time.
- Aplikasi mobile native.
- Marketplace yang mempertemukan banyak vendor.
- Otomatisasi pengerjaan akademik.
- Fitur yang mengerjakan ujian, tugas penilaian, skripsi, atau karya ilmiah untuk kemudian diakui sebagai karya pelanggan.
- Klaim hasil akademik, nilai, kelulusan, atau penerimaan yang dijamin.
- Publikasi portfolio atau testimoni tanpa izin dan verifikasi.

---

## 3. Target Pengguna dan Persona

### 3.1 Persona Utama

**Persona A — Mahasiswa dengan anggaran terbatas**
- Kebutuhan: desain PPT, poster, formatting, proofreading, konsultasi, dan bantuan teknis.
- Hambatan: takut biaya tidak transparan dan proses pemesanan rumit.
- Motivasi: mendapatkan solusi yang sesuai anggaran dan cepat dipahami.
- Pesan yang relevan: “Ceritakan kebutuhanmu, kami bantu hitungkan.”

**Persona B — Mahasiswa pendidikan / calon guru**
- Kebutuhan: LKPD digital, modul ajar, media Canva, kuis, game edukasi, dan website pembelajaran.
- Hambatan: tidak menguasai desain atau pengembangan web.
- Motivasi: menghasilkan media pembelajaran yang menarik dan dapat digunakan.
- Pesan yang relevan: “Ubah ide pembelajaran menjadi media interaktif.”

**Persona C — Guru dan pendidik**
- Kebutuhan: media pembelajaran, bahan presentasi, modul, website edukasi.
- Hambatan: waktu terbatas dan kebutuhan teknis yang beragam.
- Motivasi: memperoleh media yang sesuai tujuan pembelajaran.
- Pesan yang relevan: “Solusi digital untuk pengalaman belajar yang lebih menarik.”

**Persona D — Organisasi, komunitas, dan UMKM**
- Kebutuhan: website, landing page, desain promosi, presentasi, dan konten digital.
- Hambatan: belum memiliki tim kreatif atau IT internal.
- Motivasi: memperoleh dukungan kreatif dengan biaya terjangkau.
- Pesan yang relevan: “Partner kreatif untuk kebutuhan digitalmu.”

### 3.2 Prinsip Pengalaman Pengguna

- Pengunjung harus memahami layanan inti dalam 5–10 detik pertama.
- Gunakan bahasa Indonesia yang sederhana dan ramah.
- Harga, ruang lingkup, dan batas layanan harus mudah ditemukan.
- Setiap kategori layanan memiliki CTA yang relevan.
- Jangan meminta data pribadi yang tidak diperlukan.
- Pengunjung dapat menghubungi admin tanpa membuat akun.

---

## 4. Positioning, Pesan, dan Identitas Visual

### 4.1 Positioning

**Bantuin Studio adalah partner kreatif dan digital yang terjangkau bagi individu maupun organisasi yang membutuhkan dukungan akademik yang etis, desain kreatif, media pembelajaran, dan solusi website.**

### 4.2 Pesan Utama

- Tagline: **Dari Ide Menjadi Karya.**
- Headline homepage: **Punya Ide? Yuk, Kita Wujudkan!**
- Supporting copy: “Partner kreatif untuk kebutuhan akademik, desain, media pembelajaran, dan pengembangan digital dengan harga bersahabat.”
- CTA utama: **Konsultasi Sekarang**
- CTA sekunder: **Lihat Layanan**

### 4.3 Brand Voice

- Ramah, suportif, dan tidak menghakimi.
- Santai tetapi tetap profesional.
- Jelas, tidak berlebihan, dan tidak membuat klaim tanpa bukti.
- Menggunakan “kamu” untuk komunikasi konsumen bila sesuai konteks.
- Menghindari istilah yang mendorong kecurangan akademik.

Contoh:
- “Ada yang bisa kami bantu?”
- “Ceritakan kebutuhanmu, kami bantu tentukan solusinya.”
- “Budget terbatas? Kita cari pilihan yang sesuai.”
- “Lihat contoh hasil pekerjaan kami.”

### 4.4 Design System

| Token | Nilai | Peran |
|---|---|---|
| Navy | `#17324D` | Warna utama, heading, navigasi, footer |
| Cream | `#FFF7EA` | Background utama |
| Orange | `#FF9254` | CTA dan aksen |
| Sky Blue | `#83C9E8` | Aksen teknologi dan ilustrasi |
| Mint | `#B7DFC9` | Aksen edukasi dan status positif |
| Body text | `#344454` | Teks utama |
| Muted text | `#64748B` | Teks sekunder |
| Border | `#E5E7EB` | Garis pemisah |

**Proporsi visual indikatif:** Cream 40%, Navy 35%, Orange 10%, Sky Blue 10%, Mint 5%. Proporsi dapat disesuaikan berdasarkan kontras dan aksesibilitas.

**Tipografi:**
- Heading: Plus Jakarta Sans (700–800).
- Body: Inter atau Plus Jakarta Sans (400–500).
- Button/label: Plus Jakarta Sans (600).

**Logo direction:**
- Wordmark “Bantuin Studio”.
- Simbol opsional berbasis huruf B, percakapan, atau lembar karya.
- Tidak menggunakan maskot sebagai logo utama.
- Harus tersedia versi horizontal, stacked, monokrom, light/dark, dan favicon.
- Logo final harus dibuat sebagai aset SVG/PNG oleh desainer; mockup teks bukan logo produksi.

**Prinsip UI:**
- Clean layout dan ruang kosong yang cukup.
- Sudut kartu moderat, tidak semua elemen berbentuk pill.
- Ikon konsisten (Lucide atau setara).
- Ilustrasi dan foto hanya jika relevan.
- Animasi halus dan tidak mengganggu.
- Hindari gradient acak, glassmorphism berlebihan, stok visual generik, dan dekorasi yang tidak memiliki fungsi.

---

## 5. Arsitektur Informasi dan Sitemap

### 5.1 Sitemap Publik

```text
/
├── layanan/
│   ├── academic-support/
│   ├── creative-design/
│   ├── educational-media/
│   └── digital-development/
├── portfolio/
│   └── [slug-proyek]/
├── harga/
├── tentang/
├── faq/
├── kontak/
├── kebijakan-privasi/
├── ketentuan-layanan/
└── integritas-akademik/
```

### 5.2 Sitemap Admin

```text
/admin/login
/admin
├── layanan
│   ├── kategori
│   └── daftar-layanan
├── portfolio
├── harga
├── faq
├── testimoni
├── inquiry
├── pengaturan-website
└── akun-admin
```

### 5.3 Navigasi Header

- Logo Bantuin Studio.
- Home.
- Layanan (dropdown).
- Portfolio.
- Harga.
- Tentang.
- CTA “Konsultasi”.

Pada mobile, navigasi menggunakan menu drawer/hamburger dan CTA konsultasi tetap mudah ditemukan.

### 5.4 Footer

- Ringkasan brand.
- Navigasi layanan.
- Link portfolio dan harga.
- Kontak resmi dan media sosial.
- Jam operasional jika telah ditetapkan.
- Kebijakan privasi, ketentuan layanan, integritas akademik.
- Copyright dan tahun dinamis.

---

## 6. Spesifikasi Halaman Publik

### 6.1 Homepage `/`

Urutan section:

1. **Header:** logo, navigasi, CTA.
2. **Hero:** headline, deskripsi, CTA utama dan sekunder, visual pendukung.
3. **Service categories:** empat kategori layanan.
4. **Why Bantuin Studio:** harga bersahabat, komunikasi, variasi kompetensi, proses jelas, portfolio.
5. **Featured portfolio:** 3–6 proyek unggulan.
6. **How it works:** konsultasi → estimasi → konfirmasi → pengerjaan → review/serah terima.
7. **Pricing teaser:** beberapa harga mulai dari yang sudah disetujui admin.
8. **Testimonials:** ulasan asli yang telah mendapat izin.
9. **FAQ preview:** 4–6 pertanyaan umum.
10. **Final CTA:** ajakan konsultasi.
11. **Footer:** navigasi, kontak, dan legal links.

Acceptance criteria:
- Pengunjung dapat menuju kategori layanan dari hero dan service section.
- CTA WhatsApp membuka nomor resmi dengan pesan awal.
- Section portfolio hanya menampilkan proyek berstatus published.
- Harga yang belum disetujui tidak ditampilkan.
- Homepage dapat digunakan pada viewport mobile tanpa horizontal scrolling.

### 6.2 Katalog Layanan `/layanan`

Konten:
- Judul dan penjelasan singkat.
- Empat kategori utama.
- Daftar layanan dalam kategori.
- Ringkasan deliverable.
- Link menuju detail layanan.
- CTA konsultasi.

Empat kategori:
1. Academic Support.
2. Creative Design.
3. Educational Media.
4. Web & Digital Development.

### 6.3 Detail Layanan `/layanan/[slug]`

Field konten:
- Nama layanan.
- Kategori.
- Deskripsi.
- Masalah/kebutuhan yang dibantu.
- Ruang lingkup.
- Deliverable.
- Informasi yang perlu disiapkan pelanggan.
- Estimasi waktu (bila tersedia).
- Harga mulai dari atau “Hubungi untuk penawaran”.
- Portfolio terkait.
- FAQ terkait.
- CTA konsultasi dengan pesan WhatsApp yang telah terisi.

Acceptance criteria:
- Setiap layanan memiliki slug unik.
- Halaman yang tidak ditemukan menampilkan 404 yang informatif.
- CTA menyertakan nama layanan di pesan WhatsApp.
- Konten dapat dikelola admin.

### 6.4 Portfolio `/portfolio`

Fitur:
- Grid portfolio.
- Filter kategori: Academic Support, Creative Design, Educational Media, Digital Development.
- Search judul proyek (opsional MVP).
- Thumbnail, judul, kategori, ringkasan.
- Detail proyek.
- Pagination atau load more jika jumlah item banyak.

Detail proyek:
- Judul.
- Kategori.
- Deskripsi masalah dan solusi.
- Peran/jenis layanan Bantuin Studio.
- Gambar atau video preview.
- Tools yang digunakan bila relevan.
- Hasil atau dampak yang dapat dibuktikan.
- CTA layanan terkait.

Aturan:
- Portfolio demonstrasi harus diberi label “Concept Project” atau “Demo”.
- Dilarang menampilkan identitas, dokumen, atau data pelanggan tanpa izin.
- Jangan mengarang hasil, angka, atau testimoni.

### 6.5 Harga `/harga`

Konten:
- Penjelasan bahwa harga dipengaruhi ruang lingkup dan kompleksitas.
- Daftar harga mulai dari untuk layanan yang sudah ditentukan.
- Paket Basic, Standard, dan Custom bila cocok untuk layanan terkait.
- Faktor penentu harga.
- Apa yang termasuk dan tidak termasuk.
- Kebijakan revisi.
- CTA “Minta Estimasi”.

Ketentuan:
- Semua harga dapat diubah admin.
- Harga bersifat indikatif jika diberi label “mulai dari”.
- Jangan menampilkan harga nol, placeholder, atau harga yang belum disetujui.
- Untuk proyek web/media kompleks, gunakan penawaran custom.

### 6.6 Tentang `/tentang`

Konten:
- Cerita singkat Bantuin Studio.
- Visi dan misi.
- Nilai kerja: friendly, affordable, creative, responsible.
- Kompetensi utama.
- Cara kerja dan komitmen.
- CTA konsultasi.

Jangan mencantumkan klaim jumlah ahli, sertifikasi, pengalaman, atau mitra yang belum dapat diverifikasi.

### 6.7 FAQ `/faq`

FAQ minimum:
1. Bagaimana cara memesan?
2. Bagaimana menentukan harga?
3. Apakah bisa konsultasi sebelum memesan?
4. Berapa lama waktu pengerjaan?
5. Apakah tersedia revisi?
6. Bagaimana cara mengirim brief dan referensi?
7. Bagaimana file dan data pelanggan dilindungi?
8. Apa saja layanan akademik yang dapat dibantu?
9. Apakah Bantuin Studio mengerjakan ujian atau tugas untuk diakui sebagai karya pelanggan?
10. Bagaimana jika ada perubahan brief atau pembatalan?

### 6.8 Kontak `/kontak`

Konten:
- Nomor WhatsApp resmi.
- Link media sosial resmi.
- Jam operasional (jika sudah ditetapkan).
- Formulir konsultasi.
- Estimasi waktu respons (hanya jika operasional mampu memenuhinya).

Field formulir:
- Nama (wajib).
- WhatsApp (wajib).
- Email (opsional).
- Kategori layanan (wajib).
- Layanan spesifik (opsional).
- Deskripsi kebutuhan (wajib).
- Deadline (opsional).
- Budget range (opsional).
- Link referensi (opsional).
- Checkbox persetujuan kebijakan privasi (wajib).

Setelah submit:
- Validasi input.
- Simpan inquiry.
- Tampilkan konfirmasi.
- Berikan opsi lanjut ke WhatsApp.
- Cegah double-submit.

### 6.9 Halaman Legal

**Kebijakan Privasi**
- Data yang dikumpulkan.
- Tujuan pemrosesan.
- Dasar dan persetujuan yang relevan.
- Masa penyimpanan.
- Pihak yang dapat mengakses.
- Pengamanan.
- Hak pemilik data dan kanal permintaan.
- Penggunaan cookie/analytics.

**Ketentuan Layanan**
- Ruang lingkup layanan.
- Estimasi dan persetujuan penawaran.
- Pembayaran (ketika kebijakan ditetapkan).
- Revisi dan perubahan brief.
- Pembatalan/refund.
- Batas tanggung jawab.
- Hak cipta dan penggunaan portfolio.

**Kebijakan Integritas Akademik**
- Layanan akademik berfokus pada konsultasi, pembelajaran, feedback, proofreading, formatting, dan bantuan teknis.
- Tidak menyediakan pengerjaan ujian atau karya penilaian untuk diserahkan seolah-olah dibuat sendiri oleh pelanggan.
- Pelanggan bertanggung jawab atas penggunaan hasil bantuan sesuai aturan institusi.
- Bantuin Studio dapat menolak permintaan yang melanggar integritas akademik.

Konten legal harus ditinjau sebelum website diluncurkan dan disesuaikan dengan praktik bisnis yang sebenarnya.

---

## 7. Spesifikasi Fitur dan Functional Requirements

Prioritas:
- **P0:** wajib ada untuk MVP.
- **P1:** penting, dapat menyusul setelah MVP.
- **P2:** pengembangan lanjutan.

| ID | Fitur | Requirement | Prioritas |
|---|---|---|---|
| FR-001 | Responsive layout | Semua halaman mendukung mobile, tablet, desktop | P0 |
| FR-002 | Navigation | Navigasi publik dan mobile menu berfungsi | P0 |
| FR-003 | Service catalog | Menampilkan kategori dan layanan aktif | P0 |
| FR-004 | Service detail | Menampilkan detail berdasarkan slug | P0 |
| FR-005 | Portfolio listing | Menampilkan proyek published | P0 |
| FR-006 | Portfolio filter | Filter portfolio berdasarkan kategori | P0 |
| FR-007 | Portfolio detail | Menampilkan informasi dan media proyek | P0 |
| FR-008 | Pricing | Menampilkan harga yang telah disetujui | P0 |
| FR-009 | WhatsApp CTA | Membuka WhatsApp dengan pesan kontekstual | P0 |
| FR-010 | Inquiry form | Menerima dan menyimpan inquiry | P0 |
| FR-011 | Form validation | Validasi client dan server | P0 |
| FR-012 | Admin authentication | Login admin dengan session aman | P0 |
| FR-013 | Admin dashboard | Ringkasan inquiry dan konten | P0 |
| FR-014 | Service management | CRUD kategori dan layanan | P0 |
| FR-015 | Portfolio management | CRUD proyek dan media | P0 |
| FR-016 | FAQ management | CRUD FAQ dan urutan tampil | P0 |
| FR-017 | Testimonial management | CRUD dan publish/unpublish | P0 |
| FR-018 | Pricing management | CRUD item harga dan status tampil | P0 |
| FR-019 | Inquiry management | Lihat detail, filter, ubah status | P0 |
| FR-020 | SEO metadata | Title, description, canonical, OG | P0 |
| FR-021 | Sitemap/robots | Sitemap XML dan robots.txt | P0 |
| FR-022 | Analytics events | Track CTA, form start, form success | P1 |
| FR-023 | Price estimator | Estimasi berdasarkan aturan admin | P1 |
| FR-024 | Attachment upload | Upload file dengan validasi keamanan | P1 |
| FR-025 | Email notifications | Notifikasi inquiry baru | P1 |
| FR-026 | Blog | Artikel dan kategori artikel | P2 |
| FR-027 | Referral | Kode referral dan atribusi | P2 |
| FR-028 | Multi-admin roles | Role owner/editor | P2 |

### 7.1 Inquiry Status

Status minimum:
- `NEW` — inquiry baru.
- `CONTACTED` — admin sudah menghubungi.
- `QUOTED` — estimasi/penawaran sudah diberikan.
- `IN_PROGRESS` — menjadi pekerjaan aktif setelah kesepakatan di luar website.
- `COMPLETED` — layanan selesai.
- `CANCELLED` — tidak dilanjutkan.

Admin dapat menambahkan catatan internal. Catatan internal tidak boleh tampil di halaman publik.

### 7.2 WhatsApp Integration

Format link:
`https://wa.me/<NOMOR_INTERNASIONAL>?text=<URL_ENCODED_MESSAGE>`

Nomor WhatsApp harus disimpan sebagai konfigurasi, bukan hard-coded di banyak komponen.

Contoh pesan:
“Halo Bantuin Studio, saya ingin konsultasi layanan Creative Design. Kebutuhan saya: [isi kebutuhan].”

Jika nomor resmi belum ditetapkan, gunakan placeholder konfigurasi dan jangan deploy CTA produksi dengan nomor palsu.

### 7.3 Price Estimator (P1)

Input potensial:
- Kategori layanan.
- Jenis layanan.
- Jumlah halaman/slide/fitur.
- Tingkat kompleksitas.
- Deadline.
- Add-on.

Output:
- Rentang estimasi, bukan quotation final.
- Penjelasan faktor harga.
- CTA konsultasi dengan ringkasan input.

Aturan harga harus dikelola admin dan dapat dinonaktifkan. Hindari kalkulator yang menghasilkan harga palsu atau mengikat sebelum brief ditinjau.

---

## 8. Admin Dashboard

### 8.1 Tujuan

Admin dapat mengelola konten website dan memproses inquiry tanpa mengubah kode.

### 8.2 Dashboard Overview

Informasi:
- Total inquiry.
- Inquiry baru.
- Inquiry dalam proses.
- Inquiry selesai.
- Inquiry terbaru.
- Shortcut ke layanan, portfolio, dan FAQ.

### 8.3 Modul Admin

**Services**
- Buat, lihat, edit, hapus/arsip kategori.
- Buat, lihat, edit, hapus/arsip layanan.
- Atur slug, urutan, status published, harga mulai, dan CTA.

**Portfolio**
- CRUD proyek.
- Upload/atur cover dan gallery.
- Kategori, slug, deskripsi, tools, status demo/real.
- Status draft/published.
- Urutan featured.

**Pricing**
- CRUD item harga.
- Harga angka atau label “Hubungi kami”.
- Unit harga (per slide, per halaman, per proyek, dan sebagainya).
- Keterangan dan status publikasi.

**FAQ**
- CRUD pertanyaan dan jawaban.
- Kategori dan urutan.

**Testimonials**
- CRUD testimoni.
- Nama/inisial sesuai izin.
- Layanan terkait.
- Bukti izin publikasi dicatat secara internal.
- Draft/published.

**Inquiries**
- Daftar inquiry.
- Filter berdasarkan status, tanggal, kategori.
- Detail inquiry.
- Ubah status.
- Catatan internal.
- Link untuk membuka WhatsApp pelanggan.
- Export CSV hanya untuk admin berwenang (P1 jika diperlukan).

**Settings**
- Nama brand dan tagline.
- Nomor WhatsApp.
- Email dan sosial media.
- Jam operasional.
- SEO default.
- Social preview.
- Pengaturan analytics.

### 8.4 Admin Roles

MVP:
- Satu role `OWNER` dengan akses penuh.

Phase 2:
- `ADMIN`: mengelola inquiry dan konten.
- `EDITOR`: mengelola konten, tanpa pengaturan akun dan keamanan.

---

## 9. User Journey

### 9.1 Journey A — Mahasiswa mencari desain PPT

1. Pengunjung datang dari Instagram/Google.
2. Membaca hero dan memilih Creative Design.
3. Membuka detail desain PPT.
4. Melihat contoh portfolio.
5. Memeriksa harga mulai dan ketentuan.
6. Menekan CTA konsultasi.
7. WhatsApp terbuka dengan pesan terisi.
8. Admin mengklarifikasi kebutuhan dan memberi penawaran.

### 9.2 Journey B — Guru membutuhkan media pembelajaran

1. Pengunjung masuk ke homepage.
2. Memilih Educational Media.
3. Membaca layanan website pembelajaran atau LKPD.
4. Melihat portfolio demonstrasi/aktual.
5. Mengisi formulir dengan jenjang, materi, tujuan, dan kebutuhan fitur.
6. Inquiry tersimpan.
7. Admin menghubungi untuk konsultasi dan estimasi.

### 9.3 Journey C — UMKM membutuhkan website

1. Pengunjung membuka halaman Digital Development.
2. Memilih landing page atau website bisnis.
3. Membaca deliverable dan proses.
4. Mengisi brief dan budget range.
5. Admin meninjau brief dan membuat penawaran custom.

### 9.4 Journey D — Admin memproses inquiry

1. Admin login.
2. Melihat inquiry baru.
3. Membuka detail dan membaca kebutuhan.
4. Menghubungi pelanggan.
5. Mengubah status menjadi CONTACTED/QUOTED.
6. Setelah kesepakatan, status dapat menjadi IN_PROGRESS.
7. Admin memperbarui status sampai COMPLETED atau CANCELLED.

---

## 10. Data Model dan Entitas

Model konseptual berikut dapat diterjemahkan ke Prisma schema.

### 10.1 Entitas

**AdminUser**
- id
- name
- email (unique)
- passwordHash
- role
- isActive
- lastLoginAt
- createdAt
- updatedAt

**ServiceCategory**
- id
- name
- slug (unique)
- description
- icon
- sortOrder
- isPublished
- createdAt
- updatedAt

**Service**
- id
- categoryId
- name
- slug (unique)
- shortDescription
- fullDescription
- deliverables (JSON atau relasi)
- requirements (JSON atau relasi)
- startingPrice (nullable)
- priceLabel
- estimatedDuration (nullable)
- isFeatured
- isPublished
- sortOrder
- seoTitle
- seoDescription
- createdAt
- updatedAt

**PortfolioProject**
- id
- categoryId
- title
- slug (unique)
- summary
- description
- projectType (`REAL` / `CONCEPT`)
- clientPermissionConfirmed
- tools (JSON)
- coverMediaId
- isFeatured
- isPublished
- publishedAt
- seoTitle
- seoDescription
- createdAt
- updatedAt

**PortfolioMedia**
- id
- projectId
- fileUrl
- altText
- mediaType
- sortOrder
- createdAt

**PricingItem**
- id
- serviceId (nullable)
- name
- description
- amount (nullable)
- priceLabel
- unit
- inclusions (JSON)
- exclusions (JSON)
- isPublished
- sortOrder
- createdAt
- updatedAt

**FAQ**
- id
- question
- answer
- category
- sortOrder
- isPublished
- createdAt
- updatedAt

**Testimonial**
- id
- displayName
- quote
- serviceLabel
- consentRecorded
- isPublished
- createdAt
- updatedAt

**Inquiry**
- id
- inquiryCode
- name
- whatsapp
- email (nullable)
- categoryId
- serviceId (nullable)
- description
- deadline (nullable)
- budgetRange (nullable)
- referenceUrl (nullable)
- privacyConsentAt
- status
- internalNote (nullable)
- source
- createdAt
- updatedAt

**SiteSetting**
- id
- key (unique)
- value (JSON/string)
- updatedAt

**AuditLog** (recommended)
- id
- adminUserId
- action
- entityType
- entityId
- metadata
- createdAt

### 10.2 Relasi

- ServiceCategory 1—N Service.
- ServiceCategory 1—N PortfolioProject.
- Service 1—N PricingItem.
- PortfolioProject 1—N PortfolioMedia.
- Inquiry N—1 ServiceCategory.
- Inquiry N—0..1 Service.
- AdminUser 1—N AuditLog.

### 10.3 Data Rules

- Slug harus unik.
- Data published saja yang dapat diakses publik.
- Inquiry tidak boleh dapat diambil melalui endpoint publik.
- `internalNote` hanya tersedia bagi admin.
- Testimoni harus memiliki catatan persetujuan.
- Portfolio real harus memiliki konfirmasi izin publikasi.
- Data yang sudah tidak digunakan sebaiknya diarsipkan, bukan langsung dihapus jika masih dibutuhkan untuk audit.

---

## 11. Rekomendasi Arsitektur dan Teknologi

### 11.1 Stack yang Direkomendasikan

| Layer | Teknologi | Alasan |
|---|---|---|
| Runtime | Node.js LTS | Ekosistem JavaScript server |
| Framework | Next.js (React, App Router) | SEO, SSR/SSG, frontend dan server routes |
| Language | TypeScript | Type safety dan maintainability |
| Styling | Tailwind CSS | Konsistensi dan kecepatan UI |
| UI components | Komponen internal + Radix/shadcn bila diperlukan | Aksesibilitas dan konsistensi |
| Icons | Lucide | Ikon konsisten |
| Database | PostgreSQL | Data relasional |
| ORM | Prisma | Schema dan query terstruktur |
| Validation | Zod | Validasi input server/client |
| Authentication | Secure session cookie | Admin authentication |
| Password hashing | Argon2id atau bcrypt | Penyimpanan password aman |
| Deployment | Platform Node-compatible | Menjalankan aplikasi Node |
| File storage | S3-compatible object storage (P1) | Penyimpanan media dan lampiran |
| Analytics | Privacy-conscious analytics / GA4 | Mengukur konversi |

**Catatan:** Next.js berjalan di atas Node.js dan tetap memenuhi pilihan pengembangan berbasis Node.js. Jika implementasi membutuhkan pemisahan backend, API dapat dipisah ke Express/NestJS kemudian. Untuk MVP, satu aplikasi Next.js mengurangi kompleksitas deployment.

### 11.2 Arsitektur Logis

```text
Browser (Mobile / Desktop)
        |
        v
Next.js Application (Node.js)
  |-- Public Pages (SSR/SSG)
  |-- Admin Pages
  |-- Route Handlers / API
  |-- Validation & Business Logic
        |
        +------ PostgreSQL (Prisma)
        |
        +------ Object Storage (P1)
        |
        +------ WhatsApp deep link
        |
        +------ Analytics
```

### 11.3 Struktur Folder Rekomendasi

```text
bantuin-studio/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── page.tsx
│   │   │   ├── layanan/
│   │   │   ├── portfolio/
│   │   │   ├── harga/
│   │   │   ├── tentang/
│   │   │   ├── faq/
│   │   │   └── kontak/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── kebijakan-privasi/
│   │   ├── ketentuan-layanan/
│   │   └── integritas-akademik/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── forms/
│   │   └── ui/
│   ├── lib/
│   │   ├── auth/
│   │   ├── db/
│   │   ├── validation/
│   │   ├── whatsapp/
│   │   ├── seo/
│   │   └── security/
│   ├── server/
│   │   ├── services/
│   │   ├── inquiries/
│   │   └── repositories/
│   ├── types/
│   └── styles/
├── tests/
├── .env.example
├── README.md
├── package.json
└── tsconfig.json
```

Struktur ini adalah rekomendasi awal. Antigravity/developer dapat menyesuaikan selama pemisahan UI, business logic, data access, dan validasi tetap jelas.

### 11.4 API / Route Handler Minimum

| Method | Endpoint | Kegunaan | Akses |
|---|---|---|---|
| GET | `/api/services` | Daftar layanan published | Public |
| GET | `/api/services/[slug]` | Detail layanan | Public |
| GET | `/api/portfolio` | Daftar portfolio published | Public |
| GET | `/api/portfolio/[slug]` | Detail portfolio | Public |
| GET | `/api/pricing` | Harga published | Public |
| GET | `/api/faq` | FAQ published | Public |
| POST | `/api/inquiries` | Membuat inquiry | Public + rate limit |
| POST | `/api/admin/login` | Login admin | Public + rate limit |
| POST | `/api/admin/logout` | Logout admin | Admin session |
| GET | `/api/admin/inquiries` | Daftar inquiry | Admin |
| PATCH | `/api/admin/inquiries/[id]` | Update status/catatan | Admin |
| CRUD | `/api/admin/services` | Kelola layanan | Admin |
| CRUD | `/api/admin/portfolio` | Kelola portfolio | Admin |
| CRUD | `/api/admin/pricing` | Kelola harga | Admin |
| CRUD | `/api/admin/faq` | Kelola FAQ | Admin |
| CRUD | `/api/admin/testimonials` | Kelola testimoni | Admin |

Endpoint dapat memakai pola REST atau server actions sesuai arsitektur final, tetapi aturan akses dan validasi harus dipertahankan.

---

## 12. Non-Functional Requirements

### 12.1 Performance

- Halaman utama memprioritaskan konten penting.
- Gunakan image optimization dan format WebP/AVIF bila memungkinkan.
- Lazy-load gambar di bawah fold.
- Hindari library besar yang tidak diperlukan.
- Gunakan caching untuk konten publik.
- Target Core Web Vitals kategori Good berdasarkan data lapangan.
- Tidak ada layout shift besar ketika gambar/font dimuat.

### 12.2 Responsive

Minimum pengujian:
- 360 px mobile.
- 390 px mobile.
- 768 px tablet.
- 1024 px laptop kecil.
- 1440 px desktop.

Tidak boleh ada horizontal overflow pada halaman inti. Form, navigasi, kartu, dan gambar harus menyesuaikan lebar layar.

### 12.3 Accessibility

- Kontras warna teks dan background memadai.
- Semua input memiliki label.
- Tombol dapat diakses dengan keyboard.
- Focus state terlihat.
- Gambar informatif memiliki alt text.
- Heading tersusun hierarkis.
- Jangan mengandalkan warna saja untuk menyampaikan status.
- Target minimal WCAG 2.2 AA untuk komponen utama sejauh memungkinkan.

### 12.4 Security

- Semua koneksi produksi menggunakan HTTPS.
- Password admin di-hash dengan algoritma yang sesuai.
- Session cookie menggunakan `HttpOnly`, `Secure`, dan `SameSite` yang tepat.
- Rate limiting pada login dan inquiry.
- Validasi server-side untuk semua input.
- Sanitasi output untuk mencegah XSS.
- Proteksi CSRF bila memakai cookie-based mutation.
- Query database menggunakan ORM/parameterized query.
- Secret disimpan di environment variables.
- Admin route wajib memeriksa session dan role.
- Terapkan security headers.
- Jangan menyimpan password atau secret dalam repository.
- Backup database secara berkala.

### 12.5 Privacy

- Kumpulkan data seminimal mungkin.
- Jelaskan tujuan pengumpulan data pada form.
- Checkbox persetujuan kebijakan privasi wajib sebelum submit.
- Batasi akses inquiry untuk admin.
- Tetapkan masa retensi dan prosedur penghapusan.
- Jangan menampilkan nomor, nama lengkap, dokumen, atau data pelanggan tanpa izin.
- Analytics dan cookie harus dijelaskan sesuai implementasinya.

### 12.6 Reliability

- Tampilkan error state yang mudah dipahami.
- Form tidak boleh kehilangan input karena kesalahan validasi.
- Hindari double submission.
- Gunakan logging untuk error server.
- Sediakan halaman 404 dan 500.
- Sediakan prosedur backup dan restore database.

---

## 13. Security dan Penanganan Upload

Upload file termasuk P1 dan harus ditambahkan hanya jika mekanisme penyimpanan aman tersedia.

Jika diaktifkan:
- Batasi tipe file berdasarkan MIME dan ekstensi.
- Batasi ukuran file, misalnya maksimal 10 MB per file sebagai nilai awal yang dapat dikonfigurasi.
- Gunakan nama file acak, jangan memakai nama asli sebagai path.
- Simpan di object storage/private bucket, bukan folder publik yang dapat dieksekusi.
- Jangan mengizinkan HTML, SVG aktif, executable, atau file script sebagai lampiran inquiry.
- Lakukan pemeriksaan malware bila tersedia.
- Batasi jumlah file per inquiry.
- Gunakan signed URL atau akses terbatas untuk admin.
- Terapkan kebijakan penghapusan file.
- Beri tahu pelanggan agar tidak mengunggah password, data identitas sensitif, atau informasi yang tidak relevan.

Untuk MVP, pelanggan dapat mengirim link referensi yang aksesnya sudah diatur, tanpa fitur upload langsung.

---

## 14. SEO dan Analytics

### 14.1 SEO

- Unique title dan meta description setiap halaman.
- URL slug deskriptif dan konsisten.
- Canonical URL.
- Open Graph dan social preview.
- Sitemap XML otomatis.
- Robots.txt.
- Heading H1 tunggal yang jelas per halaman.
- Alt text untuk gambar.
- Internal linking antar layanan dan portfolio.
- Structured data hanya untuk informasi yang benar dan relevan.
- Hindari keyword stuffing.
- Buat halaman layanan yang benar-benar memiliki konten unik.

### 14.2 Keyword Cluster Awal

**Creative Design**
- jasa desain PPT mahasiswa
- jasa desain Canva
- jasa poster dan infografis
- jasa desain CV

**Educational Media**
- jasa media pembelajaran interaktif
- jasa pembuatan LKPD digital
- jasa website pembelajaran
- jasa modul ajar digital

**Digital Development**
- jasa pembuatan landing page
- jasa website UMKM
- jasa website organisasi
- jasa dashboard web sederhana

**Academic Support**
- jasa proofreading akademik
- jasa formatting makalah
- konsultasi analisis data
- pendampingan penulisan akademik

Keyword harus digunakan secara alami dan sesuai layanan yang benar-benar disediakan.

### 14.3 Analytics Events

Event minimum:
- `view_service_category`
- `view_service_detail`
- `view_portfolio`
- `view_portfolio_detail`
- `click_whatsapp`
- `click_pricing_cta`
- `inquiry_form_start`
- `inquiry_form_submit`
- `inquiry_form_error`

Jangan mengirim nama, nomor WhatsApp, isi brief, atau data pribadi ke analytics.

---

## 15. Acceptance Criteria MVP

Website dapat dinyatakan siap untuk soft launch jika:

### Public Website
- [ ] Homepage memuat semua section prioritas.
- [ ] Semua kategori layanan dapat dibuka.
- [ ] Detail layanan menggunakan data dinamis.
- [ ] Portfolio dapat difilter.
- [ ] Detail portfolio tampil dengan benar.
- [ ] Harga hanya menampilkan data yang telah disetujui.
- [ ] CTA WhatsApp memakai nomor resmi dan pesan kontekstual.
- [ ] Form inquiry berhasil menyimpan data.
- [ ] Form memiliki validasi client dan server.
- [ ] Halaman legal dapat diakses.
- [ ] Navigasi mobile berfungsi.
- [ ] Tidak ada horizontal overflow pada viewport uji.

### Admin
- [ ] Admin dapat login dan logout.
- [ ] Route admin terlindungi.
- [ ] Admin dapat CRUD layanan dan kategori.
- [ ] Admin dapat CRUD portfolio.
- [ ] Admin dapat mengatur harga.
- [ ] Admin dapat mengelola FAQ dan testimoni.
- [ ] Admin dapat melihat dan mengubah status inquiry.
- [ ] Konten draft tidak muncul di publik.

### Quality & Security
- [ ] Tidak ada secret di repository.
- [ ] Password tidak disimpan plaintext.
- [ ] Endpoint publik memiliki validasi dan rate limit yang sesuai.
- [ ] Error state dan 404 tersedia.
- [ ] SEO metadata dan sitemap tersedia.
- [ ] Backup database telah dikonfigurasi.
- [ ] Kebijakan privasi dan integritas akademik ditinjau.
- [ ] Nomor kontak, harga, testimoni, dan portfolio telah diverifikasi.

---

## 16. Testing Plan

### 16.1 Functional Testing
- Navigasi semua halaman.
- Filter kategori portfolio.
- Form inquiry dengan input valid dan invalid.
- CTA WhatsApp di setiap kategori.
- Login/logout admin.
- CRUD semua konten.
- Publish/unpublish konten.
- Filter dan update status inquiry.

### 16.2 Responsive Testing
- Uji viewport mobile, tablet, desktop.
- Uji menu mobile dan sticky header.
- Uji form dan tombol CTA.
- Uji gambar panjang dan teks panjang.

### 16.3 Security Testing
- Login dengan password salah.
- Akses halaman admin tanpa session.
- Input script/HTML pada form.
- Spam inquiry berulang.
- Manipulasi payload dan field yang tidak dikenal.
- Pemeriksaan hak akses endpoint.
- Pemeriksaan kebocoran data inquiry.

### 16.4 SEO/Performance Testing
- Metadata per halaman.
- Sitemap dan robots.
- Broken links.
- Image optimization.
- Lighthouse dan Core Web Vitals.
- Pemeriksaan tampilan social sharing.

---

## 17. Prioritas Implementasi dan Roadmap

### Sprint 0 — Setup
- Inisialisasi repository.
- Setup Node.js, Next.js, TypeScript.
- Setup Tailwind dan design tokens.
- Setup PostgreSQL dan Prisma.
- Setup linting, formatting, dan environment.

### Sprint 1 — Public Foundation
- Header/footer.
- Homepage.
- Service catalog.
- Detail layanan.
- Responsive layout.

### Sprint 2 — Portfolio & Conversion
- Portfolio listing/detail/filter.
- Pricing.
- WhatsApp integration.
- Inquiry form.

### Sprint 3 — Admin CMS
- Admin authentication.
- Dashboard overview.
- CRUD layanan, portfolio, pricing, FAQ, testimonial.
- Inquiry management.

### Sprint 4 — Hardening & Launch
- SEO.
- Legal pages.
- Security review.
- Responsive QA.
- Performance.
- Deployment dan backup.
- Soft launch.

Estimasi waktu ditentukan setelah kapasitas developer dan detail desain disepakati. Jangan mengorbankan pengujian demi mengejar tanggal peluncuran.

### P1 Roadmap
- Price estimator.
- Attachment upload.
- Email notification.
- Analytics dashboard.
- Blog.
- Multi-admin roles.

---

## 18. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Layanan terlalu banyak dan tidak jelas | Pengunjung bingung | Empat kategori utama dan detail layanan |
| Harga tidak transparan | Inquiry rendah | Harga mulai dari dan faktor penentu harga |
| Portfolio minim | Kepercayaan rendah | Buat concept project berlabel dan kumpulkan karya aktual |
| Klaim berlebihan | Reputasi turun | Semua klaim harus dapat dibuktikan |
| Inquiry spam | Beban admin | Rate limit, honeypot, validasi |
| Kebocoran dokumen pelanggan | Risiko privasi | Minimasi data, akses terbatas, storage privat |
| Scope creep | Proyek terlambat | Brief, deliverable, dan batas revisi tertulis |
| Harga terlalu rendah | Margin negatif | Hitung waktu, biaya, revisi, dan kompleksitas |
| Pelanggaran integritas akademik | Risiko reputasi dan etika | Kebijakan layanan akademik yang tegas |
| Ketergantungan pada WhatsApp | Data tidak terstruktur | Simpan inquiry di database dan gunakan status |

---

## 19. Asumsi dan Keputusan yang Masih Perlu Dikonfirmasi

Keputusan yang sudah ditetapkan:
- Nama brand: Bantuin Studio.
- Tagline: Dari Ide Menjadi Karya.
- Visual: modern friendly, clean, youthful.
- Logo: wordmark profesional tanpa maskot.
- Target: pasar Indonesia.
- Model bisnis: hybrid.
- Harga: ekonomis/affordable.
- Kategori: Academic Support, Creative Design, Educational Media, Digital Development.
- Teknologi: Node.js ecosystem.

Hal yang belum ditetapkan:
1. Nomor WhatsApp bisnis.
2. Email bisnis dan akun sosial media.
3. Domain dan hosting.
4. Daftar layanan final per kategori.
5. Harga awal setiap layanan.
6. Jam operasional dan SLA respons.
7. Kebijakan pembayaran, revisi, pembatalan, dan refund.
8. Portfolio aktual dan izin publikasi.
9. Apakah upload file masuk MVP atau Phase 2.
10. Apakah admin hanya satu orang pada MVP.
11. Apakah website memakai bahasa Indonesia saja pada versi pertama.
12. Apakah blog diperlukan saat peluncuran.

Gunakan placeholder konfigurasi untuk data yang belum tersedia. Jangan mengarang nomor, alamat, testimoni, harga, atau identitas pelanggan.

---

## 20. Instruksi Implementasi untuk Antigravity

Gunakan PRD ini sebagai sumber kebenaran utama selama pengembangan.

### Aturan kerja
1. Baca PRD sampai selesai sebelum membuat file atau komponen.
2. Buat implementation plan dan daftar task berdasarkan P0, P1, P2.
3. Jangan langsung membangun seluruh fitur dalam satu langkah besar.
4. Implementasikan P0 terlebih dahulu.
5. Gunakan TypeScript dan validasi server-side.
6. Pisahkan komponen UI, business logic, data access, dan schema validation.
7. Jangan hard-code nomor WhatsApp, harga, kontak, atau konten bisnis yang akan berubah.
8. Gunakan seed data yang jelas ditandai sebagai demo.
9. Jangan menampilkan portfolio/testimoni demo seolah-olah pelanggan nyata.
10. Jangan membuat fitur pengerjaan tugas akademik yang melanggar integritas akademik.
11. Setiap fitur harus memiliki loading, empty, success, dan error state yang sesuai.
12. Setelah setiap sprint, jalankan lint, typecheck, dan test yang relevan.
13. Jangan menandai fitur selesai sebelum acceptance criteria-nya terpenuhi.
14. Dokumentasikan cara setup lokal, environment variables, migration, seed, test, build, dan deployment di README.

### Definition of Done
Sebuah fitur dinyatakan selesai jika:
- UI sesuai design system.
- Responsive pada viewport target.
- Validasi dan error state tersedia.
- Hak akses benar.
- Tidak ada data rahasia terekspos.
- Lint dan typecheck lolos.
- Test terkait lolos.
- Dokumentasi diperbarui bila diperlukan.

### Deliverables yang diharapkan
- Source code aplikasi.
- Database schema dan migration.
- Seed data demo.
- `.env.example`.
- README setup dan deployment.
- Test untuk alur kritis.
- Website production build.
- Admin dashboard.
- Dokumentasi keputusan teknis.

---

## 21. Ringkasan Akhir

Bantuin Studio akan dibangun sebagai **Affordable Academic & Digital Creative Studio** dengan pengalaman website yang modern, ramah, bersih, dan berorientasi pada portfolio serta konsultasi.

MVP berfokus pada:
1. Brand website dan katalog layanan.
2. Portfolio yang dapat difilter.
3. Harga yang transparan.
4. WhatsApp dan inquiry form.
5. Admin CMS untuk mengelola konten dan inquiry.
6. SEO, responsive design, privasi, dan keamanan dasar.

Stack yang direkomendasikan adalah **Node.js LTS + Next.js + TypeScript + Tailwind CSS + PostgreSQL + Prisma**. Implementasi dilakukan bertahap dengan P0 sebagai fondasi peluncuran, kemudian P1 dan P2 mengikuti kebutuhan bisnis.

**Bantuin Studio — Dari Ide Menjadi Karya.**
