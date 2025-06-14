import ExperiencesList from "./ExperiencesList";
import Footer from "./Footer";
import ProjectsList from "./ProjectsList";

export default function RightSection() {
  return (
    <div className="lg:h-full flex-col py-6 lg:overflow-y-auto lg:pt-24 flex gap-10">
      <p className="text-description text-base">
        I’m a FrontEnd Developer dedicated to building inclusive, flawless UI
        designs that combine creative vision with solid technical skills. I
        excel where design meets development, crafting experiences that are
        visually appealing and carefully optimized for speed and ease of use.
        Currently, I’m a FrontEnd Developer at SwipeApp Studio, focusing on
        accessibility and helping create scalable UI components for both mobile
        and web platforms.
      </p>

      <ExperiencesList />

      <ProjectsList />

      <Footer />
    </div>
  );
}
