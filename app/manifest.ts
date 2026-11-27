import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.brandTitle,
    short_name: SITE_CONFIG.name,
    description:
      'Sviluppatore Web Freelance a Palermo: Siti Web, Landing Page, E-Commerce e Software Su Misura.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    lang: 'it',
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
