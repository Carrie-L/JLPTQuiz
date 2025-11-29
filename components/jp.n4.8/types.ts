
export enum ViewType {
  IMAGE = "IMAGE",
  CODE_EXPLAIN = "CODE_EXPLAIN",
  INTERACTIVE_LAB = "INTERACTIVE_LAB",
  GRAMMAR_EXPLAIN = "GRAMMAR_EXPLAIN",
  VICTORY = "VICTORY"
}

export enum LabMode {
  FLASHCARD = "FLASHCARD",        // Passive viewing of a rule
  SELECT_GROUP = "SELECT_GROUP",  // Choosing G1, G2, or G3
  CONJUGATION = "CONJUGATION",    // Building the word
  QUIZ_MCQ = "QUIZ_MCQ",          // Multiple choice
  TYPING = "TYPING"               // Text input
}

export interface InteractiveConfig {
  mode: LabMode;
  targetVerb?: {
    kanji: string;
    hiragana: string;
    romaji: string;
    english: string;
    group: number;
  };
  options?: string[];
  correctAnswer?: string | string[];
  explanation?: string;
  placeholder?: string;
}

export interface ScriptStep {
  id: number;
  speaker: string;
  speakerColor: 'teal' | 'orange' | 'pink' | 'cyan'; // Added cyan for this lesson
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
