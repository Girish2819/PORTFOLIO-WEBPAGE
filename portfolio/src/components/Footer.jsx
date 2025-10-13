import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/Girish2819", 
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-600/50"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/girish-ranjan-b00717288", 
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-600/50"
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=girishranjan71@gmail.com", 
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-600/50"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-purple-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container-max py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Girish Ranjan
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions and bringing ideas to life through code.
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 rounded-full text-gray-400 ${social.color} ${social.bgColor} transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:girishranjan71@gmail.com"
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                girishranjan71@gmail.com
              </a>
              <a 
                href="tel:+918114548249"
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                +91-8114548249
              </a>
              <p className="text-gray-400">
                Rajiv Gandhi Institute of Petroleum Technology<br />
                Jais, Uttar Pradesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col items-center gap-6">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              © 2024 Girish Ranjan. Made with 
              <Heart className="w-4 h-4 text-pink-500 animate-pulse" /> 
              and lots of coffee
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-blue-600/30 transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
};

export default Footer;
