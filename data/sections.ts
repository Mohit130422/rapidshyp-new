import type { BrandExperience, Integrations, Testimonials, MobileApp, Blog, Faq } from "@/types";

// Brand experience, integrations, testimonials, mobile app, blog, FAQ (v4).

export const brandExperience: BrandExperience = {
  eyebrow: "Post-Purchase Experience",
  title: ["Turn Shipping Into A", "Brand Experience"],
  description:
    "Create branded customer journeys with tracking pages, notifications, and communication flows designed for modern eCommerce brands.",
  cta: { label: "Explore RapidShyp Connect", href: "#connect" },
  image: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/brand-experience.webp`,
  cards: {
    whatsapp: { title: "WhatsApp", note: "Rich, Interactive updates with actions", metric: "Delivered 98.7%" },
    tracking: { title: "Branded Tracking", note: "Real time tracking with your brand experience", metric: "Page views 2.3M" },
  },
};

export const integrations: Integrations = {
  eyebrow: "Works With Your Stack",
  title: ["Works with the platforms", "you already rely on."],
  description:
    "From fast-growing D2C startups to high-volume sellers, RapidShyp helps brands streamline shipping operations at scale.",
  cta: { label: "Start Shipping for Free", href: "#start" },
  filters: ["Channels", "Couriers"],
  logos: ["EcoReturns", "amazon", "CLICKPOST", "Vinculum", "WOO", "base", "Unicommerce", "shopify", "EASYECOM", "OMSG"],
};

export const testimonials: Testimonials = {
  title: ["Built for the realities of modern", "eCommerce."],
  description:
    "From fast-growing D2C startups to high-volume sellers, RapidShyp helps brands streamline shipping operations at scale.",
  items: [
    { headline: "Faster and Smooth Services", quote: "RapidShyp helped us improve delivery performance while reducing operational complexity.", name: "Sanjeev Goenka", role: "Founder/CEO" },
    { headline: "Faster and Smooth Services", quote: "We cut our RTO by nearly a third in the first quarter. The NDR automation pays for itself.", name: "Priya Nair", role: "Ops Lead" },
    { headline: "Faster and Smooth Services", quote: "Switching couriers used to take days. Now SmartSelect just routes the order to whoever delivers best.", name: "Arjun Verma", role: "Founder" },
    { headline: "Faster and Smooth Services", quote: "Branded tracking turned our delivery wait into a real touchpoint with customers.", name: "Meera Shah", role: "Growth Lead" },
    { headline: "Faster and Smooth Services", quote: "One dashboard for every courier and channel. Our ops team finally breathes.", name: "Rahul Bose", role: "COO" },
  ],
};

export const mobileApp: MobileApp = {
  title: ["Run Your Shipping", "From Anywhere"],
  description:
    "Track orders, manage NDR, monitor deliveries, and stay in control of your eCommerce operations, wherever you are.",
  scanLabel: "Scan Me",
  downloadNote: "Download The App Now",
  stores: [
    { label: "App Store", caption: "Download on the", href: "#appstore" },
    { label: "Google Play", caption: "GET IT ON", href: "#googleplay" },
  ],
};

export const blog: Blog = {
  title: "Dive into our blogs.",
  description:
    "From fast-growing D2C startups to high-volume sellers, RapidShyp helps brands streamline shipping operations at scale.",
  viewAll: { label: "View All", href: "#blog" },
  featured: {
    tag: "SME",
    title: "Automated IVR Verification",
    excerpt: "Instant call verification to confirm customer intent before shipping",
    date: "12 June, 2026",
  },
  posts: [
    { tag: "Domestic Shipping", title: "Automated IVR Verification", excerpt: "Instant call verification to confirm customer intent before shipping", date: "12 June, 2026" },
    { tag: "Ayumi Sense", title: "Automated IVR Verification", excerpt: "Instant call verification to confirm customer intent before shipping", date: "12 June, 2026" },
    { tag: "Checkout", title: "Automated IVR Verification", excerpt: "Instant call verification to confirm customer intent before shipping", date: "12 June, 2026" },
  ],
};

export const faq: Faq = {
  title: ["Frequently Asked Questions"],
  description: "Instant call verification to confirm customer intent before shipping",
  filters: ["All Questions", "Domestic Shipping", "Cargo+", "Fulfillment", "Order Verification", "Weight Descripency"],
  items: [
    { q: "What does RapidShyp do?", a: "RapidShyp is a unified eCommerce logistics platform that handles shipping, NDR and RTO reduction, COD reconciliation, fulfillment, and post-purchase customer communication — all from one dashboard." },
    { q: "Who is RapidShyp for?", a: "From solo D2C founders to high-volume marketplace sellers and enterprise brands, RapidShyp scales to fit how you ship, sell, and grow." },
    { q: "How is RapidShyp different from other shipping platforms?", a: "Our AI engine, Ayumi, continuously optimizes courier allocation using speed, cost, and success-rate data — so you reduce RTO and improve delivery outcomes without manual intervention." },
    { q: "Can I integrate my store with RapidShyp?", a: "Yes. RapidShyp connects natively with Shopify, WooCommerce, leading marketplaces, and custom storefronts, with 9+ channel integrations available out of the box." },
    { q: "How does RapidShyp help reduce RTO?", a: "Automated IVR verification, intelligent retry workflows, address correction, and proactive customer outreach work together to reduce failed deliveries — brands typically see up to a 32% RTO reduction." },
    { q: "How quickly can I get started?", a: "You can sign up and start shipping for free in minutes. Connect a store, pick your couriers, and your first order can go out the same day." },
  ],
};
