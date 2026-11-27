import { educations } from '@/lib/data/educations';
import EducationCard from './EducationCard';

export default function EducationsList() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-lg text-slate-900">Formazione</h3>
      <div className="flex flex-col gap-4">
        {educations.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </div>
  );
}
