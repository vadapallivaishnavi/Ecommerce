import React from "react";

function AnimatedBackground() {
  const leaves = Array.from({ length: 10 });
  const particles = Array.from({ length: 14 });

  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      {leaves.map((_, index) => (
        <span
          key={`leaf-${index}`}
          className={`floating-leaf leaf-${(index % 5) + 1}`}
          style={{
            left: `${5 + index * 9}%`,
            animationDelay: `${index * 0.7}s`,
          }}
        >
          <i className="fas fa-leaf"></i>
        </span>
      ))}

      {particles.map((_, index) => (
        <span
          key={`particle-${index}`}
          className={`floating-particle particle-${(index % 4) + 1}`}
          style={{
            left: `${3 + index * 7}%`,
            animationDelay: `${index * 0.45}s`,
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedBackground;
