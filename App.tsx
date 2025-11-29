import React, { useState } from 'react';
import { Play, Star } from 'lucide-react';
import GameEngine from './components/jp.n4.3/GameEngine';

const App = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  if (activeModule === 'jp.n4.3') {
    return <GameEngine onExit={() => setActiveModule(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#FDFCF5] text-slate-700 p-8 flex flex-col items-center font-['Nunito']">
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
        
        {/* Card Style 1: Green (Compose/Camping style) - Locked placeholder */}
        <div className="group bg-white border-2 border-emerald-100 hover:border-emerald-300 rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 opacity-60">
          <div className="w-12 h-12 shrink-0 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 font-bold text-lg font-['Zen_Maru_Gothic']">
            06
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-slate-800 text-lg">Compose 导航露营</h3>
            <p className="text-slate-400 text-sm">Navigation & Camping</p>
          </div>
          <div className="text-emerald-300">
            <Play size={24} fill="currentColor" className="opacity-0" />
          </div>
        </div>

        {/* Card Style 2: Pink (Route Arguments style) - Locked placeholder */}
        <div className="group bg-white border-2 border-pink-100 hover:border-pink-300 rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 opacity-60">
           <div className="w-12 h-12 shrink-0 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 font-bold text-sm">
            05+
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-slate-800 text-lg">路由参数传递</h3>
            <p className="text-slate-400 text-sm">Route Arguments</p>
          </div>
          <div className="text-pink-300">
             <Play size={24} fill="currentColor" className="opacity-0" />
          </div>
        </div>

        {/* Card Style 3: Blue/Purple - Locked placeholder */}
        <div className="group bg-white border-2 border-blue-100 hover:border-blue-300 rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 opacity-60">
          <div className="w-12 h-12 shrink-0 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 font-bold text-lg">
             <span className="text-xl">文</span><span className="text-xs align-top">A</span>
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-slate-800 text-lg">日语 N4：可能态</h3>
            <p className="text-slate-400 text-sm">Potential Form (～られる)</p>
          </div>
          <div className="text-blue-300">
             <Play size={24} fill="currentColor" className="opacity-0" />
          </div>
        </div>

        {/* Card Style 4: The Active Module (Nai Form) */}
        <div 
          onClick={() => setActiveModule('jp.n4.3')}
          className="group bg-white border-2 border-indigo-100 hover:border-teal-400 rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-teal-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
          
          <div className="w-12 h-12 shrink-0 bg-indigo-50 group-hover:bg-teal-50 rounded-full flex items-center justify-center text-indigo-500 group-hover:text-teal-600 transition-colors font-bold text-lg">
             <span className="text-xl">文</span><span className="text-xs align-top">A</span>
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-slate-800 text-lg group-hover:text-teal-700 transition-colors">动词变形：ない形</h3>
            <p className="text-slate-400 text-sm group-hover:text-teal-500/80 transition-colors">Verb Nai-form (～ない)</p>
          </div>
          <div className="text-indigo-200 group-hover:text-teal-400 transition-colors transform group-hover:translate-x-1 duration-300">
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