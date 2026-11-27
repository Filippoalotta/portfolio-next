import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/data/services';

export default function ServicesList() {
  return (
    <section
      id="servizi"
      aria-labelledby="servizi-heading"
      className="scroll-mt-24 py-12 sm:py-16"
    >
      <div className="max-w-2xl">
        <p className="font-semibold text-sky-600 text-xs uppercase tracking-widest">
          Servizi
        </p>
        <h2
          id="servizi-heading"
          className="mt-2 font-bold text-2xl text-slate-900 tracking-tight sm:text-3xl"
        >
          Soluzioni digitali chiare, veloci e orientate ai risultati
        </h2>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Ogni progetto è costruito su misura per la tua attività a Palermo o in
          tutta Italia: design pulito, caricamento istantaneo e struttura SEO
          pensata per farsi trovare su Google.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-200 hover:border-sky-300 hover:shadow-md"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="rounded-full bg-sky-50 px-3 py-1 font-semibold text-sky-700">
                  {service.idealFor}
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Clock className="h-3.5 w-3.5 text-emerald-600" />
                  {service.timeline}
                </span>
              </div>

              <h3 className="mt-4 font-bold text-slate-900 text-xl transition-colors group-hover:text-sky-700">
                {service.title}
              </h3>
              <p className="mt-1 font-medium text-sky-700 text-sm">
                {service.tagline}
              </p>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-slate-700 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-slate-100 border-t pt-5">
              <Link
                href={`/servizi/${service.slug}`}
                className="inline-flex items-center gap-1.5 font-semibold text-sky-700 text-sm transition-colors after:absolute after:inset-0 hover:text-sky-600"
              >
                Approfondisci
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="#contatti"
                className="relative z-10 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 font-semibold text-slate-900 text-sm transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                Richiedi preventivo
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}