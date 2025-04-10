
import React, { useEffect, useState } from "react";

interface SplashAnimationProps {
  onComplete: () => void;
}

const SplashAnimation: React.FC<SplashAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(1);
  
  useEffect(() => {
    // Create the phases of animation
    const timer1 = setTimeout(() => setPhase(2), 1500); // Show first text
    const timer2 = setTimeout(() => setPhase(3), 3000); // Show second text
    const timer3 = setTimeout(() => setPhase(4), 4500); // Start fade out
    const timer4 = setTimeout(() => {
      onComplete();
    }, 6000); // Complete animation
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-void z-50">
      {/* Background particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="particle animate-particles-move"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 5}px`,
              height: `${Math.random() * 30 + 5}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {/* Logo animation */}
        <div className={`transition-all duration-1000 ${phase >= 4 ? "opacity-0 scale-110" : "scale-100"}`}>
          <div className="w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-void-light to-blue-500 shadow-lg shadow-void-light/20 animate-pulse-soft" />
        </div>
        
        {/* Text animations */}
        <div className="text-center space-y-4">
          <h1 
            className={`text-gradient text-5xl font-bold transition-all duration-1000 ${
              phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Your AI
          </h1>
          
          <h2 
            className={`text-white/80 text-2xl transition-all duration-1000 ${
              phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            your Assistant
          </h2>
        </div>
      </div>
      
      {/* Loading indicator */}
      <div className={`absolute bottom-20 w-64 h-1 bg-gray-800 rounded-full mt-10 overflow-hidden transition-opacity duration-300 ${phase >= 4 ? "opacity-0" : "opacity-100"}`}>
        <div 
          className="h-full bg-gradient-to-r from-void-light to-blue-500 animate-shimmer"
          style={{ 
            width: `${(phase / 4) * 100}%`,
            transition: "width 1s ease-in-out" 
          }}
        />
      </div>
    </div>
  );
};

export default SplashAnimation;
