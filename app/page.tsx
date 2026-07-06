import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AyumiMap from "@/components/sections/AyumiMap";
import ValueProps from "@/components/sections/ValueProps";
import UnifiedPlatform from "@/components/sections/UnifiedPlatform";
import FeatureSections from "@/components/sections/FeatureSections";
import BrandExperience from "@/components/sections/BrandExperience";
import Integrations from "@/components/sections/Integrations";
import Testimonials from "@/components/sections/Testimonials";
import MobileApp from "@/components/sections/MobileApp";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <AyumiMap />
        <ValueProps />
        <UnifiedPlatform />
        {/* <FeatureSections /> */}
        <BrandExperience />
        <Integrations />
        <Testimonials />
        <MobileApp />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
