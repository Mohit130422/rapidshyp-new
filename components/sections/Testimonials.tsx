"use client";

import { useState } from "react";
import { testimonials } from "@/data/sections";
import { SectionHeading, Reveal } from "@/components/ui/Primitives";
import type { Testimonial } from "@/types";

function Card({ t, active }: { t: Testimonial; active: boolean }) {
  return (
    <div
      className={`flex h-full flex-col rounded-[var(--radius-card)] border bg-white p-7 transition-all ${
        active ? "border-brand-200 shadow-card" : "border-line opacity-70"
      }`}
    >
      <h4 className={`text-lg font-bold ${active ? "text-ink" : "text-muted"}`}>{t.headline}</h4>
      <p className={`mt-3 flex-1 text-sm leading-relaxed ${active ? "text-ink-soft" : "text-muted"}`}>
        RapidShyp helped us <span className="font-semibold">improve delivery performance</span> while reducing operational complexity.&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-300 to-orange-accent" />
        <div>
          <p className="text-sm font-bold text-ink">{t.name}</p>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const items = testimonials.items;
  const [idx, setIdx] = useState(1);
  const view = [items[(idx - 1 + items.length) % items.length], items[idx], items[(idx + 1) % items.length]];

  return (
    <section id="company" className="bg-white py-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading title={testimonials.title} description={testimonials.description} />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
            {view.map((t, i) => (
              <Card key={`${t.name}-${i}`} t={t} active={i === 1} />
            ))}
          </div>
        </Reveal>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-brand-700" : "w-2 bg-line hover:bg-brand-200"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
