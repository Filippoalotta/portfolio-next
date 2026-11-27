import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Privacy & Cookie Policy — ${SITE_CONFIG.name}`,
  description:
    'Informativa sul trattamento dei dati personali e sull’utilizzo dei cookie ai sensi dell’art. 13 del Regolamento (UE) 2016/679 (GDPR).',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl py-12 text-slate-700 sm:py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="font-medium text-sky-700 text-sm hover:underline"
        >
          ← Torna alla Home
        </Link>
        <h1 className="mt-4 font-bold text-3xl text-slate-900 tracking-tight sm:text-4xl">
          Privacy &amp; Cookie Policy
        </h1>
        <p className="mt-2 text-slate-500 text-sm">
          Informativa resa ai sensi dell’art. 13 del Regolamento (UE) 2016/679
          (GDPR) — Ultimo aggiornamento: Novembre 2026
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed sm:text-base">
        <section className="space-y-2">
          <h2 className="font-bold text-slate-900 text-xl">
            1. Titolare del Trattamento
          </h2>
          <p>
            Il Titolare del trattamento dei dati personali raccolti tramite il
            sito <strong>www.filippoalotta.com</strong> è{' '}
            <strong>{SITE_CONFIG.name}</strong>, con sede operativa a Palermo
            (PA), Italia.
          </p>
          <p>
            Email di contatto per qualsiasi richiesta relativa alla privacy:{' '}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-medium text-sky-700 hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-slate-900 text-xl">
            2. Tipologia di dati raccolti
          </h2>
          <p>
            Il sito raccoglie esclusivamente i dati personali forniti
            volontariamente dall’utente tramite il modulo di contatto o tramite
            invio diretto di email:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Nome e Cognome;</li>
            <li>Indirizzo email;</li>
            <li>Eventuale nome dell’azienda o attività;</li>
            <li>
              Dettagli relativi al progetto, servizio richiesto e budget
              indicativo inseriti nel messaggio.
            </li>
          </ul>
          <p>
            Inoltre, i sistemi informatici preposti al funzionamento del sito
            acquisiscono alcuni dati tecnici di navigazione (es. indirizzo IP,
            tipo di browser, orario della richiesta) necessari all’erogazione
            sicura del servizio.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-slate-900 text-xl">
            3. Finalità e base giuridica del trattamento
          </h2>
          <p>I dati personali sono trattati esclusivamente per:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>
                Rispondere alle richieste di informazioni o preventivo
              </strong>{' '}
              inviate dall’utente (art. 6, par. 1, lett. b del GDPR — esecuzione
              di misure precontrattuali adottate su richiesta dell’interessato);
            </li>
            <li>
              <strong>
                Garantire la sicurezza e il corretto funzionamento
              </strong>{' '}
              del sito web e prevenire invii automatizzati indesiderati/spam
              (art. 6, par. 1, lett. f del GDPR — legittimo interesse del
              Titolare).
            </li>
          </ul>
          <p>
            I dati non vengono in alcun caso utilizzati per finalità di
            marketing automatizzato, profilazione o ceduti a terzi per scopi
            commerciali.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-slate-900 text-xl">
            4. Modalità del trattamento e fornitori terzi (Responsabili)
          </h2>
          <p>
            Il trattamento avviene mediante strumenti informatici con misure di
            sicurezza adeguate. Per l’erogazione tecnica del sito e la ricezione
            dei messaggi, il Titolare si avvale dei seguenti fornitori di
            servizi:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Vercel Inc.</strong> — servizio di hosting e distribuzione
              dell’infrastruttura web;
            </li>
            <li>
              <strong>Web3Forms</strong> — servizio tecnico di inoltro dei
              messaggi compilati nel modulo di contatto verso la casella email
              del Titolare;
            </li>
            <li>
              <strong>Google Workspace / Gmail</strong> — gestione della
              corrispondenza email.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-slate-900 text-xl">
            5. Periodo di conservazione dei dati
          </h2>
          <p>
            I dati inviati tramite il modulo di contatto vengono conservati per
            il tempo strettamente necessario a gestire la richiesta di
            preventivo e l’eventuale rapporto professionale successivo, e
            comunque non oltre <strong>24 mesi</strong> dall’ultimo contatto,
            salvo diversi obblighi di legge fiscali o contabili.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-slate-900 text-xl">
            6. Diritti dell’interessato
          </h2>
          <p>
            Ai sensi degli articoli 15–22 del GDPR, l’utente può in qualsiasi
            momento chiedere l’accesso ai propri dati personali, la rettifica,
            la cancellazione (diritto all’oblio), la limitazione del trattamento
            o opporsi allo stesso scrivendo a{' '}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-medium text-sky-700 hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
            . L’utente ha inoltre il diritto di proporre reclamo al Garante per
            la Protezione dei Dati Personali (www.garanteprivacy.it).
          </p>
        </section>

        <section className="space-y-2 border-slate-200 border-t pt-6">
          <h2 className="font-bold text-slate-900 text-xl">7. Cookie Policy</h2>
          <p>
            Questo sito web utilizza{' '}
            <strong>esclusivamente risorse tecniche</strong> strettamente
            necessarie alla navigazione e alla sicurezza. Non vengono utilizzati
            cookie di profilazione, cookie pubblicitari né strumenti di
            tracciamento di terze parti a fini commerciali. Pertanto, ai sensi
            delle Linee Guida del Garante Privacy, non è richiesto il consenso
            preventivo tramite banner cookie.
          </p>
        </section>
      </div>
    </main>
  );
}
