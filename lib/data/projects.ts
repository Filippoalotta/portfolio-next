import type { Project } from '../types/project-type';

export const software_projects: Project[] = [
  {
    id: '1',
    title: 'Lihos',
    categoryLabel: 'Gestionale Web B2B',
    description:
      'Software gestionale su misura sviluppato per un’impresa di servizi per automatizzare la gestione di clienti, turni degli operatori e organizzazione operativa di appartamenti e strutture ricettive. Sviluppo frontend realizzato in team durante l’esperienza in SwipeApp Studio.',
    outcome:
      'Digitalizzazione completa dei flussi operativi e riduzione degli errori di pianificazione.',
    image: '/projects/lihos_project.svg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: '2',
    title: 'MG Investments',
    categoryLabel: 'Sito Corporate & Real Estate',
    description:
      'Piattaforma istituzionale ad alte prestazioni per una società specializzata in investimenti immobiliari diretti nel settore hospitality e commerciale tra Regno Unito ed Europa. Sviluppo frontend realizzato in team durante l’esperienza in SwipeApp Studio.',
    outcome:
      'Immagine corporate autorevole e caricamento istantaneo su tutti i dispositivi.',
    image: '/projects/mg-thumbnail.png',
    link: 'https://mg-investment.vercel.app',
    technologies: ['Astro', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: '3',
    title: 'Wheelo Website',
    categoryLabel: 'Web Platform & Community',
    description:
      'Piattaforma web dedicata al mondo motociclistico per connettere rider, organizzare itinerari di viaggio e presentare le funzionalità dell’ecosistema digitale Wheelo. Sviluppo frontend realizzato nel ruolo di Software Engineer per il team Wheelo.',
    outcome:
      'Interfaccia veloce, SEO-friendly e progettata per acquisire nuovi utenti.',
    image: '/projects/wheelo-thumbnail.png',
    link: 'https://www.wheelo.it',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: '4',
    title: 'Portfolio Brand designer',
    categoryLabel: 'Web Portfolio & Personal Branding',
    description:
      'Portfolio web per la designer Andrea Smeraldi specializzato in branding e identità visiva, progettato per mostrare i progetti creativi e attrarre potenziali clienti.',
    outcome:
      'Interfaccia veloce, SEO-friendly e progettata per acquisire nuovi utenti.',
    image: '/projects/portfolio_dri_project.png',
    link: 'https://portfolio-dri.vercel.app/',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: '5',
    title: 'La Nuova Aldebaran',
    categoryLabel: 'Sito Aziendale & Catalogo B2B',
    description:
      'Sito web aziendale per un fornitore di prodotti e sistemi di pulizia industriale, progettato per valorizzare le soluzioni a catalogo e facilitare le richieste di preventivo B2B. Sviluppo frontend realizzato in team durante l’esperienza in SwipeApp Studio.',
    outcome:
      'Presenza online chiara e ottimizzata per ricerche di settore e contatti commerciali.',
    image: '/projects/lanuovaaldebaran_project.svg',
    link: 'https://www.nuovaaldebaran.it',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Supabase'],
  },
  {
    id: '6',
    title: 'Fonditalia',
    categoryLabel: 'Portale Clienti & Admin',
    description:
      'Piattaforma gestionale su misura per gestire richieste clienti e pratiche amministrative, completa di aree riservate separate per utenti finali e amministratori. Sviluppo frontend realizzato in team durante l’esperienza in SwipeApp Studio.',
    outcome:
      'Centralizzazione delle richieste e gestione sicura dei dati aziendali.',
    image: '/projects/fonditalia_project.svg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Firebase'],
  },
  {
    id: '7',
    title: 'SwipeApp Studio',
    categoryLabel: 'Software House & Startup SaaS',
    description:
      'Sito e vetrina digitale per software house dedicata a startup e venture capital, focalizzata sullo sviluppo di prodotti software scalabili e dashboard interattive. Realizzato nel ruolo di Software Engineer presso SwipeApp Studio.',
    outcome: 'Posizionamento premium verso fondatori di startup e investitori.',
    image: '/projects/swipeapp-thumbnail.png',
    link: 'https://www.swipeapp.studio',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Firebase'],
  },
];

export const hardware_projects: Project[] = [
  {
    id: '1',
    title: 'TARS Rover',
    categoryLabel: 'Robotica & Sistemi Embedded',
    description:
      'Rover autonomo basato su ESP32 progettato per analisi ambientale e navigazione autonoma tramite sensori ottici, radar a infrarossi e telemetria MQTT/ROS.',
    outcome:
      'Dimostrazione pratica di ingegneria software/hardware affidabile e problem solving complesso.',
    image: '/projects/esp32_rover.png',
    technologies: ['ESP32', 'Arduino', 'MQTT', 'ROS', 'C++'],
  },
];