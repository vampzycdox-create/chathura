import React from 'react';

export const BooleanMainLogo = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6C18 3.79086 16.2091 2 14 2H8C5.79086 2 4 3.79086 4 6V18C4 20.2091 5.79086 22 8 22H10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white"/>
    <path d="M18 10V14C18 16.2091 16.2091 18 14 18H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const BooleanLabLogo = () => (
  <div className="flex items-center gap-4 mb-2">
    <div className="h-10 w-10 bg-[#fbbf24] rounded-[10px] relative overflow-hidden flex-shrink-0 flex items-center justify-center shadow-lg shadow-yellow-500/20">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-[2px] translate-y-[1px]">
        <path d="M4 8C4 5.79086 5.79086 4 8 4H14C16.2091 4 18 5.79086 18 8V16C18 18.2091 16.2091 20 14 20H12" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <path d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z" fill="black"/>
      </svg>
    </div>
    <h3 className="text-3xl font-display font-bold text-white tracking-tight">BooleanLab</h3>
  </div>
);

export const X365Logo = () => (
  <div className="flex items-center gap-3 mb-2">
    <div className="relative w-8 h-8 flex-shrink-0">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#d946ef]">
        <path d="M4 20L20 4" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
        <path d="M4 4L9 9" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
        <path d="M15 15L20 20" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
      </svg>
    </div>
    <span className="text-3xl font-black text-[#d946ef] leading-none tracking-tighter" style={{ fontFamily: 'monospace' }}>365</span>
  </div>
);

export const InspectiveLogo = () => (
  <div className="flex items-center mb-2">
    <span className="text-2xl lg:text-3xl font-bold italic tracking-wider text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.9)' }}>INSPECT</span>
    <div className="w-7 h-7 lg:w-8 lg:h-8 -mx-1 relative top-0.5">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M4 10L10 18L20 4" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-2xl lg:text-3xl font-bold italic tracking-wider text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.9)' }}>E</span>
  </div>
);
