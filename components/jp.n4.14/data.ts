
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "抚子，如果早点去露营场 (Tsukeba)，就能抢到最好的位置。我们得加快速度了。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin checking her watch, looking at a map with camping spots marked.",
      imageCaption: "第 4.14 课：条件形 ～ば (Conditional Form)"
    }
  },
  {
    id: 2,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "诶？‘Tsukeba’？这是什么形？和 ‘Tara’ 不一样吗？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko looking puzzled, holding a heavy backpack.",
      imageCaption: "另一种假设"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "sky",
    text: "‘～ば’ 形通常用于表达一般条件、假定条件或因果关系（如果A，那么B）。一类动词（五段）规则：把词尾的 ‘u段’ 变成 ‘e段’，加 ‘ba’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词 (五段)",
        content: ["词尾 'u段' → 'e段'", "加上 'ba' (ば)"],
        examples: [
          { jp: "行く (Iku) → 行けば (Ikeba)", cn: "如果去的话" },
          { jp: "着く (Tsuku) → 着けば (Tsukeba)", cn: "如果到达的话" },
          { jp: "飲む (Nomu) → 飲めば (Nomeba)", cn: "如果喝的话" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "sky",
    text: "试试看。如果我们‘到达’ (Tsuku) 露营场...",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "着く",
          hiragana: "つく",
          romaji: "tsuku",
          english: "到达",
          group: 1
        },
        correctAnswer: ["つけば", "着けば"],
        explanation: "Ku (く) 变成 Ke (け) + ba = Tsukeba (如果到达)。",
        placeholder: "输入条件形..."
      }
    }
  },
  {
    id: 5,
    speaker: "凛 (Rin)",
    speakerColor: "sky",
    text: "接下来是二类动词（一段）。去掉 ‘ru’，加上 ‘reba’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "二类动词 (一段)",
        content: ["去掉 'ru' (る)", "加上 'reba' (れば)"],
        examples: [
          { jp: "食べる (Taberu) → 食べれば (Tabereba)", cn: "如果吃的话" },
          { jp: "寝る (Neru) → 寝れば (Nereba)", cn: "如果睡的话" }
        ]
      }
    }
  },
  {
    id: 6,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "如果‘睡觉’ (Neru) 就能恢复精神！",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "寝る",
          hiragana: "ねる",
          romaji: "neru",
          english: "睡觉",
          group: 2
        },
        correctAnswer: ["ねれば", "寝れば"],
        explanation: "去掉 ru + reba = Nereba (如果睡的话)。"
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "sky",
    text: "最后是三类动词。‘Suru’ 变成 ‘Sureba’，‘Kuru’ 变成 ‘Kureba’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词 (不规则)",
        content: ["Suru → Sureba (すれば)", "Kuru → Kureba (くれば)"],
        examples: [
          { jp: "キャンプすれば (Kyanpu sureba)", cn: "如果露营的话" },
          { jp: "来れば (Kureba)", cn: "如果来的话" }
        ]
      }
    }
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "sky",
    text: "如果你‘来’ (Kuru) 的话，我就做饭。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "来る",
          hiragana: "くる",
          romaji: "kuru",
          english: "来",
          group: 3
        },
        options: ["きれば (Kireba)", "くれば (Kureba)", "これば (Koreba)", "かれば (Kareba)"],
        correctAnswer: "くれば (Kureba)",
        explanation: "Kuru 变成 Kureba。"
      }
    }
  },
  {
    id: 9,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "只要我‘做’ (Tsukuru) 咖喱，大家都会开心！(Tsukureba!)",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "作る",
          hiragana: "つくる",
          romaji: "tsukuru",
          english: "制作",
          group: 1
        },
        correctAnswer: ["つくれば", "作れば"],
        explanation: "ru (る) 变成 re (れ) + ba = Tsukureba (如果做的话)。",
        placeholder: "输入条件形..."
      }
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "只要天气好 (Tenki ga yokereba)，哪里都是好风景。走吧。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
