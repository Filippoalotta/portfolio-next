import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types/project-type';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardContent = (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-200 hover:border-sky-300 hover:shadow-md">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-slate-100 border-b bg-slate-100">
        <Image
          src={project.image}
          alt={`Anteprima ${project.title}`}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between gap-2">
            {project.categoryLabel && (
              <span className="font-semibold text-sky-700 text-xs">
                {project.categoryLabel}
              </span>
            )}
            {project.link ? (
              <span className="inline-flex items-center gap-1 font-medium text-emerald-700 text-xs">
                Online
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            ) : (
              <span className="text-slate-400 text-xs">Progetto privato</span>
            )}
          </div>

          <h3 className="mt-2 font-bold text-lg text-slate-900 transition-colors group-hover:text-sky-700">
            {project.title}
          </h3>

          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* {project.technologies && project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )} */}
      </div>
    </article>
  );

  if (project.link) {
    return (
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus:outline-none"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
