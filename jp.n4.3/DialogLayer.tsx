
import React, { useEffect, useState } from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface DialogLayerProps {
  speaker: string;
  speakerColor?: string;
  text: string;
  onNext: () => void;
  canProceed: boolean;
}

const DialogLayer: React.FC<DialogLayerProps> = ({ 
  speaker, 
  speakerColor = 'pink', 
  text, 
  onNext,
  canProceed 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [text]);

  const colorMap: Record<string, { bg: string, text: string, border: string }> = {
    pink: { bg: 'bg-[#4A2633]', text: 'text-pink-200', border: 'border-pink-800' }, // Nadeshiko (Night)
    blue: { bg: 'bg-[#1E293B]', text: 'text-blue-200', border: 'border-blue-800' }, // Rin (Night)
    green: { bg: 'bg-[#064E3B]', text: 'text-emerald-200', border: 'border-emerald-800' }, // System (Night)
  };

  const theme = colorMap[speakerColor] || colorMap.pink;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 md:p-6 z-50 flex justify-center pointer-events-none">
      <div 
        className={`
          pointer-events-auto
          relative w-full max-w-4xl 
          ${theme.bg}
          rounded-xl shadow-[0_0_30px_rgba(234,88,12,0.15)]
          border-2 ${theme.border}
          min-h-[160px] flex flex-col justify-between
          transition-all duration-500
        `}
      >
        {/* Fire Glow Effect */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none"></div>

        {/* Floating Icons */}
        <div className="absolute -top-5 right-5 text-2xl animate-pulse text-orange-400">
            🔥
        </div>

        {/* Name Tag */}
        <div className={`
          absolute -top-4 left-6 px-4 py-1 
          bg-[#FFFDF5] border-2 border-orange-200
          rounded-sm shadow-lg z-10 transform rotate-1
        `}>
          <span className={`font-bold text-lg tracking-wider text-slate-800`}>
            {speaker}
          </span>
        </div>

        {/* Text */}
        <div className="px-8 pt-8 pb-4 relative z-10">
          <p className={`text-lg md:text-xl font-medium leading-relaxed font-sans ${theme.text} drop-shadow-md`}>
            {displayedText}
          </p>
        </div>

        {/* Next Button */}
        <div className="px-6 pb-4 flex justify-end relative z-10">
          <button
            onClick={onNext}
            disabled={!canProceed}
            className={`
              group flex items-center gap-2 px-5 py-2 rounded-lg
              font-bold transition-all duration-300 border-2
              ${canProceed 
                ? 'bg-orange-500/20 text-orange-200 border-orange-500/50 hover:bg-orange-500 hover:text-white shadow-sm' 
                : 'bg-black/20 text-white/20 border-transparent cursor-not-allowed'}
            `}
          >
            <span>Next</span>
            <ArrowRight size={18} className={canProceed ? "group-hover:translate-x-1 transition-transform" : ""} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogLayer;
