import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
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
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar activeSection={activeSection} />
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} activeSection={activeSection} />
      
      <main className="flex-grow pt-16 md:pt-0 md:pl-20 lg:pl-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
