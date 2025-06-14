import IconsLinkSection from "./IconsLinkSection";
import TechStack from "./TechStack";

export default function LeftSection() {
  return (
    <div className="flex lg:h-screen overflow-hidden flex-col justify-start lg:pt-24 items-start gap-8 lg:gap-16">
      <div className="flex flex-col justify-center items-start gap-2">
        <h1 className="text-4xl text-bold">Filippo Alotta</h1>
        <h2 className="text-lg text-bold">FrontEnd Developer</h2>
        <p className="text-description mt-1  text-base max-w-80">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <IconsLinkSection />
      </div>

      <TechStack />
    </div>
  );
}
