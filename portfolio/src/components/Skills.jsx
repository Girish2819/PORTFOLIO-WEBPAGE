import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const containerRef = useRef(null);
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
    { name: "HTML5", iconUrl: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", iconUrl: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "React", iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express.js", iconUrl: "https://cdn.simpleicons.org/express/000000" },
    { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "MySQL", iconUrl: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Git", iconUrl: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", iconUrl: "https://cdn.simpleicons.org/github/181717" },
    { name: "VS Code", iconUrl: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
    { name: "Postman", iconUrl: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "Linux", iconUrl: "https://cdn.simpleicons.org/linux/FCC624" },
    { name: "C++", iconUrl: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "C", iconUrl: "https://cdn.simpleicons.org/c/A8B9CC" },
  ];
  

  // Initialize skills with random positions and velocities
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
      } while (Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) + radius > containerRadius - 10 && attempts < 50);
      
      // If still outside after attempts, place near center
      if (Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) + radius > containerRadius - 10) {
        x = centerX + (Math.random() - 0.5) * (containerRadius - radius - 20);
        y = centerY + (Math.random() - 0.5) * (containerRadius - radius - 20);
      }
      
      return {
        id: index,
        name: skill.name,
        iconUrl: skill.iconUrl,
        x,
        y,
        vx: (Math.random() - 0.5) * 3, // Reduced initial velocity
        vy: (Math.random() - 0.5) * 3,
        radius,
      };
    });

    setSkills(initialSkills);
  }, [containerSize]); // Re-run when container size changes

  // Animation loop with collision detection
  useEffect(() => {
    if (skills.length === 0) return;

    let animationId;
    const animate = () => {
      setSkills(prevSkills => {
        const updatedSkills = [...prevSkills];
        
        // Update positions and handle collisions
        for (let i = 0; i < updatedSkills.length; i++) {
          let skill = updatedSkills[i];
          let { x, y, vx, vy, radius } = skill;

          // Update position
          x += vx;
          y += vy;
          
          // Gradually recover ball size over time (grow back slowly)
          const maxRadius = Math.max(12, Math.min(40, containerSize.width / 18));
          if (skill.radius < maxRadius) {
            skill.radius = Math.min(maxRadius, skill.radius + 0.1);
          }

          // Bounce off circular walls
          const centerX = containerSize.width / 2;
          const centerY = containerSize.height / 2;
          const containerRadius = containerSize.width / 2;
          const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          
          // Check if ball is outside the circular boundary (more strict check)
          if (distanceFromCenter + radius >= containerRadius) {
            // Calculate normal vector from center to ball
            const nx = (x - centerX) / distanceFromCenter;
            const ny = (y - centerY) / distanceFromCenter;
            
            // Position the ball just inside the boundary with safety margin
            const targetDistance = containerRadius - radius - 2; // -2 for safety margin
            x = centerX + nx * targetDistance;
            y = centerY + ny * targetDistance;
            
            // Reflect velocity off the circular boundary
            const dotProduct = vx * nx + vy * ny;
            vx = vx - 2 * dotProduct * nx;
            vy = vy - 2 * dotProduct * ny;
            
            // Add some damping to prevent infinite bouncing
            vx *= 0.85;
            vy *= 0.85;
            
            // Decrease ball size when hitting boundary (with minimum size)
            const newRadius = Math.max(8, skill.radius * 0.9);
            skill.radius = newRadius;
            
            // Add some randomness to prevent balls from getting stuck
            vx += (Math.random() - 0.5) * 0.2;
            vy += (Math.random() - 0.5) * 0.2;
          }
          
          // Additional safety check - force ball inside if somehow it's still outside
          const finalDistance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          if (finalDistance + radius > containerRadius) {
            const nx = (x - centerX) / finalDistance;
            const ny = (y - centerY) / finalDistance;
            x = centerX + nx * (containerRadius - radius - 3);
            y = centerY + ny * (containerRadius - radius - 3);
          }

          // Check collision with other balls
          for (let j = i + 1; j < updatedSkills.length; j++) {
            const otherSkill = updatedSkills[j];
            const dx = x - otherSkill.x;
            const dy = y - otherSkill.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = radius + otherSkill.radius;

            if (distance < minDistance && distance > 0) {
              // Calculate collision response
              const angle = Math.atan2(dy, dx);
              const targetX = otherSkill.x + Math.cos(angle) * minDistance;
              const targetY = otherSkill.y + Math.sin(angle) * minDistance;
              
              // Separate the balls
              const ax = (targetX - x) * 0.5;
              const ay = (targetY - y) * 0.5;
              
              // Update positions to prevent overlap
              x += ax;
              y += ay;
              updatedSkills[j] = {
                ...otherSkill,
                x: otherSkill.x - ax,
                y: otherSkill.y - ay,
              };

              // Calculate new velocities (elastic collision)
              const vx1 = vx;
              const vy1 = vy;
              const vx2 = otherSkill.vx;
              const vy2 = otherSkill.vy;

              // Normal vector
              const nx = dx / distance;
              const ny = dy / distance;

              // Relative velocity
              const dvx = vx1 - vx2;
              const dvy = vy1 - vy2;

              // Relative velocity in collision normal direction
              const dvn = dvx * nx + dvy * ny;

              // Do not resolve if velocities are separating
              if (dvn > 0) continue;

              // Collision impulse
              const impulse = 2 * dvn / 2; // Assuming equal masses

              // Update velocities
              vx = vx1 - impulse * nx;
              vy = vy1 - impulse * ny;
              updatedSkills[j] = {
                ...updatedSkills[j],
                vx: vx2 + impulse * nx,
                vy: vy2 + impulse * ny,
              };
            }
          }

          updatedSkills[i] = {
            ...skill,
            x,
            y,
            vx,
            vy,
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

        {/* Animated Skills Container */}
        <div
          ref={containerRef}
          className="relative mx-auto border border-gray-800/50 rounded-full overflow-hidden bg-gray-900/20 backdrop-blur-sm w-[250px] h-[250px] xs:w-[300px] xs:h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[650px] xl:h-[650px] 2xl:w-[750px] 2xl:h-[750px]"
          style={{ aspectRatio: '1/1' }}
        >
          {skills.map((skill) => (
            <div key={skill.id} className="relative group">
              <motion.div
                className="absolute flex items-center justify-center text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                style={{
                  width: skill.radius * 2,
                  height: skill.radius * 2,
                  borderRadius: '50%',
                  background: `rgba(255, 255, 255, 0.1)`,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                  left: skill.x - skill.radius,
                  top: skill.y - skill.radius,
                }}
                animate={{
                  x: 0,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.2,
                  boxShadow: `0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                <img 
                  src={skill.iconUrl} 
                  alt={skill.name}
                  className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 drop-shadow-lg"
                  style={{ filter: 'none' }}
                />
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute z-50 px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                   style={{
                     left: skill.x - skill.radius,
                     top: skill.y - skill.radius - 40,
                     transform: 'translateX(-50%)'
                   }}>
                {skill.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
