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
  FaLinkedin,
  FaBlog,
  FaMedium,
  FaGamepad
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

interface SidebarProps {
  activeSection: string;
}

const Sidebar: FC<SidebarProps> = ({ activeSection }) => {
  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home", color: "#4ade80" },
    { id: "about", icon: <FaUser />, label: "About", color: "#60a5fa" },
    { id: "skills", icon: <FaCode />, label: "Skills", color: "#facc15" },
    { id: "experience", icon: <FaBriefcase />, label: "Experience", color: "#fb923c" },
    { id: "education", icon: <FaGraduationCap />, label: "Education", color: "#a78bfa" },
    { id: "projects", icon: <FaFolderOpen />, label: "Projects", color: "#34d399" },
    { id: "playground", icon: <FaGamepad />, label: "Playground", color: "#ec4899" },
    { id: "blog", icon: <FaBlog />, label: "Blog", color: "#f472b6" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact", color: "#38bdf8" },
  ];

  return (
    <aside className="md:w-20 lg:w-24 dark-card fixed md:relative z-50 transition-all duration-300 top-0 left-0 h-screen md:min-h-screen hidden md:flex flex-col items-center justify-between py-8">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-6 text-lg">
          NV
        </div>
        <div className="h-px w-8 bg-muted mb-6"></div>

        <nav>
          <ul className="flex flex-col gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.id} data-section={item.id} className="relative group">
                <a 
                  href={`#${item.id}`} 
                  className={`text-xl transition-colors ${
                    activeSection === item.id ? "text-primary" : "text-muted"
                  }`}
                  style={{ color: item.color }}
                >
                  {item.icon}
                </a>
                <span className="absolute left-10 opacity-0 group-hover:opacity-100 bg-dark text-white text-xs font-medium px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap z-50">
                  {item.label}
                </span>
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
              style={{ color: "#6e5494" }}
              aria-label="GitHub Profile"
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
              style={{ color: "#0e76a8" }}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </li>
          <li>
            <a 
              href="https://medium.com/@unclejiyo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-white transition-colors"
              style={{ color: "#00ab6c" }}
              aria-label="Medium Profile"
            >
              <FaMedium className="text-xl" />
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/u/unclejiyo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-white transition-colors"
              style={{ color: "#FFA116" }}
              aria-label="LeetCode Profile"
            >
              <SiLeetcode className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
