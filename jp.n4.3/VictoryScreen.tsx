
import React, { useEffect, useState } from 'react';
import { RefreshCcw, Home, Moon, Flame } from 'lucide-react';

interface VictoryScreenProps {
  onRestart: () => void;
  onBack: () => void;
}

const VictoryScreen: React.FC<VictoryScreenProps> = ({ onRestart, onBack }) => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCard(true), 500);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[#0F172A]">
      
      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <div 
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
                top: `${Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                width: Math.random() * 2 + 'px',
                height: Math.random() * 2 + 'px',
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: Math.random()
            }}
        />
      ))}

      <div 
        className={`
            max-w-md w-full bg-[#1E293B] rounded-2xl p-8 shadow-2xl border-2 border-[#334155] text-center relative z-10
            transition-all duration-1000 transform
            ${showCard ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}
      >
        <div className="w-20 h-20 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-slate-700">
            <Moon size={40} className="text-yellow-100" />
        </div>
        
        <h2 className="text-3xl font-bold text-slate-100 mb-2 font-serif">晚安!</h2>
        <p className="text-slate-400 mb-8 text-sm">你掌握了“て形”，现在可以休息了。</p>

        <div className="space-y-3 mb-8 text-left bg-[#0F172A] p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
                <span className="text-lg">👀</span>
                <div>
                    <div className="font-bold text-slate-300 text-sm">Ru-Verbs</div>
                    <div className="text-slate-500 text-xs">Drop ru + te</div>
                </div>
            </div>
            <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
                <span className="text-lg">👣</span>
                <div>
                    <div className="font-bold text-slate-300 text-sm">U-Verbs (Tte)</div>
                    <div className="text-slate-500 text-xs">u, tsu, ru -> tte</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-lg">☕</span>
                <div>
                    <div className="font-bold text-slate-300 text-sm">U-Verbs (Nde/Ite)</div>
                    <div className="text-slate-500 text-xs">mu -> nde, ku -> ite</div>
                </div>
            </div>
        </div>

        <div className="flex gap-4">
            <button 
                onClick={onRestart}
                className="flex-1 py-3 px-4 rounded-lg border border-slate-600 font-bold text-slate-400 hover:bg-slate-800 hover:text-white flex items-center justify-center gap-2 transition-colors"
            >
                <RefreshCcw size={18} /> 再来一次
            </button>
            <button 
                onClick={onBack}
                className="flex-1 py-3 px-4 rounded-lg bg-orange-600 font-bold text-white hover:bg-orange-500 shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
            >
                <Home size={18} /> 回大厅
            </button>
        </div>
      </div>
    </div>
  );
};

export default VictoryScreen;
