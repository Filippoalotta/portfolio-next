import AstroFigma from "@/public/icons/astro-figma.svg";
import HtmlCss from "@/public/icons/html-css.svg";
import JsTs from "@/public/icons/js-ts.svg";
import ReactNext from "@/public/icons/react-next.svg";
import TwScss from "@/public/icons/tw-scss.svg";
import CGit from "@/public/icons/c-git.svg";

import Image from "next/image";

export default function TechStack() {
  return (
    <div className="flex flex-col justify-center items-start mb-8 gap-5">
      <h4 className="text-base font-bold uppercase">Tech stack</h4>

      <div className="grid grid-cols-3 justify-between items-center gap-4">
        <div className="group">
          <Image
            src={HtmlCss}
            alt="html css icon"
            className="group-hover:-translate-y-3 transition-transform duration-300"
            unoptimized
            width={84}
            height={84}
          />
        </div>

        <div className="group">
          <Image
            src={JsTs}
            alt="js ts icon"
            className="group-hover:-translate-y-3 transition-transform duration-300"
            unoptimized
            width={84}
            height={84}
          />
        </div>

        <div className="group">
          <Image
            src={ReactNext}
            alt="react next icon"
            className="group-hover:-translate-y-3 transition-transform duration-300"
            unoptimized
            width={84}
            height={84}
          />
        </div>

        <div className="group">
          <Image
            src={TwScss}
            alt="tailwind scss icon"
            className="group-hover:-translate-y-3 transition-transform duration-300"
            unoptimized
            width={84}
            height={84}
          />
        </div>

        <div className="group">
          <Image
            src={AstroFigma}
            alt="astro figma icon"
            className="group-hover:-translate-y-3 transition-transform duration-300"
            unoptimized
            width={84}
            height={84}
          />
        </div>

        <div className="group">
          <Image
            src={CGit}
            alt="c icon"
            className="group-hover:-translate-y-3 transition-transform duration-300"
            unoptimized
            width={84}
            height={84}
          />
        </div>
      </div>
    </div>
  );
}
