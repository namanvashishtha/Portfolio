import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-16 dark-card">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted">© {currentYear} Naman Vashishtha. All rights reserved.</p>
          </div>
          <div className="flex gap-5">
            <a 
              href="https://github.com/namanvashishtha" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/naman-vashishtha-974b011a1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://medium.com/@unclejiyo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-primary transition-colors"
              aria-label="Medium"
            >
              <FaMedium className="text-xl" />
            </a>
            <a 
              href="https://leetcode.com/u/unclejiyo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-primary transition-colors"
              aria-label="LeetCode"
            >
              <SiLeetcode className="text-xl" />
            </a>
            <a 
              href="mailto:namanvashi@gmail.com" 
              className="text-muted hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
