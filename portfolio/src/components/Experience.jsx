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
    <section id="experience" className="section-padding relative z-30">
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Experience</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg p-6 rounded-xl border-2 border-purple-500/50 shadow-lg shadow-purple-500/20">
            <div className="flex justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
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
