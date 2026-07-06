import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--radius-pill)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

const variants = {
  primary:
    "bg-brand-800 text-white hover:bg-brand-700 shadow-[0_10px_30px_-12px_rgba(60,15,89,0.6)] hover:-translate-y-0.5",
  amber:
    "bg-[var(--color-amber-accent)] text-brand-900 hover:brightness-105 shadow-[0_10px_30px_-12px_rgba(245,197,24,0.7)] hover:-translate-y-0.5",
  outline:
    "border border-brand-200 text-brand-800 bg-white hover:border-brand-400 hover:bg-brand-50",
  ghostLight:
    "border border-white/40 text-white hover:bg-white/10",
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  size = "md",
  icon,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
      {icon}
    </Link>
  );
}
