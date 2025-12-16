
import React from 'react';
import { ScriptStep, ViewType } from './types';
import InteractiveLab from './InteractiveLab';
import { Ban, AlertTriangle, ShieldAlert, Construction } from 'lucide-react';

interface StageLayerProps {
  step: ScriptStep;
  onComplete: (success: boolean) => void;
}

const StageLayer: React.FC<StageLayerProps> = ({ step, onComplete }) => {
  const { viewType, viewContent } = step;

  const BackgroundDecorations = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
      <Construction className="absolute top-10 right-10 text-yellow-200 opacity-60" size={80} />
      <Ban className="absolute bottom-10 left-10 text-red-100 opacity-60" size={120} />
    </div>
  );

  const renderContent = () => {
    switch (viewType) {
      case ViewType.IMAGE:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 relative">
            <div className="relative w-full max-w-2xl aspect-video bg-[#FFFEF5] rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-4 border-yellow-400 ring-1 ring-yellow-200 overflow-hidden flex items-center justify-center group z-10">
               <BackgroundDecorations />
               
               <div className="text-center z-10 relative flex flex-col items-center">
                 <div className="bg-white p-6 rounded-full inline-block mb-4 shadow-sm text-red-500 animate-pulse">
                    <ShieldAlert size={48} className="opacity-90" />
                 </div>
                 <p className="text-stone-600 font-bold px-8 font-serif text-lg">{viewContent.imagePrompt}</p>
               </div>
               
               {/* Warning Tape Overlay */}
               <div className="absolute -left-10 top-10 bg-yellow-400 text-black font-bold text-xs py-1 px-20 rotate-[-45deg] shadow-md uppercase tracking-widest border-y-2 border-black/10">
                  Keep Out
               </div>
            </div>
            {viewContent.imageCaption && (
              <div className="mt-6 bg-yellow-400 text-black px-8 py-2 rounded-full shadow-md font-bold tracking-wider text-sm z-10 border-2 border-white">
                {viewContent.imageCaption}
              </div>
            )}
          </div>
        );

      case ViewType.GRAMMAR_EXPLAIN:
        return (
          <div className="w-full max-w-4xl bg-[#FFFEF5] rounded-3xl shadow-xl overflow-hidden border border-stone-200 relative z-10">
            {/* Header - Yellow for Caution */}
            <div className="bg-[#FBC02D] p-6 flex items-center gap-3 relative overflow-hidden">
               <div className="absolute inset-0 bg-black/5 pattern-dots" />
              <Ban className="text-black/80 relative z-10" />
              <h2 className="text-black/80 text-xl font-bold relative z-10">{viewContent.grammarRule?.title}</h2>
            </div>
            <div className="p-8 relative">
               <BackgroundDecorations />
               <div className="relative z-10">
                  <div className="space-y-4 mb-8">
                    {viewContent.grammarRule?.content.map((rule, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-yellow-200 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#FFF176] text-yellow-800 flex items-center justify-center font-bold text-base shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-xl text-stone-800 font-medium">{rule}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3 bg-white/60 p-6 rounded-2xl border border-stone-100">
                    <h3 className="text-sm font-bold text-[#F9A825] uppercase tracking-widest mb-2 border-b border-[#F9A825]/20 pb-2">例句 (Examples)</h3>
                    {viewContent.grammarRule?.examples.map((ex, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 hover:bg-white transition-colors rounded-lg group">
                        <span className="text-xl font-bold text-stone-800 group-hover:text-red-600 transition-colors">{ex.jp}</span>
                        <span className="text-stone-500 font-serif italic text-base">{ex.cn}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        );

      case ViewType.INTERACTIVE_LAB:
        return (
           <InteractiveLab 
             config={viewContent.interactiveConfig!} 
             onComplete={onComplete}
           />
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center animate-fadeIn">
      {renderContent()}
    </div>
  );
};

export default StageLayer;
