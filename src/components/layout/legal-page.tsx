export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm">Terakhir diperbarui: 7 November 2026</p>
      <div className="mt-8 space-y-4 [&_h2]:mt-8 [&_h2]:text-xl [&_li]:ml-5 [&_li]:list-disc">{children}</div>
    </div>
  );
}
