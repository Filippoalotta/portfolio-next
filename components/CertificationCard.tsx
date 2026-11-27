import { ArrowUpRight, Award, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import type { Certification } from '@/lib/types/certification-type';

export default function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const isAward = certification.category === 'award';
  const Icon = isAward ? Award : BadgeCheck;

  const cardContent = (
    <div className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-colors hover:border-sky-300">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 font-semibold text-sky-700 text-xs">
            <Icon className="h-4 w-4" />
            {certification.date}
          </span>

          <div className="flex items-center gap-2">
            {certification.highlight && (
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-700 text-xs">
                {certification.highlight}
              </span>
            )}
            {certification.certificateUrl && (
              <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-sky-700" />
            )}
          </div>
        </div>

        <h4 className="mt-2.5 font-bold text-base text-slate-900 transition-colors group-hover:text-sky-700">
          {certification.title}
        </h4>
        <p className="mt-0.5 text-slate-600 text-xs">{certification.issuer}</p>
        <p className="mt-2 text-slate-600 text-sm leading-relaxed">
          {certification.description}
        </p>
      </div>

      {certification.skills && certification.skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (certification.certificateUrl) {
    return (
      <Link
        href={certification.certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
