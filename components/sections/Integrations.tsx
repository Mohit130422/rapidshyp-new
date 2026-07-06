"use client";

import { useState } from "react";
import { integrations } from "@/data/sections";
import { Eyebrow, Reveal } from "@/components/ui/Primitives";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Integrations() {
  const [active, setActive] = useState(0);
  return (
    <section id="resources" className="bg-white py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow className="mb-3">{integrations.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {integrations.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {integrations.description}
          </p>
          <div className="mt-6">
            <Button href={integrations.cta.href} variant="primary" size="md">
              {integrations.cta.label}
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {integrations.filters.map((f, i) => (
              <button
                key={f}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  active === i
                    ? "border-brand-300 bg-brand-700 text-white"
                    : "border-line bg-white text-ink-soft hover:border-brand-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto flex h-96 w-96 items-center justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-gradient-to-br from-brand-200/40 via-rose-100/40 to-orange-accent/30 blur-xl" />
            <div className="spin-slow absolute h-72 w-72 rounded-full border border-dashed border-line" />
            <div className="relative z-10 grid h-24 w-24 place-items-center rounded-full bg-white shadow-card">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-800 text-white">
                <Icon.arrowUpRight className="h-6 w-6" />
              </span>
            </div>
            {integrations.logos.map((logo, i) => {
              const angle = (i / integrations.logos.length) * Math.PI * 2 - Math.PI / 2;
              const r = 150;
              return (
                <span
                  key={logo}
                  className="absolute z-20 rounded-xl border border-line bg-white px-3 py-2 text-xs font-bold text-ink shadow-soft"
                  style={{ transform: `translate(${Math.cos(angle) * r}px, ${Math.sin(angle) * r}px)` }}
                >
                  {logo}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
