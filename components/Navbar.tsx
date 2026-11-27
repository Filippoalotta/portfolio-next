'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG } from '@/lib/seo';

const NAV_ITEMS = [
  { href: '/#servizi', label: 'Servizi' },
  { href: '/#progetti', label: 'Progetti' },
  { href: '/#metodo', label: 'Metodo' },
  { href: '/#esperienze', label: 'Percorso' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-slate-200/80 border-b bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1160px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-base text-slate-900 tracking-tight"
        >
          <span>{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Links */}
        <nav
          aria-label="Navigazione principale"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-slate-600 text-sm transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contatti"
            className="hidden items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-sm text-white transition-colors hover:bg-sky-700 sm:inline-flex"
          >
            Richiedi Preventivo
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-slate-200 border-t bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-1.5 font-medium text-slate-700 text-sm transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contatti"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 font-semibold text-sm text-white"
            >
              Richiedi Preventivo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
