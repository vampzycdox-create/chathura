import React from 'react';
import { Network } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-[#4c1d95] via-[#31136a] to-[#0f0f11] shadow-2xl border-b border-white/5">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
        {/* Logo Area */}
        <div className="flex items-center justify-center gap-3 mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="bg-white p-3 rounded-2xl shadow-lg shadow-purple-900/50">
             {/* Simple SVG Elephant representation using paths for a cleaner look than image */}
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6C18 3.79086 16.2091 2 14 2H8C5.79086 2 4 3.79086 4 6V18C4 20.2091 5.79086 22 8 22H10" stroke="#4c1d95" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#4c1d95"/>
                <path d="M18 10V14C18 16.2091 16.2091 18 14 18H13" stroke="#4c1d95" strokeWidth="2.5" strokeLinecap="round"/>
             </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-wide">The Boolean</h1>
        </div>

        <p className="text-purple-200 text-sm font-semibold tracking-widest uppercase mb-8 opacity-80 animate-in fade-in duration-1000 delay-200">
          Boolean Group of Companies
        </p>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-xl animate-in zoom-in-95 duration-700 delay-300">
          Solutions that unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">freedom!</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
           Innovating across industries with AI, IoT, and distributed computing to build a smarter, safer tomorrow.
        </p>
      </div>
    </div>
  );
};

export default Header;