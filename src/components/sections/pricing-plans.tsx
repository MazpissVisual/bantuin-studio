"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { ConsultButton } from "@/components/ui/cta-button";
import type { PricingPlan } from "@/content/pricing";

type Group = { slug: string; name: string; plans: PricingPlan[] };

const rupiah = new Intl.NumberFormat("id-ID");

export function PricingPlans({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(groups[0]?.slug);
  const group = groups.find((g) => g.slug === active) ?? groups[0];

  return (
    <section aria-labelledby="harga-judul">
      <div className="pat-field relative isolate overflow-hidden on-field bg-field px-4 pb-44 pt-16 text-center text-on-field-2">
        <p className="text-sm font-semibold text-on-field">Harga</p>
        <h1 id="harga-judul" className="mt-2 text-4xl sm:text-5xl">Pilih paket yang pas</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg">
          Harga dipengaruhi ruang lingkup dan kompleksitas. Kamu tahu estimasinya sebelum setuju.
        </p>

        <div role="group" aria-label="Pilih kategori layanan" className="mt-8 flex flex-wrap justify-center gap-2">
          {groups.map((g) => {
            const selected = g.slug === group.slug;
            return (
              <button
                key={g.slug}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(g.slug)}
                className={`btn ${selected ? "btn-primary" : "border-on-field/30 text-on-field hover:bg-on-field/10"}`}
              >
                {g.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-32 max-w-6xl px-4 pb-16">
        <ul data-cta key={group.slug} className="swap grid gap-6 lg:grid-cols-3">
          {group.plans.map((p) => (
            <li key={p.tier} className={`card flex flex-col p-6 ${p.recommended ? "!border-accent" : ""}`}>
              <div className="flex items-center justify-center gap-2">
                <span className="rounded-md border border-rule bg-ground-muted px-2.5 py-1 text-xs font-semibold text-ink">{p.name}</span>
                {p.recommended && (
                  <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-on-accent">Direkomendasikan</span>
                )}
              </div>

              <div className="mt-5 text-center">
                {p.amount !== null ? (
                  <>
                    <p className="text-sm text-ink-2">Mulai</p>
                    <p className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink">
                      Rp{rupiah.format(p.amount)}
                    </p>
                    <p className="text-sm text-ink-2">{p.unit}</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-ink-2">&nbsp;</p>
                    <p className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink">Hubungi kami</p>
                    <p className="text-sm text-ink-2">{p.tier === "CUSTOM" ? "penawaran khusus" : "estimasi sesuai kebutuhan"}</p>
                  </>
                )}
                <p className="mt-3 text-[15px]">{p.description}</p>
              </div>

              <ul className="mt-6 flex-1 space-y-3 border-t border-rule pt-6 text-[15px]">
                {p.inclusions.map((i) => (
                  <li key={i} className="flex gap-3">
                    <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span>{i}</span>
                  </li>
                ))}
                {p.exclusions.map((e) => (
                  <li key={e} className="flex gap-3 text-ink-2">
                    <X aria-hidden className="mt-0.5 size-5 shrink-0" />
                    <span><span className="sr-only">Tidak termasuk: </span>{e}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-rule pt-6 [&>a]:w-full">
                <ConsultButton
                  label={p.tier === "CUSTOM" ? "Minta Penawaran" : "Minta Estimasi"}
                  categoryName={group.name}
                  variant={p.recommended ? "primary" : "secondary"}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
