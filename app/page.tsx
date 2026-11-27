import CertificationsList from '@/components/CertificationsList';
import ContactSection from '@/components/ContactSection';
import EducationsList from '@/components/EducationsList';
import ExperiencesList from '@/components/ExperiencesList';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProcessSection from '@/components/ProcessSection';
import ProjectsList from '@/components/ProjectsList';
import ServicesList from '@/components/ServicesList';
import SiteShell from '@/components/SiteShell';
import { homeFaqs } from '@/lib/data/faqs';
import { services } from '@/lib/data/services';
import { buildHomeJsonLd } from '@/lib/seo';

export default function HomePage() {
  const jsonLd = buildHomeJsonLd(services, homeFaqs);

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD structured data for SEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />

      <ServicesList />

      <ProjectsList />

      <ProcessSection />

      {/* <section
        id="esperienze"
        aria-labelledby="percorso-heading"
        className="scroll-mt-24 border-slate-200 border-t py-12 sm:py-16"
      >
        <div className="max-w-2xl">
          <p className="font-semibold text-sky-600 text-xs uppercase tracking-widest">
            Esperienza &amp; Formazione
          </p>
          <h2
            id="percorso-heading"
            className="mt-2 font-bold text-2xl text-slate-900 tracking-tight sm:text-3xl"
          >
            Competenze solide, costruite sul campo
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ExperiencesList />
          <EducationsList />
        </div>

        <CertificationsList />
      </section> */}

      <FaqSection items={homeFaqs} />

      <ContactSection />

      <Footer />
    </SiteShell>
  );
}
