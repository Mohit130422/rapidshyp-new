import type { Hero, Stat, BrandStrip, AiMap, ValueProps } from "@/types";

// Hero, stats strip, brand logos, the AI map, and the four value props (v4).

export const hero: Hero = {
  badge: "India's e-Commerce Growth Enabler",
  title: ["Shipping", "Infrastructure Built for", "Modern D2C Brands"],
  description:
    "Manage orders, automate fulfillment, track shipments, and deliver faster customer experiences — all from one powerful logistics platform.",
  cta: { label: "Start Shipping for Free", href: "#start" },
  // floating chips shown over the collage
  chips: {
    checkout: "Checkout Conversion rate 40%",
    items: ["Order management", "AI courier Recommendation", "Branded Tracking"],
    scan: "Scan to Record",
    tracking: "Real Time Vehicle Movement Tracking",
    coverage: "Pan India Coverage",
    brand: "Your Brand Name",
  },
  image: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/hero-collage.webp`,
};

export const stats: Stat[] = [
  { value: "29k+", label: "PIN Codes Covered" },
  { value: "16+", label: "Courier Partners" },
  { value: "10 Million+", label: "Shipments Monthly" },
  { value: "Instant COD", label: "Payouts" },
  { value: "AI-Powered", label: "Courier Allocation" },
  { value: "9+ Channel", label: "Integrations" },
];

export const brandStrip: BrandStrip = {
  note: "Join 5,000+ Brands using RapidShyp to streamline their Shipping.",
  // Dummy placeholder images for now — swap `logo` with your real asset paths
  // (e.g. "/logos/century-markers.svg" after adding files to /public/logos).
  brands: [
    { name: "Mylo", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand28.svg` },
    { name: "Health farm", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand01.svg` },
    { name: "Aloe & me", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand02.svg` },
    { name: "doctor choice", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand03.svg` },
    { name: "nutrispray", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand04.svg` },
    { name: "roda", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand05.svg` },
    { name: "Healthy master", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand06.svg` },
    { name: "printme.in", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand07.svg` },
    { name: "vision veda", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand08.svg` },
    { name: "kimti", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand09.svg` },
    { name: "wellwith", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand10.svg` },
    { name: "gigani", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand11.svg` },
    { name: "bummer", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand12.svg` },
    { name: "khan global studies", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand13.svg` },
    { name: "pokonut", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand14.svg` },
    { name: "kyari", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand15.svg` },
    { name: "mishmash", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand16.svg` },
    { name: "wiselife", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand17.svg` },
    { name: "the element", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand18.svg` },
    { name: "tigc", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand19.svg` },
    { name: "astrotalk", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand20.jpg` },
    { name: "goatlife", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand21.png` },
    { name: "dsgroup", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand22.png` },
    { name: "beco", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand23.avif` },
    { name: "printo", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand24.png` },
    { name: "the man company", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand25.png` },
    { name: "beastlife", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand26.webp` },
    { name: "yogabar", logo: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/aboutus/rs-brand27.png` },
  ],
};

export const aiMap: AiMap = {
  title: "Scale shipping operations with AI",
  description: "End-to-end logistics automation for high-growth ecommerce brands.",
  channels: ["amazon", "WOO", "shopify", "Vinculum", "Unicommerce"],
  couriers: ["amazon shipping", "BLUE DART", "DELHIVERY", "XPRESSBEES", "SHADOWFAX"],
  capabilityNote: "AI profile Risking",
};

export const valueProps: ValueProps = {
  eyebrow: "RapidShyp gives you flexibility",
  title: "Reduce RTO. Deliver Faster. Scale Smarter.",
  description:
    "Eliminate fragmented logistics operations with a unified infrastructure built to simplify shipping, automate workflows, and improve delivery outcomes at scale.",
  cards: [
    { icon:  `${process.env.NEXT_PUBLIC_CDN_URL}/temp/icon/low-rates.svg`, title: "Lower Shipping Costs", description: "Optimize courier allocation with intelligent routing." },
    { icon: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/icon/fast-delivery.svg`, title: "Faster Deliveries", description: "Improve delivery speed with courier intelligence." },
    { icon:  `${process.env.NEXT_PUBLIC_CDN_URL}/temp/icon/rto.svg`, title: "Reduce RTO", description: "Automate NDR workflows and reduce failed deliveries." },
    { icon: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/icon/customer-experience.svg`, title: "Customer Experience", description: "Build trust with branded delivery experiences." },
  ],
};