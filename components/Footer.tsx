import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/seo';

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/filippoalotta/',
    icon: Linkedin,
    external: true,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Filippoalotta',
    icon: Github,
    external: true,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/Filippoalotta_',
    icon: Instagram,
    external: true,
  },
  {
    name: 'Email',
    href: `mailto:filippoalotta.dev@gmail.com`,
    icon: Mail,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 border-slate-200 border-t pt-10 pb-5 text-slate-600 text-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-semibold text-slate-900">{SITE_CONFIG.name}</span>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
          <p>
            Sei un’azienda o un recruiter?{' '}
            <Link
              href="/developer"
              className="font-bold text-sky-700 transition-colors hover:text-slate-900"
            >
              Clicca qui
            </Link>
          </p>

          <div className="flex items-center gap-2.5">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  title={item.name}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} {SITE_CONFIG.name} — Tutti i diritti
        riservati.
      </p>
    </footer>
  );
}
