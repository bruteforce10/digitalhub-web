import AboutSection from "@/components/AboutSection";
import Header from "@/components/HeaderSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="text-custom_background h-[3000px] mx-auto mt-6">
      <Navbar />
      <Header />
      <AboutSection />
    </main>
  );
}
