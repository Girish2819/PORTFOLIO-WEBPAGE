import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto relative z-20">
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg p-12 rounded-xl border-2 border-purple-500/50 text-center shadow-2xl shadow-purple-500/20">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-gray-200 mb-8 text-xl">Feel free to reach out for collaborations or just a friendly chat</p>

        <div className="flex flex-wrap gap-8 justify-center mb-8">
          <a href="mailto:girishranjan71@gmail.com" className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105 bg-white/5 px-6 py-3 rounded-full border border-purple-500/30 hover:border-purple-400/60">
            <Mail size={24} /> girishranjan71@gmail.com
          </a>
          <a href="mailto:23cs3025@rgipt.ac.in" className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105 bg-white/5 px-6 py-3 rounded-full border border-purple-500/30 hover:border-purple-400/60">
            <Mail size={24} /> 23cs3025@rgipt.ac.in
          </a>
          <a href="tel:+918114548249" className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105 bg-white/5 px-6 py-3 rounded-full border border-purple-500/30 hover:border-purple-400/60">
            <Phone size={24} /> +91-8114548249
          </a>
        </div>

        <div className="flex gap-8 justify-center">
          <a href="https://github.com/Girish2819" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 bg-white/5 p-4 rounded-full border border-gray-500/30 hover:border-gray-400/60">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/girishranjan17" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-all duration-300 hover:scale-110 bg-white/5 p-4 rounded-full border border-blue-500/30 hover:border-blue-400/60">
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
