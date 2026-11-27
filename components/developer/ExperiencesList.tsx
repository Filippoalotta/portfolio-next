import { developerExperiences } from '@/lib/data/developer';
import ExperienceCard from './ExperienceCard';

export default function ExperiencesList() {
  return (
    <div className="flex flex-col items-start justify-between gap-6">
      <h4 className="font-bold text-base uppercase">Experience</h4>

      <div className="flex flex-col items-start justify-between gap-8">
        {developerExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
