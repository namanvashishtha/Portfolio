import { FaEnvelope, FaFolderOpen, FaGithub, FaLinkedin, FaDownload, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";
import profilePhoto from "../../assets/profile-photo.jpg";
import toast, { Toaster } from "react-hot-toast";

const Hero = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleImageClick = () => {
    setClickCount(prev => prev + 1);
    setIsRotating(true);

    if (clickCount === 4) {
      toast("🎉 You found an easter egg! Keep clicking for more fun!");
    } else if (clickCount === 9) {
      toast.success("🔥 You're persistent! I like that!");
    } else if (clickCount === 14) {
      toast("✨ Secret mode activated! Enjoy the disco! 🎉", {
        icon: '🪩',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });

      document.body.classList.add("disco-mode");
      setTimeout(() => {
        document.body.classList.remove("disco-mode");
      }, 10000);
    }

    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group max-w-xs mx-auto md:mx-0">
              <div
                className="overflow-hidden rounded-full border-2 border-primary shadow-lg shadow-primary/20 z-10 relative transition-all duration-300 transform group-hover:scale-105 cursor-pointer"
                onClick={handleImageClick}
              >
                <div className="aspect-square w-full bg-gradient-to-br from-primary/20 to-background relative overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Naman Vashishtha"
                    className={`w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-110 ${isRotating ? 'animate-spin-once' : ''}`}
                    style={{
                      clipPath: "circle(50% at center)",
                      mixBlendMode: "normal"
                    }}
                    title="Click me for a surprise!"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              <span>Hi, I'm</span>
              <span className="text-primary block md:inline"> Naman Vashishtha</span>
            </h1>
            <div className="h-6 my-4">
              <span className="text-xl md:text-2xl font-light text-accent inline-block">
                Software Engineer
              </span>
            </div>
            <p className="text-light-text text-lg md:text-xl max-w-xl my-6">
              Software engineer with expertise in FullStack Development. Adept at managing end-to-end SDLC processes and delivering efficient, scalable solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2"
              >
                <FaEnvelope />
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2"
              >
                <FaFolderOpen />
                Projects
              </a>

              {/* ✅ Updated Download Button */}
              <a
                href="/Naman_Vashishtha_Resume.pdf"
                download="Naman_Vashishtha_Resume.pdf"
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2 group"
              >
                <FaDownload className="animate-download" />
                <span className="relative">
                  Download CV
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/namanvashishtha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/naman-vashishtha-974b011a1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://medium.com/@unclejiyo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text hover:text-primary transition-colors"
                aria-label="Medium Profile"
              >
                <FaMedium className="text-2xl" />
              </a>
              <a
                href="https://leetcode.com/u/unclejiyo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text hover:text-primary transition-colors"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode className="text-2xl" />
              </a>
              <a
                href="mailto:namanvashi@gmail.com"
                className="text-light-text hover:text-primary transition-colors"
                aria-label="Email Contact"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
