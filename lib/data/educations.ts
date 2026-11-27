import type { Education } from '../types/education-type';

export const educations: Education[] = [
  {
    id: '1',
    university: 'Università degli Studi di Palermo',
    course: 'Laurea Triennale in Ingegneria della Robotica',
    startDate: '2026',
    description:
      'Percorso universitario focalizzato su elettronica, matematica applicata, controllo automatico e ingegneria del software per sistemi complessi.',
    websiteUrl: 'https://www.unipa.it/',
  },
  {
    id: '2',
    university: 'Start2Impact',
    course: 'Master / Bootcamp in Web Development',
    startDate: '2023',
    endDate: '2023',
    description:
      'Formazione intensiva pratica su HTML, CSS, JavaScript, React, Node.js, database e best practice di sviluppo web moderno.',
    websiteUrl: 'https://www.start2impact.it/',
  },
  {
    id: '3',
    university: 'I.T.E. L. Ariosto',
    course: 'Diploma Tecnico Economico (Amministrazione, Finanza e Marketing)',
    startDate: '2016',
    endDate: '2021',
    description:
      'Formazione tecnico-economica orientata a contabilità, gestione d’impresa e analisi dei processi aziendali.',
  },
];
