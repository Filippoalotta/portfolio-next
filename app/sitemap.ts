import type { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/servizi/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...serviceRoutes,
    {
      url: `${SITE_URL}/developer`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];
}
