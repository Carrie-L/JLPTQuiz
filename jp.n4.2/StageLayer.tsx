
import React from 'react';
import { ScriptStep } from './types';
import InteractiveLab from './InteractiveLab';
import VictoryScreen from './VictoryScreen';

interface StageLayerProps {
  step: ScriptStep;
  onTaskComplete: (success: boolean) => void;
  onRestart: () => void;
  onBack: () => void;
}

const StageLayer: React.FC<StageLayerProps> = ({ step, onTaskComplete, onRestart, onBack }) => {
  
  if (step.viewType === 'VICTORY') {
      return <VictoryScreen onRestart={onRestart} onBack={onBack} />;
  }

  const renderContent = () => {
    switch (step.viewType) {
      case 'IMAGE':
        return (
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="w-full max-w-3xl aspect-video bg-[#FFFDF0] rounded-[1rem] shadow-[10px_10px_0px_rgba(0,0,0,0.1)] border-4 border-[#8B5E3C] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                {/* Stamp Effect */}
                <div className="absolute top-6 right-6 w-16 h-16 border-4 border-red-400 rounded-full opacity-50 flex items-center justify-center -rotate-12">
                    <span className="text-red-400 font-bold text-xs uppercase">Yuru Camp</span>
                </div>

                <div className="text-8xl mb-6 filter drop-shadow-md transform hover:scale-110 transition-transform duration-500">
                    🏕️
                </div>
                <p className="text-slate-700 font-serif text-xl italic leading-relaxed max-w-lg z-10 relative bg-white/60 p-4 rounded-lg backdrop-blur-sm">
                    "{step.viewContent.imagePrompt}"
                </p>
                
                {/* Washi Tape */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-200/80 rotate-1 backdrop-blur-sm shadow-sm"></div>
            </div>
          </div>
        );

      case 'GRAMMAR_EXPLAIN':
        return (
          <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-2xl bg-[#3E4E50] rounded-xl shadow-2xl overflow-hidden border-8 border-[#5C3A21] relative">
               {/* Chalkboard Look */}
               <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                   <div className="text-white/90 font-mono text-lg md:text-xl whitespace-pre-line leading-relaxed tracking-wider">
                       {step.viewContent.grammarRule}
                   </div>
               </div>
               
               {/* Chalk Dust */}
               <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        );

      case 'INTERACTIVE_LAB':
        return (
          <div className="w-full h-full flex flex-col justify-start pt-2 md:pt-4 px-2">
             <InteractiveLab 
                mode={step.viewContent.interactiveConfig?.mode || "group2_drill"} 
                onTaskComplete={onTaskComplete}
             />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-[70vh] bg-[#F7F9F9] relative overflow-y-auto pb-32">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
       
       <div className="relative z-10 w-full h-full">
         {renderContent()}
       </div>
    </div>
  );
};

export default StageLayer;
