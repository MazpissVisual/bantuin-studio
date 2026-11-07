import { Check } from "lucide-react";

// Komitmen singkat di dekat tombol aksi. Hanya hal yang memang berlaku (PRD bagian 6 dan 12).
const items = ["Harga dijelaskan sebelum mulai", "Data dijaga", "Tanpa perlu akun"];

export function TrustRow({ onField = false, center = false }: { onField?: boolean; center?: boolean }) {
  return (
    <ul className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm ${center ? "justify-center" : ""} ${onField ? "text-on-field-2" : ""}`}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-1.5">
          <Check aria-hidden className={`size-4 shrink-0 ${onField ? "text-on-field" : "text-accent"}`} />
          {t}
        </li>
      ))}
    </ul>
  );
}
