import type { FaqItem } from './types/faq-type';
import type { ServicePackage } from './types/service-type';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.filippoalotta.com';

export const SITE_CONFIG = {
  name: 'Filippo Alotta',
  brandTitle: 'Filippo Alotta | Siti Web, E-Commerce & Software a Palermo',
  role: 'Sviluppatore Web Freelance & Software Engineer',
  email: 'filippoalotta.dev@gmail.com',
  githubUrl: 'https://github.com/Filippoalotta',
  linkedinUrl: 'https://www.linkedin.com/in/filippoalotta/',
  cvUrl: '/cv/cv.pdf',
  profileImage: '/images/filippo-alotta.jpg',
  googleVerification: 'x0BivwHTXJfAS7z8VcRhFWAXXNB2Wh8QO_ELd0tcJOg',
  location: {
    city: 'Palermo',
    region: 'Sicilia',
    postalCode: '90100',
    country: 'IT',
    countryName: 'Italia',
    latitude: 38.1157,
    longitude: 13.3615,
  },
} as const;

export const CORE_KEYWORDS = [
  'realizzazione siti web Palermo',
  'sviluppatore web Palermo',
  'siti web Palermo',
  'creazione e-commerce Palermo',
  'ecommerce Palermo',
  'landing page Palermo',
  'sviluppo software su misura Palermo',
  'software house freelance Palermo',
  'web developer freelance Palermo',
  'consulente SEO Palermo',
  'realizzazione gestionali web Palermo',
  'sviluppatore Next.js React Italia',
  'Filippo Alotta',
];

export function buildHomeJsonLd(services: ServicePackage[], faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_CONFIG.brandTitle,
        description:
          'Realizzazione siti web professionali, landing page ad alta conversione, e-commerce e software su misura a Palermo e in tutta Italia.',
        inLanguage: 'it-IT',
        publisher: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: SITE_CONFIG.name,
        url: SITE_URL,
        image: `${SITE_URL}${SITE_CONFIG.profileImage}`,
        email: `mailto:${SITE_CONFIG.email}`,
        jobTitle: SITE_CONFIG.role,
        description:
          'Sviluppatore Software e Web Freelance a Palermo specializzato in siti web veloci, landing page, e-commerce e gestionali su misura in Next.js, React e TypeScript.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: SITE_CONFIG.location.city,
          addressRegion: 'PA',
          addressCountry: SITE_CONFIG.location.country,
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Università degli Studi di Palermo',
          url: 'https://www.unipa.it/',
        },
        sameAs: [SITE_CONFIG.githubUrl, SITE_CONFIG.linkedinUrl],
        knowsAbout: [
          'Realizzazione Siti Web',
          'Sviluppo Software Su Misura',
          'Landing Page ad Alta Conversione',
          'E-Commerce',
          'SEO Tecnico',
          'Next.js',
          'React',
          'TypeScript',
          'Node.js',
          'PostgreSQL',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#business`,
        name: `${SITE_CONFIG.name} — Sviluppo Siti Web, E-Commerce & Software Palermo`,
        url: SITE_URL,
        image: `${SITE_URL}${SITE_CONFIG.profileImage}`,
        email: SITE_CONFIG.email,
        priceRange: '€€',
        founder: {
          '@id': `${SITE_URL}/#person`,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: SITE_CONFIG.location.city,
          addressRegion: 'PA',
          postalCode: SITE_CONFIG.location.postalCode,
          addressCountry: SITE_CONFIG.location.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE_CONFIG.location.latitude,
          longitude: SITE_CONFIG.location.longitude,
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Palermo',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Sicilia',
          },
          {
            '@type': 'Country',
            name: 'Italia',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servizi Digitali Freelance a Palermo',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
              url: `${SITE_URL}/servizi/${service.slug}`,
            },
          })),
        },
        sameAs: [SITE_CONFIG.githubUrl, SITE_CONFIG.linkedinUrl],
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function buildServiceJsonLd(service: ServicePackage) {
  const pageUrl = `${SITE_URL}/servizi/${service.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}/#webpage`,
        url: pageUrl,
        name: service.seoTitle,
        description: service.seoDescription,
        inLanguage: 'it-IT',
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: service.shortTitle,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        name: service.title,
        description: service.seoDescription,
        serviceType: service.shortTitle,
        provider: {
          '@id': `${SITE_URL}/#business`,
        },
        areaServed: [
          { '@type': 'City', name: 'Palermo' },
          { '@type': 'Country', name: 'Italia' },
        ],
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function buildDeveloperJsonLd() {
  const developerUrl = `${SITE_URL}/developer`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${developerUrl}/#profilepage`,
        url: developerUrl,
        name: 'Filippo Alotta — Software Engineer & Robotics Engineer',
        description:
          'Technical portfolio of Filippo Alotta: Software Engineer with 3+ years of experience and Robotics Engineering student in Palermo, building web platforms, embedded systems, and robotics projects.',
        inLanguage: 'en',
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Developer Portfolio',
            item: developerUrl,
          },
        ],
      },
    ],
  };
}
