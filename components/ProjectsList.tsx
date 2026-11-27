import { hardware_projects, software_projects } from '@/lib/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsList() {
  return (
    <section
      id="progetti"
      aria-labelledby="progetti-heading"
      className="scroll-mt-24 border-slate-200 border-t py-12 sm:py-16"
    >
      <div className="max-w-2xl">
        <p className="font-semibold text-sky-600 text-xs uppercase tracking-widest">
          Portfolio
        </p>
        <h2
          id="progetti-heading"
          className="mt-2 font-bold text-2xl text-slate-900 tracking-tight sm:text-3xl"
        >
          Progetti reali realizzati per aziende e startup
        </h2>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Una selezione di siti aziendali, piattaforme web e gestionali su
          misura già sviluppati e utilizzati in produzione.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {software_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* {hardware_projects.length > 0 && (
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
          <p className="font-semibold text-slate-500 text-xs uppercase tracking-wider">
            Ricerca &amp; Ingegneria della Robotica
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {hardware_projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )} */}
    </section>
  );
}
