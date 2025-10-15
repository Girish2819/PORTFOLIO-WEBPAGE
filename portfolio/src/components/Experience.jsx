import React, { useState, useEffect } from "react";
import { useScrollAnimationWithRef } from "../hooks/useScrollAnimation";

const Experience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [setRef, isVisible] = useScrollAnimationWithRef(0.1, 200);

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

  const experiences = [
    {
      title: "SDE Intern",
      company: "Salahkart",
      date: "Aug 2025 - Present",
      details: [
        "Worked on developing and enhancing Salah Kart’s website and a Chrome extension",
        "gaining hands-on experience in front-end and back-end web development.",
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
      <div ref={setRef} className="relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Experience</h2>
        </div>
        <div className="space-y-6 max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <div 
            key={i} 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${300 + i * 200}ms` }}
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg p-6 rounded-xl border-2 border-purple-500/50 shadow-lg shadow-purple-500/20">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <span className="text-gray-400">{exp.date}</span>
              </div>
              <p className="text-gray-300">{exp.company}</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
