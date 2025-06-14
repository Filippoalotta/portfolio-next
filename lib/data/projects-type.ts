import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    image: "/images/portfolio.png",
    link: "https://myportfolio.com",
    tags: ["Web Development", "Design"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description:
      "An e-commerce platform with a user-friendly interface and secure payment system.",
    image: "/images/ecommerce.png",
    link: "https://myecommerce.com",
    tags: ["Web Development", "E-commerce"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "3",
    title: "Chat Application",
    description:
      "A real-time chat application with support for group chats and file sharing.",
    image: "/images/chatapp.png",
    link: "https://mychatapp.com",
    tags: ["Web Development", "Real-time"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];
