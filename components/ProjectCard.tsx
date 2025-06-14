import { Project } from "@/lib/types/project-type";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      {project.link ? (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-col group hover:cursor-pointer lg:flex-row justify-between items-start gap-1 lg:gap-3"
        >
          <Image
            src={project.image}
            alt={`${project.title} image`}
            className="w-28 border border-description transition-all h-20 object-cover rounded-lg mb-2 lg:mb-0"
            unoptimized
            width={120}
            height={80}
          />

          <div className="w-full flex-col justify-between items-start gap-2">
            <h3 className="text-base group-hover:text-description font-bold">
              {project.title}
            </h3>

            <p className="text-description text-sm">{project.description}</p>
          </div>
        </Link>
      ) : (
        <div className="w-full flex flex-col group hover:cursor-pointer lg:flex-row justify-between items-start gap-1 lg:gap-3">
          <Image
            src={project.image}
            alt={`${project.title} image`}
            className="w-28 border border-description transition-all h-20 object-cover rounded-lg mb-2 lg:mb-0"
            unoptimized
            width={120}
            height={80}
          />

          <div className="w-full flex-col justify-between items-start gap-2">
            <h3 className="text-base  font-bold">{project.title}</h3>

            <p className="text-description text-sm">{project.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
