import type { Certification } from '@/lib/types/certification-type';
import type { Education } from '@/lib/types/education-type';
import type { Experience } from '@/lib/types/experience-type';
import type { Project } from '@/lib/types/project-type';

export const developerSoftwareProjects: Project[] = [
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

export const developerHardwareProjects: Project[] = [
  {
    id: '1',
    title: 'TARS Rover',
    description:
      'TARS is an ESP32-based tactical exploration rover, designed for environmental analysis and autonomous navigation using light sensors and infrared radar.',
    image: '/projects/esp32_rover.png',
    technologies: ['ESP32', 'Arduino', 'MQTT', 'ROS', 'C++'],
  },
];

export const developerExperiences: Experience[] = [
  {
    id: '1',
    company: 'SwipeApp Studio',
    position: 'Software Developer',
    startDate: '2024',
    endDate: '2026',
    description:
      'I worked on developing solutions for enterprise clients, collaborating daily with the team to build and improve the product using modern patterns to create interactive dashboards. I worked iteratively, with frequent releases and rapid feedback loops.',
    websiteUrl: 'https://www.swipeapp.studio',
  },
  {
    id: '2',
    company: 'Wheelo',
    position: 'Software Developer',
    startDate: '2024',
    endDate: '2026',
    description:
      'I supervised the web development of Wheelo, a platform designed to manage itineraries, communities, and useful services. I am responsible for creating the user interface and experience, working to make the platform fast, intuitive, and functional.',
    websiteUrl: 'https://www.wheelo.it',
  },
  {
    id: '3',
    company: 'Freelance',
    position: 'Web Developer',
    startDate: '2023',
    endDate: '2024',
    description:
      'During this experience, I primarily focused on developing web applications and websites using React, from initial setup to deployment. I worked on responsive layouts, integrated dynamic components, and optimized performance and SEO.',
  },
];

export const developerEducations: Education[] = [
  {
    id: '1',
    university: 'University of Palermo',
    course: "Bachelor's Degree in Robotics Engineering",
    startDate: '2026',
    description:
      "Currently pursuing a Bachelor's Degree in Robotics Engineering, focusing on the fundamentals of electronics, mathematics, and computer science.",
    websiteUrl: 'https://www.unipa.it/',
  },
  {
    id: '2',
    university: 'Start2Impact',
    course: 'Web Development Bootcamp',
    startDate: '2023',
    endDate: '2023',
    description:
      'Completed an intensive Web Development Bootcamp covering HTML, CSS, JavaScript, React, Node.js, and database management.',
    websiteUrl: 'https://www.start2impact.it/',
  },
  {
    id: '3',
    university: 'L. Ariosto',
    course: 'Technical High School Diploma (Accounting and Business)',
    startDate: '2016',
    endDate: '2021',
    description:
      'Earned a High School Diploma with a strong focus on technical and scientific subjects.',
  },
];

export const developerCertifications: Certification[] = [
  {
    id: '1',
    title: 'MATLAB Workshop & Coding Challenge — 4th Place',
    issuer: 'MATLAB Seminar & Technical Workshop',
    date: 'Nov 2026',
    category: 'award',
    highlight: '4th / ~600 participants',
    description:
      'Placed 4th out of nearly 600 participants during an intensive MATLAB seminar and technical workshop focused on numerical computing, matrix operations, and engineering problem-solving.',
    skills: ['MATLAB', 'Numerical Computing', 'Problem Solving'],
  },
  {
    id: '2',
    title: 'MATLAB Onramp — Course Completion Certificate',
    issuer: 'MathWorks Training Services',
    date: 'Nov 2026',
    category: 'certification',
    highlight: '100% Completed',
    description:
      'Completed 100% of the MathWorks self-paced MATLAB Onramp training course, covering core syntax, array indexing, data visualization, and algorithmic workflows.',
    skills: ['MATLAB', 'Data Visualization', 'Vectorization'],
    certificateUrl: '/certificates/matlab-onramp.pdf',
  },
];
