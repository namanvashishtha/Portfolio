import { FC } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  activeSection: string;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, toggleMenu, activeSection }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "playground", label: "Playground" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 w-full dark-card h-16 flex items-center justify-between px-4 sm:px-6 z-50 border-b border-gray-800/50">
        <span className="text-xl font-bold text-primary">NV</span>
        <button 
          onClick={toggleMenu} 
          className="text-white bg-primary/20 p-3 rounded-lg focus:outline-none hover:bg-primary/30 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation active:scale-95"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </div>

      <div 
        className={`fixed top-16 left-0 w-full bg-[#121212]/95 backdrop-blur-sm overflow-hidden transition-all duration-300 z-40 ${
          isOpen ? "h-[calc(100vh-4rem)]" : "h-0"
        }`}
      >
        <nav className="p-4 sm:p-6">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`${
                    activeSection === item.id ? "text-primary bg-primary/10" : "text-white hover:bg-white/5"
                  } hover:text-primary block py-3 px-4 transition-all rounded-lg text-base font-medium touch-manipulation active:scale-95`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-4 sm:px-6 py-4 border-t border-gray-800/50 mt-4">
          <p className="text-white/70 text-sm mb-3">Connect with me</p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/namanvashishtha" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 touch-manipulation active:scale-95"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/naman-vashishtha-974b011a1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 touch-manipulation active:scale-95"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://medium.com/@unclejiyo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 touch-manipulation active:scale-95"
              aria-label="Medium Profile"
            >
              <FaMedium className="text-xl" />
            </a>
            <a 
              href="https://leetcode.com/u/unclejiyo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 touch-manipulation active:scale-95"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
