import type { ReactNode, SVGProps } from "react";

/* ---------- Shared ---------- */
export type IconName = string;
export interface CTA {
  label: string;
  href: string;
}

/* ---------- Icons ---------- */
export type IconComponent = (props: { className?: string }) => ReactNode;
export type IconSet = Record<string, IconComponent>;
export type SvgProps = SVGProps<SVGSVGElement> & { className?: string };

/* ---------- Navigation + Mega menu ---------- */
export interface MegaListItem {
  icon: IconName;
  title: string;
  href?: string;
}
export interface MegaListPanel {
  type: "list";
  items: MegaListItem[];
}
export interface MegaMediaPanel {
  type: "media";
  imageLabel: string;
  image?: string;
  cta?: CTA;
}
export type MegaPanel = MegaListPanel | MegaMediaPanel;

export interface MegaCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: IconName;
  panel: MegaPanel;
}
export interface VasItem {
  icon: IconName;
  title: string;
  description: string;
}
export interface MegaConfig {
  categories: MegaCategory[];
  vas?: { title: string; items: VasItem[] };
}
export interface NavLink {
  label: string;
  href: string;
  mega?: MegaConfig;
}

export interface FooterGroup {
  heading: string;
  links: string[];
}
export interface FooterColumn {
  title: string;
  groups: FooterGroup[];
}

/* ---------- Hero / stats / AI map / value props ---------- */
export interface Hero {
  badge: string;
  title: string[];
  description: string;
  cta: CTA;
  chips: {
    checkout: string;
    items: string[];
    scan: string;
    tracking: string;
    coverage: string;
    brand: string;
  };
  image: string;
}
export interface Stat {
  value: string;
  label: string;
}
export interface BrandLogo { 
  name: string; 
  logo: string; 
}
export interface BrandStrip { 
  note: string; 
  brands: BrandLogo[]; 
}
export interface AiMap {
  title: string;
  description: string;
  channels: string[];
  couriers: string[];
  capabilityNote: string;
}
export interface ValueCard {
  icon: IconName;
  title: string;
  description: string;
}
export interface ValueProps {
  eyebrow: string;
  title: string;
  description: string;
  cards: ValueCard[];
}

/* ---------- Unified platform + feature sections ---------- */
export interface UnifiedPlatform {
  eyebrow: string;
  title: string[];
  description: string;
}
export type FeatureVisualName =
  | "domestic"
  | "ayumi"
  | "ndr"
  | "cargo"
  | "fulfillment"
  | "checkout";
export interface FeatureSection {
  id: string;
  image: string;
  visual: FeatureVisualName;
  icon: IconName;
  name: string;
  title: string;
  accent?: string;
  badge?: string;
  description: string;
  tags: string[];
  cta: CTA;
}

/* ---------- Other sections ---------- */
export interface BrandExperience {
  eyebrow: string;
  title: string[];
  description: string;
  cta: CTA;
  image: string;
  cards: {
    whatsapp: { title: string; note: string; metric: string };
    tracking: { title: string; note: string; metric: string };
  };
}
export interface Integrations {
  eyebrow: string;
  title: string[];
  description: string;
  cta: CTA;
  filters: string[];
  logos: string[];
}
export interface Testimonial {
  headline: string;
  quote: string;
  name: string;
  role: string;
}
export interface Testimonials {
  title: string[];
  description: string;
  items: Testimonial[];
}
export interface MobileApp {
  title: string[];
  description: string;
  scanLabel: string;
  downloadNote: string;
  stores: { label: string; caption: string; href: string }[];
}
export interface BlogPost {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
}
export interface Blog {
  title: string;
  description: string;
  viewAll: CTA;
  featured: BlogPost;
  posts: BlogPost[];
}
export interface FaqItem {
  q: string;
  a: string;
}
export interface Faq {
  title: string[];
  description: string;
  filters: string[];
  items: FaqItem[];
}
