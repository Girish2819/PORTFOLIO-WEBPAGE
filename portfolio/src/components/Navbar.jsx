import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 px-6 py-4 flex justify-center">
      <ul className="flex gap-6 text-white font-semibold">
        <li><Link to="home" smooth={true} spy={true}>Home</Link></li>
        <li><Link to="about" smooth={true} spy={true}>About</Link></li>
        <li><Link to="experience" smooth={true} spy={true}>Experience</Link></li>
        <li><Link to="projects" smooth={true} spy={true}>Projects</Link></li>
        <li><Link to="skills" smooth={true} spy={true}>Skills</Link></li>
        <li><Link to="achievements" smooth={true} spy={true}>Achievements</Link></li>
        <li><Link to="education" smooth={true} spy={true}>Education</Link></li>
        <li>
          <a href="/assets/resume.pdf" download className="bg-purple-600 px-3 py-1 rounded hover:bg-purple-700 transition">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
