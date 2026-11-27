import Link from 'next/link';
import { services } from '@/lib/data/services';
import { SITE_CONFIG } from '@/lib/seo';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 border-slate-200 border-t py-10 text-slate-600 text-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-semibold text-slate-900">{SITE_CONFIG.name}</span>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
          {/* <Link href="/" className="transition-colors hover:text-slate-900">
            Home
          </Link>
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/servizi/${service.slug}`}
              className="transition-colors hover:text-slate-900"
            >
              {service.shortTitle}
            </Link>
          ))} */}
          <Link
            href="/developer"
            className="transition-colors hover:text-slate-900"
          >
            Versione Developer
          </Link>
        </div>
      </div>

      <p className="text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} {SITE_CONFIG.name} — Tutti i diritti
        riservati.
      </p>
    </footer>
  );
}
