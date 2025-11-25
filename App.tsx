import React, { useState } from 'react';
import BentoGrid from './components/BentoGrid';
import ChatModal from './components/ChatModal';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeCompany, setActiveCompany] = useState<string>('The Boolean');

  const handleInteraction = (companyId: string) => {
    setActiveCompany(companyId);
    setIsChatOpen(true);
  };

  return (
    <div className="h-full w-full bg-[#0f0f11] text-white selection:bg-purple-500/30 overflow-hidden flex flex-col">
      {/* 
         We removed the distinct Header component. 
         The BentoGrid now acts as the full-page layout manager.
      */}
      
      <main className="flex-1 min-h-0">
        <BentoGrid onInteract={handleInteraction} />
      </main>

      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        companyName={activeCompany}
      />
    </div>
  );
};

export default App;