import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl">Halaman tidak ditemukan</h1>
      <p className="mt-4">Alamat yang kamu tuju mungkin salah atau sudah dipindahkan.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn btn-primary">Ke Beranda</Link>
        <Link href="/layanan" className="btn btn-secondary">Lihat Layanan</Link>
      </div>
    </div>
  );
}
