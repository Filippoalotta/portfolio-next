import type { Project } from '../types/project-type';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Lihos',
    description:
      'A management software developed for a cleaning company to streamline client and operator management, including the organization of apartments and hotel rooms.',
    image: '/projects/lihos_project.svg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: '2',
    title: 'MG Investments',
    description:
      'A company specialized in direct investments in the real estate sector, focusing on hospitality and commercial assets in the UK and EU.',
    image: '/projects/mg-thumbnail.png',
    link: 'https://mg-investment.vercel.app',
    technologies: ['Astro', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: '3',
    title: 'Wheelo Website',
    description:
      'An all-in-one motorcycle app designed to connect riders, manage trips, and share experiences.',
    image: '/projects/wheelo-thumbnail.png',
    link: 'https://www.wheelo.it',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: '4',
    title: 'La Nuova Aldebaran',
    description:
      'A website for a supplier of industrial cleaning products and systems, showcasing their solutions and facilitating customer inquiries.',
    image: '/projects/lanuovaaldebaran_project.svg',
    link: 'https://www.nuovaaldebaran.it',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: '5',
    title: 'Fonditalia',
    description:
      'A management platform developed for Fonditalia to handle client requests and streamline administrative processes. The platform provides dedicated areas for customers and admins.',
    image: '/projects/fonditalia_project.svg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Firebase'],
  },
  {
    id: '6',
    title: 'SwipeApp Studio',
    description:
      'SwipeApp Studio is a software house for venture capital companies, specializing in building custom software solutions for startups.',
    image: '/projects/swipeapp-thumbnail.png',
    link: 'https://www.swipeapp.studio',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Firebase'],
  },
];
