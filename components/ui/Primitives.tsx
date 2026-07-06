"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Icon from "./Icon";
import Image from "next/image";

/* Pill tag used across feature lists */
export function Tag({
  children,
  active = false,
  withIcon = true,
}: {
  children: ReactNode;
  active?: boolean;
  withIcon?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-brand-300 bg-brand-50 text-brand-700"
          : "border-line bg-white text-ink-soft hover:border-brand-200"
      }`}
    >
      {withIcon && <Icon.sparkle className="h-3.5 w-3.5 text-brand-400" />}
      {children}
    </span>
  );
}

/* Small uppercase eyebrow label */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block text-xs tracking-[1px] text-muted ${className}`}
    >
      {children}
    </span>
  );
}

/* Centered or left section heading with multi-line title support */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  titleClass = "",
  highlight = false,
}: {
  eyebrow?: ReactNode;
  title: string | string[];
  description?: ReactNode;
  align?: "center" | "left";
  titleClass?: string;
  highlight?: boolean;
}) {
  const lines = Array.isArray(title) ? title : [title];
  const alignCls =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <div className={`flex max-w-3xl flex-col ${alignCls}`}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <h2
        className={`text-3xl font-bold leading-[1.1] text-ink sm:text-4xl md:text-[2.6rem] ${titleClass}`}
      >
        {lines.map((line, i) => (
          <span key={i} className="block">
            {highlight && i === lines.length - 1 ? (
              <span className="text-gradient-brand">{line}</span>
            ) : (
              line
            )}
          </span>
        ))}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-[15px] leading-relaxed text-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* Brand logo mark + wordmark */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Image src="https://storage.googleapis.com/rapidshyp-website-cdn/temp/Logo.svg" alt="RapidShyp" width={150} height={150} />
    </span>
  );
}

/* Intersection-observer reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${shown ? "reveal" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
