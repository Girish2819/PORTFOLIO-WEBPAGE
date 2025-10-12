import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, ChevronDown, Download, Code, Coffee, Rocket } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const roles = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast", "UI/UX Designer"];

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

  // Text animation effect
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Girish2819", label: "GitHub", color: "hover:text-gray-400" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/girishranjan17", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:girishranjan71@gmail.com", label: "Email", color: "hover:text-red-400" },
  ];

  const stats = [
    { icon: <Code className="w-6 h-6" />, number: "50+", label: "Projects Completed" },
    { icon: <Coffee className="w-6 h-6" />, number: "1000+", label: "Cups of Coffee" },
    { icon: <Rocket className="w-6 h-6" />, number: "2+", label: "Years Experience" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 text-white overflow-hidden pt-20 z-30"
    >
      {/* Animated background gradient orb */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.3), transparent 70%)`,
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16 items-center relative z-10">
        {/* Left side - Profile Picture */}
        <div className="flex justify-center flex-shrink-0 lg:order-1 w-full lg:w-auto">
          <div className="relative group">
            {/* Multiple glowing rings */}
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-60 blur-2xl group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500" />

            {/* Main image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-cyan-400 shadow-2xl shadow-purple-500/50 group-hover:shadow-cyan-500/50 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                alt="Girish Ranjan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-cyan-400/20 pointer-events-none" />
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Rotating decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-spin" style={{ animationDuration: '15s' }} />
            <div className="absolute inset-2 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-left flex-1 space-y-8 lg:order-2">
          <div className="space-y-4">
            <p className={`text-white/80 text-xl font-medium tracking-wide transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              👋 Hello, I'm
            </p>
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className={`gradient-text text-glow transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Girish Ranjan
              </span>
            </h1>
            <div className="text-3xl lg:text-4xl text-purple-300 font-semibold">
              <span className={`transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                And I'm a{' '}
                <span className="text-cyan-400 inline-block min-w-[300px]">
                  <span 
                    key={currentText}
                    className="animate-fade-in font-bold"
                    style={{
                      background: 'linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {roles[currentText]}
                  </span>
                </span>
              </span>
            </div>
          </div>

          <p className={`text-gray-300 text-xl leading-relaxed max-w-2xl transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            🚀 Passionate Computer Science undergraduate skilled in full-stack development, backend optimization, and problem-solving. 
            I love turning complex problems into simple, beautiful, and intuitive solutions that make a difference.
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-purple-500/25 border border-white/20"
            >
              <span className="text-lg">Explore My Work</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href="/assets/Girish_Ranjan(cv).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-10 py-4 rounded-full border-2 border-purple-500/50 text-purple-300 hover:text-white hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 font-semibold text-lg"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </div>

          {/* Enhanced Social Icons */}
          <div className={`flex gap-6 transition-all duration-1000 delay-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-400/50 hover:scale-110 transition-all duration-300 ${social.color} shadow-lg hover:shadow-purple-500/25`}
                aria-label={social.label}
              >
                <div className="text-white/70 group-hover:text-white transition-colors text-xl">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Enhanced Stats */}
          <div className={`grid grid-cols-3 gap-8 pt-12 transition-all duration-1000 delay-1800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/25 group-hover:scale-110">
                    <div className="text-purple-300 group-hover:text-cyan-300 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Preview */}
          <div className={`pt-8 transition-all duration-1000 delay-2000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-400 text-sm mb-4 font-medium">🚀 Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm font-medium hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;