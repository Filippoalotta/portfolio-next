import type { ServicePackage } from '../types/service-type';

export const services: ServicePackage[] = [
  {
    id: '1',
    slug: 'siti-web-palermo',
    code: 'SRV-01',
    title: 'Siti Web Vetrina e Aziendali',
    shortTitle: 'Siti Web a Palermo',
    tagline: 'Velocità estrema, design su misura e posizionamento Google',
    description:
      'Progetto e sviluppo siti web moderni per aziende, studi professionali e attività locali a Palermo. Niente template lenti: codice ottimizzato per apparire su Google e trasformare le visite in richieste di contatto.',
    idealFor: 'Aziende, professionisti, B2B e attività locali',
    deliverables: [
      'Design responsive mobile-first su misura',
      'SEO tecnica on-page, Schema.org e sitemap',
      'Caricamento istantaneo su smartphone e desktop',
      'Moduli contatto, mappa e tracciamento conversioni',
    ],
    timeline: '7 – 14 giorni lavorativi',
    seoTitle:
      'Realizzazione Siti Web a Palermo | Sviluppo Web Veloce & SEO-First',
    seoDescription:
      'Cerchi chi realizza siti web a Palermo? Sviluppo siti aziendali e vetrina veloci, responsive e ottimizzati SEO per farti trovare dai clienti su Google. Richiedi preventivo.',
    keywords: [
      'realizzazione siti web Palermo',
      'creazione siti web Palermo',
      'siti web professionali Palermo',
      'sviluppatore siti web Palermo',
      'sito aziendale Palermo SEO',
    ],
    heroHeadline: 'Realizzazione Siti Web Professionali a Palermo',
    heroSubheadline:
      'Siti aziendali e vetrina sviluppati da zero in Next.js e React: caricamento istantaneo, grafica curata e architettura SEO pensata per portare clienti reali.',
    benefits: [
      {
        title: 'Posizionamento SEO Locale e Nazionale',
        detail:
          'Struttura semantica pulita, metadati mirati su Palermo e Italia, dati strutturati JSON-LD e performance elevate per scalare i risultati di Google.',
      },
      {
        title: 'Zero Template Lenti o Fragili',
        detail:
          'Ogni sito è scritto su misura senza plugin pesanti che rallentano la navigazione o espongono l’azienda a rischi di sicurezza.',
      },
      {
        title: 'Orientato alla Generazione di Contatti',
        detail:
          'Percorsi chiari, inviti all’azione strategici e integrazione immediata con email, WhatsApp o CRM aziendale.',
      },
    ],
    faqs: [
      {
        id: 'sw-1',
        question: 'Quanto tempo serve per realizzare un sito web a Palermo?',
        answer:
          'Un sito vetrina o aziendale completo richiede in media dai 7 ai 14 giorni lavorativi dalla raccolta dei materiali, con anteprime condivise passo dopo passo.',
      },
      {
        id: 'sw-2',
        question: 'Il sito è già pronto per posizionarsi su Google?',
        answer:
          'Sì. Ogni progetto include SEO tecnica nativa: titoli e gerarchie H1/H2/H3, meta tag, OpenGraph, sitemap XML, robots.txt, velocità ottimizzata e markup Schema.org.',
      },
    ],
  },
  {
    id: '2',
    slug: 'landing-page-palermo',
    code: 'SRV-02',
    title: 'Landing Page',
    shortTitle: 'Landing Page a Palermo',
    tagline: 'Progettate per trasformare traffico Ads e organico in lead',
    description:
      'Creo landing page mirate per lanci di prodotto, servizi professionali e campagne Google o Meta Ads. Struttura persuasiva, copy chiaro, test A/B e tempi di caricamento sotto il secondo per massimizzare il ROI.',
    idealFor: 'Campagne Google/Meta Ads, lanci servizi, studi e startup',
    deliverables: [
      'Architettura persuasiva orientata al lead',
      'Caricamento istantaneo per abbassare il CPC',
      'Contatto rapido su WhatsApp e moduli preventivo diretti',
      'Ottimizzazione mobile-first per traffico social',
    ],
    timeline: '4 – 7 giorni lavorativi',
    seoTitle:
      'Realizzazione Landing Page a Palermo | Pagine ad Alta Conversione',
    seoDescription:
      'Sviluppo landing page veloci e persuasive a Palermo per campagne Google Ads e Meta Ads. Aumenta contatti e preventivi con codice su misura ad alte prestazioni.',
    keywords: [
      'landing page Palermo',
      'creazione landing page Palermo',
      'landing page alta conversione',
      'pagina vendita servizio Palermo',
    ],
    heroHeadline: 'Landing Page ad Alta Conversione a Palermo',
    heroSubheadline:
      'Trasforma i clic delle tue campagne pubblicitarie in contatti qualificati grazie a pagine ultra-veloci progettate intorno a un unico obiettivo commerciale.',
    benefits: [
      {
        title: 'Velocità che Riduce i Costi Pubblicitari',
        detail:
          'Pagine leggere con punteggi Lighthouse eccellenti migliorano il Quality Score delle campagne Google Ads e riducono l’abbandono da smartphone.',
      },
      {
        title: 'Design e Gerarchia Visiva per Vendere',
        detail:
          'Hero ad impatto, prova sociale, gestione obiezioni e CTA sempre accessibili per accompagnare l’utente fino all’invio della richiesta.',
      },
      {
        title: 'Tracciamento Preciso delle Conversioni',
        detail:
          'Configurazione pulita di eventi e moduli contatto per misurare esattamente quanti preventivi genera ogni euro investito.',
      },
    ],
    faqs: [
      {
        id: 'lp-1',
        question:
          'Qual è la differenza tra un sito completo e una landing page?',
        answer:
          'La landing page ha un unico focus commerciale (es. prenotare una consulenza o vendere un servizio specifico), eliminando distrazioni per massimizzare il tasso di conversione.',
      },
      {
        id: 'lp-2',
        question: 'Puoi collegare la landing page alle mie campagne Ads?',
        answer:
          'Certamente: integro moduli personalizzati, link diretti WhatsApp/email e tracciamenti Google Analytics 4 o Meta Pixel.',
      },
    ],
  },
  {
    id: '3',
    slug: 'ecommerce-palermo',
    code: 'SRV-03',
    title: 'E-Commerce',
    shortTitle: 'E-Commerce a Palermo',
    tagline: 'Cataloghi veloci, checkout fluido e pagamenti sicuri',
    description:
      'Realizzo store online veloci, sicuri e facili da gestire per vendere prodotti fisici o digitali in tutta Italia. Schede prodotto ottimizzate SEO, checkout rapido su mobile e integrazioni Stripe, PayPal e spedizioni.',
    idealFor: 'Brand, negozi fisici a Palermo e attività retail',
    deliverables: [
      'Catalogo prodotti con filtri rapidi e varianti',
      'Pagamenti sicuri (Stripe, carte, Apple/Google Pay, PayPal)',
      'SEO e-commerce su categorie e schede prodotto',
      'Pannello gestione ordini, stock e notifiche',
    ],
    timeline: '2 – 4 settimane',
    seoTitle: 'Realizzazione E-Commerce a Palermo | Negozi Online Veloci & SEO',
    seoDescription:
      'Vuoi aprire o rinnovare un e-commerce a Palermo? Sviluppo negozi online veloci, sicuri e ottimizzati per vendere su Google con Stripe, PayPal e gestione semplice.',
    keywords: [
      'realizzazione ecommerce Palermo',
      'creazione ecommerce Palermo',
      'sviluppo negozi online Palermo',
      'sito vendita online Palermo',
      'sviluppatore ecommerce Sicilia',
    ],
    heroHeadline: 'Sviluppo E-Commerce Professionali a Palermo',
    heroSubheadline:
      'Porta la tua attività locale a vendere online 24/7 con uno store rapido, ottimizzato per smartphone e strutturato per posizionare i tuoi prodotti su Google.',
    benefits: [
      {
        title: 'Esperienza d’Acquisto Senza Attriti',
        detail:
          'Carrello immediato, checkout snello su smartphone e caricamento rapido delle immagini prodotto per ridurre i carrelli abbandonati.',
      },
      {
        title: 'Schede Prodotto Ottimizzate per Google',
        detail:
          'URL parlanti, dati strutturati Product, meta description dinamiche e performance elevate per intercettare ricerche d’acquisto organiche.',
      },
      {
        title: 'Pagamenti e Logistica Integrati',
        detail:
          'Supporto completo a carte di credito, wallet digitali, bonifici, regole di spedizione e conferme d’ordine automatiche.',
      },
    ],
    faqs: [
      {
        id: 'ec-1',
        question: 'Posso gestire in autonomia prodotti, prezzi e ordini?',
        answer:
          'Sì, consegno un’area amministrativa intuitiva o un CMS collegato per aggiornare catalogo, disponibilità, sconti e stato degli ordini senza dipendere da nessuno.',
      },
      {
        id: 'ec-2',
        question: 'Che metodi di pagamento vengono supportati?',
        answer:
          'Integro i principali gateway sicuri tra cui Stripe (carte, Apple Pay, Google Pay), PayPal e pagamenti alla consegna o bonifico.',
      },
    ],
  },
  {
    id: '4',
    slug: 'software-su-misura-palermo',
    code: 'SRV-04',
    title: 'Software & Gestionali',
    shortTitle: 'Software Su Misura Palermo',
    tagline: 'Automazioni, dashboard aziendali e portali clienti scalabili',
    description:
      'Sviluppo applicazioni web su misura, CRM interni, portali clienti/admin e software gestionali per digitalizzare processi aziendali complessi — come già realizzato per realtà B2B, startup e aziende di servizi.',
    idealFor: 'PMI, startup, studi associati e imprese con flussi specifici',
    deliverables: [
      'Dashboard operative, ruoli utente e permessi',
      'Database PostgreSQL / Supabase / Firebase sicuri',
      'Automazione processi, report PDF e API esterne',
      'Integrazioni AI (LLM / Ollama / automazioni intelligenti)',
    ],
    timeline: '3 – 6 settimane (a sprint)',
    seoTitle:
      'Sviluppo Software Su Misura a Palermo | Web App & Gestionali Aziendali',
    seoDescription:
      'Sviluppatore software freelance a Palermo: realizzo gestionali web, portali clienti, dashboard B2B e automazioni su misura in Next.js, TypeScript e PostgreSQL.',
    keywords: [
      'sviluppo software su misura Palermo',
      'realizzazione gestionali Palermo',
      'sviluppatore web app Palermo',
      'software aziendale personalizzato Palermo',
      'sviluppatore React Next.js Palermo',
    ],
    heroHeadline: 'Sviluppo Software Web & Gestionali Su Misura a Palermo',
    heroSubheadline:
      'Elimina fogli Excel sparsi e processi manuali: progetto piattaforme web su misura per gestire clienti, operatori, commesse e dati aziendali in un unico posto.',
    benefits: [
      {
        title: 'Costruito Esattamente sul Tuo Flusso di Lavoro',
        detail:
          'A differenza dei software standard pieni di funzioni inutili, ogni schermata nasce dalle esigenze reali del tuo team e dei tuoi clienti.',
      },
      {
        title: 'Architettura Affidabile e Sicura',
        detail:
          'Sviluppo full-stack in TypeScript, Next.js, Node.js e PostgreSQL con autenticazione sicura, backup automatici e codice manutenibile.',
      },
      {
        title: 'Esperienza su Piattaforme Reali in Produzione',
        detail:
          'Ho già sviluppato gestionali per aziende di servizi, portali B2B con aree clienti/admin e prodotti SaaS per startup.',
      },
    ],
    faqs: [
      {
        id: 'swm-1',
        question:
          'Quando conviene sviluppare un software gestionale su misura?',
        answer:
          'Quando fogli Excel, email e strumenti generici iniziano a far perdere ore ogni settimana o non supportano le regole specifiche della tua azienda.',
      },
      {
        id: 'swm-2',
        question: 'Il software rimane di mia proprietà?',
        answer:
          'Sì, il codice sviluppato su misura viene consegnato senza vincoli di licenza per utente: cresci con il tuo team senza costi mensili a persona.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePackage | undefined {
  return services.find((service) => service.slug === slug);
}
