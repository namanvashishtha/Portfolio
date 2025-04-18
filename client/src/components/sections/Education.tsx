import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 lg:px-16">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </motion.div>
        <motion.div 
          className="dark-card p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="text-primary text-4xl">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="text-xl font-semibold">B.Tech in Electrical & Electronics Engineering</h3>
              <p className="text-lg text-light-text">Bharati Vidyapeeth College of Engineering, New Delhi</p>
              <p className="text-muted mb-4">July 2019 - June 2023</p>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">CGPA: 8.8</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
