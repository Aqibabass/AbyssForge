import React from "react";
import { useNavigate } from "react-router-dom";
import gradientBg from "../assets/gradientBackground.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${gradientBg})` }}
      className="p-4 sm:px-20 xl:px-32 relative flex flex-col w-full h-screen
      justify-center items-center bg-cover bg-center bg-no-repeat min-h-screen"
    >
      <div className="text-center mb-6 max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Enter the Abyss <br /> with
          <span className="text-primary"> AbyssForge</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto max-sm:text-xs text-gray-600">
          Unleash your creative power in the Forge. Generate compelling content,
          conjure visuals, and amplify your workflow with AI-crafted precision.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs mb-8">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 
          rounded-lg hover:scale-105 active:scale-95 transition-transform duration-200
          cursor-pointer shadow-lg hover:shadow-xl"
        >
          Start creating now
        </button>
        <button 
          className="bg-white text-black px-10 py-3 
          rounded-lg hover:scale-105 active:scale-95 transition-transform duration-200
          cursor-pointer border border-gray-300 shadow-lg hover:shadow-xl"
          onClick={() => {
            // Add demo functionality here
            console.log("Demo clicked");
          }}
        >
          Watch demo
        </button>
      </div>

      {/* User avatars section */}
      <div className="flex items-center justify-center gap-4 text-gray-600">
        <div className="flex items-center divide-x divide-gray-300">
          <div className="flex -space-x-3 pr-3">
            <img 
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" 
              alt="User avatar 1" 
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition-transform duration-200 relative z-10" 
            />
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" 
              alt="User avatar 2" 
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition-transform duration-200 relative z-20" 
            />
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" 
              alt="User avatar 3" 
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition-transform duration-200 relative z-30" 
            />
            <img 
              src="https://randomuser.me/api/portraits/men/75.jpg" 
              alt="User avatar 4" 
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition-transform duration-200 relative z-40" 
            />
          </div>
          <div className="pl-3">
            <p className="text-sm text-gray-500">
              Trusted by <span className="font-medium text-gray-800">1k+</span> users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;