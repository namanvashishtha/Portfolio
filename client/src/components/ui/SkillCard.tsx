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
      className={`p-4 sm:p-6 dark-card rounded-lg hover:shadow-lg ${hoverShadow} transition-all hover:-translate-y-1 touch-manipulation active:scale-95`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${color} text-3xl sm:text-4xl mb-3 sm:mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <ul className="space-y-1.5 sm:space-y-2 text-light-text">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base leading-relaxed">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
