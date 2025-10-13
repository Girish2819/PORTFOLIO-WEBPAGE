import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, ChevronDown, Download, Code, Coffee, Rocket } from "lucide-react";
import profilePic from "../assets/pic.jpeg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [displayedName, setDisplayedName] = useState('');
  const [displayedHello, setDisplayedHello] = useState('');

  const roles = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];

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

  // Typewriter effect for "Hello, I'm"
  useEffect(() => {
    const hello = "Hello, I'm";
    let index = 0;
    const timer = setInterval(() => {
      if (index < hello.length) {
        setDisplayedHello(hello.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Start name animation after hello is complete
        setTimeout(() => {
          const name = "Girish Ranjan";
          let nameIndex = 0;
          const nameTimer = setInterval(() => {
            if (nameIndex < name.length) {
              setDisplayedName(name.slice(0, nameIndex + 1));
              nameIndex++;
            } else {
              clearInterval(nameTimer);
            }
          }, 150);
        }, 500);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Girish2819", label: "GitHub", color: "hover:text-gray-400" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/girish-ranjan-b00717288", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/GIRI28012004", label: "Twitter", color: "hover:text-blue-400" },
    { icon: <Mail className="w-5 h-5" />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=girishranjan71@gmail.com", label: "Email", color: "hover:text-red-400" },
  ];

  const stats = [
    { icon: <Code className="w-6 h-6" />, number: "50+", label: "Projects Completed" },
    { icon: <Coffee className="w-6 h-6" />, number: "1000+", label: "Cups of Coffee" },
    { icon: <Rocket className="w-6 h-6" />, number: "2+", label: "Years Experience" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-20 z-30"
    >

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-40 items-center relative z-10">
        {/* Left side - Profile Picture */}
        <div className="flex justify-center flex-shrink-0 lg:order-1 w-full lg:w-auto">
          <div className="relative group">
            {/* Multiple glowing rings */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 rounded-full opacity-60 blur-2xl group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500 rounded-full opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500" />

            {/* Main image container */}
            <div className="relative w-40 h-40 xs:w-44 xs:h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-cyan-400 shadow-2xl shadow-blue-500/50 group-hover:shadow-cyan-500/50 transition-all duration-500">
              <img
                src={profilePic}
                alt="Girish Ranjan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-cyan-400/20 pointer-events-none" />
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Rotating decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-spin" style={{ animationDuration: '15s' }} />
            <div className="absolute inset-2 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-left flex-1 space-y-8 lg:order-2">
          <div className="space-y-4">
            <p className={`text-white/80 text-lg sm:text-xl md:text-2xl font-medium tracking-wide transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {displayedHello}
            </p>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
              <span className={`text-white transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {displayedName}
              </span>
            </h1>
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold">
              <span className={`transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                And I'm a{' '}
                <span className="text-white inline-block min-w-[200px] sm:min-w-[250px] md:min-w-[300px]">
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

          <p className={`text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            🚀 Passionate Computer Science undergraduate skilled in full-stack development, backend optimization, and problem-solving. 
            I love turning complex problems into simple, beautiful, and intuitive solutions that make a difference.
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-col xs:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={scrollToExperience}
              className="group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold px-4 xs:px-6 sm:px-8 md:px-10 py-2 xs:py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 shadow-2xl hover:shadow-blue-500/25 border border-white/20 text-xs xs:text-sm sm:text-base md:text-lg"
            >
              <span className="text-xs xs:text-sm sm:text-base md:text-lg">Explore My Work</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
             
          </div>

          {/* Enhanced Social Icons */}
          <div className={`transition-all duration-1000 delay-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-400/50 hover:scale-110 transition-all duration-300 ${social.color} shadow-lg hover:shadow-purple-500/25`}
                  aria-label={social.label}
                >
                  <div className="text-white/70 group-hover:text-white transition-colors text-xl">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;

