import Link from "next/link";
import IconsLinkSection from "./IconsLinkSection";
import TechStack from "./TechStack";
import { Button } from "./ui/button";

export default function LeftSection() {
  return (
    <div className="flex pt-14 overflow-hidden flex-col justify-start lg:pt-24 items-start gap-8 lg:gap-16">
      <div className="flex flex-col justify-center items-start ">
        <h1 className="text-4xl text-bold">Filippo Alotta</h1>
        <h2 className="text-lg text-bold">Software Engineer</h2>
        <p className="text-description mt-1 text-base max-w-80">
          Software, Engineering, Embedded. Systems that work everywhere.
        </p>
        <IconsLinkSection />

        <Button variant={"default"} asChild className="mt-4">
          <Link
            href={"/cv/cv.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Link>
        </Button>
      </div>

      <TechStack />
    </div>
  );
}
