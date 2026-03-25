import IconsLinkSection from './IconsLinkSection';
import TechStack from './TechStack';

export default function LeftSection() {
  return (
    <div className="flex flex-col items-start justify-start gap-8 overflow-hidden pt-14 lg:gap-16 lg:pt-24">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-4xl text-bold">Filippo Alotta</h1>
        <h2 className="text-bold text-lg">Software Engineer</h2>

        <p className="mt-1 max-w-80 text-base text-description">
          Software, Engineering. Systems that work everywhere.
        </p>

        <IconsLinkSection />

        {/* <Button variant={"default"} asChild className="mt-4">
          <Link
            href={"/cv/cv.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Link>
        </Button> */}
      </div>

      <TechStack />
    </div>
  );
}
