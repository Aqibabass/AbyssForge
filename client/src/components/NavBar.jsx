import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div
      className="fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 flex-wrap overflow-x-auto top-0 left-0"
    >
      <div className="flex items-center gap-2 cursor-pointer  "onClick={() => navigate("/")}>
        <img
          src={assets.logo}
          alt="AbyssForge Logo"
          className="size-7"
          
        />
        <span className={`font-bold text-xl }`}>AbyssForge</span>
      </div>

      {user ? ( <UserButton />
      ) : (
        <button onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2 sm:px-10 sm:py-2.5 text-xs sm:text-sm"
        >
          Get started
          <ArrowRight className="w-4 h-4" />{" "}
        </button>
      )}
    </div>
  );
};

export default NavBar;