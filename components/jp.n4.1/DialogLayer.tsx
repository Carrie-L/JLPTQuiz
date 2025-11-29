
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ScriptStep } from './types';

interface DialogLayerProps {
  step: ScriptStep;
  canProceed: boolean;
  onNext: () => void;
  onPrev: () => void;
  isLast: boolean;
}

const DialogLayer: React.FC<DialogLayerProps> = ({ step, canProceed, onNext, onPrev, isLast }) => {
  const [displayedText, setDisplayedText] = useState('');

  // Typewriter effect
  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < step.text.length) {
        setDisplayedText((prev) => prev + step.text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30); // Speed of typing
    return () => clearInterval(timer);
  }, [step.text]);

  const nameColorClass = step.speakerColor === 'pink' 
    ? "bg-[#FFDBE5] text-[#D84B79] border-[#F8BBD0]" 
    : "bg-[#E0F2F1] text-[#00695C] border-[#B2DFDB]";

  return (
    <div className="w-full h-full max-w-5xl mx-auto relative group pt-6">
      <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-[20px] shadow-lg relative flex flex-col p-8 transition-all duration-300">
        
        <div className="absolute top-0 left-8 z-30 transform -translate-y-1/2">
          <div className={`${nameColorClass} border-2 px-6 py-1.5 rounded-full shadow-sm font-bold tracking-wide text-sm md:text-base flex items-center gap-2`}>
             <span>{step.speaker}</span>
          </div>
        </div>

        {/* Green Corner Brackets */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-[3px] border-l-[3px] border-[#6EE7B7] rounded-tl-lg pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-[3px] border-r-[3px] border-[#6EE7B7] rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-[3px] border-l-[3px] border-[#6EE7B7] rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[3px] border-r-[3px] border-[#6EE7B7] rounded-br-lg pointer-events-none" />

        <div className="flex-grow overflow-y-auto mb-4 px-4 custom-scrollbar mt-2">
          <p className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed font-['Zen_Maru_Gothic']">
            {displayedText}
          </p>
        </div>

        <div className="flex justify-between items-end px-2">
            <button 
              onClick={onPrev}
              disabled={step.id === 1}
              className={`
                text-slate-400 font-bold text-base hover:text-slate-600 transition-colors px-4 py-2
                ${step.id === 1 ? 'opacity-0 cursor-default' : 'opacity-100 cursor-pointer'}
              `}
            >
              上一页
            </button>

            <button
              onClick={onNext}
              disabled={!canProceed}
              className={`
                group/btn relative flex items-center gap-1 font-bold text-lg tracking-wider transition-all
                ${canProceed 
                  ? 'text-[#10B981] cursor-pointer hover:tracking-widest' 
                  : 'text-slate-300 cursor-not-allowed'}
              `}
            >
              <span>{isLast ? '完成' : 'NEXT'}</span>
              <ArrowRight size={20} className={canProceed ? 'animate-pulse' : ''} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default DialogLayer;
