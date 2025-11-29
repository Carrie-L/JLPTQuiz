
import React, { useState, useMemo } from 'react';
import StageLayer from './StageLayer';
import DialogLayer from './DialogLayer';
import { scriptData } from './data';
import { Tent } from 'lucide-react';

interface GameEngineProps {
    onExit: () => void;
}

const GameEngine: React.FC<GameEngineProps> = ({ onExit }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  const currentStep = useMemo(() => scriptData[currentStepIndex], [currentStepIndex]);

  const canProceed = useMemo(() => {
    if (currentStep.viewType === 'VICTORY') return false;

    if (currentStep.viewType === 'INTERACTIVE_LAB') {
        return isTaskCompleted;
    }

    return true;
  }, [currentStep, isTaskCompleted]);

  const handleNext = () => {
    if (canProceed && currentStepIndex < scriptData.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      setIsTaskCompleted(false); 
    }
  };

  const handleTaskComplete = (success: boolean) => {
    if (success) {
        setIsTaskCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setIsTaskCompleted(false);
  };

  return (
    <div className="relative w-full h-screen bg-[#111827] overflow-hidden flex flex-col font-sans text-slate-200">
      
      {/* Back Button (Dark Theme) */}
      <button 
        onClick={onExit}
        className="absolute top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-slate-800/90 backdrop-blur-sm border-2 border-slate-600 rounded-full text-slate-200 font-bold hover:bg-slate-700 hover:border-orange-500 hover:shadow-md transition-all text-sm group"
      >
        <Tent size={16} className="text-orange-500 group-hover:rotate-12 transition-transform"/>
        回到大厅
      </button>

      {/* Top Layer: Stage (Visuals/Labs) */}
      <div className="flex-1 relative z-0">
        <StageLayer 
            step={currentStep} 
            onTaskComplete={handleTaskComplete}
            onRestart={handleRestart}
            onBack={onExit}
        />
      </div>

      {/* Bottom Layer: Narrative (Dialog) */}
      {currentStep.viewType !== 'VICTORY' && (
          <div className="h-[25vh] relative z-50">
            <DialogLayer 
                speaker={currentStep.speaker}
                speakerColor={currentStep.speakerColor}
                text={currentStep.text}
                onNext={handleNext}
                canProceed={canProceed}
            />
          </div>
      )}
    </div>
  );
};

export default GameEngine;
