
import React, { useState, useEffect } from "react";
import SplashAnimation from "@/components/SplashAnimation";
import AuthForm from "@/components/AuthForm";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Show splash animation initially */}
      {showSplash && <SplashAnimation onComplete={handleSplashComplete} />}
      
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-black to-gray-900 opacity-70" />
        
        {/* Static particles */}
        <div className="particles">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                opacity: Math.random() * 0.3 + 0.1
              }}
            />
          ))}
        </div>
        
        {/* Animated glow elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gray-500/5 blur-3xl animate-float" 
          style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-float" 
          style={{ animationDelay: "-4s" }} />
      </div>
      
      {/* Main content */}
      <div className={`relative z-10 w-full max-w-lg transition-all duration-1000 ${showSplash ? "opacity-0" : "opacity-100"}`}>
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="text-black text-2xl font-bold">X</span>
            </div>
          </div>
          <h1 className="text-gradient text-3xl font-bold mb-2">Xenon AI</h1>
          <p className="text-white/60">Your personal assistant</p>
        </div>
        
        {/* Auth form */}
        <AuthForm />
      </div>
      
      {/* Footer */}
      <div className={`relative z-10 mt-8 text-center text-white/40 text-sm transition-all duration-1000 ${showSplash ? "opacity-0" : "opacity-100"}`}>
        <p>© {new Date().getFullYear()} Xenon AI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Index;
