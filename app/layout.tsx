import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  favicon: "/favicon.ico",
  title: "eCommerce Shipping & Courier Aggregator in India - RapidShyp",
  description:
    "RapidShyp is an eCommerce shipping platform for eCommerce brands looking to scale their business with reliable logistics services that meets their customers’ delivery expectations of faster delivery speed and superior post-purchase experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
