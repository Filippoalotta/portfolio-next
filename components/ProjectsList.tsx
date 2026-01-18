import { projects } from '@/lib/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsList() {
  return (
    <div className="flex flex-col items-start justify-between gap-6">
      <h4 className="font-bold text-base uppercase">Projects</h4>

      <div className="flex flex-col items-start justify-between gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
