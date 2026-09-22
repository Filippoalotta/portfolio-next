import { hardware_projects, software_projects } from '@/lib/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsList() {
  return (
    <div className="flex flex-col items-start justify-between gap-6">
      <h4 className="font-bold text-base uppercase">Projects</h4>

      <p className="font-bold text-sm uppercase">Software Projects</p>

      <div className="flex flex-col items-start justify-between gap-8">
        {software_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p className="font-bold text-sm uppercase">Hardware Projects</p>

      <div className="flex flex-col items-start justify-between gap-8">
        {hardware_projects.length > 0 ? (
          hardware_projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-description text-sm">Coming soon...</p>
        )}
      </div>
    </div>
  );
}
