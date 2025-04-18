import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  position: "left" | "right";
  title: string;
  company: string;
  period: string;
  details: string[];
  color: string;
  index: number;
}

const TimelineItem: FC<TimelineItemProps> = ({ 
  position, 
  title, 
  company, 
  period, 
  details,
  color,
  index
}) => {
  return (
    <motion.div 
      className="relative z-10 mb-12 md:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row items-start">
        {position === "left" ? (
          <>
            <div className="md:w-1/2 md:pr-16 mb-6 md:mb-16">
              <div className="md:text-right">
                <div className="hidden md:block absolute right-0 top-1 w-3 h-3 rounded-full bg-primary transform translate-x-1.5"></div>
                <h3 className={`text-xl font-semibold ${color}`}>{title}</h3>
                <h4 className="text-lg">{company}</h4>
                <p className="text-muted">{period}</p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-16 dark-card p-6 rounded-lg shadow-lg">
              <ul className="list-disc list-inside space-y-2 text-light-text ml-2">
                {details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="md:w-1/2 md:pr-16 mb-6 md:mb-16 md:text-right md:order-1 order-2">
              <div className="dark-card p-6 rounded-lg shadow-lg">
                <ul className="list-disc list-inside space-y-2 text-light-text ml-2">
                  {details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0 md:order-2 order-1">
              <div>
                <div className="hidden md:block absolute left-0 top-1 w-3 h-3 rounded-full bg-secondary transform -translate-x-1.5"></div>
                <h3 className={`text-xl font-semibold ${color}`}>{title}</h3>
                <h4 className="text-lg">{company}</h4>
                <p className="text-muted">{period}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
