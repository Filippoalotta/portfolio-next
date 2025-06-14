import { projects } from "@/lib/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  return (
    <div className="flex flex-col justify-between items-start gap-6">
      <h4 className="text-base font-bold uppercase">Projects</h4>

      <div className="flex flex-col justify-between items-start gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
