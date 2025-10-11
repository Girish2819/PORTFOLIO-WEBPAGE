import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Girish Ranjan
      </h1>
      <p className="text-2xl mt-4">Full Stack Developer</p>
      <a href="/resume.pdf" download className="mt-6 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
