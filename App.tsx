import React, { useState } from 'react';
import { BookOpen, Star, ArrowRight, Play } from 'lucide-react';
import GameEngine from './components/jp.n4.3/GameEngine';

const App = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  if (activeModule === 'jp.n4.3') {
    return <GameEngine onExit={() => setActiveModule(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-slate-800 p-8 flex flex-col items-center">
      <header className="w-full max-w-5xl mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-teal-700 tracking-tight">Nihongo Quest</h1>
          <p className="text-slate-500 mt-2 font-medium">交互式日语视觉小说</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold flex items-center gap-2">
            <Star size={18} fill="currentColor" />
            <span>N4 Level</span>
          </div>
        </div>
      </header>

      <main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Module Card 1: 4.3 Nai Form */}
        <div 
          onClick={() => setActiveModule('jp.n4.3')}
          className="group relative bg-white border-2 border-slate-200 hover:border-teal-400 rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <BookOpen size={64} className="text-teal-600" />
          </div>
          
          <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 transition-transform">
            <span className="font-bold text-lg">4.3</span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-800 mb-2">ない形 (Nai Form)</h3>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            掌握否定形式 (ない形)。通过互动学习所有动词类型的变形规则。
          </p>
          
          <div className="flex items-center text-teal-600 font-bold text-sm group-hover:gap-2 transition-all">
            <span>开始课程</span>
            <ArrowRight size={16} />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>

        {/* Locked Modules Placeholder */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-center opacity-60">
             <div className="w-12 h-12 bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 mb-4">
                <span className="font-bold text-lg">?</span>
             </div>
             <p className="font-medium text-slate-400">敬请期待</p>
          </div>
        ))}
      </main>

      <footer className="mt-20 text-slate-400 text-sm">
        © 2024 Visual Code Novel Engine
      </footer>
    </div>
  );
};

export default App;