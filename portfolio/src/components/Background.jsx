import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 150;

    // Create white particles with consistent smooth movement
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.3 + 0.2; // Consistent speed range
      
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.8,
        vx: Math.cos(angle) * speed, // Consistent velocity based on angle
        vy: Math.sin(angle) * speed,
        opacity: Math.random() * 0.4 + 0.4,
        pulseSpeed: Math.random() * 0.015 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
        originalRadius: Math.random() * 1.2 + 0.8,
        trail: [], // For smooth trail effect
        baseSpeed: speed, // Store original speed for consistency
        angle: angle // Store original angle for smooth rotation
      });
    }

    // Ultra-smooth animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Create deep blue to black gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0a0e27'); // Deep blue
      gradient.addColorStop(0.3, '#1a1f3a'); // Darker blue
      gradient.addColorStop(0.7, '#0d1117'); // Very dark blue-black
      gradient.addColorStop(1, '#000000'); // Pure black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add radial gradient overlay for depth
      const radialGradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height));
      radialGradient.addColorStop(0, 'rgba(10, 14, 39, 0.3)');
      radialGradient.addColorStop(0.5, 'rgba(13, 17, 23, 0.6)');
      radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        // Store previous position for trail
        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > 3) {
          particle.trail.shift();
        }

        // Smooth pulsing effect
        particle.pulsePhase += particle.pulseSpeed;
        particle.radius = particle.originalRadius + Math.sin(particle.pulsePhase) * 0.15;

        // Draw trail for smoother motion
        particle.trail.forEach((point, index) => {
          const trailOpacity = (index / particle.trail.length) * particle.opacity * 0.2;
          ctx.beginPath();
          ctx.arc(point.x, point.y, particle.radius * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity})`;
          ctx.fill();
        });

        // Draw main particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        // White particles with subtle glow
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        // Reset shadow
        ctx.shadowBlur = 0;

        // Continuous smooth movement - NO random changes
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Smooth edge wrapping
        if (particle.x > width + 20) particle.x = -20;
        if (particle.x < -20) particle.x = width + 20;
        if (particle.y > height + 20) particle.y = -20;
        if (particle.y < -20) particle.y = height + 20;
      });

      // Draw very subtle connecting lines
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.02 - distance / 4000})`;
            ctx.lineWidth = 0.15;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          background: 'transparent',
          willChange: 'transform' // Optimize for smooth animation
        }}
      />
    </div>
  );
};

export default Background;
