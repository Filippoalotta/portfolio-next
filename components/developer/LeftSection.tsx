import IconsLinkSection from './IconsLinkSection';
import TechStack from './TechStack';

export default function LeftSection() {
  return (
    <div className="flex flex-col items-start justify-start gap-8 overflow-hidden pt-14 lg:gap-16 lg:pt-24">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-4xl text-bold">Filippo Alotta</h1>

        <p className="mt-1 max-w-80 text-base text-description leading-tight">
          Software Engineer | Robotics Engineer
        </p>

        <IconsLinkSection />
      </div>

      <TechStack />
    </div>
  );
}
