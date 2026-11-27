'use client';

import { Check, Copy, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { services } from '@/lib/data/services';
import { SITE_CONFIG } from '@/lib/seo';

const BUDGET_OPTIONS = [
  'Da definire insieme',
  'Sotto 1.000€',
  '1.000€ – 2.500€',
  '2.500€ – 5.000€',
  'Oltre 5.000€',
];

export default function ContactSection({
  defaultService = services[0]?.title ?? 'Siti Web Professionali & Aziendali',
}: {
  defaultService?: string;
}) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(defaultService);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Preventivo] ${service} — ${name || 'Nuovo Cliente'}`;
    const bodyLines = [
      `Nome: ${name || '-'}`,
      `Azienda / Attività: ${company || '-'}`,
      `Servizio richiesto: ${service}`,
      `Budget indicativo: ${budget}`,
      '',
      'Descrizione del progetto:',
      message || 'Vorrei ricevere maggiori informazioni e un preventivo.',
    ];
    const mailtoUrl = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${SITE_CONFIG.email}`;
    }
  };

  return (
    <section
      id="contatti"
      aria-labelledby="contatti-heading"
      className="scroll-mt-24 border-slate-200 border-t py-12 sm:py-16"
    >
      <div className="grid grid-cols-1 gap-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10 lg:grid-cols-12">
        {/* Left Info */}
        <div className="flex flex-col justify-between gap-6 lg:col-span-5">
          <div>
            <p className="font-semibold text-sky-600 text-xs uppercase tracking-widest">
              Contatti
            </p>
            <h2
              id="contatti-heading"
              className="mt-2 font-bold text-2xl text-slate-900 tracking-tight sm:text-3xl"
            >
              Parliamo del tuo progetto
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed sm:text-base">
              Scrivimi due righe su ciò che vuoi realizzare: ti rispondo entro
              24 ore con un’idea concreta, tempi realistici e un preventivo
              gratuito senza impegno.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2.5 text-slate-700">
              <MapPin className="h-4 w-4 shrink-0 text-sky-600" />
              <span>Palermo, Sicilia — Incontri in sede o videochiamata</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 font-medium text-sky-700 hover:underline"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.email}
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-slate-700 text-xs transition-colors hover:border-slate-300 hover:text-slate-900"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    Copiata
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copia email
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7"
        >
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-slate-700 text-xs">
              Nome e Cognome *
            </span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mario Rossi"
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-colors focus:border-sky-500"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-slate-700 text-xs">
              Azienda / Attività (opzionale)
            </span>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Nome attività a Palermo"
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-colors focus:border-sky-500"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-slate-700 text-xs">
              Di cosa hai bisogno?
            </span>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-colors focus:border-sky-500"
            >
              {services.map((srv) => (
                <option key={srv.id} value={srv.title}>
                  {srv.title}
                </option>
              ))}
              <option value="Consulenza SEO / Restyling Sito">
                Restyling Sito
              </option>
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-slate-700 text-xs">
              Budget indicativo
            </span>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-colors focus:border-sky-500"
            >
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
            <span className="font-medium text-slate-700 text-xs">
              Raccontami il tuo progetto *
            </span>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Es. Vorrei creare un sito web o un e-commerce per la mia attività a Palermo per ricevere più richieste da Google..."
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-colors focus:border-sky-500"
            />
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-sm text-white transition-colors hover:bg-sky-700"
            >
              <Send className="h-4 w-4" />
              Invia richiesta via email
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
