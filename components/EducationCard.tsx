import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Education } from '@/lib/types/education-type';

export default function EducationCard({ education }: { education: Education }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      <span className="font-semibold text-sky-700 text-xs">
        {education.startDate} – {education.endDate ?? 'In corso'}
      </span>

      {education.websiteUrl ? (
        <Link
          href={education.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-1.5 inline-flex items-center gap-1"
        >
          <h3 className="font-bold text-base text-slate-900 transition-colors group-hover:text-sky-700">
            {education.course}
          </h3>
          <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-sky-700" />
        </Link>
      ) : (
        <h3 className="mt-1.5 font-bold text-base text-slate-900">
          {education.course}
        </h3>
      )}

      <p className="mt-0.5 font-medium text-slate-700 text-sm">
        {education.university}
      </p>
      <p className="mt-2 text-slate-600 text-sm leading-relaxed">
        {education.description}
      </p>
    </div>
  );
}
