import { FileUser } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function IconsLinkSection() {
  return (
    <div className="mt-3 flex items-center justify-between gap-4">
      <Link
        href="https://github.com/Filippoalotta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile of Filippo Alotta"
        className="group"
      >
        <Image
          src="/icons/github-white-icon.svg"
          alt="github icon"
          width={20}
          height={20}
          className="transition-transform duration-300 hover:scale-110 group-hover:rotate-12"
        />
      </Link>

      <Link
        href="https://www.linkedin.com/in/filippoalotta/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile of Filippo Alotta"
        className="group"
      >
        <Image
          src="/icons/linkedin-white-icon.svg"
          alt="linkedin icon"
          width={20}
          height={20}
          className="transition-transform duration-300 hover:scale-110 group-hover:rotate-12"
        />
      </Link>

      <Link
        href="mailto:filippoalotta.dev@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email Filippo Alotta"
        className="group"
      >
        <Image
          src="/icons/email-white-icon.svg"
          alt="email icon"
          width={24}
          height={24}
          className="transition-transform duration-300 hover:scale-110 group-hover:rotate-12"
        />
      </Link>

      <Link
        href="/cv/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download CV PDF"
        className="group"
      >
        <FileUser
          className="transition-transform duration-300 hover:scale-110 group-hover:rotate-12"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
}
