import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import ProgressBar from "../ui/ProgressBar";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-6 lg:px-12 xl:px-16 dark-section keep-white">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-16 md:w-20 bg-primary rounded"></div>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <p className="text-light-text leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Software engineer with expertise in Fullstack Development. Adept at managing end-to-end SDLC processes and delivering efficient, scalable solutions. Skilled in collaboration, problem-solving, and technical documentation.
            </p>
            <p className="text-light-text leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Currently working as a Software Engineer for Zenner Connect, Germany where I'm spearheading development of scalable web applications using Python and React.js.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 mt-6 sm:mt-8 contact-info">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary text-sm sm:text-base flex-shrink-0" />
                <span className="text-sm sm:text-base">Faridabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary text-sm sm:text-base flex-shrink-0" />
                <a 
                  href="mailto:namanvashi@gmail.com" 
                  className="hover:text-primary transition-colors text-sm sm:text-base break-all touch-manipulation"
                >
                  namanvashi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary text-sm sm:text-base flex-shrink-0" />
                <span className="text-sm sm:text-base">+91 8448362072</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-8 lg:mt-0">
            <div className="space-y-4 sm:space-y-5">
              <ProgressBar 
                skillName="Java Development" 
                percentage={90} 
                color="bg-primary"
              />
              <ProgressBar 
                skillName="Python & AI-ML" 
                percentage={85} 
                color="bg-secondary"
              />
              <ProgressBar 
                skillName="JavaScript & React" 
                percentage={80} 
                color="bg-accent"
              />
              <ProgressBar 
                skillName="Database Management" 
                percentage={75} 
                color= "bg-yellow-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
