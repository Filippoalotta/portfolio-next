import { Experience } from "@/lib/types/experience-type";
import Link from "next/link";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-1">
      <h4 className="text-xs text-description min-lg:max-w-16 font-semibold uppercase">
        {experience.startDate}
        {" - "}
        {experience.endDate ? experience.endDate : "present"}
      </h4>

      <div className="w-full flex-col justify-between items-start gap-2">
        {experience.websiteUrl ? (
          <Link
            href={experience.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-base hover:text-description font-bold">
              {experience.company}
              {" - "}
              {experience.position}
            </h3>
          </Link>
        ) : (
          <h3 className="text-base font-bold">
            {experience.company}
            {" - "}
            {experience.position}
          </h3>
        )}
        <p className="text-description text-sm">{experience.description}</p>
      </div>
    </div>
  );
}
