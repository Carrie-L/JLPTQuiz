
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    pink: { bg: 'bg-[#FFF0F5]', text: 'text-rose-600', border: 'border-rose-300' }, // Nadeshiko
    blue: { bg: 'bg-[#F0F8FF]', text: 'text-blue-600', border: 'border-blue-300' }, // Rin
    green: { bg: 'bg-[#F0FFF4]', text: 'text-emerald-600', border: 'border-emerald-300' }, // System
  };

  const theme = colorMap[speakerColor] || colorMap.pink;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 md:p-6 z-50 flex justify-center pointer-events-none">
      <div 
        className={`
          pointer-events-auto
          relative w-full max-w-4xl 
          ${theme.bg}
          rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]
          border-4 ${theme.border}
          min-h-[160px] flex flex-col justify-between
          transition-all duration-500
        `}
      >
        {/* Floating Icons */}
        <div className="absolute -top-5 right-5 text-3xl animate-bounce" style={{ animationDuration: '3s' }}>
            {speakerColor === 'blue' ? '🛵' : '⛺'}
        </div>

        {/* Name Tag */}
        <div className={`
          absolute -top-4 left-6 px-6 py-1 
          bg-white border-2 ${theme.border} 
          rounded-xl shadow-sm z-10
        `}>
          <span className={`font-bold text-lg tracking-wider ${theme.text}`}>
            {speaker}
          </span>
        </div>

        {/* Text */}
        <div className="px-8 pt-8 pb-4 relative z-10">
          <p className={`text-lg md:text-xl font-medium leading-relaxed font-sans ${theme.text} drop-shadow-sm`}>
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
                ? 'bg-white text-slate-600 border-slate-200 hover:bg-orange-50 hover:border-orange-300 hover:-translate-y-1 shadow-sm' 
                : 'bg-slate-100 text-slate-300 border-transparent cursor-not-allowed'}
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
