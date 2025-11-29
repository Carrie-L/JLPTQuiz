import React, { useState } from 'react';
import { Play, Star } from 'lucide-react';
import GameEngine43 from './components/jp.n4.3/GameEngine';
import GameEngine41 from './components/jp.n4.1/GameEngine';
import GameEngine44 from './components/jp.n4.4/GameEngine';
import GameEngine45 from './components/jp.n4.5/GameEngine';

const App = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  if (activeModule === 'jp.n4.3') {
    return <GameEngine43 onExit={() => setActiveModule(null)} />;
  }
  if (activeModule === 'jp.n4.1') {
    return <GameEngine41 onExit={() => setActiveModule(null)} />;
  }
  if (activeModule === 'jp.n4.4') {
    return <GameEngine44 onExit={() => setActiveModule(null)} />;
  }
  if (activeModule === 'jp.n4.5') {
    return <GameEngine45 onExit={() => setActiveModule(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#FDFCF5] text-slate-700 p-8 flex flex-col items-center font-['Nunito']">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
        @keyframes bounceIn { 0% { transform: scale(0.8); opacity: 0; } 60% { transform: scale(1.05); } 100% { transform: scale(1); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-shake { animation: shake 0.4s ease-in-out; }
        .animate-bounceIn { animation: bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>
      <header className="w-full max-w-4xl mb-12 flex justify-between items-end border-b-2 border-stone-100 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-teal-800 tracking-tight font-['Zen_Maru_Gothic']">Nihongo Quest</h1>
          <p className="text-stone-400 mt-1 font-medium text-sm">日语交互式视觉小说</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <Star size={14} fill="currentColor" />
            <span>N4 Level</span>
          </div>
        </div>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card Style 1: Green - Verb Groups */}
        <div 
          onClick={() => setActiveModule('jp.n4.1')}
          className="group bg-white border-2 border-emerald-100 hover:border-emerald-400 rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 relative overflow-hidden"
        >
           <div className="absolute right-0 top-0 bottom-0 w-1 bg-emerald-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
          <div className="w-12 h-12 shrink-0 bg-emerald-50 group-hover:bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-lg font-['Zen_Maru_Gothic'] transition-colors">
            01
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-slate-800 text-lg group-hover:text-emerald-700 transition-colors">动词活用种类</h3>
            <p className="text-slate-400 text-sm group-hover:text-emerald-500/80 transition-colors">Verb Groups (1, 2, 3)</p>
          </div>
          <div className="text-emerald-200 group-hover:text-emerald-400 transition-colors transform group-hover:translate-x-1 duration-300">
            <Play size={24} fill="currentColor" />
          </div>
        </div>

        {/* Card Style 4: Blue/Teal - Nai Form */}
        <div 
          onClick={() => setActiveModule('jp.n4.3')}
          className="group bg-white border-2 border-indigo-100 hover:border-teal-400 rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-teal-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
          
          <div className="w-12 h-12 shrink-0 bg-indigo-50 group-hover:bg-teal-50 rounded-full flex items-center justify-center text-indigo-500 group-hover:text-teal-600 transition-colors font-bold text-lg font-['Zen_Maru_Gothic']">
             02
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-slate-800 text-lg group-hover:text-teal-700 transition-colors">动词变形：ない形</h3>
            <p className="text-slate-400 text-sm group-hover:text-teal-500/80 transition-colors">Verb Nai-form (～ない)</p>
          </div>
          <div className="text-indigo-200 group-hover:text-teal-400 transition-colors transform group-hover:translate-x-1 duration-300">
             <Play size={24} fill="currentColor" />
          </div>
        </div>

        {/* Card Style 2: Pink - Passive Form */}
        <div 
          onClick={() => setActiveModule('jp.n4.4')}
          className="group bg-white border-2 border-pink-100 hover:border-pink-400 rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 relative overflow-hidden"
        >
           <div className="absolute right-0 top-0 bottom-0 w-1 bg-pink-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
           <div className="w-12 h-12 shrink-0 bg-pink-50 group-hover:bg-pink-100 rounded-full flex items-center justify-center text-pink-500 group-hover:text-pink-600 transition-colors font-bold text-lg font-['Zen_Maru_Gothic']">
            03
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-slate-800 text-lg group-hover:text-pink-700 transition-colors">动词变形：被动形</h3>
            <p className="text-slate-400 text-sm group-hover:text-pink-500/80 transition-colors">Passive Form (～られる)</p>
          </div>
          <div className="text-pink-200 group-hover:text-pink-400 transition-colors transform group-hover:translate-x-1 duration-300">
             <Play size={24} fill="currentColor" />
          </div>
        </div>

        {/* Card Style 3: Violet - Causative Form (New Active) */}
        <div 
          onClick={() => setActiveModule('jp.n4.5')}
          className="group bg-white border-2 border-violet-100 hover:border-violet-400 rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-violet-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
          <div className="w-12 h-12 shrink-0 bg-violet-50 group-hover:bg-violet-100 rounded-full flex items-center justify-center text-violet-500 group-hover:text-violet-600 font-bold text-lg font-['Zen_Maru_Gothic']">
             04
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-slate-800 text-lg group-hover:text-violet-700 transition-colors">动词变形：使役形</h3>
            <p className="text-slate-400 text-sm group-hover:text-violet-500/80 transition-colors">Causative Form (～させる)</p>
          </div>
          <div className="text-violet-200 group-hover:text-violet-400 transition-colors transform group-hover:translate-x-1 duration-300">
             <Play size={24} fill="currentColor" />
          </div>
        </div>

      </main>

      <footer className="mt-20 text-stone-300 text-sm">
        © 2024 Visual Code Novel Engine
      </footer>
    </div>
  );
};

export default App;