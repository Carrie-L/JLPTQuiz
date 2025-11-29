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
    // Note: In this new design, we stick to the Teal Theme for the card structure,
    // but we can use the prop to slightly tint the nameplate text if needed.
    // For now, adhering to the requested "Image 2" style which is teal-dominant.
    return 'text-teal-700 border-teal-500';
  };

  return (
    <div className="w-full h-full max-w-5xl mx-auto relative group">
      
      {/* Nameplate - Now placed OUTSIDE the overflow-hidden container to ensure it floats above */}
      {/* "Floating Nameplate" Positioned absolute relative to the wrapper */}
      <div className="absolute top-0 left-8 z-30 transform -translate-y-1/2">
        <div className={`bg-white border-2 border-teal-500 px-6 py-2 rounded-lg shadow-sm text-teal-700 font-bold tracking-wide text-lg`}>
          {step.speaker}
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full h-full bg-white/90 backdrop-blur-md border-2 border-teal-500 shadow-xl rounded-[2rem] relative flex flex-col transition-all duration-300">
        
        {/* Decorative Wave (SVG) on the right */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-20 pointer-events-none">
           <svg width="60" height="100" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 C 50 50, 50 150, 90 190" stroke="#14B8A6" strokeWidth="4" strokeLinecap="round" />
              <path d="M30 10 C 70 50, 70 150, 110 190" stroke="#14B8A6" strokeWidth="4" strokeLinecap="round" />
           </svg>
        </div>

        {/* Text Content */}
        <div className="p-10 pt-12 h-full flex flex-col relative z-10">
          <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed font-['Zen_Maru_Gothic']">
            {step.text}
          </p>

          {/* Controls */}
          <div className="mt-auto flex justify-end items-center gap-4">
            <button 
              onClick={onPrev}
              disabled={step.id === 1}
              className={`p-2 rounded-full text-teal-400 hover:bg-teal-50 transition-colors ${step.id === 1 ? 'opacity-0' : 'opacity-100'}`}
              title="上一步"
            >
              <RotateCcw size={20} />
            </button>

            {/* Next Button - Outline Style */}
            <button
              onClick={onNext}
              disabled={!canProceed}
              className={`
                group/btn relative px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 border-2
                ${canProceed 
                  ? 'bg-white border-teal-500 text-teal-700 hover:bg-teal-50 shadow-sm hover:shadow-md cursor-pointer' 
                  : 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'}
              `}
            >
              <span>{isLast ? '完成' : 'Next'}</span>
              <ArrowRight size={18} className={canProceed ? 'group-hover/btn:translate-x-1 transition-transform' : ''} />
              
              {!canProceed && (
                <div className="absolute -top-12 right-0 bg-white border border-teal-200 text-teal-800 text-xs py-2 px-3 rounded-lg shadow-lg opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap z-50">
                  请先完成当前任务！
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white border-b border-r border-teal-200 rotate-45"></div>
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