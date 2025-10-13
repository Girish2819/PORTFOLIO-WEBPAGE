import React from "react";
import { Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    { icon: "🏆", title: "3rd Rank Globally", desc: "AAPG SDEC Competition 2025" },
    { icon: "📚", title: "JEE Advanced", desc: "AIR 18862 (EWS 2855)" },
    { icon: "⭐", title: "Mr. Fresher", desc: "Batch of 2023" }
  ];

  return (
    <section id="achievements" className="section-padding relative z-30">
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            <Award className="inline mr-3" size={36} />
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 text-center hover:scale-105 transform transition">
              <div className="text-4xl mb-3">{ach.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{ach.title}</h3>
              <p className="text-gray-400">{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
