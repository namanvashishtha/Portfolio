import { FC } from "react";

interface ProgressBarProps {
  skillName: string;
  percentage: number;
  color: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ skillName, percentage, color }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skillName}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-[#1E1E1E] rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
