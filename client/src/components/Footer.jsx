import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-20">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <img className="h-9" src={assets.logo} alt="AbyssForge Logo" />
            <span className="font-bold text-xl">AbyssForge</span>
          </div>
          <p className="mt-6 text-sm">
            Forge your creativity in the depths of AI. Where imagination meets innovation,
            <br />
            and the abyss becomes your canvas for limitless possibilities.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Navigation</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-primary transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/ai" className="hover:text-primary transition-colors duration-200">AI Tools</a>
              </li>
              <li>
                <a href="/ai/community" className="hover:text-primary transition-colors duration-200">Community</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">AI Tools</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/ai/write-article" className="hover:text-primary transition-colors duration-200">Abyss Writer</a>
              </li>
              <li>
                <a href="/ai/blog-titles" className="hover:text-primary transition-colors duration-200">Void Title Generator</a>
              </li>
              <li>
                <a href="/ai/generate-images" className="hover:text-primary transition-colors duration-200">DreamWeaver</a>
              </li>
              <li>
                <a href="/ai/remove-background" className="hover:text-primary transition-colors duration-200">Phantom Remover</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">
              Join the Forge
            </h2>
            <div className="text-sm space-y-2">
              <p>
                Get the latest updates from the abyss. New tools, features, and creative insights
                delivered to your realm.
              </p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-primary outline-none w-full max-w-64 h-9 rounded px-2 bg-white/50"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-primary w-24 h-9 text-white rounded cursor-pointer hover:bg-red-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        {new Date().getFullYear()} © AbyssForge. All Rights Reserved. | Forged in the depths of creativity.
      </p>
    </footer>
  );
};

export default Footer;
