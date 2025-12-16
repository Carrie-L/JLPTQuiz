
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
    <div className="relative w-full h-screen bg-[#FFF5F5] overflow-hidden flex flex-col font-['Zen_Maru_Gothic']">
      {/* Background Decor - Red/Emergency Theme */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute -top-20 right-20 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-[120px]" />
         {/* Warning Stripes Pattern */}
         <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-red-500 via-transparent to-red-500 opacity-20" />
      </div>

      <button 
        onClick={onExit}
        className="absolute top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border-2 border-red-100 rounded-full text-red-700 font-bold hover:bg-red-50 hover:border-red-200 hover:shadow-md transition-all text-sm group"
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
