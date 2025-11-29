import React from 'react';
import { ScriptStep, ViewType } from './types';
import InteractiveLab from './InteractiveLab';
import { Book, Image as ImageIcon, Tent, Trees, Mountain } from 'lucide-react';

interface StageLayerProps {
  step: ScriptStep;
  onComplete: (success: boolean) => void;
}

const StageLayer: React.FC<StageLayerProps> = ({ step, onComplete }) => {
  const { viewType, viewContent } = step;

  // Common background decorations for the camping vibe
  const BackgroundDecorations = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
      <Trees className="absolute bottom-[-10px] left-4 text-emerald-100 opacity-60" size={120} />
      <Trees className="absolute bottom-[-20px] left-24 text-teal-100 opacity-50" size={100} />
      <Mountain className="absolute bottom-10 right-[-20px] text-stone-100 opacity-60" size={180} />
      <Tent className="absolute bottom-4 right-12 text-orange-100 opacity-50" size={80} />
    </div>
  );

  // Render content based on ViewType
  const renderContent = () => {
    switch (viewType) {
      case ViewType.IMAGE:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 relative">
            <div className="relative w-full max-w-2xl aspect-video bg-[#FFFEF5] rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-4 border-white ring-1 ring-stone-100 overflow-hidden flex items-center justify-center group z-10">
               {/* Replaced pattern with solid color and icons */}
               <BackgroundDecorations />
               
               <div className="text-center z-10 relative">
                 <div className="bg-white p-6 rounded-full inline-block mb-4 shadow-sm text-teal-600">
                    <Tent size={48} className="opacity-80" />
                 </div>
                 <p className="text-stone-500 font-medium px-8 font-serif text-lg">{viewContent.imagePrompt}</p>
               </div>
               
               {/* Decorative floating elements */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-30 mix-blend-multiply" />
               <div className="absolute -bottom-10 left-10 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-30 mix-blend-multiply" />
            </div>
            {viewContent.imageCaption && (
              <div className="mt-6 bg-white/80 px-6 py-2 rounded-full border border-stone-100 shadow-sm text-stone-600 font-bold tracking-wider text-sm z-10">
                {viewContent.imageCaption}
              </div>
            )}
          </div>
        );

      case ViewType.GRAMMAR_EXPLAIN:
        return (
          <div className="w-full max-w-4xl bg-[#FFFEF5] rounded-3xl shadow-xl overflow-hidden border border-stone-200 relative z-10">
            {/* Header: Blue camping blanket style */}
            <div className="bg-[#5C9EAD] p-6 flex items-center gap-3 relative overflow-hidden">
               <div className="absolute inset-0 bg-white/10 pattern-dots" />
              <Book className="text-white relative z-10" />
              <h2 className="text-white text-xl font-bold relative z-10">{viewContent.grammarRule?.title}</h2>
            </div>
            <div className="p-8 relative">
               <BackgroundDecorations />
               <div className="relative z-10">
                  <div className="space-y-4 mb-8">
                    {viewContent.grammarRule?.content.map((rule, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-stone-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#E57373] text-white flex items-center justify-center font-bold text-base shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-xl text-stone-700 font-medium">{rule}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3 bg-white/60 p-6 rounded-2xl border border-stone-100">
                    <h3 className="text-sm font-bold text-[#5C9EAD] uppercase tracking-widest mb-2 border-b border-[#5C9EAD]/20 pb-2">例句 (Examples)</h3>
                    {viewContent.grammarRule?.examples.map((ex, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 hover:bg-white transition-colors rounded-lg group">
                        <span className="text-xl font-bold text-stone-700 group-hover:text-[#E57373] transition-colors">{ex.jp}</span>
                        <span className="text-stone-400 font-serif italic text-base">{ex.cn}</span>
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