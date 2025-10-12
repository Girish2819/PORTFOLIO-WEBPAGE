import React, { useState, useEffect } from "react";
import { Code, Database, Server, Smartphone, Palette, Cloud, Award, Users } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React", level: 90, icon: <Code className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", level: 85, icon: <Server className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
    { name: "MongoDB", level: 80, icon: <Database className="w-5 h-5" />, color: "from-green-600 to-green-400" },
    { name: "JavaScript", level: 95, icon: <Code className="w-5 h-5" />, color: "from-yellow-500 to-orange-500" },
    { name: "Python", level: 75, icon: <Code className="w-5 h-5" />, color: "from-blue-600 to-blue-400" },
    { name: "CSS/Tailwind", level: 88, icon: <Palette className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { name: "AWS", level: 70, icon: <Cloud className="w-5 h-5" />, color: "from-orange-500 to-yellow-500" },
    { name: "Mobile Dev", level: 65, icon: <Smartphone className="w-5 h-5" />, color: "from-indigo-500 to-purple-500" },
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: "Projects Completed", value: "50+", color: "text-yellow-400" },
    { icon: <Users className="w-6 h-6" />, title: "Happy Clients", value: "25+", color: "text-green-400" },
    { icon: <Code className="w-6 h-6" />, title: "Lines of Code", value: "100K+", color: "text-blue-400" },
    { icon: <Award className="w-6 h-6" />, title: "Awards Won", value: "5+", color: "text-purple-400" },
  ];

  return (
    <section id="about" className="section-padding bg-gray-800/30 backdrop-blur-sm relative z-30">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get to know me better and discover what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Computer Science undergraduate with a strong foundation in full-stack development. 
                My journey in technology began with curiosity and has evolved into a deep love for creating 
                innovative solutions that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in continuous learning and staying 
                updated with the latest trends in technology.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Code className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300">Frontend Development</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Server className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Backend Development</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Database className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300">Database Design</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <Palette className="w-5 h-5 text-pink-400" />
                  </div>
                  <span className="text-gray-300">UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg`}>
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 delay-${index * 100}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {achievements.map((achievement, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 card-hover group text-center">
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-xl bg-gray-800/50 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={achievement.color}>
                    {achievement.icon}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {achievement.value}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {achievement.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;