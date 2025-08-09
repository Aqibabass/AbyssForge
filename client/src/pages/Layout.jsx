import { Menu, X } from "lucide-react";
import React, { use } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();
  return user? (
    <div className="flex flex-col items-start justify-start h-screen">
      <nav
        className="w-full px-8 min-h-14 flex items-center 
      justify-between border-b border-gray-200"
      >
        <div
          className="flex items-center gap-2 cursor-pointer w-32 sm:w-44 "
          onClick={() => navigate("/")}
        >
          <img src={assets.logo} alt="AbyssForge Logo" className="size-7" />
          <span className={`font-bold text-xl }`}>AbyssForge</span>
        </div>
        {sidebar ? (
          <X
            className="w-6 h-6 text-gray-600 sm:hidden"
            onClick={() => setSidebar(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 text-gray-600 sm:hidden"
            onClick={() => setSidebar(true)}
          />
        )}
      </nav>
      <div className="flex-1 w-full flex h-[calc(100vh-64px)] ">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
 <div className=" flex-1 bg-[#f9f9f9] ">
          <Outlet />
      </div>
      </div>
     
    
    </div>
  ) : (
   <div className="flex items-center justify-center 
   h-screen">
    <SignIn/>

   
   </div>
  );
};

export default Layout;
