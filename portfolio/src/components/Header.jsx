import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-purple-400">GR</div>
      <nav className="space-x-6">
        <a href="#home" className="hover:text-purple-400">Home</a>
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#experience" className="hover:text-purple-400">Experience</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
