'use client';

import { useState } from 'react';

export interface ProgramAccordionItem {
  label: string;
  title: string;
  summary: string;
  details: Array<{
    heading: string;
    body: string;
  }>;
}

interface ProgramAccordionProps {
  items: ProgramAccordionItem[];
}

export default function ProgramAccordion({ items }: ProgramAccordionProps) {
  const [openTitle, setOpenTitle] = useState(items[0]?.title ?? '');

  return (
    <div className="space-y-4">
      {items.map(({ label, title, summary, details }) => {
        const isOpen = openTitle === title;
        const panelId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-panel`;

        return (
          <article
            key={title}
            className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm
                       transition-all duration-300 hover:border-gold-500/40 hover:shadow-xl hover:shadow-neutral-900/10"
          >
            <button
              type="button"
              onClick={() => setOpenTitle(isOpen ? '' : title)}
              className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="flex gap-5">
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold-600">
                  {label}
                </span>
                <span>
                  <span className="block font-heading text-xl font-bold uppercase tracking-wide text-mil-black-800">
                    {title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-neutral-600">
                    {summary}
                  </span>
                </span>
              </span>

              <span
                className={`mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-neutral-200 text-gold-600 transition-transform duration-300 ${
                  isOpen ? 'rotate-45 bg-gold-500/10' : ''
                }`}
                aria-hidden="true"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-neutral-200 px-6 py-6">
                  <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                    {details.map(({ heading, body }) => (
                      <div key={heading} className="border-t border-gold-500/60 pt-4">
                        <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-mil-black-800">
                          {heading}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
