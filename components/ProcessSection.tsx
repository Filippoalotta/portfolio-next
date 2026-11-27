import { Check } from 'lucide-react';

const STEPS = [
  {
    number: '1',
    title: 'Analisi & Preventivo',
    description:
      'Una call gratuita di 20 minuti (dal vivo a Palermo o online) per capire i tuoi obiettivi e definire tempi e costi certi.',
  },
  {
    number: '2',
    title: 'Design & Struttura SEO',
    description:
      'Progetto un’interfaccia chiara, elegante e pensata fin dall’inizio per convertire i visitatori e posizionarsi su Google.',
  },
  {
    number: '3',
    title: 'Sviluppo & Anteprime',
    description:
      'Costruisco il sito o il software su misura condividendo link di anteprima continui per raccogliere i tuoi feedback.',
  },
  {
    number: '4',
    title: 'Lancio & Supporto',
    description:
      'Pubblicazione, configurazione Google Search Console, controllo velocità e assistenza continua dopo la messa online.',
  },
];

const GUARANTEES = [
  'Un unico referente diretto dall’idea al lancio, senza intermediari',
  'Codice veloce e proprietario: nessun tema pesante o abbonamento inutile',
  'SEO tecnica e mobile-first incluse in ogni realizzazione',
  'Preventivo scritto, tempi chiari e supporto post-lancio dedicato',
];

export default function ProcessSection() {
  return (
    <section
      id="metodo"
      aria-labelledby="metodo-heading"
      className="scroll-mt-24 border-slate-200 border-t py-12 sm:py-16"
    >
      <div className="max-w-2xl">
        <p className="font-semibold text-sky-600 text-xs uppercase tracking-widest">
          Metodo di lavoro
        </p>
        <h2
          id="metodo-heading"
          className="mt-2 font-bold text-2xl text-slate-900 tracking-tight sm:text-3xl"
        >
          Un percorso semplice e trasparente, passo dopo passo
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 font-bold text-sky-700 text-sm">
              {step.number}
            </div>
            <h3 className="mt-4 font-bold text-base text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="font-semibold text-slate-900 text-sm">
          Perché lavorare direttamente con me
        </h3>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {GUARANTEES.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-slate-700 text-sm"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
