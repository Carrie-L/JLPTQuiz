import React, { useState, useEffect } from 'react';
import { Check, X, Wand2, AlertTriangle, Lightbulb, Leaf } from 'lucide-react';
import { InteractiveConfig, LabMode } from './types';

interface InteractiveLabProps {
  config: InteractiveConfig;
  onComplete: (success: boolean) => void;
}

const InteractiveLab: React.FC<InteractiveLabProps> = ({ config, onComplete }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedbackState, setFeedbackState] = useState<'idle' | 'success' | 'error'>('idle');
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Reset state when config changes
  useEffect(() => {
    setUserAnswer("");
    setFeedbackState('idle');
    setAttempts(0);
    setShowAnswer(false);
    if (config.mode === LabMode.QUIZ_MCQ && config.options) {
      setShuffledOptions([...config.options].sort(() => Math.random() - 0.5));
    }
  }, [config]);

  const getValidAnswers = (): string[] => {
    if (Array.isArray(config.correctAnswer)) {
      return config.correctAnswer;
    }
    return config.correctAnswer ? [config.correctAnswer] : [];
  };

  const handleSubmit = (answer: string) => {
    setUserAnswer(answer);
    const normalizedInput = answer.trim();
    const validAnswers = getValidAnswers();
    const isCorrect = validAnswers.includes(normalizedInput);

    if (isCorrect) {
      setFeedbackState('success');
      onComplete(true);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setFeedbackState('error');
      
      if (newAttempts >= 3) {
        setShowAnswer(true);
        onComplete(true);
      } else {
        onComplete(false);
        setTimeout(() => setFeedbackState('idle'), 2000);
      }
    }
  };

  const renderVisualCard = () => (
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-stone-100 p-6 mb-6 flex items-center gap-6 relative overflow-hidden">
      {/* Decorative leaf */}
      <Leaf className="absolute -top-2 -right-2 text-green-50 opacity-50 transform rotate-12" size={80} />
      
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 text-teal-700 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold border border-teal-100 shadow-inner relative z-10">
        {config.targetVerb?.group}
      </div>
      <div className="relative z-10">
        <div className="text-3xl font-bold text-stone-700 mb-1 font-['Zen_Maru_Gothic']">
          {config.targetVerb?.kanji} <span className="text-stone-400 text-lg font-normal">({config.targetVerb?.hiragana})</span>
        </div>
        <div className="text-stone-500 text-sm font-medium">{config.targetVerb?.english}</div>
        <div className="text-xs text-stone-300 mt-2 uppercase tracking-wide font-bold">
            {config.targetVerb?.group === 3 ? "三类动词 (不规则)" : config.targetVerb?.group === 2 ? "二类动词 (一段)" : "一类动词 (五段)"}
        </div>
      </div>
    </div>
  );

  const renderGiveUpMessage = () => {
    if (!showAnswer) return null;
    const primaryAnswer = getValidAnswers()[0];
    return (
      <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 flex items-start gap-3 animate-fadeIn">
         <div className="bg-amber-100 p-2 rounded-full text-amber-600"><Lightbulb size={20} /></div>
         <div>
           <p className="font-bold text-xs uppercase opacity-70 mb-1 tracking-wider">正确答案</p>
           <p className="text-2xl font-bold text-amber-900">{primaryAnswer}</p>
         </div>
      </div>
    );
  };

  const renderConjugationBuilder = () => {
    return (
      <div className="flex flex-col items-center">
        {renderVisualCard()}
        
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] w-full max-w-md shadow-xl border-2 border-stone-100 relative overflow-hidden">
          <div className="text-stone-400 text-center mb-6 text-xs font-bold uppercase tracking-widest bg-stone-50 py-1 rounded-full mx-auto w-fit px-4">
            {config.targetVerb?.group === 1 ? "词尾 u → a + nai" : "去掉 ru + nai"}
          </div>

          <div className="flex items-center justify-center gap-2 mb-8">
             <input 
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="?"
                disabled={feedbackState === 'success' || showAnswer}
                className={`
                  w-48 bg-stone-50 text-center text-2xl font-bold text-stone-700 p-3 rounded-xl border-2 outline-none transition-all shadow-inner
                  placeholder:text-stone-300
                  ${feedbackState === 'error' ? 'border-red-300 bg-red-50 animate-shake' : 'border-stone-200 focus:border-teal-400 focus:bg-white'}
                  ${feedbackState === 'success' ? 'border-emerald-400 bg-emerald-50 text-emerald-700' : ''}
                `}
                onKeyDown={(e) => {
                  if(e.key === 'Enter' && !showAnswer && feedbackState !== 'success') {
                    handleSubmit(userAnswer);
                  }
                }}
             />
          </div>
          
          {!showAnswer && (
            <button
              onClick={() => handleSubmit(userAnswer)}
              disabled={!userAnswer}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-sm
                ${feedbackState === 'success' ? 'bg-emerald-500 text-white' : 'bg-[#E67E22] text-white hover:bg-[#D35400] hover:shadow-md'}
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
               {feedbackState === 'success' ? (
                  <span className="flex items-center justify-center gap-2"><Check /> 正确!</span>
               ) : (
                  <span className="flex items-center justify-center gap-2"><Wand2 size={20}/> 变形 (Conjure)</span>
               )}
            </button>
          )}

          {renderGiveUpMessage()}

        </div>
         <p className="text-stone-400 text-sm mt-4 font-medium">提示: 输入平假名或汉字</p>
      </div>
    );
  };

  const renderQuiz = () => {
    const validAnswers = getValidAnswers();
    return (
      <div className="flex flex-col items-center w-full max-w-md">
        {renderVisualCard()}
        <div className="grid grid-cols-1 gap-3 w-full">
          {shuffledOptions.map((opt, idx) => {
            const isOptCorrect = validAnswers.includes(opt);
            return (
              <button
                key={idx}
                onClick={() => handleSubmit(opt)}
                disabled={feedbackState === 'success' || showAnswer}
                className={`
                  p-4 rounded-xl text-left border-2 transition-all font-bold text-lg flex justify-between items-center
                  ${(feedbackState === 'success' || showAnswer) && isOptCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : ''}
                  ${feedbackState === 'error' && userAnswer === opt ? 'bg-red-50 border-red-300 text-red-700' : 'bg-white border-stone-100 text-stone-600 hover:border-teal-300 hover:shadow-md'}
                `}
              >
                {opt}
                {(feedbackState === 'success' || showAnswer) && isOptCorrect && <Check size={20} className="text-emerald-500" />}
                {feedbackState === 'error' && userAnswer === opt && <X size={20} className="text-red-400" />}
              </button>
            )
          })}
        </div>
        {feedbackState === 'error' && !showAnswer && (
          <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-bold flex items-center gap-2 animate-bounce border border-red-100">
             <AlertTriangle size={16} /> 再试一次 ({attempts}/3)
          </div>
        )}
        {renderGiveUpMessage()}
      </div>
    );
  };

  const renderTyping = () => (
     <div className="flex flex-col items-center w-full max-w-md">
        {renderVisualCard()}
        <div className="w-full relative">
           <input 
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder={config.placeholder}
              disabled={feedbackState === 'success' || showAnswer}
              className={`
                 w-full p-6 text-center text-2xl font-bold rounded-2xl border-2 outline-none shadow-sm transition-all
                 bg-white placeholder:text-stone-300
                 ${feedbackState === 'success' ? 'border-emerald-400 bg-emerald-50 text-emerald-700' : 'border-stone-200 focus:border-teal-500 text-stone-700'}
                 ${feedbackState === 'error' ? 'border-red-300 bg-red-50 animate-shake' : ''}
              `}
              onKeyDown={(e) => e.key === 'Enter' && !showAnswer && handleSubmit(userAnswer)}
           />
           {!showAnswer && feedbackState !== 'success' && (
             <button 
               onClick={() => handleSubmit(userAnswer)}
               className="absolute right-2 top-2 bottom-2 bg-stone-800 text-white rounded-xl px-4 font-bold hover:bg-stone-700 transition-colors shadow-md"
             >
               确认
             </button>
           )}
        </div>
        
        {feedbackState === 'error' && !showAnswer && (
          <div className="mt-4 text-red-500 font-bold flex items-center gap-2">
            <X size={16}/> 答案不正确 ({attempts}/3)
          </div>
        )}

        {renderGiveUpMessage()}
        
        {feedbackState === 'success' && (
           <div className="mt-4 text-emerald-700 font-bold bg-emerald-100 px-4 py-2 rounded-full flex items-center gap-2 animate-fadeIn border border-emerald-200">
              <Check size={18} />
              {config.explanation}
           </div>
        )}
     </div>
  );

  return (
    <div className="w-full h-full flex items-center justify-center">
      {config.mode === LabMode.CONJUGATION && renderConjugationBuilder()}
      {config.mode === LabMode.QUIZ_MCQ && renderQuiz()}
      {config.mode === LabMode.TYPING && renderTyping()}
    </div>
  );
};

export default InteractiveLab;