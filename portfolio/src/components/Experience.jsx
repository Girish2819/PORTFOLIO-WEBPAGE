import React from "react";

const Experience = () => {
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
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
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
    </section>
  );
};

export default Experience;
