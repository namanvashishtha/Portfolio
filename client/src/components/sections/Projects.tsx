import { FaFileInvoice, FaWind, FaRocket } from "react-icons/fa";
import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      icon: <FaFileInvoice />,
      title: "IDP Accelerator",
      description: "Built frontend in React.js (500+ form enhancements); backend in Java (20+ JSON extractions, servlets, APIs). Managed 15+ SQL tables; implemented robust OCR zone-based extraction increasing accuracy by 85%.",
      type: "Full-Stack Development",
      technologies: ["Java", "JSON", "REST API", "MSSQL", "JavaScript"],
      colorClass: "text-primary",
      bgClass: "bg-primary/10"
    },
    {
      icon: <FaWind />,
      title: "Wind Power Forecasting",
      description: "Built predictive UI with 70% accuracy; used 17,000+ row SCADA dataset for model training. Applied regression/classification models and feature engineering for optimal performance.",
      type: "ML-Based Energy Prediction System",
      technologies: ["Python", "PostgreSQL", "React.js", "Machine Learning"],
      colorClass: "text-secondary",
      bgClass: "bg-secondary/10"
    },
    {
      icon: <FaRocket />,
      title: "FNOL Accelerator",
      description: "Architected a portal for auto-populating customer policy details and generating claim numbers. Worked on NewgenOne to automate business rules and process flow.",
      type: "Frontend and Backend Development",
      technologies: ["Java", "JSON", "REST API", "JavaScript", "XML"],
      colorClass: "text-accent",
      bgClass: "bg-accent/10"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-16 dark-section">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
              type={project.type}
              technologies={project.technologies}
              colorClass={project.colorClass}
              bgClass={project.bgClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
