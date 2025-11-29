
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
            <div className="w-full max-w-3xl aspect-video bg-[#1F2937] rounded-[1rem] shadow-2xl border-4 border-[#7C3AED] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                {/* Moon */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-100 rounded-full blur-[2px] shadow-[0_0_30px_10px_rgba(253,224,71,0.2)]"></div>
                
                {/* Fire Particles */}
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="absolute w-1 h-1 bg-orange-500 rounded-full animate-float-up" 
                         style={{ 
                             bottom: '0', 
                             left: `${40 + Math.random() * 20}%`, 
                             animationDuration: `${2 + Math.random() * 2}s` 
                         }}
                    />
                ))}

                <div className="text-8xl mb-6 filter drop-shadow-lg relative z-10">
                    🔥⛺
                </div>
                <p className="text-slate-300 font-serif text-xl italic leading-relaxed max-w-lg z-10 relative bg-black/40 p-4 rounded-lg backdrop-blur-sm">
                    "{step.viewContent.imagePrompt}"
                </p>
            </div>
          </div>
        );

      case 'GRAMMAR_EXPLAIN':
        return (
          <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-2xl bg-[#2D3748] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border-4 border-[#4A5568] relative">
               {/* Blackboard header */}
               <div className="bg-[#1A202C] px-4 py-2 border-b border-slate-600 flex justify-between items-center">
                   <span className="text-slate-400 text-xs tracking-widest uppercase">Rin's Night Class</span>
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
               </div>

               <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                   <div className="text-emerald-100/90 font-mono text-lg md:text-xl whitespace-pre-line leading-relaxed tracking-wider">
                       {step.viewContent.grammarRule}
                   </div>
               </div>
            </div>
          </div>
        );

      case 'INTERACTIVE_LAB':
        return (
          <div className="w-full h-full flex flex-col justify-start pt-2 md:pt-4 px-2">
             <InteractiveLab 
                mode={step.viewContent.interactiveConfig?.mode || "group2_te"} 
                onTaskComplete={onTaskComplete}
             />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-[70vh] bg-[#111827] relative overflow-y-auto pb-32">
       {/* Background Stars */}
       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
       <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-80 pointer-events-none"></div>
       
       <div className="relative z-10 w-full h-full">
         {renderContent()}
       </div>
    </div>
  );
};

export default StageLayer;
