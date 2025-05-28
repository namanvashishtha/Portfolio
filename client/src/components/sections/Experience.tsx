import TimelineItem from "../ui/TimelineItem";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      position: "left",
      title: "Software Engineer",
      company: "Zenner India, Faridabad",
      period: "April 2025 – Present",
      details: [
        "Spearheading development of scalable web applications from scratch using Python and React.js, enabling real-time data interaction and analytics.",
        "Architected RESTful APIs in Python and integrated with dynamic React frontends, enhancing responsiveness and user experience.",
        "Collaborating closely with cross-functional teams to define user requirements and deliver robust, end-to-end solutions.",
        "Streamlined 200K+ device records across multiple LNS databases by reconciling with MongoDB inventory, boosting provisioning accuracy to 100% and cutting errors by 95% through data validation, RCA, and process optimization."  
      ],
      color: "bg-primary"
    },
    {
      position: "right",
      title: "Software Engineer",
      company: "inMorphis Services, Noida",
      period: "December 2024 – March 2025",
      details: [
        "Developed scalable applications using JavaScript, enhancing process efficiency by 30%.",
        "Designed and optimized BPM workflows, reducing processing time by 25%.",
        "Automated business tasks, cutting manual effort by 40% and boosting accuracy.",
        "Integrated REST and SOAP APIs to improve system interoperability by 35%."
        
      ],
      color: "bg-secondary"
    },
    {
      position: "left",
      title: "Software Engineer",
      company: "Newgen Software, Noida",
      period: "January 2023 – December 2024",
      details: [
        "Led development of an Invoice Management System using Java and SQL, reducing manual workload by 80% and increasing client satisfaction by 70%.",
        "Automated DuckCreek Portal processes using Java and JavaScript, boosting claim settlement efficiency by 60%.",
        "Integrated over 50 APIs for folder creation, data population, and cabinet connectivity.",
        "Built applications from scratch and delivered client presentations that increased satisfaction scores by 25%."
      ],
      color: "bg-green-500"
    }
  ] as const;

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-16 dark-section">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1E1E1E] transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              position={exp.position}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              details={[...exp.details]}
              color={exp.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
