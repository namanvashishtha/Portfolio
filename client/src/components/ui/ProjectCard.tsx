import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  type: string;
  technologies: string[];
  colorClass: string; // e.g., "text-primary"
  bgClass: string;    // e.g., "bg-primary/10"
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
  const getHoverColorClass = (color: string) => {
    switch (color) {
      case "text-primary":
        return "group-hover:text-primary";
      case "text-secondary":
        return "group-hover:text-secondary";
      case "text-accent":
        return "group-hover:text-accent";
      case "text-blue-500":
        return "group-hover:text-blue-500";
      case "text-green-500":
        return "group-hover:text-green-500";
      case "text-yellow-500":
        return "group-hover:text-yellow-500";
      // Add more mappings if needed
      default:
        return "";
    }
  };

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
        <h3 
          className={`text-xl font-semibold mb-2 transition-colors duration-300 ${getHoverColorClass(colorClass)}`}
        >
          {title}
        </h3>

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
