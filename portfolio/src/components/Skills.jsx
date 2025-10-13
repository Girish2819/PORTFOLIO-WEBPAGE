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
    const initialSkills = skillData.map((skill, index) => ({
      id: index,
      name: skill.name,
      iconUrl: skill.iconUrl,
      x: Math.random() * (containerSize.width - 60),
      y: Math.random() * (containerSize.height - 60),
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      radius: Math.max(12, Math.min(40, containerSize.width / 18)), // Better responsive ball size
    }));

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
          
          if (distanceFromCenter + skill.radius >= containerRadius) {
            // Calculate normal vector from center to ball
            const nx = (x - centerX) / distanceFromCenter;
            const ny = (y - centerY) / distanceFromCenter;
            
            // Reflect velocity off the circular boundary with bounce effect
            const dotProduct = vx * nx + vy * ny;
            vx = vx - 2 * dotProduct * nx;
            vy = vy - 2 * dotProduct * ny;
            
            // Position the ball just inside the boundary
            const targetDistance = containerRadius - skill.radius;
            x = centerX + nx * targetDistance;
            y = centerY + ny * targetDistance;
            
            // Decrease ball size when hitting boundary (with minimum size)
            const newRadius = Math.max(8, skill.radius * 0.9);
            skill.radius = newRadius;
            
            // Add some randomness to prevent balls from getting stuck
            vx += (Math.random() - 0.5) * 0.5;
            vy += (Math.random() - 0.5) * 0.5;
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
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 backdrop-blur-sm relative z-30">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: '4s',
            }}
          />
        ))}
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            My Skills
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
        </div>

        {/* Animated Skills Container */}
        <div
          ref={containerRef}
          className="relative mx-auto border border-gray-800/50 rounded-full overflow-hidden bg-gray-900/20 backdrop-blur-sm w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]"
          style={{ aspectRatio: '1/1' }}
        >
          {skills.map((skill) => (
            <div key={skill.id} className="relative group">
              <motion.div
                className="absolute flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                style={{
                  width: skill.radius * 2,
                  height: skill.radius * 2,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, #6366f1, #8b5cf6)`,
                  boxShadow: `0 0 20px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(255,255,255,0.1)`,
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
                  boxShadow: `0 0 30px rgba(99, 102, 241, 0.6), inset 0 0 30px rgba(255,255,255,0.2)`,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                <img 
                  src={skill.iconUrl} 
                  alt={skill.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 drop-shadow-lg"
                  style={{ filter: 'brightness(0) invert(1)' }}
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
