"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl">Ada yang tidak beres</h1>
      <p className="mt-4">Halaman ini gagal dimuat. Coba muat ulang, atau kembali ke beranda.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={() => reset()} className="btn btn-primary">Coba lagi</button>
        <Link href="/" className="btn btn-secondary">Ke Beranda</Link>
      </div>
    </div>
  );
}
