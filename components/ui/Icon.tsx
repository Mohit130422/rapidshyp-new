// Lightweight inline icon set so the project ships with zero icon dependencies.
// Each icon accepts className for sizing/color (uses currentColor).
import type { ReactNode } from "react";
import type { IconSet } from "@/types";

const I = ({
  children,
  className = "w-5 h-5",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const Icon: IconSet = {
  target: (p: { className?: string }) => (
    <I {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </I>
  ),
  truck: (p: { className?: string }) => (
    <I {...p}>
      <path d="M3 7h11v8H3z" />
      <path d="M14 10h4l3 3v2h-7" />
      <circle cx="7" cy="17" r="1.6" />
      <circle cx="17" cy="17" r="1.6" />
    </I>
  ),
  shield: (p: { className?: string }) => (
    <I {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </I>
  ),
  smile: (p: { className?: string }) => (
    <I {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14c1 1.3 2.4 2 4 2s3-.7 4-2" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </I>
  ),
  arrowUpRight: (p: { className?: string }) => (
    <I {...p}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </I>
  ),
  arrowRight: (p: { className?: string }) => (
    <I {...p}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </I>
  ),
  check: (p: { className?: string }) => (
    <I {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </I>
  ),
  sparkle: (p: { className?: string }) => (
    <I {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </I>
  ),
  bot: (p: { className?: string }) => (
    <I {...p}>
      <rect x="5" y="8" width="14" height="10" rx="3" />
      <path d="M12 4v4M9 13h.01M15 13h.01" />
      <path d="M3 12v2M21 12v2" />
    </I>
  ),
  phone: (p: { className?: string }) => (
    <I {...p}>
      <path d="M6 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
      <path d="M9 18h2" />
    </I>
  ),
  monitor: (p: { className?: string }) => (
    <I {...p}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </I>
  ),
  pin: (p: { className?: string }) => (
    <I {...p}>
      <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2" />
    </I>
  ),
  bolt: (p: { className?: string }) => (
    <I {...p}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
    </I>
  ),
  lock: (p: { className?: string }) => (
    <I {...p}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </I>
  ),
  wallet: (p: { className?: string }) => (
    <I {...p}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M16 14h2" />
    </I>
  ),
  card: (p: { className?: string }) => (
    <I {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </I>
  ),
  store: (p: { className?: string }) => (
    <I {...p}>
      <path d="M4 9 5 4h14l1 5" />
      <path d="M5 9v10h14V9" />
      <path d="M9 19v-5h6v5" />
    </I>
  ),
  box: (p: { className?: string }) => (
    <I {...p}>
      <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" />
      <path d="M3 7.5 12 12l9-4.5M12 12v9" />
    </I>
  ),
  apple: (p: { className?: string }) => (
    <I {...p}>
      <path d="M16 13c0 3 2 4 2 4-.5 1.5-1.5 3-3 3-1 0-1.5-.6-2.7-.6S10.2 20 9.2 20C7 20 5 16 5 13c0-3 2-5 4-5 1.2 0 2 .7 3 .7s1.6-.7 3-.7c1 0 2.4.4 3.2 1.6-2.5 1.4-2.4 4-2.4 4.4Z" />
      <path d="M13.5 5.5c.6-.8.9-1.8.8-2.5-.9.1-1.8.6-2.4 1.3-.5.6-.9 1.5-.7 2.4.9 0 1.7-.5 2.3-1.2Z" />
    </I>
  ),
  play: (p: { className?: string }) => (
    <I {...p}>
      <path d="m5 3 14 9-14 9z" />
    </I>
  ),
  quote: (p: { className?: string }) => (
    <I {...p}>
      <path d="M7 7h4v6H5v-2a4 4 0 0 1 2-4ZM15 7h4v6h-6v-2a4 4 0 0 1 2-4Z" />
    </I>
  ),
  chart: (p: { className?: string }) => (
    <I {...p}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </I>
  ),
  chevronDown: (p: { className?: string }) => (
    <I {...p}>
      <path d="m6 9 6 6 6-6" />
    </I>
  ),
  checkCircle: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={p?.className || "w-4 h-4"} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12 2.5 2.5L16 9" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  qr: (p: { className?: string }) => (
    <I {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3M21 14v7M17 21h-3M21 17h-4" />
    </I>
  ),
  instagram: (p: { className?: string }) => (
    <I {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </I>
  ),
  linkedin: (p: { className?: string }) => (
    <I {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4" />
    </I>
  ),
  youtube: (p: { className?: string }) => (
    <I {...p}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" />
    </I>
  ),
  x: (p: { className?: string }) => (
    <I {...p}>
      <path d="M4 4l16 16M20 4 4 20" />
    </I>
  ),
  clock: (p: { className?: string }) => (
    <I {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </I>
  ),
  calendar: (p: { className?: string }) => (
    <I {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </I>
  ),
  returnBox: (p: { className?: string }) => (
    <I {...p}>
      <path d="M21 8 12 3 3 8l9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M9 13H6m0 0 1.5-1.5M6 13l1.5 1.5" />
    </I>
  ),
  headset: (p: { className?: string }) => (
    <I {...p}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19a4 4 0 0 1-4 4h-2" />
    </I>
  ),
};

export default Icon;
