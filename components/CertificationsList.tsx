import { certifications } from '@/lib/data/certifications';
import CertificationCard from './CertificationCard';

export default function CertificationsList() {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <h3 className="font-bold text-lg text-slate-900">
        Riconoscimenti e Certificazioni
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
