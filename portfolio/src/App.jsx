import React from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white relative overflow-x-hidden">
      {/* Single background for entire app */}
      <Background />
      
      {/* Navbar */}
      <Navbar />
      
      {/* All sections with proper z-index */}
      <div className="relative z-10">
        <Hero />
      </div>
      
      <div className="relative z-10">
        <Experience />
      </div>
      
      <div className="relative z-10">
        <Projects />
      </div>
      
      <div className="relative z-10">
        <Skills />
      </div>
      
      <div className="relative z-10">
        <Achievements />
      </div>
      
      <div className="relative z-10">
        <Education />
      </div>
      
      <div className="relative z-10">
        <Contact />
      </div>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
