import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  type: string;
  technologies: string[];
  colorClass: string;
  bgClass: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  icon,
  title,
  description,
  type,
  technologies,
  colorClass,
  bgClass,
}) => {
  return (
    <motion.div 
      className={`dark-card rounded-lg overflow-hidden hover:shadow-lg ${bgClass} transition-all group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className={`h-48 ${bgClass} flex items-center justify-center`}>
        <div className={`text-5xl ${colorClass}`}>{icon}</div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 group-hover:${colorClass} transition-colors`}>{title}</h3>
        <p className="text-muted mb-4">{type}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`px-3 py-1 ${bgClass} ${colorClass} rounded-full text-sm`}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-light-text text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
