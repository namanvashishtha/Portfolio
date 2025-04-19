import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProgressBarProps {
  skillName: string;
  percentage: number;
  color: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ skillName, percentage, color }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skillName}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-[#1E1E1E] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
