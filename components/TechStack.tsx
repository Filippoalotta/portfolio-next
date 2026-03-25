import Image from 'next/image';
import CGit from '@/public/icons/c-git.svg';
import HtmlCss from '@/public/icons/html-css.svg';
import JsTs from '@/public/icons/js-ts.svg';
import PostgresSupabase from '@/public/icons/postgres-supabase.svg';
import ReactNext from '@/public/icons/react-next.svg';
import TwNode from '@/public/icons/tw-node.svg';

export default function TechStack() {
  return (
    <div className="mb-8 flex flex-col items-start justify-center gap-5">
      <h4 className="font-bold text-base uppercase">Tech stack</h4>

      <div className="grid grid-cols-3 items-center justify-between gap-4">
        <div className="group">
          <Image
            src={HtmlCss}
            alt="html css icon"
            className="transition-transform duration-300 group-hover:-translate-y-3"
            unoptimized
            width={84}
            height={84}
          />
        </div>

        <div className="group">
          <Image
            src={JsTs}
            alt="js ts icon"
            className="transition-transform duration-300 group-hover:-translate-y-3"
            unoptimized
            width={84}
            height={84}
          />
        </div>

        <div className="group">
          <Image
            src={ReactNext}
            alt="react next icon"
            className="transition-transform duration-300 group-hover:-translate-y-3"
            unoptimized
            width={84}
            height={84}
          />
        </div>

        <div className="group">
          <Image
            src={TwNode}
            alt="tailwind nodejs icon"
            className="transition-transform duration-300 group-hover:-translate-y-3"
            unoptimized
            width={84}
            height={84}
          />
        </div>

        <div className="group">
          <Image
            src={PostgresSupabase}
            alt="postgres supabase icon"
            className="transition-transform duration-300 group-hover:-translate-y-3"
            unoptimized
            width={84}
            height={84}
          />
        </div>

        <div className="group">
          <Image
            src={CGit}
            alt="c icon"
            className="transition-transform duration-300 group-hover:-translate-y-3"
            unoptimized
            width={84}
            height={84}
          />
        </div>
      </div>
    </div>
  );
}
