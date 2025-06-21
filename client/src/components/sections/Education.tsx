import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-12 md:py-20 px-4 md:px-6 lg:px-12 xl:px-16">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Education</h2>
          <div className="h-1 w-16 md:w-20 bg-primary rounded"></div>
        </motion.div>
        <motion.div 
          className="dark-card p-4 sm:p-6 md:p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="text-primary text-3xl sm:text-4xl flex-shrink-0">
              <FaGraduationCap />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">B.Tech in Electrical & Electronics Engineering</h3>
              <p className="text-base sm:text-lg text-light-text mb-2">Bharati Vidyapeeth College of Engineering, New Delhi</p>
              <p className="text-muted mb-3 sm:mb-4 text-sm sm:text-base">July 2019 - June 2023</p>
              <div className="flex items-center gap-3">
                <span className="px-2 sm:px-3 py-1 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-medium">CGPA: 8.8</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
