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
    <div className="relative min-h-screen bg-white text-[#171717] selection:bg-[#556B49] selection:text-white">
      <Navbar />
      <main id="main-content">
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
