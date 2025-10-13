import React, { useState, useEffect } from "react";

const Experience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);

  // Mouse tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Visibility effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Salahkart",
      date: "Aug 2025 - Present",
      details: [
        "Worked on backend and full-stack development tasks",
        "Contributed to building scalable features and optimizing application performance",
      ],
    },
    {
      title: "AAPG SDEC Global Competition",
      company: "Team Member",
      date: "2025",
      details: [
        "Collaborated with international peers in online competition",
        "Secured 3rd place globally",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 backdrop-blur-sm relative z-30">
      {/* Animated background gradient orb */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.3), transparent 70%)`,
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: '4s',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Experience</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg p-6 rounded-xl border-2 border-purple-500/50 shadow-lg shadow-purple-500/20">
            <div className="flex justify-between mb-2">
              <h3 className="text-xl font-bold text-purple-300">{exp.title}</h3>
              <span className="text-gray-400">{exp.date}</span>
            </div>
            <p className="text-gray-300">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
