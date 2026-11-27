import Link from 'next/link';
import type { Experience } from '@/lib/types/experience-type';

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-1 lg:flex-row">
      <h4 className="font-semibold text-description text-xs uppercase min-lg:max-w-16">
        {experience.startDate}
        {' - '}
        {experience.endDate ? experience.endDate : 'present'}
      </h4>

      <div className="w-full flex-col items-start justify-between gap-2">
        {experience.websiteUrl ? (
          <Link
            href={experience.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-bold text-base hover:text-description">
              {experience.company}
              {' - '}
              {experience.position}
            </h3>
          </Link>
        ) : (
          <h3 className="font-bold text-base">
            {experience.company}
            {' - '}
            {experience.position}
          </h3>
        )}
        <p className="text-description text-sm">{experience.description}</p>
      </div>
    </div>
  );
}
