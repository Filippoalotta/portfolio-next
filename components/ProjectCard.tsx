import { ArrowUpRight, Cpu, Terminal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types/project-type';

interface ProjectCardProps {
  project: Project;
  category?: 'software' | 'hardware';
}

export default function ProjectCard({
  project,
  category = 'software',
}: ProjectCardProps) {
  const isHardware = category === 'hardware';

  const styles = isHardware
    ? {
        corner: 'border-emerald-500/50 group-hover:border-emerald-400',
        cardBorder: 'border-white/10 group-hover:border-emerald-500/40',
        glow: 'group-hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.18)]',
        titleHover: 'group-hover:text-emerald-300',
        tagBorder:
          'group-hover:border-emerald-500/30 group-hover:text-emerald-300',
        sysColor: 'text-emerald-400',
        sysPrefix: 'SYS.HW',
        categoryLabel: 'ROBOTICS // EMBEDDED',
      }
    : {
        corner: 'border-cyan-500/50 group-hover:border-cyan-400',
        cardBorder: 'border-white/10 group-hover:border-cyan-500/40',
        glow: 'group-hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.18)]',
        titleHover: 'group-hover:text-cyan-300',
        tagBorder: 'group-hover:border-cyan-500/30 group-hover:text-cyan-300',
        sysColor: 'text-cyan-400',
        sysPrefix: 'SYS.SW',
        categoryLabel: 'SOFTWARE // MODULE',
      };

  const cardContent = (
    <div
      className={`relative w-full rounded-sm border bg-black/30 p-4 backdrop-blur-xs transition-all duration-300 ${styles.cardBorder} ${styles.glow}`}
    >
      {/* HUD Corner Brackets */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-[1px] -left-[1px] h-2.5 w-2.5 border-t-2 border-l-2 transition-colors duration-300 ${styles.corner}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-[1px] -right-[1px] h-2.5 w-2.5 border-t-2 border-r-2 transition-colors duration-300 ${styles.corner}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-[1px] -left-[1px] h-2.5 w-2.5 border-b-2 border-l-2 transition-colors duration-300 ${styles.corner}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-[1px] -bottom-[1px] h-2.5 w-2.5 border-r-2 border-b-2 transition-colors duration-300 ${styles.corner}`}
      />

      {/* Technical Header Row */}
      <div className="mb-3 flex items-center justify-between border-white/5 border-b pb-2 font-mono text-[11px]">
        <div className="flex items-center gap-2">
          {isHardware ? (
            <Cpu className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          )}
          <span className={`font-semibold tracking-wider ${styles.sysColor}`}>
            {styles.sysPrefix}-{project.id.padStart(2, '0')}
          </span>
          <span className="hidden text-slate-600 sm:inline">::</span>
          <span className="hidden text-[10px] text-slate-400 uppercase tracking-wider sm:inline">
            {styles.categoryLabel}
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono">
          {project.link ? (
            <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              DEPLOYED
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              INTERNAL
            </span>
          )}
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {/* Project Thumbnail with viewfinder frame */}
        <div className="relative shrink-0 overflow-hidden rounded-xs border border-white/10 bg-slate-950/60 sm:w-28">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            className="h-24 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-20 sm:w-28"
            unoptimized
            width={120}
            height={80}
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
          <span className="pointer-events-none absolute right-1 bottom-1 font-mono text-[8px] text-white/50 tracking-tighter">
            IMG::OK
          </span>
        </div>

        {/* Content Details */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="select-none font-mono text-slate-500 text-xs">
                &gt;
              </span>
              <h3
                className={`font-bold font-mono text-base text-slate-100 transition-colors ${styles.titleHover}`}
              >
                {project.title}
              </h3>
            </div>

            <p className="mt-1.5 text-description text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`flex items-center gap-1 rounded-xs border border-white/5 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-slate-300 transition-colors duration-200 ${styles.tagBorder}`}
                >
                  <span className="text-[10px] text-slate-500">#</span>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {project.link ? (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block w-full focus:outline-hidden"
        >
          {cardContent}
        </Link>
      ) : (
        <div className="group block w-full">{cardContent}</div>
      )}
    </>
  );
}
