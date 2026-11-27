import type { Certification } from '@/lib/types/certification-type';

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'MATLAB Workshop & Coding Challenge — 4° Posto',
    issuer: 'MATLAB Seminar & Technical Workshop',
    date: 'Nov 2026',
    category: 'award',
    highlight: '4° / ~600 partecipanti',
    description:
      'Classificato al 4° posto su quasi 600 partecipanti in una challenge tecnica intensiva dedicata al calcolo numerico, algoritmi e problem solving ingegneristico.',
    skills: ['MATLAB', 'Calcolo Numerico', 'Problem Solving'],
  },
  {
    id: '2',
    title: 'MATLAB Onramp — Certificato di Completamento',
    issuer: 'MathWorks Training Services',
    date: 'Nov 2026',
    category: 'certification',
    highlight: '100% Completato',
    description:
      'Completamento al 100% del percorso ufficiale MathWorks su sintassi core, elaborazione matriciale, visualizzazione dati e flussi algoritmici.',
    skills: ['MATLAB', 'Data Visualization', 'Vectorization'],
    certificateUrl: '/certificates/matlab-onramp.pdf',
  },
];
