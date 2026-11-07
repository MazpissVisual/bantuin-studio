import { processSteps } from "@/content/process";

// Opsi B: ilustrasi contoh alur konsultasi. Teks pesan mengikuti contoh di PRD bagian 7.2 dan
// suara brand di bagian 4.3. Ini ilustrasi, BUKAN percakapan pelanggan sungguhan (dijelaskan di keterangan).
export function HeroChat() {
  return (
    <figure className="mx-auto w-full max-w-md">
      <div className="card overflow-hidden">
        <div className="flex items-center gap-3 border-b border-rule bg-ground-muted px-4 py-3">
          <span aria-hidden className="flex size-9 items-center justify-center rounded-lg bg-accent font-[family-name:var(--font-display)] text-lg font-bold text-on-accent">
            B
          </span>
          <div className="leading-tight">
            <p className="font-[family-name:var(--font-display)] font-bold text-ink">Bantuin Studio</p>
            <p className="text-xs">Contoh alur konsultasi</p>
          </div>
        </div>

        <div className="space-y-3 p-4">
          <p className="rise ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-accent px-4 py-2.5 text-[15px] text-on-accent" style={{ ["--i" as string]: 2 }}>
            Halo Bantuin Studio, saya ingin konsultasi layanan Creative Design. Kebutuhan saya: desain PPT untuk seminar.
          </p>
          <p className="rise max-w-[85%] rounded-2xl rounded-bl-md bg-ground-muted px-4 py-2.5 text-[15px] text-ink" style={{ ["--i" as string]: 4 }}>
            Halo! Ceritakan kebutuhanmu, kami bantu tentukan solusinya.
          </p>
          <p className="rise max-w-[85%] rounded-2xl rounded-bl-md bg-ground-muted px-4 py-2.5 text-[15px] text-ink" style={{ ["--i" as string]: 6 }}>
            Estimasi kami kirim sebelum pengerjaan dimulai.
          </p>
          <div aria-hidden className="rise flex w-16 items-center justify-center gap-1 rounded-2xl rounded-bl-md bg-ground-muted py-3" style={{ ["--i" as string]: 8 }}>
            {[0, 1, 2].map((d) => (
              <span key={d} className="typing-dot size-1.5 rounded-full bg-ink-2" style={{ ["--d" as string]: d }} />
            ))}
          </div>
        </div>

        <div className="border-t border-rule px-4 py-4">
          <ol aria-label="Alur layanan" className="flex items-center">
            {processSteps.map((s, i) => (
              <li key={s} className="flex flex-1 items-center last:flex-none" aria-current={i === 0 ? "step" : undefined}>
                <span
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    i === 0 ? "bg-accent text-on-accent" : "border border-rule bg-panel text-ink-2"
                  }`}
                >
                  {i + 1}
                  <span className="sr-only"> {s}</span>
                </span>
                {i < processSteps.length - 1 && <span aria-hidden className="mx-1 h-px flex-1 bg-rule" />}
              </li>
            ))}
          </ol>
          <p className="mt-3 text-sm">
            Langkah 1 dari {processSteps.length}: <span className="font-semibold text-ink">{processSteps[0]}</span>
          </p>
        </div>
      </div>
    </figure>
  );
}
