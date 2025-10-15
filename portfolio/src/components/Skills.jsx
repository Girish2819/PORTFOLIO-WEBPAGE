import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const containerRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 300, height: 300 });
  const [skills, setSkills] = useState([]);

  const skillData = [
    { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "#E34F26" },
    { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#1572B6" },
    { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
    { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "Express.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", color: "#000000" },
    { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "#4479A1" },
    { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#F05032" },
    { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", color: "#181717" },
    { name: "VS Code", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", color: "#007ACC" },
    { name: "Postman", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", color: "#FF6C37" },
    { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", color: "#FCC624" },
    { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
    { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#3776AB" },
    { name: "C", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", color: "#A8B9CC" },
  ];

  // Update container size based on screen size
  useEffect(() => {
    const updateContainerSize = () => {
      const width = window.innerWidth;
      let size = 250;

      if (width >= 1280) size = 500;
      else if (width >= 1024) size = 450;
      else if (width >= 768) size = 400;
      else if (width >= 640) size = 320;

      setContainerSize({ width: size, height: size });
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);
    return () => window.removeEventListener("resize", updateContainerSize);
  }, []);

  // Initialize skills with positions inside the circle
  useEffect(() => {
    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const containerRadius = containerSize.width / 2;

    const initialSkills = skillData.map((skill, index) => {
      const radius = Math.max(18, Math.min(60, containerSize.width / 12)); // Increased ball size
      const r = Math.sqrt(Math.random()) * (containerRadius - radius - 10); // uniform area
      const theta = Math.random() * 2 * Math.PI;
      const x = centerX + r * Math.cos(theta);
      const y = centerY + r * Math.sin(theta);

      const angle = Math.random() * 2 * Math.PI;
      const dirX = Math.cos(angle);
      const dirY = Math.sin(angle);
      const speed = Math.max(40, containerSize.width * 0.15) * (0.95 + Math.random() * 0.1);

      return { id: index, name: skill.name, iconUrl: skill.iconUrl, color: skill.color, x, y, dirX, dirY, speed, radius };
    });

    setSkills(initialSkills);
    lastTimestampRef.current = null;
  }, [containerSize]);

  // Animation loop with enhanced smooth motion
  useEffect(() => {
    if (skills.length === 0) return;

    let animationId;
    const animate = (timestamp) => {
      if (lastTimestampRef.current == null) lastTimestampRef.current = timestamp;
      const dtMs = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;
      const dt = Math.min(0.008, Math.max(0.0, dtMs / 1000)); // Clamp to 120fps for ultra-smooth motion

      setSkills((prevSkills) => {
        const updatedSkills = [...prevSkills];
        const centerX = containerSize.width / 2;
        const centerY = containerSize.height / 2;
        const containerRadius = containerSize.width / 2;

        for (let i = 0; i < updatedSkills.length; i++) {
          let { x, y, dirX, dirY, speed, radius } = updatedSkills[i];

          // Ensure direction is normalized
          const dirLen = Math.hypot(dirX, dirY) || 1;
          dirX /= dirLen;
          dirY /= dirLen;

          // Ultra-smooth gradual direction changes
          if (Math.random() < 0.0005) { // 0.05% chance per frame for direction change
            const randomAngle = Math.random() * Math.PI * 2;
            const lerpFactor = 0.05; // Very gradual transition
            dirX = dirX * (1 - lerpFactor) + Math.cos(randomAngle) * lerpFactor;
            dirY = dirY * (1 - lerpFactor) + Math.sin(randomAngle) * lerpFactor;
          }

          // Ultra-minimal speed variation for smoothness
          const speedVariation = 0.999 + Math.random() * 0.002; // 0.999x to 1.001x variation
          const currentSpeed = speed * speedVariation;

          // Calculate movement with smooth interpolation
          const dx = dirX * currentSpeed * dt;
          const dy = dirY * currentSpeed * dt;
          x += dx;
          y += dy;

          // Smooth boundary bounce with gradual reflection
          const dist = Math.hypot(x - centerX, y - centerY);
          if (dist + radius > containerRadius) {
            const nx = (x - centerX) / dist;
            const ny = (y - centerY) / dist;
            
            // Position ball just inside boundary with smooth margin
            const targetDistance = containerRadius - radius - 8;
            x = centerX + nx * targetDistance;
            y = centerY + ny * targetDistance;

            // Smooth reflection with gradual direction change
            const dot = dirX * nx + dirY * ny;
            if (dot > 0) {
              const reflectionStrength = 0.8; // Gradual reflection instead of instant
              dirX = dirX - reflectionStrength * 2 * dot * nx;
              dirY = dirY - reflectionStrength * 2 * dot * ny;
              const len = Math.hypot(dirX, dirY) || 1;
              dirX /= len;
              dirY /= len;
            }
          }

          // Smooth collision avoidance with gradual separation
          for (let j = i + 1; j < updatedSkills.length; j++) {
            const other = updatedSkills[j];
            const dx = x - other.x;
            const dy = y - other.y;
            const dist = Math.hypot(dx, dy);
            const minDist = radius + other.radius + 6; // Increased buffer for smoother spacing
            
            if (dist < minDist && dist > 0) {
              const nx = dx / dist;
              const ny = dy / dist;
              const overlap = (minDist - dist) * 0.3; // Reduced separation force for smoother movement
              
              // Apply gradual separation
              x += nx * overlap;
              y += ny * overlap;
              updatedSkills[j].x -= nx * overlap;
              updatedSkills[j].y -= ny * overlap;
              
              // Gradual direction adjustment to avoid future collisions
              const avoidanceStrength = 0.1;
              dirX += nx * avoidanceStrength;
              dirY += ny * avoidanceStrength;
              updatedSkills[j].dirX -= nx * avoidanceStrength;
              updatedSkills[j].dirY -= ny * avoidanceStrength;
            }
          }

          // Additional safety check to ensure balls stay within bounds
          const finalDist = Math.hypot(x - centerX, y - centerY);
          if (finalDist + radius > containerRadius) {
            const nx = (x - centerX) / finalDist;
            const ny = (y - centerY) / finalDist;
            x = centerX + nx * (containerRadius - radius - 10);
            y = centerY + ny * (containerRadius - radius - 10);
          }

          updatedSkills[i] = { ...updatedSkills[i], x, y, dirX, dirY };
        }

        return updatedSkills;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [skills.length, containerSize]);

  return (
    <section id="skills" className="section-padding relative z-30">
      <div className="container-max relative z-10">
        <div className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 px-2 xs:px-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 text-white">
            My Skills
          </h2>
          <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-3 xs:mb-4 sm:mb-6"></div>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto rounded-full overflow-hidden bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border-2 border-white/10 shadow-2xl"
          style={{ width: containerSize.width, height: containerSize.height }}
        >
          {skills.map((skill) => (
            <div key={skill.id} className="relative group">
              <motion.div
                className="absolute flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-500 ease-out"
                style={{
                  width: skill.radius * 2,
                  height: skill.radius * 2,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                  backdropFilter: "blur(15px)",
                  border: `2px solid ${skill.color}80`,
                  boxShadow: `0 8px 32px ${skill.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                  left: skill.x - skill.radius,
                  top: skill.y - skill.radius,
                }}
                whileHover={{ 
                  scale: 1.15,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 0.1, ease: "linear" }}
              >
                <img
                  src={skill.iconUrl}
                  alt={skill.name}
                  className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16"
                  style={{ objectFit: "contain", display: "block", filter: "brightness(1.2) saturate(1.3)" }}
                />
              </motion.div>

              <div
                className="absolute z-50 px-4 py-2 text-sm font-medium text-white bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/20"
                style={{
                  left: skill.x,
                  top: skill.y - skill.radius - 40,
                  transform: "translateX(-50%)",
                }}
              >
                {skill.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
 