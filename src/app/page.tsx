import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 selection:bg-[#78866B] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <TechStack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
