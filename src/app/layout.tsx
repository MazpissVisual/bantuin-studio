import type { Metadata } from "next";
import { Host_Grotesk, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingConsult } from "@/components/layout/floating-consult";
import { site } from "@/lib/site";

const host = Host_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-host",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} - ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, locale: "id_ID", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`${host.variable} ${instrument.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#konten" className="skip-link">Lewati ke konten</a>
        <div aria-hidden className="scroll-progress" />
        <Header />
        <main id="konten" className="flex-1">{children}</main>
        <Footer />
        <FloatingConsult />
      </body>
    </html>
  );
}
