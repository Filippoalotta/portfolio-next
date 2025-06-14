import ExperiencesList from "./ExperiencesList";
import Footer from "./Footer";
import ProjectsList from "./ProjectsList";

export default function RightSection() {
  return (
    <div className="lg:h-full flex-col py-6 lg:overflow-y-auto lg:pt-24 flex gap-10">
      <p className="text-description text-base">
        I’m a developer passionate about crafting accessible, pixel-perfect user
        interfaces that blend thoughtful design with robust engineering. My
        favorite work lies at the intersection of design and development,
        creating experiences that not only look great but are meticulously built
        for performance and usability. Currently, I'm a Senior Front-End
        Engineer at Klaviyo, specializing in accessibility. I contribute to the
        creation and maintenance of UI components that power Klaviyo’s frontend.
      </p>

      <ExperiencesList />

      <ProjectsList />

      <Footer />
    </div>
  );
}
