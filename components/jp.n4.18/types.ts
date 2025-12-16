
export enum ViewType {
  IMAGE = "IMAGE",
  CODE_EXPLAIN = "CODE_EXPLAIN",
  INTERACTIVE_LAB = "INTERACTIVE_LAB",
  GRAMMAR_EXPLAIN = "GRAMMAR_EXPLAIN",
  VICTORY = "VICTORY"
}

export enum LabMode {
  FLASHCARD = "FLASHCARD",        
  SELECT_GROUP = "SELECT_GROUP", 
  CONJUGATION = "CONJUGATION",    
  QUIZ_MCQ = "QUIZ_MCQ",          
  TYPING = "TYPING"               
}

export interface InteractiveConfig {
  mode: LabMode;
  targetVerb?: {
    kanji: string;
    hiragana: string;
    romaji: string;
    english: string;
    group: number; // 0 for Vocab
  };
  options?: string[];
  correctAnswer?: string | string[];
  explanation?: string;
  placeholder?: string;
}

export interface ScriptStep {
  id: number;
  speaker: string;
  speakerColor: 'teal' | 'orange' | 'pink' | 'red' | 'zinc'; 
  text: string;
  viewType: ViewType;
  viewContent: {
    imagePrompt?: string;
    imageCaption?: string;
    grammarRule?: {
      title: string;
      content: string[];
      examples: { jp: string; cn: string }[];
    };
    interactiveConfig?: InteractiveConfig;
  };
}
