import React, { useState, useEffect } from "react";
import { Code, Database, Server, Smartphone, Palette, Cloud, GitBranch, Terminal, Zap } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "TypeScript", level: 80, icon: "🔷" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 88, icon: "💨" },
        { name: "Next.js", level: 75, icon: "▲" },
        { name: "Vue.js", level: 70, icon: "💚" },
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "Django", level: 70, icon: "🎯" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "GraphQL", level: 65, icon: "📊" },
        { name: "Microservices", level: 60, icon: "🔧" },
        { name: "Authentication", level: 85, icon: "🔐" },
      ]
    },
    database: {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "MySQL", level: 70, icon: "🗄️" },
        { name: "Redis", level: 65, icon: "🔴" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Kubernetes", level: 60, icon: "⚙️" },
        { name: "Firebase", level: 80, icon: "🔥" },
      ]
    },
    tools: {
      title: "Tools & Others",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "GitHub", level: 95, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Figma", level: 75, icon: "🎨" },
        { name: "Postman", level: 85, icon: "📮" },
        { name: "Linux", level: 80, icon: "🐧" },
        { name: "Agile", level: 70, icon: "🏃" },
        { name: "Testing", level: 75, icon: "🧪" },
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="section-padding bg-gray-800/20 backdrop-blur-sm relative z-30">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {skillCategories[category].icon}
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass-effect rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-3 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-xl`}>
                {skillCategories[activeCategory].icon}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {skillCategories[activeCategory].title}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </h4>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className={`bg-gradient-to-r ${skillCategories[activeCategory].color} h-2 rounded-full transition-all duration-1000`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Additional Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6 card-hover group text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                Performance Optimization
              </h4>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Optimizing applications for speed, efficiency, and scalability
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 card-hover group text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                Version Control
              </h4>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Expert in Git workflows and collaborative development
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 card-hover group text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                Responsive Design
              </h4>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Creating beautiful, mobile-first user experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;