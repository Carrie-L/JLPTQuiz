
import React from 'react';
import { Trophy, Star, Home, ShieldCheck } from 'lucide-react';

interface VictoryScreenProps {
  onExit: () => void;
}

const VictoryScreen: React.FC<VictoryScreenProps> = ({ onExit }) => {
  return (
    <div className="w-full h-screen bg-[#FFFFF0] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      
      <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <div className="absolute top-20 right-20 w-3 h-3 bg-red-400 rotate-45 animate-pulse" />

      <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-yellow-300 max-w-lg w-full flex flex-col items-center z-10 relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#FBBF24,#FBBF24_10px,#F59E0B_10px,#F59E0B_20px)] opacity-20 rounded-t-[2.5rem]" />

        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600 shadow-inner">
           <Trophy size={48} fill="currentColor" />
        </div>
        
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2">安全确认!</h1>
        <p className="text-slate-500 mb-8 font-medium">禁止形 (Prohibitive Form) 已经掌握了。</p>

        <div className="flex gap-2 mb-8">
           {[1, 2, 3].map(i => (
             <Star key={i} size={32} className="text-yellow-400 fill-current animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
           ))}
        </div>

        <div className="bg-yellow-50 w-full rounded-2xl p-6 mb-8 text-left border border-yellow-100">
           <div className="flex items-center gap-2 mb-3 text-yellow-700 font-bold uppercase tracking-wider text-xs">
              <ShieldCheck size={16} /> 核心规则
           </div>
           <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-center gap-2 text-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full" /> 
                <span className="font-bold">辞书形 + na (な)</span>
              </li>
              <li className="text-slate-400 text-sm pl-4">简单粗暴，不分动词类别！</li>
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
