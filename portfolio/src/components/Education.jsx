import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useScrollAnimationWithRef } from "../hooks/useScrollAnimation";
import rgiptImage from "../assets/rgipt.jpeg";
import stXavierImage from "../assets/st.xavier.jpeg";
import sunShineImage from "../assets/sun-shine.jpeg";

const Education = () => {
  const [setRef, isVisible] = useScrollAnimationWithRef(0.1, 200);
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "RGIPT",
      fullName: "Rajiv Gandhi Institute of Petroleum Technology",
      location: "Amethi, Uttar Pradesh",
      period: "2023 - 2027",
      image: rgiptImage,
      type: "College"
    },
    {
      degree: "12th Grade (Science)",
      institution: "Sun Shine Residential Public School",
      fullName: "Sun Shine Residential Public School",
      location: "Patna, Bihar",
      period: "2020 - 2022",
      image: sunShineImage,
      type: "School"
    },
    {
      degree: "10th",
      institution: "St.xaviers Heigher Secondary School",
      fullName: "St.xaviers Heigher Secondary School",
      location: "Patna, Bihar",  
      period: "2019 - 2020",
      image: stXavierImage,
      type: "School"
    }
  ];

  return (
    <section id="education" className="section-padding relative z-30">
      <div ref={setRef} className="container-max relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl font-bold mb-6 text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl overflow-hidden card-hover group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {/* Background Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={edu.image} 
                  alt={edu.institution}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-white transition-colors mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {edu.fullName}
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-500 group-hover:text-gray-400 transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 group-hover:text-gray-400 transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Type badge */}
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                    {edu.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

