import { FaCode, FaPaintBrush, FaDatabase, FaTools } from "react-icons/fa";
import SkillCard from "../ui/SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    {
      icon: <FaCode />,
      title: "Backend",
      skills: [
        "Java (JSON, REST API, Servlets)",
        "Python",
        "AI-ML",
        "LoRaWAN"
      ],
      color: "text-primary",
      hoverShadow: "hover:shadow-primary/10"
    },
    {
      icon: <FaPaintBrush />,
      title: "Frontend",
      skills: [
        "JavaScript",
        "HTML 5",
        "CSS",
        "React.js, Redux.js"
      ],
      color: "text-secondary",
      hoverShadow: "hover:shadow-secondary/10"
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      skills: [
        "PostgreSQL",
        "MSSQL"
      ],
      color: "text-accent",
      hoverShadow: "hover:shadow-accent/10"
    },
    {
      icon: <FaTools />,
      title: "Tools",
      skills: [
        "Git, GitHub, SVN",
        "VS Code, Eclipse, IntelliJ, PyCharm",
        "Postman, ChirpStack"
      ],
      color: "text-primary",
      hoverShadow: "hover:shadow-primary/10"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-16">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
