import React, { useState, useEffect } from 'react';
import { Check, X, Wand2, AlertTriangle, Lightbulb } from 'lucide-react';
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
    
    // Normalize input (trim)
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
      
      // 3 Strike Rule
      if (newAttempts >= 3) {
        setShowAnswer(true);
        onComplete(true); // Allow them to proceed even if wrong, after 3 tries
      } else {
        onComplete(false);
        // Auto-clear error after 2 seconds for retry
        setTimeout(() => setFeedbackState('idle'), 2000);
      }
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
            {config.targetVerb?.group === 3 ? "三类动词 (不规则)" : config.targetVerb?.group === 2 ? "二类动词 (一段)" : "一类动词 (五段)"}
        </div>
      </div>
    </div>
  );

  const renderGiveUpMessage = () => {
    if (!showAnswer) return null;
    const primaryAnswer = getValidAnswers()[0];
    return (
      <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl text-yellow-800 flex items-start gap-3 animate-fadeIn">
         <div className="bg-yellow-100 p-2 rounded-full"><Lightbulb size={20} className="text-yellow-600"/></div>
         <div>
           <p className="font-bold text-sm uppercase opacity-70 mb-1">正确答案</p>
           <p className="text-2xl font-bold">{primaryAnswer}</p>
           <p className="text-sm mt-1 opacity-80">点击下方按钮继续</p>
         </div>
      </div>
    );
  };

  const renderConjugationBuilder = () => {
    return (
      <div className="flex flex-col items-center">
        {renderVisualCard()}
        
        <div className="bg-slate-800 p-8 rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden">
          <div className="text-slate-400 text-center mb-4 text-sm font-bold uppercase tracking-widest">
            {config.targetVerb?.group === 1 ? "词尾 u → a + nai" : "去掉 ru + nai"}
          </div>

          <div className="flex items-center justify-center gap-2 mb-8">
            {/* Input Area */}
             <input 
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="?"
                disabled={feedbackState === 'success' || showAnswer}
                className={`
                  w-48 bg-slate-700 text-center text-2xl font-bold text-white p-2 rounded-lg border-2 outline-none transition-colors
                  ${feedbackState === 'error' ? 'border-red-500 animate-shake' : 'border-slate-600 focus:border-teal-400'}
                  ${feedbackState === 'success' ? 'border-green-500 bg-green-900/20' : ''}
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
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all
                ${feedbackState === 'success' ? 'bg-green-500 text-white' : 'bg-teal-500 text-white hover:bg-teal-400 shadow-lg hover:shadow-teal-500/50'}
              `}
            >
               {feedbackState === 'success' ? (
                  <span className="flex items-center justify-center gap-2"><Check /> 正确!</span>
               ) : (
                  <span className="flex items-center justify-center gap-2"><Wand2 size={20}/> 变形</span>
               )}
            </button>
          )}

          {renderGiveUpMessage()}

        </div>
         <p className="text-slate-400 text-sm mt-4">提示: 输入变形后的完整单词 (平假名或汉字)</p>
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
                  ${(feedbackState === 'success' || showAnswer) && isOptCorrect ? 'bg-green-100 border-green-500 text-green-700' : ''}
                  ${feedbackState === 'error' && userAnswer === opt ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-slate-200 hover:border-teal-300 hover:shadow-md'}
                `}
              >
                {opt}
                {(feedbackState === 'success' || showAnswer) && isOptCorrect && <Check size={20} />}
                {feedbackState === 'error' && userAnswer === opt && <X size={20} />}
              </button>
            )
          })}
        </div>
        {feedbackState === 'error' && !showAnswer && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm font-bold flex items-center gap-2 animate-bounce">
             <AlertTriangle size={16} /> 错误，请重试! ({attempts}/3)
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
                 w-full p-6 text-center text-2xl font-bold rounded-2xl border-2 outline-none shadow-inner transition-all
                 ${feedbackState === 'success' ? 'border-green-500 bg-green-50 text-green-700' : 'border-slate-300 focus:border-teal-500 text-slate-700'}
                 ${feedbackState === 'error' ? 'border-red-500 bg-red-50 animate-shake' : ''}
              `}
              onKeyDown={(e) => e.key === 'Enter' && !showAnswer && handleSubmit(userAnswer)}
           />
           {!showAnswer && feedbackState !== 'success' && (
             <button 
               onClick={() => handleSubmit(userAnswer)}
               className="absolute right-2 top-2 bottom-2 bg-slate-800 text-white rounded-xl px-4 font-bold hover:bg-slate-700 transition-colors"
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