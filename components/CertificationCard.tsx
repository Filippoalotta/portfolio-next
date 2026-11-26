import { ArrowUpRight, BadgeCheck, Trophy } from 'lucide-react';
import Link from 'next/link';
import type {
  Certification,
  CertificationCategory,
} from '@/lib/types/certification-type';

const CATEGORY_STYLES: Record<
  CertificationCategory,
  {
    accentText: string;
    badgeBg: string;
    cardBorder: string;
    corner: string;
    glow: string;
    icon: typeof Trophy;
    prefix: string;
    tagBorder: string;
    titleHover: string;
  }
> = {
  award: {
    accentText: 'text-amber-400',
    badgeBg: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    cardBorder: 'border-white/10 group-hover:border-amber-500/40',
    corner: 'border-amber-500/50 group-hover:border-amber-400',
    glow: 'group-hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.18)]',
    icon: Trophy,
    prefix: 'AWARD',
    tagBorder: 'group-hover:border-amber-500/30 group-hover:text-amber-300',
    titleHover: 'group-hover:text-amber-300',
  },
  certification: {
    accentText: 'text-cyan-400',
    badgeBg: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    cardBorder: 'border-white/10 group-hover:border-cyan-500/40',
    corner: 'border-cyan-500/50 group-hover:border-cyan-400',
    glow: 'group-hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.18)]',
    icon: BadgeCheck,
    prefix: 'CERT',
    tagBorder: 'group-hover:border-cyan-500/30 group-hover:text-cyan-300',
    titleHover: 'group-hover:text-cyan-300',
  },
};

export default function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const style = CATEGORY_STYLES[certification.category];
  const Icon = style.icon;

  const cardContent = (
    <div
      className={`relative w-full rounded-sm border bg-black/30 p-4 backdrop-blur-xs transition-all duration-300 ${style.cardBorder} ${style.glow}`}
    >
      {/* HUD Corner Brackets */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-[1px] -left-[1px] h-2.5 w-2.5 border-t-2 border-l-2 transition-colors duration-300 ${style.corner}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-[1px] -right-[1px] h-2.5 w-2.5 border-t-2 border-r-2 transition-colors duration-300 ${style.corner}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-[1px] -left-[1px] h-2.5 w-2.5 border-b-2 border-l-2 transition-colors duration-300 ${style.corner}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-[1px] -bottom-[1px] h-2.5 w-2.5 border-r-2 border-b-2 transition-colors duration-300 ${style.corner}`}
      />

      {/* Header Row */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-white/5 border-b pb-2 font-mono text-[11px]">
        <div className="flex items-center gap-2">
          <Icon className={`h-3.5 w-3.5 ${style.accentText}`} />
          <span className={`font-semibold tracking-wider ${style.accentText}`}>
            {style.prefix}-{certification.id.padStart(2, '0')}
          </span>
          <span className="text-slate-600">::</span>
          <span className="text-[10px] text-slate-400 uppercase tracking-wider">
            {certification.date}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {certification.highlight && (
            <span
              className={`rounded-xs border px-2 py-0.5 font-semibold text-[10px] uppercase tracking-wider ${style.badgeBg}`}
            >
              {certification.highlight}
            </span>
          )}
          {certification.certificateUrl && (
            <span className="flex items-center gap-1 text-[10px] text-slate-300 uppercase tracking-wider">
              PDF
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-1.5">
        <h3
          className={`font-bold font-mono text-base text-slate-100 transition-colors ${style.titleHover}`}
        >
          {certification.title}
        </h3>
        <p className="font-medium text-slate-300 text-xs uppercase tracking-wide">
          {certification.issuer}
        </p>
        <p className="mt-1 text-description text-sm leading-relaxed">
          {certification.description}
        </p>

        {certification.skills && certification.skills.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className={`flex items-center gap-1 rounded-xs border border-white/5 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-slate-300 transition-colors duration-200 ${style.tagBorder}`}
              >
                <span className="text-[10px] text-slate-500">#</span>
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (certification.certificateUrl) {
    return (
      <Link
        href={certification.certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full focus:outline-hidden"
      >
        {cardContent}
      </Link>
    );
  }

  return <div className="group block w-full">{cardContent}</div>;
}
