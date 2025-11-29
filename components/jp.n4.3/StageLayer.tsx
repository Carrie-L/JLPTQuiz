import React from 'react';
import { ScriptStep, ViewType } from './types';
import InteractiveLab from './InteractiveLab';
import { Book, Image as ImageIcon } from 'lucide-react';

interface StageLayerProps {
  step: ScriptStep;
  onComplete: (success: boolean) => void;
}

const StageLayer: React.FC<StageLayerProps> = ({ step, onComplete }) => {
  const { viewType, viewContent } = step;

  // Render content based on ViewType
  const renderContent = () => {
    switch (viewType) {
      case ViewType.IMAGE:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-8">
            <div className="relative w-full max-w-2xl aspect-video bg-[#FFFDF5] rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-4 border-white ring-1 ring-stone-100 overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50" />
               <div className="absolute inset-0 bg-teal-50/30" />
               
               <div className="text-center z-10 relative">
                 <div className="bg-white p-6 rounded-full inline-block mb-4 shadow-sm">
                    <ImageIcon size={48} className="text-teal-600/70" />
                 </div>
                 <p className="text-stone-500 font-medium px-8 font-serif">{viewContent.imagePrompt}</p>
               </div>
               
               {/* Decorative floating elements (Subtle Nature) */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-40 mix-blend-multiply" />
               <div className="absolute -bottom-10 left-10 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-40 mix-blend-multiply" />
            </div>
            {viewContent.imageCaption && (
              <div className="mt-6 bg-white/80 px-6 py-2 rounded-full border border-stone-100 shadow-sm text-stone-600 font-bold tracking-wider text-sm">
                {viewContent.imageCaption}
              </div>
            )}
          </div>
        );

      case ViewType.GRAMMAR_EXPLAIN:
        return (
          <div className="w-full max-w-3xl bg-[#FFFDF5] rounded-3xl shadow-xl overflow-hidden border border-stone-200">
            {/* Header: Warm wood tone */}
            <div className="bg-[#8B5E3C] p-6 flex items-center gap-3 relative overflow-hidden">
               <div className="absolute inset-0 bg-black/5 pattern-dots" />
              <Book className="text-yellow-100 relative z-10" />
              <h2 className="text-yellow-50 text-xl font-bold relative z-10">{viewContent.grammarRule?.title}</h2>
            </div>
            <div className="p-8 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
               <div className="space-y-4 mb-8">
                 {viewContent.grammarRule?.content.map((rule, idx) => (
                   <div key={idx} className="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-stone-100 shadow-sm">
                     <div className="w-6 h-6 rounded-full bg-[#E67E22] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                       {idx + 1}
                     </div>
                     <p className="text-lg text-stone-700 font-medium">{rule}</p>
                   </div>
                 ))}
               </div>
               
               <div className="space-y-3">
                 <h3 className="text-sm font-bold text-[#8B5E3C] uppercase tracking-widest mb-2 border-b border-[#8B5E3C]/20 pb-2">例句 (Examples)</h3>
                 {viewContent.grammarRule?.examples.map((ex, idx) => (
                   <div key={idx} className="flex justify-between items-center p-3 hover:bg-white/50 transition-colors rounded-lg group">
                     <span className="text-lg font-bold text-stone-700 group-hover:text-[#E67E22] transition-colors">{ex.jp}</span>
                     <span className="text-stone-400 font-serif italic text-sm">{ex.cn}</span>
                   </div>
                 ))}
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