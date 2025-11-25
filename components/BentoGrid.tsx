import React from 'react';
import TiltCard from './ui/TiltCard';
import { ArrowRight, Globe } from 'lucide-react';
import { SUBSIDIARY_COMPANIES } from '../data/companies';
import { BooleanMainLogo } from './icons/Logos';

const BentoGrid: React.FC = () => {
  const handleNavigation = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="h-full w-full p-4 md:p-6 lg:p-8">
      {/* 
        Grid Layout:
        Mobile: Single column, auto rows.
        Desktop: 4 columns, 2 equal height rows (50/50 split). 
        Top section (Hero) spans 4 cols and 1 row.
        Bottom section cards span 1 row each (some span 2 cols on tablet).
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6 h-full min-h-[800px] lg:min-h-0">
        
        {/* === MAIN HERO CARD (The Boolean) === */}
        <TiltCard 
          onClick={() => handleNavigation('https://booleanlabs.biz')}
          className="relative col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1 bg-gradient-to-br from-[#2e1065] via-[#1e1b4b] to-[#0f0f11] rounded-[2.5rem] overflow-hidden border border-white/10 group cursor-pointer shadow-2xl"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit]">
             <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-pink-600/10 rounded-full blur-[80px] animate-pulse-slow -translate-x-1/2 translate-y-1/2"></div>
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8 md:p-12">
            
            {/* Status Pill */}
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-1000">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
               <span className="text-xs font-medium text-gray-300 tracking-wider">SYSTEM ONLINE</span>
            </div>

            {/* Logo & Title */}
            <div className="flex flex-col items-center gap-6 mb-8 animate-float">
                <div className="p-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl shadow-purple-900/20">
                     <BooleanMainLogo />
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight drop-shadow-2xl">
                  The Boolean
                </h1>
            </div>

            {/* Tagline */}
            <h2 className="text-2xl md:text-4xl font-light text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Solutions that unlock <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">freedom</span>
            </h2>

            {/* Interaction Hint */}
             <div className="mt-auto flex items-center gap-3 text-sm text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors duration-300 cursor-pointer">
                <Globe className="w-4 h-4" />
                <span>Visit Official Website</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </div>
          </div>
        </TiltCard>

        {/* === SUBSIDIARY CARDS (Generated from Data) === */}
        {SUBSIDIARY_COMPANIES.map((company, index) => {
          // Determine grid spans based on index to maintain layout
          // First card (BooleanLab) spans 2 cols on lg, others span 1.
          const gridClasses = index === 0 
            ? "col-span-1 lg:col-span-2 lg:row-span-1" 
            : "col-span-1 lg:col-span-1 lg:row-span-1";
            
          const borderColor = `hover:border-${company.pillColor}-500/50`;
          
          return (
            <TiltCard 
              key={company.id}
              onClick={() => handleNavigation(company.websiteUrl)}
              className={`group relative ${gridClasses} bg-[#121212] rounded-3xl overflow-hidden border border-gray-800 ${borderColor} transition-colors duration-500`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden">
                <img src={company.bgImage} alt={company.name} className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                  {/* Top Row: Icon + Pill */}
                  <div className="flex justify-between items-start">
                      <div className={`bg-${company.pillColor}-500/20 w-fit p-2.5 rounded-xl border border-${company.pillColor}-500/30 backdrop-blur-md`}>
                        <company.icon className={`w-6 h-6 text-${company.pillColor}-400`} />
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                        {company.pillText}
                      </div>
                  </div>
                  
                  {/* Bottom Row: Info */}
                  <div className="flex flex-col gap-4">
                    {/* Logo Component */}
                    <company.LogoComponent />

                    <p className="text-gray-400 text-sm md:text-base line-clamp-2 leading-relaxed group-hover:text-gray-200 transition-colors">
                        {company.description}
                    </p>
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mt-2">
                        <div className={`h-full ${company.themeColor} w-1/3 group-hover:w-full transition-all duration-700 ease-out`}></div>
                    </div>
                  </div>
              </div>
            </TiltCard>
          );
        })}

      </div>
    </div>
  );
};

export default BentoGrid;