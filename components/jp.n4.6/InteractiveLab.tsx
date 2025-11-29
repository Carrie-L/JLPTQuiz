import React, { useState, useEffect } from 'react';
import { Check, X, Wand2, Lightbulb, UserPlus } from 'lucide-react';
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

  const cardWidthClass = "w-full max-w-2xl";

  const renderVisualCard = () => (
    <div className={`bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-stone-100 p-8 mb-8 flex items-center gap-8 relative overflow-hidden ${cardWidthClass}`}>
      <UserPlus className="absolute -top-2 -right-2 text-violet-100 opacity-50 transform rotate-12" size={100} />
      
      <div className="bg-gradient-to-br from-violet-50 to-indigo-50 text-indigo-700 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold border border-violet-100 shadow-inner relative z-10 shrink-0">
        {config.targetVerb?.group}
      </div>
      <div className="relative z-10 flex-grow">
        <div className="text-4xl font-bold text-stone-700 mb-2 font-['Zen_Maru_Gothic']">
          {config.targetVerb?.kanji} <span className="text-stone-400 text-xl font-normal">({config.targetVerb?.hiragana})</span>
        </div>
        <div className="text-stone-500 text-lg font-medium">{config.targetVerb?.english}</div>
        <div className="text-sm text-stone-300 mt-2 uppercase tracking-wide font-bold">
            {config.targetVerb?.group === 3 ? "三类动词" : config.targetVerb?.group === 2 ? "二类动词" : "一类动词"}
        </div>
      </div>
    </div>
  );

  const renderGiveUpMessage = () => {
    if (!showAnswer) return null;
    const primaryAnswer = getValidAnswers()[0];
    return (
      <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 flex items-start gap-3 animate-fadeIn w-full">
         <div className="bg-amber-100 p-2 rounded-full text-amber-600"><Lightbulb size={20} /></div>
         <div>
           <p className="font-bold text-xs uppercase opacity-70 mb-1 tracking-wider">正确答案</p>
           <p className="text-2xl font-bold text-amber-900">{primaryAnswer}</p>
         </div>
      </div>
    );
  };

  const renderInputArea = () => (
      <div className={`flex flex-col items-center ${cardWidthClass}`}>
        {renderVisualCard()}
        
        <div className="bg-white/90 backdrop-blur-sm p-10 rounded-[2.5rem] w-full shadow-xl border-2 border-stone-100 relative overflow-hidden">
          <div className="text-stone-400 text-center mb-8 text-sm font-bold uppercase tracking-widest bg-stone-50 py-2 rounded-full mx-auto w-fit px-6">
            使役变形 (Causative)
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
             <input 
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder={config.placeholder || "?"}
                disabled={feedbackState === 'success' || showAnswer}
                className={`
                  w-full bg-stone-50 text-center text-3xl font-bold text-stone-700 p-4 rounded-2xl border-2 outline-none transition-all shadow-inner
                  placeholder:text-stone-300
                  ${feedbackState === 'error' ? 'border-red-300 bg-red-50 animate-shake' : 'border-stone-200 focus:border-violet-400 focus:bg-white'}
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
              className={`w-full py-5 rounded-2xl font-bold text-xl transition-all shadow-sm
                ${feedbackState === 'success' ? 'bg-emerald-500 text-white' : 'bg-violet-600 text-white hover:bg-violet-700 hover:shadow-md'}
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
               {feedbackState === 'success' ? (
                  <span className="flex items-center justify-center gap-2"><Check /> 正确!</span>
               ) : (
                  <span className="flex items-center justify-center gap-2"><Wand2 size={24}/> 变形 (Conjure)</span>
               )}
            </button>
          )}
          {renderGiveUpMessage()}
        </div>
        {config.explanation && feedbackState === 'success' && (
           <p className="text-emerald-600 font-bold mt-4 bg-emerald-50 px-4 py-2 rounded-lg">{config.explanation}</p>
        )}
      </div>
  );

  const renderQuiz = () => {
    const validAnswers = getValidAnswers();
    return (
      <div className={`flex flex-col items-center ${cardWidthClass}`}>
        {renderVisualCard()}
        <div className="grid grid-cols-1 gap-4 w-full">
          {shuffledOptions.map((opt, idx) => {
            const isOptCorrect = validAnswers.includes(opt);
            return (
              <button
                key={idx}
                onClick={() => handleSubmit(opt)}
                disabled={feedbackState === 'success' || showAnswer}
                className={`
                  p-6 rounded-2xl text-left border-2 transition-all font-bold text-xl flex justify-between items-center
                  ${(feedbackState === 'success' || showAnswer) && isOptCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : ''}
                  ${feedbackState === 'error' && userAnswer === opt ? 'bg-red-50 border-red-300 text-red-700' : 'bg-white border-stone-100 text-stone-600 hover:border-violet-300 hover:shadow-md'}
                `}
              >
                {opt}
                {(feedbackState === 'success' || showAnswer) && isOptCorrect && <Check size={24} className="text-emerald-500" />}
                {feedbackState === 'error' && userAnswer === opt && <X size={24} className="text-red-400" />}
              </button>
            )
          })}
        </div>
        {renderGiveUpMessage()}
        {config.explanation && (feedbackState === 'success' || showAnswer) && (
           <p className="text-emerald-600 font-bold mt-4 bg-emerald-50 px-4 py-2 rounded-lg">{config.explanation}</p>
        )}
      </div>
    );
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {(config.mode === LabMode.CONJUGATION || config.mode === LabMode.TYPING) && renderInputArea()}
      {config.mode === LabMode.QUIZ_MCQ && renderQuiz()}
    </div>
  );
};

export default InteractiveLab;