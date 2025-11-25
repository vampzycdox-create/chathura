import React from 'react';
import TiltCard from './ui/TiltCard';
import { ArrowRight, BrainCircuit, Cpu, ShieldCheck, MessageSquare } from 'lucide-react';

interface BentoGridProps {
  onInteract: (companyId: string) => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ onInteract }) => {
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
        {/* Spans full width on top, 50% height */}
        <TiltCard 
          onClick={() => onInteract('The Boolean')}
          className="relative col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1 bg-gradient-to-br from-[#2e1065] via-[#1e1b4b] to-[#0f0f11] rounded-[2.5rem] overflow-hidden border border-white/10 group cursor-pointer shadow-2xl"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit]">
             <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-pink-600/10 rounded-full blur-[80px] animate-pulse-slow -translate-x-1/2 translate-y-1/2"></div>
             
             {/* Grid Pattern Overlay */}
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
                     <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6C18 3.79086 16.2091 2 14 2H8C5.79086 2 4 3.79086 4 6V18C4 20.2091 5.79086 22 8 22H10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white"/>
                        <path d="M18 10V14C18 16.2091 16.2091 18 14 18H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                     </svg>
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
                <MessageSquare className="w-4 h-4" />
                <span>Click to Initialize AI Assistant</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </div>
          </div>
        </TiltCard>

        {/* === CARD 2: BooleanLab (Bottom Left) === */}
        <TiltCard 
          onClick={() => onInteract('BooleanLab')}
          className="group relative col-span-1 lg:col-span-2 lg:row-span-1 bg-[#121212] rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-colors duration-500"
        >
           {/* Background Image */}
           <div className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" alt="Data" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 ease-out" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
           </div>

           {/* Content */}
           <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
              {/* Top Row: Icon + Pill */}
              <div className="flex justify-between items-start">
                  <div className="bg-yellow-500/20 p-2.5 rounded-xl border border-yellow-500/30 backdrop-blur-md">
                     <BrainCircuit className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    Intelligence
                  </div>
              </div>
              
              {/* Bottom Row: Info */}
              <div className="flex flex-col gap-4">
                 {/* BooleanLab Logo */}
                 <div className="flex items-center gap-4 mb-2">
                    <div className="h-10 w-10 bg-[#fbbf24] rounded-[10px] relative overflow-hidden flex-shrink-0 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-[2px] translate-y-[1px]">
                         <path d="M4 8C4 5.79086 5.79086 4 8 4H14C16.2091 4 18 5.79086 18 8V16C18 18.2091 16.2091 20 14 20H12" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                         <path d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z" fill="black"/>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white tracking-tight">BooleanLab</h3>
                 </div>

                 <p className="text-gray-400 text-sm md:text-base line-clamp-2 leading-relaxed group-hover:text-gray-200 transition-colors">
                    Best-in-class intelligence, design and technology. Powering business with AI solutions.
                 </p>
                 <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-yellow-500 w-1/3 group-hover:w-full transition-all duration-700 ease-out"></div>
                 </div>
              </div>
           </div>
        </TiltCard>

        {/* === CARD 3: X365 (Bottom Center) === */}
        <TiltCard 
          onClick={() => onInteract('X365')}
          className="group relative col-span-1 lg:col-span-1 lg:row-span-1 bg-[#121212] rounded-3xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-colors duration-500"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden">
             <img src="https://images.unsplash.com/photo-1535378437327-10ff28945482?auto=format&fit=crop&q=80&w=800" alt="Robotics" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 ease-out" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
           </div>

           {/* Content */}
           <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
              {/* Top Row: Icon + Pill */}
              <div className="flex justify-between items-start">
                 <div className="bg-pink-500/20 w-fit p-2.5 rounded-xl border border-pink-500/30 backdrop-blur-md">
                    <Cpu className="w-6 h-6 text-pink-400" />
                 </div>
                 <div className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    Innovation
                 </div>
              </div>
              
              {/* Bottom Row: Info */}
              <div className="flex flex-col gap-4">
                 {/* X365 Logo */}
                 <div className="flex items-center gap-3 mb-2">
                    {/* Big X */}
                    <div className="relative w-8 h-8 flex-shrink-0">
                         <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#d946ef]">
                           <path d="M4 20L20 4" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
                           <path d="M4 4L9 9" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
                           <path d="M15 15L20 20" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
                         </svg>
                    </div>
                    {/* Blocky 365 */}
                    <span className="text-3xl font-black text-[#d946ef] leading-none tracking-tighter" style={{ fontFamily: 'monospace' }}>365</span>
                 </div>

                 <p className="text-gray-400 text-sm md:text-base line-clamp-2 leading-relaxed group-hover:text-gray-200 transition-colors">
                    Innovative product excellence via Vision, IoT & Biometrics.
                 </p>
                 <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-pink-500 w-1/3 group-hover:w-full transition-all duration-700 ease-out"></div>
                 </div>
              </div>
           </div>
        </TiltCard>

        {/* === CARD 4: InspectIve (Bottom Right) === */}
        <TiltCard 
          onClick={() => onInteract('INSPECTIVE')}
          className="group relative col-span-1 lg:col-span-1 lg:row-span-1 bg-[#121212] rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-colors duration-500"
        >
           {/* Background Image */}
           <div className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden">
             <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" alt="Construction" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 ease-out" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
           </div>

           {/* Content */}
           <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
              {/* Top Row: Icon + Pill */}
              <div className="flex justify-between items-start">
                 <div className="bg-blue-500/20 w-fit p-2.5 rounded-xl border border-blue-500/30 backdrop-blur-md">
                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                 </div>
                 <div className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    Safety
                 </div>
              </div>
              
              {/* Bottom Row: Info */}
              <div className="flex flex-col gap-4">
                 {/* INSPECTIVE Logo */}
                 <div className="flex items-center mb-2">
                    <span className="text-2xl lg:text-3xl font-bold italic tracking-wider text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.9)' }}>INSPECT</span>
                    {/* Checkmark V */}
                    <div className="w-7 h-7 lg:w-8 lg:h-8 -mx-1 relative top-0.5">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                            <path d="M4 10L10 18L20 4" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="text-2xl lg:text-3xl font-bold italic tracking-wider text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.9)' }}>E</span>
                 </div>

                 <p className="text-gray-400 text-sm md:text-base line-clamp-2 leading-relaxed group-hover:text-gray-200 transition-colors">
                    Safe and secure homes through AI inspection technology.
                 </p>
                 <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-blue-500 w-1/3 group-hover:w-full transition-all duration-700 ease-out"></div>
                 </div>
              </div>
           </div>
        </TiltCard>

      </div>
    </div>
  );
};

export default BentoGrid;