"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import type { MegaConfig, MegaPanel, MegaListItem, VasItem, MegaCategory } from "@/types";

/* Middle panel — switches on the active category. New panel `type`s can be
   added here without touching anything else. */
function Panel({ panel }: { panel: MegaPanel }) {
  if (!panel) return null;

  if (panel.type === "media") {
    return (
      <div>
        <div className="relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800">
          <div className="absolute inset-0 grid place-items-center">
            <span className="rounded-md bg-white px-5 py-2 font-display text-lg font-extrabold text-ink shadow">
              <span className="mr-1 text-[10px] align-top font-semibold text-muted">RapidShyp</span>
              {panel.imageLabel}
            </span>
          </div>
          <div className="absolute inset-x-6 bottom-0 h-10 rounded-t-lg bg-black/20" />
        </div>
        {panel.cta && (
          <Link href={panel.cta.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-brand-700">
            {panel.cta.label}
            <Icon.arrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    );
  }

  // default: list
  return (
    <ul className="grid gap-1">
      {panel.items.map((it: MegaListItem) => {
        const Ico = Icon[it.icon] || Icon.box;
        return (
          <li key={it.title}>
            <Link
              href={it.href || "#"}
              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-surface-muted"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-white text-brand-600">
                <Ico className="h-5 w-5" />
              </span>
              <span className="text-[15px] font-semibold leading-tight text-ink group-hover:text-brand-700">
                {it.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function MegaMenu({
  mega,
  onEnter,
  onLeave,
}: {
  mega: MegaConfig;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const [active, setActive] = useState(0);
  const cats = mega.categories;
  const current = cats[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="absolute left-1/2 top-full z-50 w-[min(1100px,calc(100vw-2rem))] -translate-x-1/2 pt-3"
    >
      <div className="grid grid-cols-1 gap-3 rounded-[1.5rem] border border-line bg-surface-muted p-3 shadow-card lg:grid-cols-[300px_1fr_320px]">
        {/* LEFT — categories */}
        <div className="flex flex-col gap-2">
          {cats.map((cat: MegaCategory, i: number) => {
            const Ico = Icon[cat.icon] || Icon.box;
            const isActive = i === active;
            return (
              <button
                key={cat.id}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`flex items-start gap-3 rounded-2xl p-4 text-left transition ${
                  isActive ? "bg-white shadow-soft" : "hover:bg-white/60"
                }`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-white text-brand-600">
                  <Ico className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[15px] font-bold text-ink">{cat.title}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted">{cat.subtitle}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* MIDDLE — active category panel */}
        <div className="rounded-2xl bg-white p-5">
          <Panel panel={current.panel} />
        </div>

        {/* RIGHT — shared VAS (gradient border) */}
        {mega.vas && (
          <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-orange-accent p-[1.5px]">
            <div className="h-full rounded-2xl bg-white p-5">
              <h4 className="mb-3 font-display text-base font-bold text-ink">{mega.vas.title}</h4>
              <ul className="grid gap-3">
                {mega.vas.items.map((it: VasItem) => {
                  const Ico = Icon[it.icon] || Icon.box;
                  return (
                    <li key={it.title}>
                      <Link href="#" className="group flex gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-white text-brand-600">
                          <Ico className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-ink group-hover:text-brand-700">{it.title}</span>
                          <span className="mt-0.5 block text-xs leading-snug text-muted">{it.description}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
