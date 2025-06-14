import { experiences } from "@/lib/data/experiences";
import ExperienceCard from "./ExperienceCard";

export default function ProjectsList() {
  return (
    <div className="flex flex-col justify-between items-start gap-6">
      <h4 className="text-base font-bold uppercase">Projects</h4>

      <div className="flex flex-col justify-between items-start gap-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
