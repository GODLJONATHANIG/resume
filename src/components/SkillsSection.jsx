import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", icon: "/assets/html.webp", level: 95, category: "frontend" },
  { name: "CSS", icon: "/assets/css.webp", level: 95, category: "frontend" },
  { name: "JavaScript", icon: "/assets/javascript.webp", level: 90, category: "frontend" },
  { name: "React", icon: "/assets/react.svg", level: 90, category: "frontend" },
  { name: "Tailwind CSS", icon: "/assets/tailwind.webp", level: 90, category: "frontend" },
  { name: "Bootstrap", icon: "/assets/bootstrap.webp", level: 90, category: "frontend" },

  // Backend
  { name: "Python", icon: "/assets/python.png", level: 80, category: "backend" },
  { name: "MongoDB", icon: "/assets/MongoDB.png", level: 70, category: "backend" },
  { name: "MySQL", icon: "/assets/SQL.png", level: 70, category: "backend" },
  { name: "Firebase", icon: "/assets/firebase.png", level: 70, category: "backend" },

  // Tools
  { name: "Git/GitHub", icon: "/assets/git.webp", level: 90, category: "tools" },
  { name: "Power BI", icon: "/assets/powerBI.png", level: 80, category: "tools" },
  { name: "Shopify", icon: "/assets/Shopify-Symbol.png", level: 80, category: "tools" },
  { name: "WordPress", icon: "/assets/wordpress.webp", level: 80, category: "tools" },
  { name: "vs code", icon: "/assets/vs-code.png", level: 80, category: "tools" },

];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <div className="flex items-center gap-2">
                  <img src={skill.icon} alt={skill.name + ' logo'} className="w-8 h-8" />
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}