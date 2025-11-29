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
            <div className="relative w-full max-w-2xl aspect-video bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-teal-50 opacity-50 pattern-grid-lg" />
               <div className="text-center z-10">
                 <div className="bg-teal-100 p-6 rounded-full inline-block mb-4">
                    <ImageIcon size={48} className="text-teal-600" />
                 </div>
                 <p className="text-slate-500 font-medium px-8">{viewContent.imagePrompt}</p>
               </div>
               {/* Decorative floating elements */}
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-60 animate-pulse" />
               <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-200 rounded-full blur-xl opacity-60" />
            </div>
            {viewContent.imageCaption && (
              <div className="mt-6 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-white shadow-sm text-slate-600 font-bold tracking-wider uppercase text-sm">
                {viewContent.imageCaption}
              </div>
            )}
          </div>
        );

      case ViewType.GRAMMAR_EXPLAIN:
        return (
          <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-slate-800 p-6 flex items-center gap-3">
              <Book className="text-teal-400" />
              <h2 className="text-white text-xl font-bold">{viewContent.grammarRule?.title}</h2>
            </div>
            <div className="p-8">
               <div className="space-y-4 mb-8">
                 {viewContent.grammarRule?.content.map((rule, idx) => (
                   <div key={idx} className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                     <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                       {idx + 1}
                     </div>
                     <p className="text-lg text-slate-700 font-medium">{rule}</p>
                   </div>
                 ))}
               </div>
               
               <div className="space-y-3">
                 <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Examples</h3>
                 {viewContent.grammarRule?.examples.map((ex, idx) => (
                   <div key={idx} className="flex justify-between items-center p-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-lg">
                     <span className="text-lg font-bold text-slate-800">{ex.jp}</span>
                     <span className="text-slate-500 font-serif italic">{ex.en}</span>
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