import {
  developerHardwareProjects,
  developerSoftwareProjects,
} from '@/lib/data/developer';
import ProjectCard from './ProjectCard';

export default function ProjectsList() {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-8">
      <div className="flex items-center gap-2 font-mono">
        <span className="h-2 w-2 bg-cyan-400" />
        <h4 className="font-bold text-base uppercase tracking-wider">
          Projects Archive
        </h4>
      </div>

      {/* Software Projects Section */}
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between border-white/10 border-b pb-1.5 font-mono text-slate-400 text-xs uppercase">
          <span className="flex items-center gap-1.5 font-semibold">
            <span className="text-cyan-400">{'//'}</span> 01. Software
            Deployments
          </span>
          <span className="font-mono text-[10px] text-slate-500">
            [{developerSoftwareProjects.length} MODULES]
          </span>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-4">
          {developerSoftwareProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              category="software"
            />
          ))}
        </div>
      </div>

      {/* Hardware Projects Section */}
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between border-white/10 border-b pb-1.5 font-mono text-slate-400 text-xs uppercase">
          <span className="flex items-center gap-1.5 font-semibold">
            <span className="text-emerald-400">{'//'}</span> 02. Robotics &amp;
            Embedded
          </span>
          <span className="font-mono text-[10px] text-slate-500">
            [{developerHardwareProjects.length} MODULES]
          </span>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-4">
          {developerHardwareProjects.length > 0 ? (
            developerHardwareProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                category="hardware"
              />
            ))
          ) : (
            <p className="font-mono text-description text-sm">
              [STANDBY] Modules in development...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
