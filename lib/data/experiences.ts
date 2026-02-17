import { Experience } from "../types/experience-type";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "SwipeApp Studio",
    position: "Software Developer",
    startDate: "2024",
    description:
      "Developed scalable web applications using Next.js and TypeScript, managing the full rendering lifecycle (SSR/CSR) to optimize performance and SEO. Designed frontend architecture and integrated REST/GraphQL APIs, collaborating with backend teams to define strict data interface contracts. Implemented complex business logic across client and server-side environments (Next.js Middleware/API Routes), reducing database load and optimizing data flow.",
    websiteUrl: "https://www.swipeapp.studio",
  },
  {
    id: "2",
    company: "Wheelo",
    position: "Software Developer",
    startDate: "2024",
    description:
      "Led the migration of a legacy module to a modern Next.js/React architecture, improving code maintainability and decreasing build times. Refactored complex client-side logic into modular hooks and utility functions, drastically reducing technical debt and improving testability. Established coding standards and best practices for the project.",
    websiteUrl: "https://www.wheelo.it",
  },
  {
    id: "3",
    company: "Freelance",
    position: "Web Developer",
    startDate: "2023",
    endDate: "2024",
    description:
      "Designed and developed custom websites for small businesses, focusing on responsive layouts, user-friendly interfaces, and seamless shopping experiences. Collaborated with clients to understand their needs, translating requirements into functional and visually appealing web applications.",
  },
];
