"use client";

import { useState } from "react";
import { faq } from "@/data/sections";
import { Reveal } from "@/components/ui/Primitives";
import Icon from "@/components/ui/Icon";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [filter, setFilter] = useState(1);

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container-x">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">{faq.title[0]}</h2>
          <p className="mt-3 text-sm text-muted">{faq.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {faq.filters.map((f, i) => (
              <button
                key={f}
                onClick={() => setFilter(i)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  filter === i
                    ? "border-brand-700 bg-brand-800 text-white"
                    : "border-line bg-white text-ink-soft hover:border-brand-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 divide-y divide-line border-t border-line">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-ink">
                      {i + 1}. {item.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition ${
                        isOpen ? "rotate-180 border-brand-300 bg-brand-50 text-brand-600" : ""
                      }`}
                    >
                      <Icon.chevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-sm leading-relaxed text-muted">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
