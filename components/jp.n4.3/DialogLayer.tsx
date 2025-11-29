import React from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { ScriptStep } from './types';

interface DialogLayerProps {
  step: ScriptStep;
  canProceed: boolean;
  onNext: () => void;
  onPrev: () => void;
  isLast: boolean;
}

const DialogLayer: React.FC<DialogLayerProps> = ({ step, canProceed, onNext, onPrev, isLast }) => {
  const getSpeakerColor = (color: string) => {
    switch (color) {
      case 'teal': return 'bg-teal-500 border-teal-600 text-white';
      case 'orange': return 'bg-orange-500 border-orange-600 text-white';
      case 'pink': return 'bg-pink-500 border-pink-600 text-white';
      default: return 'bg-slate-500 border-slate-600 text-white';
    }
  };

  const getCornerColor = (color: string) => {
    switch (color) {
      case 'teal': return 'border-teal-400';
      case 'orange': return 'border-orange-400';
      case 'pink': return 'border-pink-400';
      default: return 'border-slate-400';
    }
  };

  const cornerColorClass = getCornerColor(step.speakerColor);

  return (
    <div className="w-full h-full max-w-5xl mx-auto relative group">
      
      {/* Main Glass Card */}
      <div className="w-full h-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[2rem] relative overflow-hidden transition-all duration-300">
        
        {/* L-Shaped Corner Brackets (The Viewfinder Aesthetic) */}
        <div className={`absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 rounded-tl-lg ${cornerColorClass} opacity-70`} />
        <div className={`absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 rounded-tr-lg ${cornerColorClass} opacity-70`} />
        <div className={`absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 rounded-bl-lg ${cornerColorClass} opacity-70`} />
        <div className={`absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 rounded-br-lg ${cornerColorClass} opacity-70`} />

        {/* Floating Nameplate */}
        <div className={`absolute top-0 left-8 transform -translate-y-1/2 px-6 py-2 rounded-full font-bold shadow-lg z-20 border-b-4 ${getSpeakerColor(step.speakerColor)}`}>
          {step.speaker}
        </div>

        {/* Text Content */}
        <div className="p-10 pt-12 h-full flex flex-col">
          <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed font-['Zen_Maru_Gothic']">
            {step.text}
          </p>

          {/* Controls */}
          <div className="mt-auto flex justify-end items-center gap-4">
            <button 
              onClick={onPrev}
              disabled={step.id === 1}
              className={`p-3 rounded-full hover:bg-slate-100 text-slate-400 transition-colors ${step.id === 1 ? 'opacity-0' : 'opacity-100'}`}
            >
              <RotateCcw size={20} />
            </button>

            <button
              onClick={onNext}
              disabled={!canProceed}
              className={`
                group/btn relative px-8 py-3 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300
                ${canProceed 
                  ? 'bg-slate-800 text-white shadow-lg hover:shadow-xl hover:bg-slate-900 hover:scale-105 cursor-pointer' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
              `}
            >
              <span>{isLast ? 'Finish' : 'Next'}</span>
              <ArrowRight size={20} className={canProceed ? 'group-hover/btn:translate-x-1 transition-transform' : ''} />
              
              {!canProceed && (
                <div className="absolute -top-12 right-0 bg-slate-800 text-white text-xs py-1 px-3 rounded-lg shadow-lg opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
                  Complete the task first!
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-slate-800 rotate-45"></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogLayer;