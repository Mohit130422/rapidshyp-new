import type { NavLink, FooterColumn, MegaConfig } from "@/types";

// Header navigation + mega menus + footer (v4).
//
// MEGA MENU MODEL (extensible):
// Any nav link can carry a `mega` object. To add a new mega menu in future,
// just attach `mega` to that nav link with the same shape — the Header + MegaMenu
// components render it generically, no component changes needed.
//
//   mega: {
//     categories: [                      // left rail (switches the middle panel)
//       { id, title, subtitle, icon, panel }
//     ],
//     vas: { title, items: [{ icon, title, description }] }  // shared right panel
//   }
//
// `panel` is one of:
//   { type: "list",  items: [{ icon, title, href }] }
//   { type: "media", image, imageLabel, cta: { label, href } }

const productMega: MegaConfig = {
  categories: [
    {
      id: "domestic",
      title: "Domestic Shipping",
      subtitle: "Control every order from one place",
      icon: "store",
      panel: {
        type: "list",
        items: [
          { icon: "box", title: "Order Management", href: "#order-management" },
          { icon: "returnBox", title: "RTO Management", href: "#rto" },
          { icon: "bot", title: "AI Courier Recommendation", href: "#ai-courier" },
          { icon: "clock", title: "SDD/NDD", href: "#sdd-ndd" },
          { icon: "returnBox", title: "B2C Return", href: "#b2c-return" },
          { icon: "phone", title: "Buyer Communication", href: "#buyer-comms" },
        ],
      },
    },
    {
      id: "cargo",
      title: "RapidShyp Cargo+",
      subtitle: "Reduce returns and recover revenue",
      icon: "truck",
      panel: {
        type: "list",
        items: [
          { icon: "calendar", title: "ABD", href: "#abd" },
          { icon: "store", title: "CSD/Mall Delivery", href: "#csd-mall" },
          { icon: "truck", title: "PTL/FTL", href: "#ptl-ftl" },
        ],
      },
    },
    {
      id: "fulfillment",
      title: "RapidShyp Fulfillment",
      subtitle: "Improve delivery success and customer satisfaction",
      icon: "box",
      panel: {
        type: "media",
        imageLabel: "Fulfillment",
        cta: { label: "Learn More", href: "#fulfillment" },
      },
    },
  ],
  vas: {
    title: "VAS (Value Added Services)",
    items: [
      { icon: "checkCircle", title: "Order Verification", description: "Manage and track every order from a single dashboard." },
      { icon: "shield", title: "RapidShyp Shield", description: "Manage and track every order from a single dashboard." },
      { icon: "headset", title: "Delivery Pro", description: "Manage and track every order from a single dashboard." },
      { icon: "wallet", title: "RapidCOD", description: "Manage and track every order from a single dashboard." },
    ],
  },
};

export const navLinks: NavLink[] = [
  { label: "Product", href: "#product", mega: productMega },
  { label: "Solution", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Company", href: "#company" },
  { label: "Pricing", href: "#pricing" },
];

export const footerTagline =
  "RapidShyp helps brands simplify operations, reduce delivery friction, and create post-purchase experiences customers come back for.";

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    groups: [
      { heading: "Domestic Shipping", links: ["Order Management", "RTO Management", "AI Courier recommendation", "SDD/NDD", "B2C RETURN", "Courier Rules & Priority", "Buyer Communication"] },
      { heading: "Cargo+", links: ["Appointment Based Delivery", "PTL/FTL", "CSD/Mall Delivery"] },
      { heading: "Fulfillment", links: ["Pan India Storage", "Inventory Management"] },
    ],
  },
  {
    title: "Platform",
    groups: [
      { heading: "Core Platform", links: ["Weight Descripenies", "NDR", "Shipping Dashboard", "COD Management"] },
      { heading: "Intelligence", links: ["Ayumi", "Checkout (Coming Soon)"] },
      { heading: "Integration", links: ["Couriers", "Channels"] },
    ],
  },
  { title: "Resources", groups: [{ heading: "", links: ["Blog", "Case Studies", "Seller Academy", "API Docs"] }] },
  { title: "Company", groups: [{ heading: "", links: ["About Us", "Careers", "Newsroom"] }] },
  { title: "Legal", groups: [{ heading: "", links: ["Privacy Policy", "Terms & Conditions"] }] },
];

export const socials = ["instagram", "linkedin", "youtube", "x"];
