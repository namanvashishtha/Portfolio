import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
  color: string;
  hoverShadow: string;
}

const SkillCard: FC<SkillCardProps> = ({ icon, title, skills, color, hoverShadow }) => {
  return (
    <motion.div 
      className={`p-6 dark-card rounded-lg hover:shadow-lg ${hoverShadow} transition-all hover:-translate-y-1`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${color} text-4xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 text-light-text">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
