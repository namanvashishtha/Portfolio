import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 sm:py-8 px-4 md:px-6 lg:px-12 xl:px-16 dark-card border-t border-gray-800/50">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-muted text-sm sm:text-base">© {currentYear} Naman Vashishtha. All rights reserved.</p>
          </div>
          <div className="flex gap-4 sm:gap-5">
            <a 
              href="https://github.com/namanvashishtha" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 touch-manipulation active:scale-95"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg sm:text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/naman-vashishtha-974b011a1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 touch-manipulation active:scale-95"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg sm:text-xl" />
            </a>
            <a 
              href="https://medium.com/@unclejiyo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 touch-manipulation active:scale-95"
              aria-label="Medium"
            >
              <FaMedium className="text-lg sm:text-xl" />
            </a>
            <a 
              href="https://leetcode.com/u/unclejiyo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 touch-manipulation active:scale-95"
              aria-label="LeetCode"
            >
              <SiLeetcode className="text-lg sm:text-xl" />
            </a>
            <a 
              href="mailto:namanvashi@gmail.com" 
              className="text-muted hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 touch-manipulation active:scale-95"
              aria-label="Email"
            >
              <FaEnvelope className="text-lg sm:text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
