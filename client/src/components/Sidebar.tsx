import { FC } from "react";
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaBriefcase, 
  FaGraduationCap, 
  FaFolderOpen, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin 
} from "react-icons/fa";

interface SidebarProps {
  activeSection: string;
}

const Sidebar: FC<SidebarProps> = ({ activeSection }) => {
  const navItems = [
    { id: "home", icon: <FaHome className="text-xl" /> },
    { id: "about", icon: <FaUser className="text-xl" /> },
    { id: "skills", icon: <FaCode className="text-xl" /> },
    { id: "experience", icon: <FaBriefcase className="text-xl" /> },
    { id: "education", icon: <FaGraduationCap className="text-xl" /> },
    { id: "projects", icon: <FaFolderOpen className="text-xl" /> },
    { id: "contact", icon: <FaEnvelope className="text-xl" /> },
  ];

  return (
    <aside className="md:w-20 lg:w-24 dark-card fixed md:relative z-50 transition-all duration-300 top-0 left-0 h-screen md:min-h-screen hidden md:flex flex-col items-center justify-between py-8">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-10">
          NV
        </div>
        
        <nav>
          <ul className="flex flex-col gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.id} data-section={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`${
                    activeSection === item.id ? "text-primary" : "text-muted"
                  } hover:text-white transition-colors`}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <ul className="flex flex-col gap-5 items-center">
          <li>
            <a 
              href="https://github.com/namanvashishtha" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/naman-vashishtha-974b011a1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-white transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
