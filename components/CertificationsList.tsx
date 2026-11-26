import { certifications } from '@/lib/data/certifications';
import CertificationCard from './CertificationCard';

export default function CertificationsList() {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-6">
      <div className="flex items-center gap-2 font-mono">
        <span className="h-2 w-2 bg-amber-400" />
        <h4 className="font-bold text-base uppercase tracking-wider">
          Certifications &amp; Awards
        </h4>
      </div>

      <div className="flex w-full flex-col items-start justify-between gap-4">
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
          />
        ))}
      </div>
    </div>
  );
}
