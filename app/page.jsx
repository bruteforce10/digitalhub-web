import AboutSection from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";
import Header from "@/components/HeaderSection";

import Navbar from "@/components/Navbar";
import PackageSection from "@/components/PackageSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="text-custom_background h-[300000px] mx-auto mt-6 overflow-x-hidden">
      <Navbar />
      <Header />
      <AboutSection />
      <TeamSection />
      <FeatureSection />
      <PackageSection />
    </main>
  );
}
