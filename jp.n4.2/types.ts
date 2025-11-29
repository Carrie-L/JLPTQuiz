
export type ViewType = "IMAGE" | "GRAMMAR_EXPLAIN" | "INTERACTIVE_LAB" | "VICTORY";

export interface ScriptStep {
  id: number;
  speaker: string;
  speakerColor?: string;
  text: string;
  viewType: ViewType;
  viewContent: {
    imagePrompt?: string;      
    grammarRule?: string;      
    interactiveConfig?: {
        mode: "group2_drill" | "group1_drill" | "irregular_drill" | "sentence_build"; 
        initialState?: any;
    };   
  };
}
