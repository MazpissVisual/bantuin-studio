import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Kebijakan Privasi" };

export default function Page() {
  return (
    <LegalPage title="Kebijakan Privasi">
      <h2>Data yang kami terima</h2>
      <p>
        Saat kamu mengisi formulir konsultasi, isinya (nama, kategori layanan, kebutuhan, dan data opsional seperti deadline, kisaran
        budget, dan link referensi) disusun menjadi pesan WhatsApp ke Bantuin Studio. Nomor WhatsApp pengirim juga
        terlihat oleh kami saat pesan masuk.
      </p>
      <h2>Yang tidak kami lakukan</h2>
      <p>
        Situs ini tidak menyimpan isian formulirmu di server atau database. Pesan baru sampai ke kami setelah kamu menekan kirim di
        WhatsApp.
      </p>
      <h2>Tujuan penggunaan</h2>
      <p>Data dipakai untuk menanggapi kebutuhanmu, memberi estimasi, dan berkomunikasi selama layanan berlangsung.</p>
      <h2>Persetujuan</h2>
      <p>Formulir hanya bisa dilanjutkan setelah kamu menyetujui kebijakan ini lewat kotak persetujuan.</p>
      <h2>Akses dan penyimpanan</h2>
      <p>
        Pesan dapat dibaca oleh pemilik Bantuin Studio dan disimpan di aplikasi WhatsApp kami selama diperlukan untuk
        menanggapi dan mengerjakan permintaanmu. WhatsApp memiliki kebijakan privasi tersendiri. Kami tidak
        menampilkan nama, nomor, dokumen, atau data pelanggan di situs ini tanpa izin.
      </p>
      <h2>Hak kamu</h2>
      <p>
        Kamu dapat meminta akses, koreksi, atau penghapusan percakapan dan data yang kamu kirim dengan menghubungi kami lewat WhatsApp {site.whatsappDisplay}.
      </p>
      <h2>Cookie dan analytics</h2>
      <p>Saat ini situs ini tidak memasang cookie pelacak maupun analytics. Jika itu berubah, halaman ini akan diperbarui.</p>
    </LegalPage>
  );
}
