import { experiences } from '@/lib/data/experiences';
import ExperienceCard from './ExperienceCard';

export default function ExperiencesList() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-lg text-slate-900">
        Esperienze lavorative
      </h3>
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
