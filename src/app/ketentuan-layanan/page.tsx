import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Ketentuan Layanan" };

export default function Page() {
  return (
    <LegalPage title="Ketentuan Layanan">
      <h2>Ruang lingkup layanan</h2>
      <p>Layanan mencakup kategori yang tercantum di halaman Layanan. Ruang lingkup tiap pekerjaan disepakati sebelum pengerjaan dimulai.</p>
      <h2>Estimasi dan persetujuan</h2>
      <p>Estimasi bersifat indikatif sampai kamu menyetujui penawaran akhir yang kami kirim lewat WhatsApp atau email.</p>
      <h2>Pembayaran</h2>
      <p>Metode dan waktu pembayaran dijelaskan dalam penawaran dan disepakati sebelum pengerjaan dimulai.</p>
      <h2>Revisi dan perubahan brief</h2>
      <p>
        Jumlah revisi disepakati di awal dan dicantumkan dalam penawaran. Perubahan brief setelah disepakati dapat memengaruhi ruang
        lingkup, waktu, dan biaya.
      </p>
      <h2>Pembatalan dan pengembalian dana</h2>
      <p>Ketentuan pembatalan dan pengembalian dana dijelaskan dalam penawaran sebelum kamu menyetujuinya.</p>
      <h2>Batas tanggung jawab</h2>
      <p>Kami tidak menjamin hasil akademik, nilai, kelulusan, atau penerimaan tertentu.</p>
      <h2>Hak cipta dan penggunaan karya</h2>
      <p>
        Hak penggunaan hasil karya dijelaskan dalam penawaran. Karya pelanggan tidak kami tampilkan, di portfolio maupun di tempat
        lain, tanpa izin.
      </p>
      <h2>Pertanyaan</h2>
      <p>
        Hubungi kami di <a href={`mailto:${site.email}`} className="font-semibold text-ink underline">{site.email}</a> atau lewat
        WhatsApp.
      </p>
    </LegalPage>
  );
}
