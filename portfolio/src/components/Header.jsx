import React, { useState, useEffect } from "react";
import { Download, FileText } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = () => {
    const resumePath = "/resume.pdf"; // replace with your resume file path
    window.open(resumePath, "_blank");
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex justify-center items-center">
          {/* Navigation - One Big Curved Box with Black Border */}
          <nav className="bg-white/10 backdrop-blur-lg border-2 border-black rounded-full px-16 py-8 shadow-xl">
            <div className="flex items-center justify-center gap-20">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveSection(item.name.toLowerCase());
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white hover:text-gray-200 transition-all duration-300 font-bold text-lg uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-white/20 hover:scale-105 border border-transparent hover:border-white/30"
                >
                  {item.name}
                </button>
              ))}

              {/* Resume Button */}
              <button
                onClick={handleResumeClick}
                className="ml-12 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-4 border-2 border-black hover:border-white/50"
              >
                <FileText className="w-6 h-6" />
                <span className="uppercase tracking-widest text-lg">Resume</span>
                <Download className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
