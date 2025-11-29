export enum ViewType {
  IMAGE = "IMAGE",
  GRAMMAR_EXPLAIN = "GRAMMAR_EXPLAIN",
  INTERACTIVE_LAB = "INTERACTIVE_LAB",
  VICTORY = "VICTORY"
}

export enum LabMode {
  CLASSIFICATION = "CLASSIFICATION", // Sorting into G1, G2, G3
  QUIZ_MCQ = "QUIZ_MCQ"
}

export interface InteractiveConfig {
  mode: LabMode;
  targetVerb?: {
    kanji: string;
    hiragana: string;
    english: string;
    group: number; // 1, 2, or 3
  };
  options?: string[]; // For MCQ
  correctAnswer?: number | string; 
  explanation?: string;
}

export interface ScriptStep {
  id: number;
  speaker: string;
  speakerColor: 'teal' | 'orange' | 'pink' | 'slate';
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