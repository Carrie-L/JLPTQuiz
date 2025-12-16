
import React, { useState, useEffect } from 'react';
import { scriptData } from './data';
import StageLayer from './StageLayer';
import DialogLayer from './DialogLayer';
import VictoryScreen from './VictoryScreen';
import { ViewType } from './types';
import { Tent } from 'lucide-react';

interface GameEngineProps {
  onExit: () => void;
}

const GameEngine: React.FC<GameEngineProps> = ({ onExit }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [canProceed, setCanProceed] = useState(true);

  const currentStep = scriptData[currentStepIndex];
  const isLastStep = currentStepIndex === scriptData.length - 1;

  useEffect(() => {
    if (currentStep.viewType === ViewType.INTERACTIVE_LAB) {
      setCanProceed(false);
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
    <div className="relative w-full h-screen bg-[#FFF1F2] overflow-hidden flex flex-col font-['Zen_Maru_Gothic']">
      {/* Background Decor - Crimson/Gold Theme for New Year */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-rose-100/60 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-amber-50/60 rounded-full blur-[120px]" />
         {/* Gold Confetti */}
         <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
         <div className="absolute top-40 right-40 w-3 h-3 bg-yellow-500 rounded-full animate-bounce" />
         <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-rose-400 rounded-full" />
      </div>

      <button 
        onClick={onExit}
        className="absolute top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border-2 border-rose-200 rounded-full text-rose-700 font-bold hover:bg-rose-50 hover:border-rose-300 hover:shadow-md transition-all text-sm group"
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
