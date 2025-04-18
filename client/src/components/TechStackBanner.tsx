import React, { useState, useEffect } from 'react';
import { FaCode, FaDatabase, FaJava, FaPython, FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs, FaWifi } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiDocker, SiKubernetes, SiGit, SiFlask } from 'react-icons/si';
import { motion } from 'framer-motion';

const TechStackBanner = () => {
  const [activeTech, setActiveTech] = useState(0);
  const techStack = [
    { icon: <FaJava />, name: 'Java', color: 'bg-red-500' },
    { icon: <FaPython />, name: 'Python', color: 'bg-blue-500' },
    { icon: <FaWifi />, name: 'LoRaWAN', color: 'bg-purple-500' },
    { icon: <FaJs />, name: 'JavaScript', color: 'bg-yellow-500' },
    { icon: <SiTypescript />, name: 'TypeScript', color: 'bg-blue-600' },
    { icon: <FaReact />, name: 'React', color: 'bg-cyan-400' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: 'bg-indigo-600' },
    { icon: <SiFlask />, name: 'Flask', color: 'bg-gray-600' },
    { icon: <SiGit />, name: 'Git', color: 'bg-orange-600' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((current) => (current + 1) % techStack.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col gap-3 mr-4">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className={`flex items-center justify-end group cursor-pointer`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTech(index)}
          >
            <div 
              className={`transition-all duration-300 overflow-hidden flex items-center ${
                activeTech === index ? 'w-28' : 'w-0 group-hover:w-28'
              }`}
            >
              <span className={`text-xs font-medium px-2 whitespace-nowrap text-white ${activeTech === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                {tech.name}
              </span>
            </div>
            <div className={`h-8 w-8 ${tech.color} rounded-full flex items-center justify-center shadow-lg text-white ${activeTech === index ? 'scale-110' : ''}`}>
              {tech.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStackBanner;