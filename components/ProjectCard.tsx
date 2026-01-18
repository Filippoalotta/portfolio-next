import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types/project-type';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      {project.link ? (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full flex-col items-start justify-between gap-1 hover:cursor-pointer lg:flex-row lg:gap-3"
        >
          <Image
            src={project.image}
            alt={`${project.title} image`}
            className="mb-2 h-20 w-28 rounded-lg border border-description object-cover transition-all lg:mb-0"
            unoptimized
            width={120}
            height={80}
          />

          <div className="w-full flex-col items-start justify-between gap-2">
            <h3 className="font-bold text-base group-hover:text-description">
              {project.title}
            </h3>

            <p className="text-description text-sm">{project.description}</p>
          </div>
        </Link>
      ) : (
        <div className="group flex w-full flex-col items-start justify-between gap-1 hover:cursor-pointer lg:flex-row lg:gap-3">
          <Image
            src={project.image}
            alt={`${project.title} image`}
            className="mb-2 h-20 w-28 rounded-lg border border-description object-cover transition-all lg:mb-0"
            unoptimized
            width={120}
            height={80}
          />

          <div className="w-full flex-col items-start justify-between gap-2">
            <h3 className="font-bold text-base">{project.title}</h3>

            <p className="text-description text-sm">{project.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
