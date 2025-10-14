import React, { useState, useEffect } from "react";
import { Code, ExternalLink, Github, Eye, Calendar, User, Star, ArrowRight } from "lucide-react";
import { useScrollAnimationWithRef } from "../hooks/useScrollAnimation";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [setRef, isVisible] = useScrollAnimationWithRef(0.1, 200);

  const projects = [
    {
      title: "E-Commerce Platform",
      role: "Full Stack Developer",
      year: "2024",
      description:
        "Built a complete e-commerce solution with authentication, payment gateway, and admin dashboard.",
      tech: ["Node.js", "Express.js", "MongoDB", "Stripe", "JWT", "React"],
      icon: "🛍️",
      color: "#47A248",
      category: "fullstack",
      github: "https://github.com/Girish2819",
      demo: "#",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      features: [
        "REST API Development",
        "Payment Integration",
        "Authentication",
        "Database Design",
        "Admin Dashboard",
      ],
    },
    {
      title: "Skill Connect Platform",
      role: "Full Stack Developer",
      year: "2025",
      description:
        "Developed a full-stack web application to connect students and professionals based on their skills and interests. Includes profile management, messaging, and opportunity sharing features.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      icon: "🤝",
      color: "#00B5D8",
      category: "fullstack",
      github: "https://github.com/Girish2819", // replace with actual repo if different
      demo: "#",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      features: [
        "Skill-based User Matching",
        "Profile & Dashboard System",
        "Real-time Messaging",
        "Post & Share Opportunities",
        "Secure Authentication"
      ],
    },
    
    {
      title: "Portfolio Website",
      role: "Full Stack Developer",
      year: "2025",
      description:
        "Built a dynamic personal portfolio website using the MERN stack to showcase my projects, skills, and professional experience. Implemented smooth animations, modular design, and backend data management for scalability.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      icon: "💼",
      color: "#6D28D9",
      category: "fullstack",
      github: "https://github.com/Girish2819/First_project_webTec.git",
      demo: "#",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1604147706283-d7119b5f9cc4?w=600&h=400&fit=crop",
      features: [
        "Dynamic Project Management",
        "Smooth Animations & Transitions",
        "Backend Integration with MongoDB",
        "Responsive Design",
        "Optimized Performance"
      ],
    },
    
    {
      title: "Blinkit Clone",
      role: "Frontend Developer",
      year: "2025",
      description:
        "Created a responsive Blinkit clone with smooth UI, navigation, and dynamic product grid.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🛒",
      color: "#FFCD00",
      category: "frontend",
      github: "https://github.com/Girish2819/blinkit.git",
      demo: "#",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1607083206173-67fc75676c92?w=600&h=400&fit=crop",
      features: ["Responsive Design", "Interactive UI", "Product Grid Layout"],
    },
    
  ];

  return (
    <section id="projects" className="section-padding relative z-30">
      <div ref={setRef} className="container-max relative z-10">
        <div className={`text-center mb-8 xs:mb-12 sm:mb-16 px-2 xs:px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 text-white">
            Featured Projects
          </h2>
          <div className="w-16 xs:w-20 sm:w-24 md:w-28 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-3 xs:mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Projects Zigzag Layout */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex justify-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${400 + index * 200}ms`
              }}
            >
              <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl">
                <div className="glass-effect rounded-2xl overflow-hidden card-hover group">
                  {/* Project Content */}
                  <div className="p-3 xs:p-4 sm:p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {/* Project Icon */}
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                          style={{ backgroundColor: project.color }}
                        >
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 mb-1">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs">
                            <User className="w-3 h-3" />
                            {project.role}
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-3">
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-sm font-semibold">
                            <Star className="w-4 h-4" />
                            Featured
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                            <Calendar className="w-3 h-3" />
                            <span>{project.year}</span>
                          </div>
                          <span className="text-gray-500 text-xs bg-gray-800/30 px-2 py-1 rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4 text-xs xs:text-sm sm:text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4 p-3 bg-gray-800/50 rounded-xl">
                      <h5 className="text-cyan-400 font-semibold mb-2 text-xs">Key Features:</h5>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, i) => (
                          <span key={i} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-purple-500/30 group-hover:border-cyan-400/50 group-hover:text-cyan-300 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-3 border-t border-purple-500/20">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-gray-800/50"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-gray-800/50"
                      >
                        <Eye size={14} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on new projects and collaborate with amazing people.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        </div>
      </section>
  );
};

export default Projects;