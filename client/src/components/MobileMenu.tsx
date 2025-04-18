import { FC } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

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
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 w-full dark-card h-16 flex items-center justify-between px-6 z-50">
        <span className="text-xl font-bold text-primary">NV</span>
        <button 
          onClick={toggleMenu} 
          className="text-white focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      <div 
        className={`fixed top-16 left-0 w-full bg-[#121212] overflow-hidden transition-all duration-300 z-40 ${
          isOpen ? "h-[calc(100vh-4rem)]" : "h-0"
        }`}
      >
        <nav className="p-5">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`${
                    activeSection === item.id ? "text-primary" : "text-white"
                  } hover:text-primary block py-2 transition-colors`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-5 py-3 border-t border-gray-800">
          <div className="flex gap-5">
            <a 
              href="https://github.com/namanvashishtha" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/naman-vashishtha-974b011a1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
