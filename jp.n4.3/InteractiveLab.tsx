
import React, { useState, useEffect, useRef } from 'react';
import { Edit3, Check, ArrowRight, X, Sparkles, Flame, Moon, Book } from 'lucide-react';

interface InteractiveLabProps {
  mode: "group2_te" | "group1_tte" | "group1_ite_nde" | "challenge_mixed";
  onTaskComplete: (success: boolean) => void;
}

// --- Reusable Handwriting Component (Dark Mode / Blackboard Style) ---
const HandwritingInput: React.FC<{ 
    label: string;
    verb: string;
    validAnswers: string[]; 
    hint?: string;
    grammarRule?: string; 
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
    <div className="bg-[#2D3342] p-6 rounded-[1rem] shadow-2xl border-2 border-[#4A5568] w-full max-w-md relative overflow-hidden flex flex-col gap-6 text-slate-100">
      
      {/* Header */}
      <div className="flex justify-between items-center relative z-10 border-b border-slate-600 pb-2">
          <div className="flex items-center gap-2 text-slate-200 font-bold text-lg">
              <Book size={20} className="text-orange-400" />
              <span>{label}</span>
          </div>
          {isCompleted && <Flame className="text-orange-500 animate-pulse" />}
      </div>

      {/* Verb Display */}
      <div className="text-center py-4 bg-[#1A202C] rounded-lg border border-slate-700">
          <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-1">Verb</div>
          <div className="text-3xl font-black text-white tracking-tight">{verb}</div>
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
                        w-full h-14 pl-4 pr-10 text-center text-xl font-bold rounded-lg border-2 outline-none transition-all placeholder:text-slate-600 placeholder:font-normal
                        ${isCompleted 
                            ? 'bg-emerald-900/30 border-emerald-500 text-emerald-400' 
                            : isError 
                                ? 'bg-red-900/30 border-red-500 text-red-400' 
                                : 'bg-[#1A202C] border-slate-600 text-white focus:border-orange-400'}
                      `}
                      value={input}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      placeholder="..."
                      disabled={isCompleted}
                      autoComplete="off"
                  />
                  
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

              {/* Grammar Tag */}
              {grammarRule && (
                  <div className="hidden md:flex flex-col items-center justify-center bg-slate-700 px-3 h-14 rounded-lg border border-slate-600 min-w-[80px]">
                      <span className="text-[10px] text-slate-400 font-bold uppercase leading-none mb-1">Rule</span>
                      <span className="text-xs font-bold text-orange-300 leading-none">{grammarRule}</span>
                  </div>
              )}
          </div>

          {/* Grammar Tag Mobile */}
          {grammarRule && (
              <div className="md:hidden flex items-center justify-center gap-2 text-xs font-bold text-orange-300 bg-slate-700 py-1 rounded">
                  <span className="uppercase opacity-60 text-slate-400">Rule:</span> {grammarRule}
              </div>
          )}
          
          {/* Action Button */}
          <button 
            onClick={handleCheck}
            disabled={isCompleted}
            className={`
                w-full py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]
                ${isCompleted 
                    ? 'bg-emerald-600 text-white cursor-default' 
                    : 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/50'}
            `}
          >
              {isCompleted ? 'Te-Form Correct!' : 'Check'} 
              {!isCompleted && <ArrowRight size={18} />}
          </button>

          {/* Hint */}
          <div className="text-center text-xs text-slate-500 font-medium">
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

  if (mode === 'group2_te') {
      return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-8">
              <HandwritingInput 
                  label="Camp Drill #1"
                  verb="見る (Miru)"
                  validAnswers={['mite', '見て', 'みて']}
                  grammarRule="ru → te"
                  hint="Hint: Just replace 'ru' with 'te'"
                  onComplete={handleComplete}
              />
          </div>
      );
  }

  if (mode === 'group1_tte') {
      return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-8">
              <HandwritingInput 
                  label="Camp Drill #2"
                  verb="立つ (Tatsu)"
                  validAnswers={['tatte', '立って', 'たって']}
                  grammarRule="tsu → tte"
                  hint="Hint: Small tsu (っ) + te"
                  onComplete={handleComplete}
              />
          </div>
      );
  }

  if (mode === 'group1_ite_nde') {
      return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-8">
              <HandwritingInput 
                  label="Camp Drill #3"
                  verb="書く (Kaku)"
                  validAnswers={['kaite', '書いて', 'かいて']}
                  grammarRule="ku → ite"
                  hint="Hint: Sound change to 'i'"
                  onComplete={handleComplete}
              />
          </div>
      );
  }

  if (mode === 'challenge_mixed') {
      return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-8">
              <HandwritingInput 
                  label="Final Challenge"
                  verb="飲む (Nomu)"
                  validAnswers={['nonde', '飲んで', 'のんで']}
                  grammarRule="mu → nde"
                  hint="Hint: Ends in 'mu' -> 'nde'"
                  onComplete={handleComplete}
              />
          </div>
      );
  }

  return null;
};

export default InteractiveLab;
