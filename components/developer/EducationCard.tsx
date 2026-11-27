import Link from 'next/link';
import type { Education } from '@/lib/types/education-type';

export default function EducationCard({ education }: { education: Education }) {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-1 lg:flex-row">
      <h4 className="font-semibold text-description text-xs uppercase min-lg:max-w-16">
        {education.startDate}
        {' - '}
        {education.endDate ? education.endDate : 'present'}
      </h4>

      <div className="w-full flex-col items-start justify-between gap-2">
        {education.websiteUrl ? (
          <Link
            href={education.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-bold text-base hover:text-description">
              {education.course}
            </h3>
          </Link>
        ) : (
          <h3 className="font-bold text-base">{education.course}</h3>
        )}
        <h4 className="font-medium text-base">{education.university}</h4>
        <p className="text-description text-sm">{education.description}</p>
      </div>
    </div>
  );
}
