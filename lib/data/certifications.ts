import type { Certification } from '@/lib/types/certification-type';

export const certifications: Certification[] = [
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
