
import React from 'react';
import { Trophy, Star, Home, Heart } from 'lucide-react';

interface VictoryScreenProps {
  onExit: () => void;
}

const VictoryScreen: React.FC<VictoryScreenProps> = ({ onExit }) => {
  return (
    <div className="w-full h-screen bg-[#FFF1F2] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      
      <div className="absolute top-10 left-10 w-4 h-4 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <div className="absolute top-20 right-20 w-3 h-3 bg-red-400 rotate-45 animate-pulse" />

      <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-rose-200 max-w-lg w-full flex flex-col items-center z-10 relative">
        <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mb-6 text-rose-600 shadow-inner">
           <Trophy size={48} fill="currentColor" />
        </div>
        
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2">新年快乐!</h1>
        <p className="text-slate-500 mb-8 font-medium">N3 词汇学习完成 (Feelings & Memories)。</p>

        <div className="flex gap-2 mb-8">
           {[1, 2, 3].map(i => (
             <Star key={i} size={32} className="text-yellow-400 fill-current animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
           ))}
        </div>

        <div className="bg-rose-50 w-full rounded-2xl p-6 mb-8 text-left border border-rose-200">
           <div className="flex items-center gap-2 mb-3 text-rose-700 font-bold uppercase tracking-wider text-xs">
              <Heart size={16} /> 核心词汇
           </div>
           <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-center gap-2 text-lg">
                <div className="w-2 h-2 bg-rose-500 rounded-full" /> 
                <span className="font-bold">年末年始 (Nenmatsu Nenshi)</span>
              </li>
              <li className="text-slate-400 text-sm pl-4">思い出 (Memories), 感情 (Feelings)</li>
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
