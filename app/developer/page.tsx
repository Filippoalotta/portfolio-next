import type { Metadata } from 'next';
import LeftSection from '@/components/developer/LeftSection';
import RightSection from '@/components/developer/RightSection';
import { buildDeveloperJsonLd, SITE_CONFIG, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Filippo Alotta | Software Engineer & Robotics Engineer',
  description:
    'Technical portfolio of Filippo Alotta: Software Engineer with 3+ years of experience in Next.js, React, TypeScript and Robotics Engineering student in Palermo (ESP32, ROS, Embedded Systems).',
  keywords: [
    'Filippo Alotta',
    'Software Engineer Palermo',
    'Robotics Engineer',
    'Embedded Systems ESP32 ROS',
    'Next.js TypeScript Developer',
    'Full Stack Developer Portfolio',
  ],
  alternates: {
    canonical: '/developer',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: `${SITE_URL}/developer`,
    siteName: SITE_CONFIG.name,
    title: 'Filippo Alotta — Software Engineer & Robotics Engineer',
    description:
      'Software Engineer with 3+ years of experience and Robotics Engineering student building web platforms, embedded systems, and autonomous rovers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Filippo Alotta — Software Engineer & Robotics Engineer',
    description:
      'Technical portfolio: Next.js, React, TypeScript, ESP32, ROS, and MATLAB engineering projects.',
  },
};

export default function DeveloperPortfolioPage() {
  const jsonLd = buildDeveloperJsonLd();

  return (
    <div className="developer-theme min-h-screen w-full">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD structured data for SEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto w-full max-w-[1600px] px-10">
        <div className="flex flex-col items-center justify-center lg:h-screen lg:flex-row">
          <div className="w-full overflow-y-hidden lg:w-1/2">
            <LeftSection />
          </div>
          <div className="w-full lg:h-full lg:w-1/2 lg:overflow-y-auto">
            <RightSection />
          </div>
        </div>
      </main>
    </div>
  );
}
