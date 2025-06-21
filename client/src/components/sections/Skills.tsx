import { FaCode, FaPaintBrush, FaDatabase, FaTools } from "react-icons/fa";
import SkillCard from "../ui/SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    {
      icon: <FaCode />,
      title: "Backend",
      skills: [
        "Java ",
        "Python",
        "Node.js",
        "Express.js",
        
      ],
      color: "text-primary",
      hoverShadow: "hover:shadow-primary/10"
    },
    {
      icon: <FaPaintBrush />,
      title: "Frontend",
      skills: [
        "JavaScript",
        "HTML ",
        "CSS",
        "Tailwind CSS",
        "React.js "
      ],
      color: "text-secondary",
      hoverShadow: "hover:shadow-secondary/10"
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      skills: [
        "PostgreSQL",
        "MSSQL",
        "MongoDB",
        "Redis",
      ],
      color: "text-yellow-500",
      hoverShadow: "hover:shadow-yellow-500/10"
    },
    {
      icon: <FaTools />,
      title: "Tools",
      skills: [
        "Git, GitHub, SVN",
        "VS Code, Eclipse, IntelliJ, PyCharm",
        "Postman, Docker"
      ],
      color: "text-primary",
      hoverShadow: "hover:shadow-primary/10"
    }
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4 md:px-6 lg:px-12 xl:px-16 keep-white">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-16 md:w-20 bg-primary rounded"></div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              color={skill.color}
              hoverShadow={skill.hoverShadow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
