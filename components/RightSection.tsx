import EducationsList from './EducationsList';
import ExperiencesList from './ExperiencesList';
import Footer from './Footer';
import ProjectsList from './ProjectsList';

export default function RightSection() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:h-full lg:overflow-y-auto lg:pt-24">
      <p className="text-base text-description">
        I am a software engineer specializing in TypeScript and Next.js. I
        currently work full-time on web projects, managing user interface
        development for enterprise dashboards. In parallel, I am studying
        Electronic Engineering: a path I chose to build solid architectural
        foundations for my practical work. I bring to development teams the
        pragmatism acquired in the field and the analytical rigor derived from
        my engineering studies.
      </p>

      <ExperiencesList />

      <EducationsList />

      <ProjectsList />

      <Footer />
    </div>
  );
}
