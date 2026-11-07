// Template dipasang ulang di tiap pindah halaman, jadi transisi fade singkat berjalan otomatis.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
