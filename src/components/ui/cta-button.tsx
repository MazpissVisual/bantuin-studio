import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp/link";
import { site } from "@/lib/site";

type Props = {
  label?: string;
  categoryName?: string;
  serviceName?: string;
  variant?: "primary" | "secondary";
};

// Memakai WhatsApp bila nomor resmi sudah dikonfigurasi; bila belum, arahkan ke /kontak
// (tidak pernah memakai nomor palsu, sesuai PRD bagian 7.2).
export function ConsultButton({ label = "Konsultasi Sekarang", categoryName, serviceName, variant = "primary" }: Props) {
  const className = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"}`;
  const wa = buildWhatsAppLink({ number: site.whatsappNumber, categoryName, serviceName });
  if (wa) {
    return (
      <a href={wa} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href="/kontak" className={className}>
      {label}
    </Link>
  );
}
