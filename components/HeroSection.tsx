import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/seo';

const HIGHLIGHTS = [
  { value: '4+ Anni', label: 'Esperienza su siti e software reali' },
  { value: 'SEO-First', label: 'Progettati per posizionarsi su Google' },
  { value: 'Palermo', label: 'In sede in Sicilia e remoto in Italia e all\'estero' },
];

export default function HeroSection() {
  return (
    <section
      aria-label="Presentazione"
      className="pt-10 pb-14 sm:pt-16 sm:pb-20"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Copy & CTAs */}
        <div className="flex flex-col items-start lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 font-medium text-emerald-700 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 text-center" />
            Disponibile per nuovi progetti freelance
          </div>

          <h1 className="mt-5 font-bold text-3xl text-slate-900 leading-[1.15] tracking-tight sm:text-5xl">
            Siti web, e-commerce e software su misura per far crescere la tua
            attività
          </h1>

          <p className="mt-5 max-w-2xl text-base text-slate-600 leading-relaxed sm:text-lg">
            Ciao, sono{' '}
            <strong className="text-slate-900">Filippo Alotta</strong>, sviluppo
            <strong className="text-slate-900">siti web veloci, e-commerce e software</strong> su misura a
            Palermo. Aiuto aziende e professionisti a farsi trovare su Google e
            ad acquisire nuovi clienti, con tecnologie moderne, zero template
            pesanti e preventivi trasparenti.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Link
              href="#contatti"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-sm text-white shadow-sm transition-all hover:bg-sky-700"
            >
              Richiedi un preventivo gratuito
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#progetti"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 text-sm transition-colors hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
            >
              Vedi i progetti realizzati
            </Link>
          </div>

          {/* <div className="mt-6 flex flex-wrap items-center gap-6">
            <IconsLinkSection />
            <span className="hidden h-4 w-px bg-slate-200 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5 text-slate-500 text-xs">
              <MapPin className="h-3.5 w-3.5 text-sky-600" />
              Palermo · Incontri dal vivo o da remoto
            </span>
          </div> */}
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative w-full max-w-[360px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-slate-900/10 shadow-xl">
              <Image
                src={SITE_CONFIG.profileImage}
                alt="Filippo Alotta - Sviluppatore Web, E-Commerce e Software Freelance a Palermo"
                fill
                priority
                sizes="(max-width: 1024px) 360px, 380px"
                className="object-cover object-[50%_18%]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-xl border border-white/60 bg-white/95 px-4 py-2.5 shadow-sm backdrop-blur-md">
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    Filippo Alotta
                  </div>
                  <div className="text-slate-600 text-xs">
                    Software Engineer & Freelance Developer
                  </div>
                </div>
                <span className="rounded-full bg-sky-50 px-2.5 py-1 font-semibold text-sky-700 text-xs">
                  Palermo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Trust Strip */}
      <div className="mt-12 grid grid-cols-1 gap-4 border-slate-200 border-t pt-8 sm:grid-cols-3">
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.value}
            className="rounded-xl border border-slate-200 bg-slate-50/80 px-5 py-4"
          >
            <div className="font-bold text-lg text-slate-900">{item.value}</div>
            <div className="mt-0.5 text-slate-600 text-sm">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
