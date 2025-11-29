
import React, { useState, useEffect, useRef } from 'react';
import { Edit3, Check, BookOpen, Utensils, Map, Zap, ChefHat, ArrowRight, X, Sparkles } from 'lucide-react';

interface InteractiveLabProps {
  mode: "group2_drill" | "group1_drill" | "irregular_drill" | "sentence_build";
  onTaskComplete: (success: boolean) => void;
}

// --- Reusable Handwriting Component (Notebook Style) ---
const HandwritingInput: React.FC<{ 
    label: string;
    verb: string;
    validAnswers: string[]; // Support multiple formats (Kanji, Hiragana, Romaji)
    hint?: string;
    grammarRule?: string; // New: Grammar Rule Tag
    onComplete: () => void 
}> = ({ label, verb, validAnswers, hint, grammarRule, onComplete }) => {
  const [input, setInput] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setIsError(false);
  };

  const handleCheck = () => {
    if (isCompleted) return;

    const normalizedInput = input.trim().toLowerCase();
    const isValid = validAnswers.some(ans => ans.toLowerCase() === normalizedInput);

    if (isValid) {
      setIsCompleted(true);
      onComplete();
    } else {
      setIsError(true);
      // Reset error state animation after it plays
      setTimeout(() => setIsError(false), 500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCheck();
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-[#FFFDF5] p-6 rounded-[2rem] shadow-xl border-4 border-[#F0E6D2] w-full max-w-md relative overflow-hidden flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-center relative z-10 border-b-2 border-slate-100 pb-2">
          <div className="flex items-center gap-2 text-slate-700 font-bold text-lg">
              <Edit3 size={20} className="text-orange-400" />
              <span>{label}</span>
          </div>
          {isCompleted && <Sparkles className="text-yellow-400 animate-spin-slow" />}
      </div>

      {/* Verb Display */}
      <div className="text-center py-2">
          <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1">Dictionary Form</div>
          <div className="text-4xl font-black text-slate-800 tracking-tight">{verb}</div>
      </div>

      {/* Input Area */}
      <div className="relative z-10 flex flex-col gap-3">
          
          <div className="flex items-center gap-3">
              {/* Main Input */}
              <div className={`relative flex-1 transition-transform ${isError ? 'animate-shake' : ''}`}>
                  <input
                      ref={inputRef}
                      type="text"
                      className={`
                        w-full h-14 pl-4 pr-10 text-center text-xl font-bold rounded-xl border-2 outline-none transition-all placeholder:text-slate-300 placeholder:font-normal
                        ${isCompleted 
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-700' 
                            : isError 
                                ? 'bg-red-50 border-red-400 text-red-600' 
                                : 'bg-white border-slate-200 text-slate-700 focus:border-blue-400 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.2)]'}
                      `}
                      value={input}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Type here..."
                      disabled={isCompleted}
                      autoComplete="off"
                  />
                  
                  {/* Status Icon Inside Input */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      {isCompleted ? (
                          <div className="bg-emerald-500 rounded-full p-1 text-white animate-in zoom-in">
                              <Check size={14} strokeWidth={4} />
                          </div>
                      ) : isError ? (
                          <X size={20} className="text-red-500" />
                      ) : null}
                  </div>
              </div>

              {/* Grammar Tag (Desktop) */}
              {grammarRule && (
                  <div className="hidden md:flex flex-col items-center justify-center bg-orange-50 px-3 h-14 rounded-xl border-2 border-orange-100 min-w-[80px]">
                      <span className="text-[10px] text-orange-400 font-bold uppercase leading-none mb-0.5">Rule</span>
                      <span className="text-sm font-bold text-orange-600 leading-none">{grammarRule}</span>
                  </div>
              )}
          </div>

          {/* Grammar Tag (Mobile) */}
          {grammarRule && (
              <div className="md:hidden flex items-center justify-center gap-2 text-xs font-bold text-orange-500 bg-orange-50 py-1 rounded-lg">
                  <span className="uppercase opacity-60">Rule:</span> {grammarRule}
              </div>
          )}
          
          {/* Action Button */}
          <button 
            onClick={handleCheck}
            disabled={isCompleted}
            className={`
                w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]
                ${isCompleted 
                    ? 'bg-emerald-100 text-emerald-600 cursor-default' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white shadow-lg shadow-slate-200'}
            `}
          >
              {isCompleted ? 'Correct!' : 'Check Answer'} 
              {!isCompleted && <ArrowRight size={18} />}
          </button>

          {/* Hint */}
          <div className="text-center text-xs text-slate-400 font-medium">
              {hint}
          </div>
      </div>
    </div>
  );
};


const InteractiveLab: React.FC<InteractiveLabProps> = ({ mode, onTaskComplete }) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(false);
  }, [mode]);

  const handleComplete = () => {
      setCompleted(true);
      setTimeout(() => onTaskComplete(true), 800);
  };

  if (mode === 'group2_drill') {
      return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-8">
              <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-orange-500 shadow-sm border-4 border-white">
                      <Utensils size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700">二类动词练习 (Ru-Verb)</h3>
                  <p className="text-slate-500 text-sm">Target: Potential Form (Able to...)</p>
              </div>

              <HandwritingInput 
                  label="Drill #1"
                  verb="食べる (Taberu)"
                  validAnswers={['taberareru', '食べられる', 'たべられる']}
                  grammarRule="ru → rareru"
                  hint="Hint: Drop 'ru', add 'rareru'"
                  onComplete={handleComplete}
              />
          </div>
      );
  }

  if (mode === 'group1_drill') {
      return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-8">
              <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-500 shadow-sm border-4 border-white">
                      <Map size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700">一类动词练习 (U-Verb)</h3>
                  <p className="text-slate-500 text-sm">Target: Potential Form (Able to...)</p>
              </div>

              <HandwritingInput 
                  label="Drill #2"
                  verb="読む (Yomu)"
                  validAnswers={['yomeru', '読める', 'よめる']}
                  grammarRule="u → e + ru"
                  hint="Hint: Change 'mu' to 'me', add 'ru'"
                  onComplete={handleComplete}
              />
          </div>
      );
  }

  if (mode === 'irregular_drill') {
      return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-8">
              <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto text-purple-500 shadow-sm border-4 border-white">
                      <Zap size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700">不规则动词 (Irregular)</h3>
                  <p className="text-slate-500 text-sm">Target: Potential Form (Able to...)</p>
              </div>

              <HandwritingInput 
                  label="Drill #3"
                  verb="する (Suru)"
                  validAnswers={['dekiru', '出来る', 'できる']}
                  grammarRule="Irregular"
                  hint="Hint: It changes completely to 'Dekiru'"
                  onComplete={handleComplete}
              />
          </div>
      );
  }

  if (mode === 'sentence_build') {
      return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-8">
              <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto text-yellow-600 shadow-sm border-4 border-white">
                      <ChefHat size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700">终极挑战 (Challenge)</h3>
                  <p className="text-slate-500 text-sm">Fill in the blank</p>
              </div>

              <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-sm border-2 border-slate-100 text-center mb-2">
                  <p className="text-lg font-bold text-slate-700">カレーを _____ 。</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">I can make curry</p>
              </div>

              <HandwritingInput 
                  label="Final Drill"
                  verb="作る (Tsukuru)"
                  validAnswers={['tsukureru', '作れる', 'つくれる']}
                  grammarRule="u → e + ru"
                  hint="Hint: Group 1 Verb (u -> e)"
                  onComplete={handleComplete}
              />
          </div>
      );
  }

  return null;
};

export default InteractiveLab;
