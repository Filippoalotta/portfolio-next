import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 text-description text-sm">
      <p>Copyright ©2026 Filippo Alotta Portfolio. All Rights Reserved.</p>
      <Link
        href="/"
        className="font-mono text-cyan-400 text-xs transition-colors hover:text-cyan-300"
      >
        Freelance &amp; Web Services →
      </Link>
    </div>
  );
}
