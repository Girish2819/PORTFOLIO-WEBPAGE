import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="bg-slate-800/50 backdrop-blur-sm p-12 rounded-xl border border-purple-500/30 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-gray-300 mb-8">Feel free to reach out for collaborations or just a friendly chat</p>

        <div className="flex flex-wrap gap-6 justify-center">
          <a href="mailto:girishranjan71@gmail.com" className="flex items-center gap-2 text-purple-300 hover:text-purple-400 transition">
            <Mail size={20} /> girishranjan71@gmail.com
          </a>
          <a href="mailto:23cs3025@rgipt.ac.in" className="flex items-center gap-2 text-purple-300 hover:text-purple-400 transition">
            <Mail size={20} /> 23cs3025@rgipt.ac.in
          </a>
          <a href="tel:+918114548249" className="flex items-center gap-2 text-purple-300 hover:text-purple-400 transition">
            <Phone size={20} /> +91-8114548249
          </a>
        </div>

        <div className="flex gap-6 justify-center mt-8">
          <a href="https://github.com/Girish2819" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/girishranjan17" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition">
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
