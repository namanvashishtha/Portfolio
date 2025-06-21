import { FC } from "react";
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

const colorClassMap: Record<string, string> = {
  "bg-primary": "bg-pink-500",
  "bg-secondary": "bg-blue-500",
  "bg-green-500": "bg-green-500",
};

const TimelineItem: FC<TimelineItemProps> = ({
  position,
  title,
  company,
  period,
  details,
  color,
  index,
}) => {
  const colorClass = colorClassMap[color] || "bg-gray-400";
  const textColor = color.replace("bg-", "text-");

  return (
    <motion.div
      className="relative z-10 mb-8 sm:mb-12 lg:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col lg:flex-row items-start relative">
        {/* Dot on center vertical line - only show on desktop */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 z-20">
          <div className={`w-4 h-4 rounded-full ${colorClass}`}></div>
        </div>

        {/* Mobile Layout - Always show header then details */}
        <div className="lg:hidden w-full">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${colorClass} flex-shrink-0`}></div>
              <h3 className={`text-lg sm:text-xl font-semibold ${textColor}`}>{title}</h3>
            </div>
            <h4 className="text-base sm:text-lg font-medium">{company}</h4>
            <p className="text-muted text-sm sm:text-base">{period}</p>
          </div>
          <div className="dark-card p-4 sm:p-6 rounded-lg shadow-lg">
            <ul className="list-disc list-inside space-y-2 text-light-text ml-2">
              {details.map((detail, i) => (
                <li key={i} className="text-sm sm:text-base leading-relaxed">{detail}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Layout */}
        {position === "left" ? (
          <>
            {/* Left side */}
            <div className="hidden lg:block lg:w-1/2 lg:pr-16 mb-6 lg:mb-0 lg:text-right">
              <h3 className={`text-xl font-semibold ${textColor}`}>{title}</h3>
              <h4 className="text-lg">{company}</h4>
              <p className="text-muted">{period}</p>
            </div>
            <div className="hidden lg:block lg:w-1/2 lg:pl-16">
              <div className="dark-card p-6 rounded-lg shadow-lg">
                <ul className="list-disc list-inside space-y-2 text-light-text ml-2">
                  {details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Right side */}
            <div className="hidden lg:block lg:w-1/2 lg:pr-16 order-2 lg:order-1">
              <div className="dark-card p-6 rounded-lg shadow-lg">
                <ul className="list-disc list-inside space-y-2 text-light-text ml-2">
                  {details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 lg:pl-16 order-1 lg:order-2 mb-6 lg:mb-0">
              <h3 className={`text-xl font-semibold ${textColor}`}>{title}</h3>
              <h4 className="text-lg">{company}</h4>
              <p className="text-muted">{period}</p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
