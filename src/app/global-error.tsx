"use client";

// Dipakai bila layout utama sendiri gagal, jadi harus memuat <html> dan <body> sendiri (tanpa Tailwind/font situs).
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="id">
      <body style={{ fontFamily: "system-ui, sans-serif", textAlign: "center", padding: "6rem 1rem", color: "#16191f" }}>
        <h1 style={{ fontSize: "2rem" }}>Ada yang tidak beres</h1>
        <p>Situs gagal dimuat. Coba muat ulang halaman.</p>
        <button
          type="button"
          onClick={() => reset()}
          style={{ marginTop: "1.5rem", padding: "0.75rem 1.25rem", borderRadius: 8, border: 0, background: "#074ce0", color: "#fff", fontWeight: 600 }}
        >
          Coba lagi
        </button>
      </body>
    </html>
  );
}
