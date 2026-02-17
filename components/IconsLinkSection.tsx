import { FileUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function IconsLinkSection() {
  return (
    <div className="flex justify-between items-center gap-4 mt-3">
      <Link
        href={"https://github.com/Filippoalotta"}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Image
          src="/icons/github-white-icon.svg"
          alt="github icon"
          width={20}
          height={20}
          className="hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
        />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/filippoalotta/"}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Image
          src="/icons/linkedin-white-icon.svg"
          alt="linkedin icon"
          width={20}
          height={20}
          className="hover:scale-110 transition-transform group-hover:rotate-12 duration-300"
        />
      </Link>

      <Link
        href={"mailto:alottafilippo@gmail.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Image
          src="/icons/email-white-icon.svg"
          alt="email icon"
          width={24}
          height={24}
          className="hover:scale-110 transition-transform group-hover:rotate-12 duration-300"
        />
      </Link>
      <Link
        href={"/cv/cv.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <FileUser
          className="hover:scale-110 transition-transform group-hover:rotate-12 duration-300"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
}
