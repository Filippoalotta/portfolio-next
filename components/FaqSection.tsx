'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { FaqItem } from '@/lib/types/faq-type';

export default function FaqSection({
  items,
  heading = 'Domande frequenti',
}: {
  items: FaqItem[];
  heading?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 border-slate-200 border-t py-12 sm:py-16"
    >
      <div className="max-w-2xl">
        <p className="font-semibold text-sky-600 text-xs uppercase tracking-widest">
          Chiarezza prima di iniziare
        </p>
        <h2
          id="faq-heading"
          className="mt-2 font-bold text-2xl text-slate-900 tracking-tight sm:text-3xl"
        >
          {heading}
        </h2>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {items.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl border border-slate-200 bg-white shadow-xs transition-colors hover:border-slate-300"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-base text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-sky-600' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-slate-100 border-t px-5 pt-4 pb-5 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
