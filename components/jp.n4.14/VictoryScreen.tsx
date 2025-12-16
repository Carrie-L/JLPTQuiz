
import React from 'react';
import { Trophy, Star, Home, ArrowRightCircle } from 'lucide-react';

interface VictoryScreenProps {
  onExit: () => void;
}

const VictoryScreen: React.FC<VictoryScreenProps> = ({ onExit }) => {
  return (
    <div className="w-full h-screen bg-[#F0F9FF] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      
      <div className="absolute top-10 left-10 w-4 h-4 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rotate-45 animate-pulse" />

      <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-sky-100 max-w-lg w-full flex flex-col items-center z-10 relative">
        <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mb-6 text-sky-600 shadow-inner">
           <Trophy size={48} fill="currentColor" />
        </div>
        
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2">条件达成!</h1>
        <p className="text-slate-500 mb-8 font-medium">条件形 (～ば) 已经掌握了。</p>

        <div className="flex gap-2 mb-8">
           {[1, 2, 3].map(i => (
             <Star key={i} size={32} className="text-yellow-400 fill-current animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
           ))}
        </div>

        <div className="bg-sky-50 w-full rounded-2xl p-6 mb-8 text-left border border-sky-100">
           <div className="flex items-center gap-2 mb-3 text-sky-700 font-bold uppercase tracking-wider text-xs">
              <ArrowRightCircle size={16} /> 核心规则
           </div>
           <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-center gap-2 text-lg">
                <div className="w-2 h-2 bg-sky-500 rounded-full" /> 
                <span className="font-bold">u段 → e段 + ba (ば)</span>
              </li>
              <li className="flex items-center gap-2 text-lg">
                <div className="w-2 h-2 bg-sky-500 rounded-full" /> 
                <span className="font-bold">ru → re + ba (れば)</span>
              </li>
           </ul>
        </div>

        <button 
          onClick={onExit}
          className="w-full bg-slate-800 text-white font-bold py-4 rounded-xl hover:bg-slate-900 transition-transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <Home size={20} />
          回到主菜单
        </button>
      </div>
    </div>
  );
};

export default VictoryScreen;
