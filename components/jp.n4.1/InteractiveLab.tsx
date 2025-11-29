import React, { useState, useEffect } from 'react';
import { Check, X, AlertTriangle, Box, RefreshCw } from 'lucide-react';
import { InteractiveConfig, LabMode } from './types';

interface InteractiveLabProps {
  config: InteractiveConfig;
  onComplete: (success: boolean) => void;
}

const InteractiveLab: React.FC<InteractiveLabProps> = ({ config, onComplete }) => {
  const [feedback, setFeedback] = useState<'idle' | 'success' | 'error'>('idle');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setFeedback('idle');
    setAttempts(0);
  }, [config]);

  const handleClassify = (selectedGroup: number) => {
    if (selectedGroup === config.correctAnswer) {
      setFeedback('success');
      onComplete(true);
    } else {
      setFeedback('error');
      setAttempts(p => p + 1);
      setTimeout(() => setFeedback('idle'), 1500);
    }
  };

  const GroupButton = ({ group, label, sub, colorClass }: { group: number, label: string, sub: string, colorClass: string }) => (
    <button
      onClick={() => handleClassify(group)}
      disabled={feedback === 'success'}
      className={`
        relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-200 flex flex-col items-center gap-2 group hover:-translate-y-1 hover:shadow-lg
        ${feedback === 'success' && config.correctAnswer === group ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-200' : 'bg-white border-stone-100 hover:border-emerald-300'}
        ${feedback === 'error' && config.correctAnswer !== group ? 'opacity-50' : ''}
      `}
    >
      <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center font-bold text-xl mb-1 shadow-sm group-hover:scale-110 transition-transform`}>
        {group}
      </div>
      <div className="text-stone-700 font-bold text-lg">{label}</div>
      <div className="text-stone-400 text-xs font-medium uppercase tracking-wider">{sub}</div>
      
      {feedback === 'success' && config.correctAnswer === group && (
        <div className="absolute top-2 right-2 text-emerald-500 animate-bounceIn">
          <Check size={20} />
        </div>
      )}
    </button>
  );

  return (
    <div className="flex flex-col items-center w-full max-w-4xl animate-fadeIn">
      
      {/* Target Verb Card - Widened to max-w-2xl for better visual balance */}
      <div className="bg-white rounded-[2rem] shadow-xl p-8 mb-10 text-center border border-stone-100 w-full max-w-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-emerald-400" />
        <h2 className="text-5xl font-extrabold text-stone-700 mb-2 font-['Zen_Maru_Gothic']">
          {config.targetVerb?.kanji}
        </h2>
        <p className="text-xl text-stone-400 font-medium font-serif mb-4">
          {config.targetVerb?.hiragana}
        </p>
        <p className="inline-block bg-stone-100 text-stone-500 px-4 py-1 rounded-full text-sm font-bold">
          {config.targetVerb?.english}
        </p>
      </div>

      {/* Sorting Bins */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <GroupButton 
          group={1} 
          label="一类动词" 
          sub="Godan / 五段"
          colorClass="bg-blue-100 text-blue-600"
        />
        <GroupButton 
          group={2} 
          label="二类动词" 
          sub="Ichidan / 一段"
          colorClass="bg-pink-100 text-pink-600"
        />
        <GroupButton 
          group={3} 
          label="三类动词" 
          sub="Irregular / 不规则"
          colorClass="bg-orange-100 text-orange-600"
        />
      </div>

      {/* Feedback Area */}
      <div className="h-16 mt-6 flex items-center justify-center w-full">
        {feedback === 'error' && (
           <div className="text-red-500 font-bold flex items-center gap-2 bg-red-50 px-6 py-2 rounded-full animate-shake border border-red-100">
             <AlertTriangle size={18} />
             <span>不是这个组哦... ({attempts} 次尝试)</span>
           </div>
        )}
        {feedback === 'success' && (
           <div className="text-emerald-600 font-bold flex items-center gap-2 bg-emerald-50 px-6 py-3 rounded-full animate-bounceIn border border-emerald-100 shadow-sm">
             <Check size={20} />
             <span>正确! {config.explanation}</span>
           </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveLab;