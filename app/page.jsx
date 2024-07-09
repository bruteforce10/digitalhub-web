import AboutSection from "@/components/AboutSection";
import Header from "@/components/HeaderSection";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="text-custom_background h-[3000px] mx-auto mt-6 overflow-x-hidden">
      <Navbar />
      <Header />
      <AboutSection />
      <TeamSection />
    </main>
  );
}
