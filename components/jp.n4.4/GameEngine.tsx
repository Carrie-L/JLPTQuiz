import React, { useState, useEffect } from 'react';
import { scriptData } from './data';
import StageLayer from './StageLayer';
import DialogLayer from './DialogLayer';
import VictoryScreen from './VictoryScreen';
import { ViewType } from './types';
import { Home, Tent } from 'lucide-react';

interface GameEngineProps {
  onExit: () => void;
}

const GameEngine: React.FC<GameEngineProps> = ({ onExit }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [canProceed, setCanProceed] = useState(true);
  const [interactiveState, setInteractiveState] = useState<any>(null); // Lifted state from Lab if needed

  const currentStep = scriptData[currentStepIndex];
  const isLastStep = currentStepIndex === scriptData.length - 1;

  // Effect to manage 'canProceed' based on viewType
  useEffect(() => {
    if (currentStep.viewType === ViewType.INTERACTIVE_LAB) {
      setCanProceed(false);
      setInteractiveState(null); // Reset lab state on new step
    } else {
      setCanProceed(true);
    }
  }, [currentStepIndex, currentStep.viewType]);

  const handleNext = () => {
    if (currentStepIndex < scriptData.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      onExit();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleLabComplete = (success: boolean) => {
    setCanProceed(success);
  };

  if (currentStep.viewType === ViewType.VICTORY) {
    return <VictoryScreen onExit={onExit} />;
  }

  return (
    <div className="relative w-full h-screen bg-[#FFFDF5] overflow-hidden flex flex-col font-['Zen_Maru_Gothic']">
      {/* Background Decor - Yuru Camp / Nature Style */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Sky/Lake hint */}
         <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-[100px]" />
         {/* Forest hint */}
         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-50/60 rounded-full blur-[80px]" />
      </div>

      {/* Navigation: Back to Lobby */}
      <button 
        onClick={onExit}
        className="absolute top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border-2 border-teal-100 rounded-full text-teal-700 font-bold hover:bg-teal-50 hover:border-teal-200 hover:shadow-md transition-all text-sm group"
      >
        <Tent size={16} className="group-hover:rotate-12 transition-transform"/>
        回到大厅
      </button>

      {/* Top Layer: Visual Stage (70%) */}
      <div className="flex-grow relative w-full h-[70%] z-0 p-4 pb-0 flex items-center justify-center">
        <StageLayer 
          step={currentStep} 
          onComplete={handleLabComplete}
        />
      </div>

      {/* Bottom Layer: Dialog (30%) */}
      <div className="relative w-full h-[30%] min-h-[220px] z-10 px-4 md:px-8 pb-8 pt-4">
        <DialogLayer 
          step={currentStep}
          canProceed={canProceed}
          onNext={handleNext}
          onPrev={handlePrev}
          isLast={isLastStep}
        />
      </div>
    </div>
  );
};

export default GameEngine;