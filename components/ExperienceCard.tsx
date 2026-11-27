import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Experience } from '@/lib/types/experience-type';

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-semibold text-sky-700 text-xs">
          {experience.startDate} – {experience.endDate ?? 'Presente'}
        </span>
      </div>

      {experience.websiteUrl ? (
        <Link
          href={experience.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-1.5 inline-flex items-center gap-1"
        >
          <h3 className="font-bold text-base text-slate-900 transition-colors group-hover:text-sky-700">
            {experience.company} — {experience.position}
          </h3>
          <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-sky-700" />
        </Link>
      ) : (
        <h3 className="mt-1.5 font-bold text-base text-slate-900">
          {experience.company} — {experience.position}
        </h3>
      )}

      <p className="mt-2 text-slate-600 text-sm leading-relaxed">
        {experience.description}
      </p>
    </div>
  );
}
