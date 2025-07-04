import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Playground from "./sections/Playground";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ParticleBackground from "./ParticleBackground";
import TechStackBanner from "./TechStackBanner";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Close mobile menu when section changes
    setIsOpen(false);
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden prevent-scroll">
      {/* Particle background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row w-full">
        <Sidebar activeSection={activeSection} />
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} activeSection={activeSection} />
        <TechStackBanner />
        <ThemeToggle />
        
        <main className="flex-grow pt-16 md:pt-0 px-4 md:px-8 lg:px-12 xl:px-20 text-left items-start overflow-x-hidden max-w-full w-full">

          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Playground />
          <Blog />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
