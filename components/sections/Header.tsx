"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { Logo } from "@/components/ui/Primitives";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import MegaMenu from "@/components/sections/MegaMenu";

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [megaOpen, setMegaOpen] = useState<string | null>(null); // label of open mega
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Flicker-free hover: small grace period when moving trigger <-> panel.
  const openMega = (label: string) => {
    if (timer.current) clearTimeout(timer.current);
    setMegaOpen(label);
  };
  const scheduleClose = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMegaOpen(null), 140);
  };
  const cancelClose = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  const activeMega = navLinks.find((l) => l.label === megaOpen && l.mega)?.mega;

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface-muted/85 backdrop-blur-md">
      <div className="container-x relative flex h-16 items-center justify-between">
        <Link href="#" aria-label="RapidShyp home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.mega ? (
              <div
                key={link.label}
                onMouseEnter={() => openMega(link.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    megaOpen === link.label ? "text-brand-700" : "text-ink-soft hover:text-brand-700"
                  }`}
                  aria-expanded={megaOpen === link.label}
                >
                  {link.label}
                  <Icon.chevronDown
                    className={`h-3.5 w-3.5 transition-transform ${megaOpen === link.label ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-700"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="#login" className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-700">
            Login
          </Link>
          <Button href="#start" variant="primary" size="sm">
            Try RapidShyp for free
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>

        {/* Desktop mega panel */}
        <AnimatePresence>
          {activeMega && (
            <MegaMenu mega={activeMega} onEnter={cancelClose} onLeave={scheduleClose} />
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-line bg-white md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) =>
              link.mega ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileExpanded((v) => (v === link.label ? null : link.label))}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-brand-50"
                  >
                    {link.label}
                    <Icon.chevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === link.label && (
                    <div className="space-y-4 px-3 pb-3 pt-1">
                      {link.mega.categories.map((cat) => (
                        <div key={cat.id}>
                          <p className="text-xs font-bold uppercase tracking-wide text-brand-600">{cat.title}</p>
                          <div className="mt-1.5 flex flex-col">
                            {cat.panel.type === "list" ? (
                              cat.panel.items.map((it) => (
                                <Link key={it.title} href={it.href || "#"} onClick={() => setOpen(false)} className="py-1.5 text-sm text-ink-soft hover:text-brand-700">
                                  {it.title}
                                </Link>
                              ))
                            ) : (
                              <Link href={cat.panel.cta?.href || "#"} onClick={() => setOpen(false)} className="py-1.5 text-sm text-ink-soft hover:text-brand-700">
                                {cat.panel.cta?.label || cat.title}
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                      {link.mega.vas && (
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-brand-600">{link.mega.vas.title}</p>
                          <div className="mt-1.5 flex flex-col">
                            {link.mega.vas.items.map((it) => (
                              <Link key={it.title} href="#" onClick={() => setOpen(false)} className="py-1.5 text-sm text-ink-soft hover:text-brand-700">
                                {it.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-brand-50">
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-3 flex flex-col gap-2">
              <Button href="#login" variant="outline" size="md">Login</Button>
              <Button href="#start" variant="primary" size="md">Try RapidShyp for free</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
