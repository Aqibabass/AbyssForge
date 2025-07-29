import React from "react";
import gradientBg from "../assets/gradientBackground.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${gradientBg})` }}
      className="p-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full h-screen
      justify-center bg-cover bg-no-repeat min-h-screen"
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg z-0 rounded-none" />

      <div className="relative z-10 text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6x1 2xl:text-7x1 font-semibold mx-auto leading-[1.2]">
          Enter the Abyss <br /> with
          <span className="text-primary"> AbyssForge</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2x1:max-w-xl m-auto max-sm:text-xs text-gray-600">
          Unleash your creative power in the Forge. Generate compelling content,
          conjure visuals, and amplify your workflow with AI-crafted precision.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer "
        >
          Start creating now
        </button>
        <button className="bg-white text-black px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer border border-gray-300">
          Watch demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
