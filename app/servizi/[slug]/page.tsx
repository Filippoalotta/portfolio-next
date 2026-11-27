import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import SiteShell from '@/components/SiteShell';
import { getServiceBySlug, services } from '@/lib/data/services';
import { buildServiceJsonLd, SITE_URL } from '@/lib/seo';

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const pageUrl = `${SITE_URL}/servizi/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/servizi/${service.slug}`,
    },
    openGraph: {
      type: 'website',
      locale: 'it_IT',
      url: pageUrl,
      title: service.seoTitle,
      description: service.seoDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.seoDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = buildServiceJsonLd(service);
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD structured data for SEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col gap-12 py-10 sm:py-14">
        {/* Breadcrumb & Back */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center justify-between gap-3 border-slate-200 border-b pb-4 text-slate-500 text-xs"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-semibold text-sky-700 transition-colors hover:text-sky-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Torna al Portfolio
          </Link>
          <span>
            Home / Servizi /{' '}
            <strong className="text-slate-800">{service.shortTitle}</strong>
          </span>
        </nav>

        {/* Hero Section */}
        <section className="flex max-w-3xl flex-col gap-5">
          <span className="w-fit rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 font-semibold text-sky-700 text-xs">
            {service.idealFor} · Palermo &amp; Italia
          </span>

          <h1 className="font-bold text-3xl text-slate-900 leading-tight tracking-tight sm:text-5xl">
            {service.heroHeadline}
          </h1>

          <p className="text-base text-slate-600 leading-relaxed sm:text-lg">
            {service.heroSubheadline}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              href="#contatti"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-sm text-white transition-colors hover:bg-sky-700"
            >
              Richiedi Preventivo Gratuito
              <ArrowRight className="h-4 w-4" />
            </Link>

            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700 text-sm">
              <Clock className="h-4 w-4" />
              Tempi medi: {service.timeline}
            </span>
          </div>
        </section>

        {/* Deliverables */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="font-bold text-slate-900 text-xl">
            Cosa include il servizio
          </h2>
          <p className="mt-1 text-slate-600 text-sm">
            Soluzione pensata per:{' '}
            <strong className="text-slate-900">{service.idealFor}</strong>
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-slate-700 text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits */}
        <section className="flex flex-col gap-5">
          <h2 className="font-bold text-slate-900 text-xl">
            Perché conviene alla tua attività
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <h3 className="font-bold text-base text-sky-700">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {benefit.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Service FAQs */}
        <FaqSection
          items={service.faqs}
          heading={`Domande frequenti su ${service.shortTitle}`}
        />

        {/* Contact CTA */}
        <ContactSection defaultService={service.title} />

        {/* Cross-linking */}
        <section className="flex flex-col gap-4 border-slate-200 border-t pt-10">
          <h2 className="font-bold text-base text-slate-900">
            Altri servizi disponibili a Palermo e da remoto
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.id}
                href={`/servizi/${item.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-colors hover:border-sky-300"
              >
                <div className="font-semibold text-base text-slate-900">
                  {item.shortTitle}
                </div>
                <div className="mt-1 text-slate-600 text-xs leading-relaxed">
                  {item.tagline}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </SiteShell>
  );
}
