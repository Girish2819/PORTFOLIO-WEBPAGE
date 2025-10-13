import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";

export default function Navbar() {
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
    const resumePath = "/Girish_Ranjan(cv).pdf";
    // Open PDF in new tab for viewing
    window.open(resumePath, "_blank");
    
    // Also trigger download as backup
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Girish_Ranjan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 xs:py-3 sm:py-4 md:py-6 lg:py-8">
        <div className="flex justify-center items-center">
          {/* Navigation - One Big Curved Box with Glass Effect */}
          <nav className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-1 xs:py-2 sm:py-3 md:py-4 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-500">
            <div className="flex items-center justify-center gap-0.5 xs:gap-1 sm:gap-2 md:gap-3 lg:gap-4">
              

              {/* Divider */}
              <div className="w-px h-8 bg-white/20"></div>

              {/* Navigation Items */}
              <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-2 md:gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveSection(item.name.toLowerCase());
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`text-white/80 hover:text-white transition-all duration-300 font-medium text-xs xs:text-sm sm:text-sm uppercase tracking-wider px-0.5 xs:px-1 sm:px-2 md:px-3 py-0.5 xs:py-1 sm:py-1 rounded-full hover:bg-white/10 hover:scale-105 ${
                      activeSection === item.name.toLowerCase() ? 'text-purple-300 bg-white/10' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-8 bg-white/20"></div>

              {/* Resume Button */}
              <button
                onClick={handleResumeClick}
                className="ml-0.5 xs:ml-1 sm:ml-2 md:ml-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-1 xs:px-2 sm:px-3 md:px-4 py-0.5 xs:py-1 sm:py-1 md:py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-0.5 xs:gap-1 sm:gap-1 border border-white/20 hover:border-blue-400/50 shadow-lg hover:shadow-blue-500/25"
              >
                <Download className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs xs:text-xs sm:text-sm uppercase tracking-wide hidden xs:inline">Resume</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
