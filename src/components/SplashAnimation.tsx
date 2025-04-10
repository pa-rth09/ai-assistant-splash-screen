
import React, { useEffect, useState } from "react";

interface SplashAnimationProps {
  onComplete: () => void;
}

const SplashAnimation: React.FC<SplashAnimationProps> = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Your personal assistant";
  
  useEffect(() => {
    // Create faster animation phases
    const timer1 = setTimeout(() => onComplete(), 3000); // Complete animation faster
    
    // Typewriter effect
    let i = 0;
    const typeWriter = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeWriter);
      }
    }, 50); // Speed of typing
    
    return () => {
      clearTimeout(timer1);
      clearInterval(typeWriter);
    };
  }, [onComplete]);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      {/* Background particles */}
      <div className="particles">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="particle animate-particles-move"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 3}px`,
              height: `${Math.random() * 20 + 3}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 8 + 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {/* Logo animation */}
        <div className="w-20 h-20 mb-6 rounded-full bg-white shadow-lg shadow-white/20 flex items-center justify-center">
          <span className="text-black text-2xl font-bold">X</span>
        </div>
        
        {/* Text animations */}
        <div className="text-center space-y-2">
          <h1 className="text-white text-4xl font-bold">Xenon AI</h1>
          
          <div className="h-8 flex items-center justify-center">
            <p className="typewriter text-white/80 text-lg">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashAnimation;
