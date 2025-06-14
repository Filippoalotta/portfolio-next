import Link from "next/link";
import IconsLinkSection from "./IconsLinkSection";
import TechStack from "./TechStack";
import { Button } from "./ui/button";

export default function LeftSection() {
  return (
    <div className="flex pt-14 overflow-hidden flex-col justify-start lg:pt-24 items-start gap-8 lg:gap-16">
      <div className="flex flex-col justify-center items-start ">
        <h1 className="text-4xl text-bold">Filippo Alotta</h1>
        <h2 className="text-lg text-bold">FrontEnd Developer</h2>
        <p className="text-description mt-1  text-base max-w-80">
          I develop clean, accessible UI experiences for the modern web.
        </p>
        <IconsLinkSection />

        <Button variant={"default"} asChild className="mt-4">
          <Link href={"/cv/cv-sd.pdf"}>View Full CV</Link>
        </Button>
      </div>

      <TechStack />
    </div>
  );
}
