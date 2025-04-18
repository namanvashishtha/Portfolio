import { FaEnvelope, FaFolderOpen, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profilePhoto from "../../assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group max-w-xs mx-auto md:mx-0">
              <div className="overflow-hidden rounded-full border-2 border-primary shadow-lg shadow-primary/20 z-10 relative transition-all duration-300 transform group-hover:scale-105">
                <div className="aspect-square w-full bg-gradient-to-br from-primary/20 to-background relative overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Naman Vashishtha"
                    className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      clipPath: "circle(50% at center)",
                      mixBlendMode: "normal"
                    }}
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
              Software engineer with expertise in Java, Python, AI-ML, and JavaScript. Adept at managing end-to-end SDLC processes and delivering efficient, scalable solutions.
            </p>
            <div className="flex gap-4 mt-8">
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
            </div>
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/namanvashishtha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-text hover:text-primary transition-colors"
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
                href="mailto:namanvashi@gmail.com" 
                className="text-light-text hover:text-primary transition-colors"
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
