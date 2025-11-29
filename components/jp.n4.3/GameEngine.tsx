import React, { useState, useEffect } from 'react';
import { scriptData } from './data';
import StageLayer from './StageLayer';
import DialogLayer from './DialogLayer';
import VictoryScreen from './VictoryScreen';
import { ViewType } from './types';

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
    <div className="relative w-full h-screen bg-slate-900 overflow-hidden flex flex-col">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF5] to-[#F0EFEB] -z-10" />

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