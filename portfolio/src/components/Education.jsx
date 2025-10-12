import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "RGIPT",
      fullName: "Rajiv Gandhi Institute of Petroleum Technology",
      location: "Amethi, UP",
      period: "2023 - 2027",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      type: "University"
    },
    {
      degree: "12th Grade (Science)",
      institution: "ABC School",
      fullName: "ABC Senior Secondary School",
      location: "City, State",
      period: "2021 - 2023",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      type: "School"
    },
    {
      degree: "10th Grade",
      institution: "XYZ School",
      fullName: "XYZ High School",
      location: "City, State",
      period: "2020 - 2021",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      type: "School"
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-800/60 backdrop-blur-sm relative z-30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden card-hover group"
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
                
                {/* Institution name on image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="inline-block px-6 py-2 bg-gray-900/80 backdrop-blur-md rounded-full border border-purple-500/30 group-hover:border-cyan-400/50 transition-colors duration-300">
                      <GraduationCap className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors mx-auto mb-2" />
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {edu.institution}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-purple-300 group-hover:text-cyan-400 transition-colors mb-2">
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

