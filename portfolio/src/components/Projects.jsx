import React from "react";
import { Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce App",
      role: "Backend Developer",
      year: "2025",
      description: "Built REST APIs with authentication, cart, checkout, and Stripe payment integration. Secured routes with JWT and role-based access.",
      tech: ["Node.js", "Express.js", "MongoDB", "Stripe", "JWT"]
    },
    {
      title: "Hostel Management System",
      role: "Full Stack Developer",
      year: "2025",
      description: "Developed MERN application with RGIPT email authentication, complaint portal, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Bootstrap", "JWT"]
    },
    {
      title: "Portfolio Website",
      role: "Frontend Developer",
      year: "2025",
      description: "Created responsive personal portfolio using modern web technologies.",
      tech: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        <Code className="inline mr-3" size={36} />
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{projects.map((project, idx) => (
  <div
    key={idx}
    className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30
               transform transition duration-500 hover:scale-105 hover:border-pink-500 hover:shadow-xl hover:shadow-purple-500/50"
  >
    <h3 className="text-xl font-bold text-purple-300 mb-2">{project.title}</h3>
    <p className="text-sm text-gray-500 mb-4">{project.role} • {project.year}</p>
    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, i) => (
        <span key={i} className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-xs">
          {tech}
        </span>
      ))}
    </div>
  </div>
))}
      </div>
    </section>
  );
};

export default Projects;
