import { FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/seo';

export default function IconsLinkSection() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href={SITE_CONFIG.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profilo GitHub di Filippo Alotta"
        title="GitHub"
        className="opacity-70 transition-opacity hover:opacity-100"
      >
        <Image
          src="/icons/github-white-icon.svg"
          alt="GitHub"
          width={18}
          height={18}
          className="brightness-0"
        />
      </Link>

      <Link
        href={SITE_CONFIG.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profilo LinkedIn di Filippo Alotta"
        title="LinkedIn"
        className="opacity-70 transition-opacity hover:opacity-100"
      >
        <Image
          src="/icons/linkedin-white-icon.svg"
          alt="LinkedIn"
          width={18}
          height={18}
          className="brightness-0"
        />
      </Link>

      <Link
        href={`mailto:${SITE_CONFIG.email}`}
        aria-label="Invia una email a Filippo Alotta"
        title="Email diretta"
        className="opacity-70 transition-opacity hover:opacity-100"
      >
        <Image
          src="/icons/email-white-icon.svg"
          alt="Email"
          width={20}
          height={20}
          className="brightness-0"
        />
      </Link>

      <Link
        href={SITE_CONFIG.cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scarica il Curriculum Vitae in PDF"
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium text-slate-700 text-xs transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
      >
        <FileText className="h-3.5 w-3.5 text-sky-600" />
        Scarica CV
      </Link>
    </div>
  );
}
