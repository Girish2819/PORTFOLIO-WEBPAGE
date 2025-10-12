import React, { useState, useEffect } from "react";
import { Code, ExternalLink, Github, Eye, Calendar, User, Star, ArrowRight } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      role: "Full Stack Developer",
      year: "2024",
      description: "Built a complete e-commerce solution with user authentication, payment integration, and admin dashboard. Features include product management, order tracking, and real-time notifications.",
      tech: ["Node.js", "Express.js", "MongoDB", "Stripe", "JWT", "React"],
      icon: "🛍️",
      color: "#47A248",
      category: "fullstack",
      github: "https://github.com/Girish2819",
      demo: "#",
      featured: true,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      features: ["REST API Development", "Payment Integration", "Authentication", "Database Design", "Admin Dashboard"]
    },
    {
      title: "Company Management System",
      role: "Backend Developer",
      year: "2024",
      description: "Developed a comprehensive management system for companies with employee tracking, complaint management, and automated workflows.",
      tech: ["React", "Node.js", "MongoDB", "Bootstrap", "JWT"],
      icon: "🏢",
      color: "#61DAFB",
      category: "fullstack",
      github: "https://github.com/Girish2819",
      demo: "#",
      featured: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      features: ["User Management", "Complaint Portal", "Admin Dashboard", "Email Authentication", "Report Generation"]
    },
    {
      title: "Portfolio Website",
      role: "Frontend Developer",
      year: "2025",
      description: "Created responsive personal portfolio using modern web technologies with interactive animations and smooth scrolling.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      icon: "💼",
      color: "#F7DF1E",
      category: "frontend",
      github: "https://github.com/Girish2819",
      demo: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      features: ["Responsive Design", "Interactive Animations", "Modern UI/UX", "Performance Optimized"]
    },
    {
      title: "Task Management App",
      role: "Full Stack Developer",
      year: "2024",
      description: "Built a collaborative task management application with real-time updates, team collaboration, and project tracking.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      icon: "📋",
      color: "#FF6B6B",
      category: "fullstack",
      github: "https://github.com/Girish2819",
      demo: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      features: ["Real-time Updates", "Team Collaboration", "Project Tracking", "File Sharing"]
    },
    {
      title: "Weather Dashboard",
      role: "Frontend Developer",
      year: "2024",
      description: "Created a beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      icon: "🌤️",
      color: "#4ECDC4",
      category: "frontend",
      github: "https://github.com/Girish2819",
      demo: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      features: ["Location-based Forecasts", "Interactive Maps", "Weather Analytics", "Responsive Design"]
    },
    {
      title: "API Gateway Service",
      role: "Backend Developer",
      year: "2024",
      description: "Developed a microservices API gateway with authentication, rate limiting, and load balancing capabilities.",
      tech: ["Node.js", "Express.js", "Redis", "Docker", "Kubernetes"],
      icon: "🚪",
      color: "#9B59B6",
      category: "backend",
      github: "https://github.com/Girish2819",
      demo: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      features: ["Microservices Architecture", "Rate Limiting", "Load Balancing", "Authentication"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-gray-800/30 backdrop-blur-sm relative z-30">
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.name}
              <span className={`px-2 py-1 rounded-full text-xs ${
                filter === category.id ? 'bg-white/20' : 'bg-gray-700/50'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`glass-effect rounded-2xl overflow-hidden card-hover group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-sm font-semibold">
                      <Star className="w-4 h-4" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-gray-800/80 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-gray-800/80 transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>

                {/* Project Icon */}
                <div className="absolute bottom-4 left-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
                      <User className="w-4 h-4" />
                      {project.role}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <span className="text-gray-500 text-xs bg-gray-800/30 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 min-h-[60px]">
                  {project.description}
                </p>

                {/* Features */}
                {hoveredProject === index && (
                  <div className="mb-4 p-4 bg-gray-800/50 rounded-xl">
                    <h5 className="text-cyan-400 font-semibold mb-2 text-sm">Key Features:</h5>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-purple-500/30 group-hover:border-cyan-400/50 group-hover:text-cyan-300 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-purple-500/20">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Eye size={16} />
                    <span>Demo</span>
                  </a>
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