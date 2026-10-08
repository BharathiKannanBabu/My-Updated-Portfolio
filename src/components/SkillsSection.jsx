import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML5 / CSS3", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 85, category: "frontend" },
  { name: "TypeScript", level: 65, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },
  { name: "Redux Toolkit", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "Socket.IO", level: 80, category: "backend" },
  { name: "JWT Authentication", level: 80, category: "backend" },
  { name: "OAuth Authentication", level: 70, category: "backend" },

  // Database
  { name: "MongoDB", level: 90, category: "database" },
  { name: "Mongoose", level: 85, category: "database" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "PostgreSQL", level: 75, category: "database" },

  // DevOps & Cloud
  { name: "Docker", level: 70, category: "devops" },
  { name: "AWS", level: 65, category: "devops" },
  { name: "CI/CD", level: 65, category: "devops" },
  { name: "GitHub Actions", level: 65, category: "devops" },

  // Tools
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 90, category: "tools" },
  { name: "MongoDB Compass", level: 85, category: "tools" },
  { name: "MySQL Workbench", level: 80, category: "tools" },
  { name: "pgAdmin", level: 75, category: "tools" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "database",
  "devops",
  "tools",
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 cursor-pointer rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
