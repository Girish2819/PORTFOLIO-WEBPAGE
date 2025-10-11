import React from "react";
import { Database } from "lucide-react";

const Skills = () => {
  const skills = {
    languages: ["C++", "JavaScript", "HTML5", "CSS3", "SQL"],
    frameworks: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Linux"]
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        <Database className="inline mr-3" size={36} />
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-bold text-purple-300 mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <span key={i} className="bg-purple-900/50 text-purple-200 px-4 py-2 rounded-lg">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
