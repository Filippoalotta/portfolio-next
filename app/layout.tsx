import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Rubik } from 'next/font/google';
import { CORE_KEYWORDS, SITE_CONFIG, SITE_URL } from '@/lib/seo';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans-main',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Filippo Alotta | Siti Web, Landing Page, E-Commerce & Software a Palermo',
    template: '%s | Filippo Alotta — Sviluppatore Web Palermo',
  },
  description:
    'Sviluppatore freelance a Palermo: realizzazione siti web veloci, landing page ad alta conversione, e-commerce e software gestionali su misura in Next.js e React. Preventivi chiari.',
  keywords: CORE_KEYWORDS,
  authors: [{ name: SITE_CONFIG.name, url: SITE_URL }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: {
      'it-IT': '/',
    },
  },
  verification: {
    google: SITE_CONFIG.googleVerification,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: SITE_URL,
    siteName: SITE_CONFIG.brandTitle,
    title:
      'Filippo Alotta | Siti Web, Landing Page, E-Commerce & Software a Palermo',
    description:
      'Realizzo siti web professionali, landing page, negozi e-commerce e software su misura a Palermo e in tutta Italia. Massima velocità e SEO per farti trovare su Google.',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Filippo Alotta | Siti Web, E-Commerce & Software Su Misura a Palermo',
    description:
      'Sviluppo siti web veloci, landing page ad alta conversione, e-commerce e gestionali su misura a Palermo e da remoto.',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <meta
          name="google-site-verification"
          content="cqdKiC6KaT3fHvGFEx0k2sK7IU1Pl3jM7JVVFihlKow"
        />
      </head>
      <body className={`${plusJakarta.variable} ${rubik.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
