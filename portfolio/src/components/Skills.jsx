import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const containerRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 300, height: 300 });

  // Update container size based on screen size
  useEffect(() => {
    const updateContainerSize = () => {
      const width = window.innerWidth;
      let size = 300; // default mobile size
      
      if (width >= 1280) size = 700; // xl
      else if (width >= 1024) size = 600; // lg
      else if (width >= 768) size = 500; // md
      else if (width >= 640) size = 400; // sm
      
      setContainerSize({ width: size, height: size });
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    
    return () => window.removeEventListener('resize', updateContainerSize);
  }, []);
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
  

  // Initialize skills with random positions and constant speed directions
  useEffect(() => {
    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const containerRadius = containerSize.width / 2;
    
    const initialSkills = skillData.map((skill, index) => {
      const radius = Math.max(12, Math.min(40, containerSize.width / 18));
      let x, y;
      let attempts = 0;
      
      // Ensure balls start well inside the circle with multiple attempts
      do {
        x = Math.random() * (containerSize.width - radius * 2) + radius;
        y = Math.random() * (containerSize.height - radius * 2) + radius;
        attempts++;
      } while (Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) + radius > containerRadius - 20 && attempts < 50);
      
      // If still outside after attempts, place near center
      if (Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) + radius > containerRadius - 20) {
        x = centerX + (Math.random() - 0.5) * (containerRadius - radius - 30);
        y = centerY + (Math.random() - 0.5) * (containerRadius - radius - 30);
      }

      // Assign a constant speed (px/s) per ball and a normalized direction - slower and smoother
      const baseSpeed = Math.max(30, containerSize.width * 0.12); // px/s, much slower for smooth motion
      const speedJitter = (Math.random() * 0.3 + 0.8); // 0.8x - 1.1x for variation
      const speed = baseSpeed * speedJitter;
      const angle = Math.random() * Math.PI * 2;
      const dirX = Math.cos(angle);
      const dirY = Math.sin(angle);

      return {
        id: index,
        name: skill.name,
        iconUrl: skill.iconUrl,
        color: skill.color,
        x,
        y,
        // Keep direction unit-length and speed constant over time
        dirX,
        dirY,
        speed,
        radius,
      };
    });

    setSkills(initialSkills);
    lastTimestampRef.current = null;
  }, [containerSize]); // Re-run when container size changes

  // Animation loop with time-based constant-speed motion and boundary bounces
  useEffect(() => {
    if (skills.length === 0) return;

    let animationId;
    const animate = (timestamp) => {
      // Compute delta time in seconds
      if (lastTimestampRef.current == null) lastTimestampRef.current = timestamp;
      const dtMs = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;
      const dt = Math.min(0.05, Math.max(0.0, dtMs / 1000)); // clamp dt to avoid spikes

      setSkills(prevSkills => {
        const updatedSkills = [...prevSkills];
        
        // Update positions and handle collisions
        for (let i = 0; i < updatedSkills.length; i++) {
          let skill = updatedSkills[i];
          let { x, y, dirX, dirY, speed, radius } = skill;

          // Ensure direction is normalized
          const dirLen = Math.hypot(dirX, dirY) || 1;
          dirX /= dirLen;
          dirY /= dirLen;

          // Update position with constant speed (px/s)
          const dx = dirX * speed * dt;
          const dy = dirY * speed * dt;
          x += dx;
          y += dy;
          
          // Keep radius constant for smooth visuals (no pulsating)
          const maxRadius = Math.max(12, Math.min(40, containerSize.width / 18));
          skill.radius = Math.min(maxRadius, skill.radius);

          // Bounce off circular walls
          const centerX = containerSize.width / 2;
          const centerY = containerSize.height / 2;
          const containerRadius = containerSize.width / 2;
          const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          
          // Check if ball is touching or outside the circular boundary
          if (distanceFromCenter + radius >= containerRadius) {
            // Calculate normal vector from center to ball
            const nx = (x - centerX) / distanceFromCenter;
            const ny = (y - centerY) / distanceFromCenter;
            
            // Position the ball just inside the boundary with proper margin
            const targetDistance = containerRadius - radius - 2;
            x = centerX + nx * targetDistance;
            y = centerY + ny * targetDistance;
            
            // Reflect direction vector across the normal; preserve speed
            const dot = dirX * nx + dirY * ny;
            if (dot > 0) {
              dirX = dirX - 2 * dot * nx;
              dirY = dirY - 2 * dot * ny;
              const newLen = Math.hypot(dirX, dirY) || 1;
              dirX /= newLen;
              dirY /= newLen;
            }
          }
          
          // Additional safety check - force ball inside if somehow it's still outside
          const finalDistance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          if (finalDistance + radius > containerRadius) {
            const nx = (x - centerX) / finalDistance;
            const ny = (y - centerY) / finalDistance;
            x = centerX + nx * (containerRadius - radius - 5);
            y = centerY + ny * (containerRadius - radius - 5);
          }

          // Disable ball-ball collisions for smoother, constant motion

          updatedSkills[i] = {
            ...skill,
            x,
            y,
            dirX,
            dirY,
            speed,
            radius: skill.radius,
          };
        }

        return updatedSkills;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
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
        {/* Clean Circular Skills Container */}
        <div
          ref={containerRef}
          className="relative mx-auto rounded-full overflow-hidden bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border-2 border-white/10 shadow-2xl w-[350px] h-[350px] xs:w-[400px] xs:h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[900px]"
          style={{ aspectRatio: '1/1' }}
        >
          {skills.map((skill) => (
            <div key={skill.id} className="relative group">
              <motion.div
                className="absolute flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300"
                style={{
                  width: skill.radius * 2,
                  height: skill.radius * 2,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))`,
                  backdropFilter: 'blur(15px)',
                  border: `2px solid ${skill.color}80`,
                  boxShadow: `0 8px 32px ${skill.color}40, inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                  left: skill.x - skill.radius,
                  top: skill.y - skill.radius,
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: `0 12px 40px ${skill.color}60, inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                  transition: { duration: 0.2 }
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                <img 
                  src={skill.iconUrl} 
                  alt={skill.name}
                  className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11"
                  style={{ 
                    filter: 'brightness(1.2) saturate(1.3)',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`❌ Failed to load icon for ${skill.name}:`, skill.iconUrl);
                    // Show skill name as fallback when icon fails to load
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'block';
                    }
                  }}
                  onLoad={() => {
                    console.log(`✅ Successfully loaded icon for ${skill.name}`);
                  }}
                />
                <span 
                  className="text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl drop-shadow-lg"
                  style={{ display: 'none' }}
                >
                  {skill.name}
                </span>
              </motion.div>
              
              {/* Enhanced Tooltip */}
              <div className="absolute z-50 px-4 py-2 text-sm font-medium text-white bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/20"
                   style={{
                     left: skill.x - skill.radius,
                     top: skill.y - skill.radius - 50,
                     transform: 'translateX(-50%)'
                   }}>
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
