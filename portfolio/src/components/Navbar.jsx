import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleNavClick = (item) => {
    setActiveSection(item.name.toLowerCase());
    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-500">
            <div className="flex items-center gap-4">
              {/* Navigation Items */}
              <div className="flex items-center gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`text-white/80 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wider px-3 py-1 rounded-full hover:bg-white/10 hover:scale-105 ${
                      activeSection === item.name.toLowerCase() ? 'text-purple-300 bg-white/10' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-white/20"></div>

              {/* Resume Button */}
              <button
                onClick={handleResumeClick}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-white/20 hover:border-blue-400/50 shadow-lg hover:shadow-blue-500/25"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wide">Resume</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-3 text-white hover:bg-white/10 transition-all duration-300"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-purple-500/20">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left text-white/80 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wider px-4 py-3 rounded-lg hover:bg-white/10 ${
                    activeSection === item.name.toLowerCase() ? 'text-purple-300 bg-white/10' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Resume Button */}
              <button
                onClick={handleResumeClick}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 hover:border-blue-400/50 shadow-lg hover:shadow-blue-500/25 mt-2"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wide">Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
