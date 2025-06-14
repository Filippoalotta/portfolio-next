import { Project } from "../types/project-type";

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio website to showcase my projects, skills and experience.",
    image: "/projects/portfolio-thumbnail.png",
    link: "https://myportfolio.com",
    tags: ["Web Development", "Design", "Portfolio", "Landing Page"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "2",
    title: "MG Investments",
    description:
      "A company specialized in direct investments in the real estate sector, focusing on hospitality and commercial assets in the UK and EU.",
    image: "/projects/mg-thumbnail.png",
    link: "https://mg-investment.vercel.app",
    tags: ["Web Development", "Landing Page"],
    technologies: ["Astro", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "3",
    title: "Wheelo Website",
    description:
      "An all-in-one motorcycle app designed to connect riders, manage trips, and share experiences.",
    image: "/projects/wheelo-thumbnail.png",
    link: "https://www.wheelo.it",
    tags: ["Web Development", "Landing Page", "Design"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];
