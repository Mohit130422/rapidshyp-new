import type { UnifiedPlatform, FeatureSection } from "@/types";

// Unified-platform showcase + the detailed feature sections (v4).

export const unifiedPlatform: UnifiedPlatform = {
  eyebrow: "eCommerce Infrastructure",
  title: ["Simplify Shipping", "Operations with One", "Unified Platform."],
  description:
    "From order processing to delivery intelligence, RapidShyp helps eCommerce brands run faster and smarter operations.",
};

export const featureSections: FeatureSection[] = [
  {
    id: "domestic-shipping",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/features/feature.webp`,
    visual: "domestic",
    icon: "store",
    name: "Domestic Shipping",
    title: "Domestic Shipping",
    accent: "Domestic",
    description:
      "Empower your brand with reliable last-mile delivery that enhances customer satisfaction and retention.",
    tags: [
      "Order Management",
      "Order Verification",
      "RTO Management",
      "AI Courier Recommendation",
      "Same Day Delivery",
      "Next Day Delivery",
      "Express Delivery",
      "Buyer Communication",
    ],
    cta: { label: "Explore Shipping", href: "#shipping" },
  },
  {
    id: "ai-delivery",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/features/ayumi-feature.webp`,
    visual: "ayumi",
    icon: "bot",
    name: "Ayumi-Ai Based Shipping Assistance",
    title: "AI Delivery Intelligence",
    description:
      "Ayumi is RapidShyp's proprietary AI engine that brings predictability to logistics. It evaluates shipment risk, courier reliability, and delivery timelines before dispatch.",
    tags: ["AYUMI Sense", "AYUMI Select", "AYUMI Predict", "AYUMI Promise"],
    cta: { label: "Explore Ayumi", href: "#ayumi" },
  },
  {
    id: "cargo-plus",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/features/cargo-plus-feature.webp`,
    visual: "cargo",
    icon: "truck",
    name: "Cargo+",
    title: "Cargo+ (B2B Shipping)",
    description:
      "Create a post-purchase experience your customers actually remember.",
    tags: ["Appointment Based Delivery", "PTL/FTL", "Canteen/Mall Delivery"],
    cta: { label: "Explore Cargo+", href: "#cargo" },
  },
  {
    id: "fulfillment",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/features/fulfillment-feature.webp`,
    visual: "fulfillment",
    icon: "box",
    name: "Fulfillment",
    title: "RapidShyp Fulfillment",
    description:
      "RapidShyp's PAN India warehousing network handles everything from inventory receiving to last-mile dispatch, so you can focus on growing, not operating.",
    tags: ["PAN India Availability"],
    cta: { label: "Explore Fulfillment", href: "#fulfillment" },
  },
  {
    id: "checkout",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/temp/features/checkout-feature.webp`,
    visual: "checkout",
    icon: "card",
    name: "Checkout",
    title: "RapidShyp Checkout",
    badge: "Coming Soon!",
    description:
      "Connect Shopify, WooCommerce, marketplaces, and custom storefronts seamlessly.",
    tags: [
      "Discount Logic",
      "COD Control",
      "Cart Value Discounts",
      "Custom Studio",
      "Prefetch Address fill",
      "Integrated Payment Experience",
    ],
    cta: { label: "Explore Checkout", href: "#checkout" },
  },
];