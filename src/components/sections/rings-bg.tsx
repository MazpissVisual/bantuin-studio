// Cincin konsentris sebagai SVG vektor (anti-aliased, mulus di semua DPI), pengganti repeating-radial-gradient
// yang bergerigi. Letakkan sebagai anak pertama <section className="relative isolate overflow-hidden ...">.
const radii = [150, 250, 350, 450, 550, 650, 750, 850, 950, 1050];

export function RingsBackground() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1400 400"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-0 -z-10 size-full"
      style={{
        maskImage: "radial-gradient(ellipse 85% 110% at 50% 100%, #000 0%, rgb(0 0 0 / 0.5) 45%, transparent 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 85% 110% at 50% 100%, #000 0%, rgb(0 0 0 / 0.5) 45%, transparent 85%)",
      }}
    >
      <g fill="none" stroke="#fcfcfd" strokeOpacity="0.12" strokeWidth="1.25">
        {radii.map((r) => (
          <circle key={r} cx="700" cy="520" r={r} />
        ))}
      </g>
    </svg>
  );
}
