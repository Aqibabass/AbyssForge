import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  // Debug: Check if data exists
  console.log("AiToolsData:", AiToolsData);
  
  return (
     <div className="px-4 sm:px-20 xl:px-32 my-4">
      <div className="text-center">
        <h2 className="text-slate-700 text-[32px] sm:text-[42px] font-semibold mb-4">Powerful AI Tools</h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>

      <div className="flex flex-wrap mt-10 justify-center">
        {!AiToolsData || AiToolsData.length === 0 ? (
          <div className="text-center p-8">
            <p className="text-gray-500">No AI tools data found. Check your assets file.</p>
          </div>
        ) : (
          AiToolsData.map((tool, index) => {
            const IconComponent = tool.Icon;
            
            // Debug each tool
            console.log(`Tool ${index}:`, {
              title: tool.title,
              hasIcon: !!IconComponent,
              iconType: typeof IconComponent,
              bg: tool.bg,
              iconName: IconComponent?.name
            });

            return (
              <div 
                key={index} 
                className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer" 
                onClick={() => user && navigate(tool.path)}
              >
                <div className="icon-container mb-4">
                  {IconComponent ? (
                    <div className="icon-wrapper">
                      <IconComponent 
                        className="w-12 h-12 p-3 text-white rounded-xl" 
                        style={{
                          background: tool.bg ? `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})` : '#333333',
                          display: 'block'
                        }} 
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 p-3 bg-red-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  )}
                </div>
                <h3 className="mt-6 mb-3 text-lg font-semibold text-gray-800">
                  {tool.title || 'No Title'}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {tool.description || 'No Description'}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AiTools;