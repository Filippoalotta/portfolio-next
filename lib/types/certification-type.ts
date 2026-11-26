export type CertificationCategory = 'award' | 'certification';

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: CertificationCategory;
  highlight?: string;
  description: string;
  skills?: string[];
  certificateUrl?: string;
};
