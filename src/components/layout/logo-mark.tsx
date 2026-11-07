// Simbol logo: huruf B di dalam gelembung percakapan. Digambar murni dengan path (tidak bergantung font),
// jadi tajam di ukuran berapa pun. Versi berkas ada di public/brand/.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className={className} fill="none">
      <path
        d="M18 4H46A14 14 0 0 1 60 18V38A14 14 0 0 1 46 52H30L18 62V52A14 14 0 0 1 4 38V18A14 14 0 0 1 18 4Z"
        fill="currentColor"
      />
      <path
        d="M23 15V41M23 15H33A6.5 6.5 0 0 1 33 28H23M23 28H35A6.5 6.5 0 0 1 35 41H23"
        stroke="#fff"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
