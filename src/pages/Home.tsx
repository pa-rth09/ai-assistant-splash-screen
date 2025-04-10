
import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, Settings, User } from "lucide-react";

const Home = () => {
  const { currentUser, logout } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="bg-blur border-b border-white/10 px-6 py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-xl font-bold">X</span>
            </div>
            <h1 className="text-xl font-bold">Xenon AI</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-white/70">
              {currentUser?.email}
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full"
              onClick={handleLogout}
            >
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Welcome to Xenon AI</h1>
          <p className="text-white/60 max-w-md mx-auto">
            Your personal AI assistant is ready to help you with tasks, answer questions, and provide information.
          </p>
        </div>
        
        {/* Dashboard Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions Panel */}
          <div className="bg-blur rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Button className="w-full bg-white text-black hover:bg-gray-200 justify-start">
                <User size={18} className="mr-2" />
                Update Profile
              </Button>
              <Button className="w-full bg-secondary hover:bg-secondary/80 justify-start">
                <Settings size={18} className="mr-2" />
                Settings
              </Button>
            </div>
          </div>
          
          {/* Stats Panel */}
          <div className="bg-blur rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Stats</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Usage</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full mt-1">
                  <div className="bg-white h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Remaining Credits</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full mt-1">
                  <div className="bg-white h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-blur rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b border-white/10">
                <span>Login</span>
                <span className="text-white/60">Just now</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/10">
                <span>Account created</span>
                <span className="text-white/60">Today</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Chat Interface Placeholder */}
        <div className="mt-12 bg-blur rounded-lg p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-4">Ask Xenon AI</h2>
          <div className="bg-black/50 rounded-lg p-4 h-64 overflow-y-auto mb-4 border border-white/10">
            <div className="text-center text-white/40 pt-20">
              Your conversation with Xenon AI will appear here
            </div>
          </div>
          <div className="flex gap-2">
            <Input 
              placeholder="Type your message..."
              className="bg-black/50 border-white/20"
            />
            <Button className="bg-white text-black hover:bg-gray-200">Send</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

// We need to create and export the Input component as it's used in the Home page
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export default Home;
