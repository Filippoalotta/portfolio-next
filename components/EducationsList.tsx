import { educations } from '@/lib/data/educations';
import EducationCard from './EducationCard';

export default function EducationsList() {
  return (
    <div className="flex flex-col items-start justify-between gap-6">
      <h4 className="font-bold text-base uppercase">Education</h4>

      <div className="flex flex-col items-start justify-between gap-8">
        {educations.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </div>
  );
}
