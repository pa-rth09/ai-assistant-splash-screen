
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
        <div className="absolute inset-0 bg-gradient-radial from-void to-void-purple/20 opacity-70" />
        
        {/* Static particles */}
        <div className="particles">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                opacity: Math.random() * 0.3 + 0.1
              }}
            />
          ))}
        </div>
        
        {/* Animated glow elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-void-light/10 blur-3xl animate-float" 
          style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-float" 
          style={{ animationDelay: "-4s" }} />
      </div>
      
      {/* Main content */}
      <div className={`relative z-10 w-full max-w-lg transition-all duration-1000 ${showSplash ? "opacity-0" : "opacity-100"}`}>
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-void-light to-blue-500 shadow-lg" />
          </div>
          <h1 className="text-gradient text-3xl font-bold mb-2">AI Void</h1>
          <p className="text-white/60">Your personal AI assistant</p>
        </div>
        
        {/* Auth form */}
        <AuthForm />
      </div>
      
      {/* Footer */}
      <div className={`relative z-10 mt-8 text-center text-white/40 text-sm transition-all duration-1000 ${showSplash ? "opacity-0" : "opacity-100"}`}>
        <p>© {new Date().getFullYear()} AI Void. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Index;
