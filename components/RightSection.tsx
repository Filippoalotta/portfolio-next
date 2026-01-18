import EducationsList from './EducationsList';
import ExperiencesList from './ExperiencesList';
import Footer from './Footer';
import ProjectsList from './ProjectsList';

export default function RightSection() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:h-full lg:overflow-y-auto lg:pt-24">
      <p className="text-base text-description">
        As a Software Engineer, I am committed to building robust systems,
        encompassing both the user experience and the system architecture. My
        practical field experience, combined with my academic background in
        Electronic Engineering, allows me to approach technical problems with a
        broader, principle-based perspective.
      </p>

      <ExperiencesList />

      <EducationsList />

      <ProjectsList />

      <Footer />
    </div>
  );
}
