import React from "react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      college: "Rajiv Gandhi Institute of Petroleum Technology (RGIPT)",
      location: "Amethi, UP",
      period: "2023 - 2027"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Education
      </h2>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-purple-300">{edu.degree}</h3>
                <p className="text-gray-400">{edu.college}</p>
                <p className="text-gray-500 text-sm">{edu.location}</p>
              </div>
              <span className="text-sm text-gray-500">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

