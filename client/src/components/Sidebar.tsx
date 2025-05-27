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
  
  const socialItems = [
    { id: "github", icon: <FaGithub />, label: "GitHub", color: "#6e5494", url: "https://github.com/namanvashishtha" },
    { id: "linkedin", icon: <FaLinkedin />, label: "LinkedIn", color: "#0e76a8", url: "https://www.linkedin.com/in/naman-vashishtha-974b011a1" },
    { id: "medium", icon: <FaMedium />, label: "Medium", color: "#00ab6c", url: "https://medium.com/@unclejiyo" },
    { id: "leetcode", icon: <SiLeetcode />, label: "LeetCode", color: "#FFA116", url: "https://leetcode.com/u/unclejiyo" },
  ];

  return (
<aside className="md:w-20 dark-card fixed md:relative z-50 transition-all duration-300 top-0 left-0 min-h-fit hidden md:flex flex-col items-center py-8 overflow-visible">
      <div className="flex flex-col items-center w-full">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-6 text-lg">
          NV
        </div>
        <div className="h-px w-8 bg-muted mb-6"></div>

        <nav className="w-full">
          <ul className="flex flex-col gap-6 items-center">
            {/* Navigation Items */}
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
            
            {/* Divider between nav and social */}
            <div className="h-px w-8 bg-muted my-4"></div>
            
            {/* Social Media Icons */}
            {socialItems.map((item) => (
              <li key={item.id} className="relative group">
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl transition-colors"
                  style={{ color: item.color }}
                  aria-label={`${item.label} Profile`}
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
    </aside>
  );
};

export default Sidebar;
