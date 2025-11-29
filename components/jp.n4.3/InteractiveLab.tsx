import React, { useState, useEffect } from 'react';
import { Check, X, RefreshCw, Wand2 } from 'lucide-react';
import { InteractiveConfig, LabMode } from './types';

interface InteractiveLabProps {
  config: InteractiveConfig;
  onComplete: (success: boolean) => void;
}

const InteractiveLab: React.FC<InteractiveLabProps> = ({ config, onComplete }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedbackState, setFeedbackState] = useState<'idle' | 'success' | 'error'>('idle');
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  // Reset state when config changes
  useEffect(() => {
    setUserAnswer("");
    setFeedbackState('idle');
    if (config.mode === LabMode.QUIZ_MCQ && config.options) {
      setShuffledOptions([...config.options].sort(() => Math.random() - 0.5));
    }
  }, [config]);

  const handleSubmit = (answer: string) => {
    setUserAnswer(answer);
    
    // Normalize input for typing checks (trim)
    const normalizedInput = answer.trim();
    const isCorrect = normalizedInput === config.correctAnswer;

    if (isCorrect) {
      setFeedbackState('success');
      onComplete(true);
    } else {
      setFeedbackState('error');
      onComplete(false);
      // Auto-clear error after 2 seconds for retry
      setTimeout(() => setFeedbackState('idle'), 2000);
    }
  };

  const renderVisualCard = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6 flex items-center gap-6">
      <div className="bg-teal-100 text-teal-700 w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold">
        {config.targetVerb?.group}
      </div>
      <div>
        <div className="text-3xl font-bold text-slate-800 mb-1 font-['Zen_Maru_Gothic']">
          {config.targetVerb?.kanji} <span className="text-slate-400 text-lg font-normal">({config.targetVerb?.hiragana})</span>
        </div>
        <div className="text-slate-500">{config.targetVerb?.english}</div>
        <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">
            Verb Group {config.targetVerb?.group}
        </div>
      </div>
    </div>
  );

  const renderConjugationBuilder = () => {
    // For conjugation, we simplify: Click to transform or Type part
    // Using a visual 'slot' machine style
    
    return (
      <div className="flex flex-col items-center">
        {renderVisualCard()}
        
        <div className="bg-slate-800 p-8 rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden">
          <div className="text-slate-400 text-center mb-4 text-sm font-bold uppercase tracking-widest">
            {config.targetVerb?.group === 1 ? "Change 'u' to 'a' + nai" : "Drop 'ru' + nai"}
          </div>

          <div className="flex items-center justify-center gap-2 mb-8">
            {/* Stem */}
            <div className="text-white text-3xl font-bold border-b-2 border-white/20 pb-2">
              {/* Logic to show stem based on correctness */}
              {feedbackState === 'success' 
                 ? config.correctAnswer?.replace('ない', '')
                 : config.targetVerb?.hiragana.slice(0, -1)
              }
            </div>
            <div className="text-teal-400 text-3xl font-bold animate-pulse">+</div>
             {/* Suffix Input */}
             <input 
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="?"
                disabled={feedbackState === 'success'}
                className={`
                  w-32 bg-slate-700 text-center text-2xl font-bold text-white p-2 rounded-lg border-2 outline-none transition-colors
                  ${feedbackState === 'error' ? 'border-red-500 animate-shake' : 'border-slate-600 focus:border-teal-400'}
                  ${feedbackState === 'success' ? 'border-green-500 bg-green-900/20' : ''}
                `}
                onKeyDown={(e) => {
                  if(e.key === 'Enter') {
                    // Combine stem + input for check
                    // Simplified: user enters full word or suffix?
                    // Let's expect the FULL word for CONJUGATION mode
                    handleSubmit(userAnswer);
                  }
                }}
             />
          </div>
          
          <button
            onClick={() => handleSubmit(userAnswer)}
            disabled={!userAnswer}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all
              ${feedbackState === 'success' ? 'bg-green-500 text-white' : 'bg-teal-500 text-white hover:bg-teal-400 shadow-lg hover:shadow-teal-500/50'}
            `}
          >
             {feedbackState === 'success' ? (
                <span className="flex items-center justify-center gap-2"><Check /> Correct!</span>
             ) : (
                <span className="flex items-center justify-center gap-2"><Wand2 size={20}/> Conjugate</span>
             )}
          </button>
        </div>
         <p className="text-slate-400 text-sm mt-4">Hint: Type the full converted word (Hiragana)</p>
      </div>
    );
  };

  const renderQuiz = () => (
    <div className="flex flex-col items-center w-full max-w-md">
      {renderVisualCard()}
      <div className="grid grid-cols-1 gap-3 w-full">
        {shuffledOptions.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSubmit(opt)}
            disabled={feedbackState === 'success'}
            className={`
              p-4 rounded-xl text-left border-2 transition-all font-bold text-lg flex justify-between items-center
              ${feedbackState === 'success' && opt === config.correctAnswer ? 'bg-green-100 border-green-500 text-green-700' : ''}
              ${feedbackState === 'error' && userAnswer === opt ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-slate-200 hover:border-teal-300 hover:shadow-md'}
            `}
          >
            {opt}
            {feedbackState === 'success' && opt === config.correctAnswer && <Check size={20} />}
            {feedbackState === 'error' && userAnswer === opt && <X size={20} />}
          </button>
        ))}
      </div>
      {feedbackState === 'error' && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm font-bold flex items-center gap-2 animate-bounce">
           <X size={16} /> Incorrect, try again!
        </div>
      )}
    </div>
  );

  const renderTyping = () => (
     <div className="flex flex-col items-center w-full max-w-md">
        {renderVisualCard()}
        <div className="w-full relative">
           <input 
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder={config.placeholder}
              className={`
                 w-full p-6 text-center text-2xl font-bold rounded-2xl border-2 outline-none shadow-inner transition-all
                 ${feedbackState === 'success' ? 'border-green-500 bg-green-50 text-green-700' : 'border-slate-300 focus:border-teal-500 text-slate-700'}
                 ${feedbackState === 'error' ? 'border-red-500 bg-red-50 animate-shake' : ''}
              `}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(userAnswer)}
           />
           <button 
             onClick={() => handleSubmit(userAnswer)}
             className="absolute right-2 top-2 bottom-2 bg-slate-800 text-white rounded-xl px-4 font-bold hover:bg-slate-700 transition-colors"
           >
             Check
           </button>
        </div>
        
        {feedbackState === 'success' && (
           <div className="mt-4 text-green-600 font-bold bg-green-100 px-4 py-2 rounded-full flex items-center gap-2 animate-fadeIn">
              <Check size={18} />
              {config.explanation}
           </div>
        )}
     </div>
  );

  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-50/50 rounded-[3rem]">
      {config.mode === LabMode.CONJUGATION && renderConjugationBuilder()}
      {config.mode === LabMode.QUIZ_MCQ && renderQuiz()}
      {config.mode === LabMode.TYPING && renderTyping()}
    </div>
  );
};

export default InteractiveLab;