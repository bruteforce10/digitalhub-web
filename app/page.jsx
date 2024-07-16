import AboutSection from "@/components/AboutSection";
import CallToActionSection from "@/components/CallToActionSection";
import FeatureSection from "@/components/FeatureSection";
import Header from "@/components/HeaderSection";
import NewSection from "@/components/NewSection";
import PackageSection from "@/components/PackageSection";
import TeamSection from "@/components/TeamSection";
import TestimoniSection from "@/components/TestimoniSection";

export default function Home() {
  return (
    <main className="text-custom_background mb-20 mx-auto mt-6 overflow-x-hidden ">
      <Header />
      <AboutSection />
      <TeamSection />
      <FeatureSection />
      <PackageSection />
      <CallToActionSection />
      <TestimoniSection />
      <NewSection />
    </main>
  );
}
