import type { FaqItem } from './faq-type';

export type ServicePackage = {
  id: string;
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  timeline: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  heroHeadline: string;
  heroSubheadline: string;
  benefits: {
    title: string;
    detail: string;
  }[];
  faqs: FaqItem[];
};
