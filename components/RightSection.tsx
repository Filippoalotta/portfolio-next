import EducationsList from './EducationsList';
import ExperiencesList from './ExperiencesList';
import Footer from './Footer';
import ProjectsList from './ProjectsList';

export default function RightSection() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:h-full lg:overflow-y-auto lg:pt-24">
      <p className="text-base text-description">
        <strong>Software Engineer with over 3 years of experience</strong> and a{' '}
        <strong>Robotics Engineering student</strong>. My goal upon graduation
        is to transition from pure software development into electronics. While
        I already have experience writing production-ready code, my studies will
        allow me to build solid hardware skills. For the past few years, I have
        been designing and assembling embedded systems to put what I learn into
        practice.
      </p>

      <ExperiencesList />

      <EducationsList />

      <ProjectsList />

      <Footer />
    </div>
  );
}
