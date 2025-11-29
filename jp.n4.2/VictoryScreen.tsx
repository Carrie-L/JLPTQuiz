
import React, { useEffect, useState } from 'react';
import { Star, RefreshCcw, Home, Award } from 'lucide-react';

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
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[#8FC1D4]">
      
      {/* Sakura Petals */}
      {[...Array(20)].map((_, i) => (
        <div 
            key={i}
            className="absolute w-3 h-3 bg-pink-200 rounded-tl-xl rounded-br-xl opacity-80 animate-spin-slow"
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 5}s`,
            }}
        />
      ))}

      <div 
        className={`
            max-w-md w-full bg-[#FFFDF5] rounded-lg p-8 shadow-2xl border-8 border-[#D4A373] text-center relative z-10
            transition-all duration-1000 transform
            ${showCard ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#D4A373] text-white px-6 py-2 rounded-full font-bold shadow-lg tracking-widest">
            JLPT N4
        </div>

        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner mt-4">
            <Award size={48} className="text-yellow-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-slate-800 mb-2 font-serif">合格！</h2>
        <p className="text-slate-500 mb-8 text-sm">你已经掌握了日语的可能态。</p>

        <div className="space-y-3 mb-8 text-left bg-white p-4 rounded-lg border border-slate-200">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <span className="text-xl">🍚</span>
                <div>
                    <div className="font-bold text-slate-700 text-sm">Group 2 (Ru)</div>
                    <div className="text-slate-400 text-xs">Drop ru + rareru</div>
                </div>
            </div>
            <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <span className="text-xl">🗺️</span>
                <div>
                    <div className="font-bold text-slate-700 text-sm">Group 1 (U)</div>
                    <div className="text-slate-400 text-xs">u -> e + ru</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-xl">⛺</span>
                <div>
                    <div className="font-bold text-slate-700 text-sm">Irregular</div>
                    <div className="text-slate-400 text-xs">suru -> dekiru</div>
                </div>
            </div>
        </div>

        <div className="flex gap-4">
            <button 
                onClick={onRestart}
                className="flex-1 py-3 px-4 rounded-lg border-2 border-slate-300 font-bold text-slate-500 hover:bg-slate-100 flex items-center justify-center gap-2 transition-colors"
            >
                <RefreshCcw size={18} /> 再来一次
            </button>
            <button 
                onClick={onBack}
                className="flex-1 py-3 px-4 rounded-lg bg-[#E2B714] font-bold text-white hover:bg-yellow-500 shadow-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
            >
                <Home size={18} /> 回大厅
            </button>
        </div>
      </div>
    </div>
  );
};

export default VictoryScreen;
