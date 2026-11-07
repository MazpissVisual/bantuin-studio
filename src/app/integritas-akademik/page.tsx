import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = { title: "Kebijakan Integritas Akademik" };

export default function Page() {
  return (
    <LegalPage title="Kebijakan Integritas Akademik">
      <p>Bantuin Studio mendukung belajar dan karya yang jujur.</p>
      <h2>Yang kami bantu</h2>
      <ul>
        <li>Konsultasi dan diskusi</li>
        <li>Feedback atas karyamu</li>
        <li>Proofreading dan formatting</li>
        <li>Bantuan teknis</li>
      </ul>
      <h2>Yang tidak kami lakukan</h2>
      <p>Kami tidak mengerjakan ujian atau karya penilaian untuk diserahkan seolah-olah dibuat sendiri oleh pelanggan.</p>
      <h2>Tanggung jawab pelanggan</h2>
      <p>Pelanggan bertanggung jawab menggunakan hasil bantuan sesuai aturan institusinya.</p>
      <h2>Hak menolak</h2>
      <p>Kami dapat menolak permintaan yang melanggar integritas akademik.</p>
    </LegalPage>
  );
}
