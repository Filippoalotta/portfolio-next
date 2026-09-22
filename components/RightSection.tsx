import EducationsList from './EducationsList';
import ExperiencesList from './ExperiencesList';
import Footer from './Footer';
import ProjectsList from './ProjectsList';

export default function RightSection() {
  return (
    <div className="flex flex-col gap-10 py-6 lg:h-full lg:overflow-y-auto lg:pt-24">
      <p className="text-base text-description">
        <strong>Software Engineer with over 3 years of experience</strong>, now a full-time
        <strong> Robotics Engineering student</strong>. I left my job with a clear goal: to
        transition from pure software development to electronics. I already have
        the experience to write solid, production-ready code; now I'm studying
        to pair it with hardware. Engineering, however, isn't just learned from
        books: getting my hands dirty right from the start is essential to me. I
        regularly design and build embedded systems (mostly ESP32-based) to test
        what I study in the real world. Check out my portfolio to see my
        software and hardware projects.
      </p>

      <ExperiencesList />

      <EducationsList />

      <ProjectsList />

      <Footer />
    </div>
  );
}
