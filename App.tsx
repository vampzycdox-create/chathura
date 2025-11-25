import React from 'react';
import BentoGrid from './components/BentoGrid';

const App: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#0f0f11] text-white selection:bg-purple-500/30 overflow-hidden flex flex-col">
      <main className="flex-1 min-h-0">
        <BentoGrid />
      </main>
    </div>
  );
};

export default App;