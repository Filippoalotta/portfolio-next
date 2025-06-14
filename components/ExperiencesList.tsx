import { experiences } from "@/lib/data/experiences-type";
import ExperienceCard from "./ExperienceCard";

export default function ExperiencesList() {
  return (
    <div className="flex flex-col justify-between items-start gap-6">
      <h4 className="text-base font-bold uppercase">Experience</h4>

      <div className="flex flex-col justify-between items-start gap-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
