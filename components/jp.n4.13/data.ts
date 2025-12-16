
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "凛酱，明天的天气预报好像说会下雨... 如果下雨了，我们的露营计划怎么办？(Ame ga futtara...)",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko looking worriedly at her smartphone weather app. Rain clouds icon visible.",
      imageCaption: "第 4.13 课：条件形 (Conditional Form)"
    }
  },
  {
    id: 2,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "别担心。如果下雨了 (Futtara)，我们就在帐篷里看书。这个 ‘~tara’ 就是条件形，表示‘如果...’或者‘当...之后’。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin pointing at the sky, one path sunny, one path rainy.",
      imageCaption: "如果 / 之后"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "indigo",
    text: "它的变形非常简单。只要先把动词变成 ‘た形’ (Ta-form/过去式)，然后在后面加上 ‘ra’ (ら) 就可以了。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "条件形规则 (所有动词)",
        content: ["动词た形 (过去式) + 'ra' (ら)"],
        examples: [
          { jp: "食べる (Taberu) → 食べた (Tabeta) → 食べたら", cn: "如果吃的话" },
          { jp: "降る (Furu) → 降った (Futta) → 降ったら", cn: "如果下(雨)的话" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "indigo",
    text: "先复习一下。‘降る’ (Furu / 下雨) 是一类动词，变成た形是 ‘Futta’。再加 ‘ra’。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "降る",
          hiragana: "ふる",
          romaji: "furu",
          english: "下 (雨/雪)",
          group: 1
        },
        correctAnswer: ["ふったら", "降ったら"],
        explanation: "Furu → Futta (た形) + ra = Futtara (如果下的话)。",
        placeholder: "输入条件形..."
      }
    }
  },
  {
    id: 5,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "懂了！就是 ‘Past tense + ra’！那如果雨‘停了’ (Yamu / 止む) 呢？",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "止む",
          hiragana: "やむ",
          romaji: "yamu",
          english: "停止 (雨)",
          group: 1
        },
        correctAnswer: ["やんだら", "止んだら"],
        explanation: "Yamu → Yanda (た形) + ra = Yandara (如果停了的话)。"
      }
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "indigo",
    text: "没错。如果雨停了，我们就去散步。接下来是二类动词。‘食べる’ (Taberu)。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "食べる",
          hiragana: "たべる",
          romaji: "taberu",
          english: "吃",
          group: 2
        },
        options: ["たべったら (Tabettara)", "たべたら (Tabetara)", "たべてら (Tabetera)", "たべら (Tabera)"],
        correctAnswer: "たべたら (Tabetara)",
        explanation: "Taberu → Tabeta (た形) + ra = Tabetara (如果吃了的话)。"
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "indigo",
    text: "不仅是‘如果’，它也可以表示‘当...之后’。比如：‘到了 (Tsuku / 着く) 露营场之后，先搭帐篷’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "用法：表示时间先后",
        content: ["表示在前一个动作完成后，进行后一个动作", "翻译为：当...之后 / ...了就..."],
        examples: [
          { jp: "駅に着いたら、電話します", cn: "到了车站后，我会打电话。" },
          { jp: "ご飯を食べたら、寝ます", cn: "吃完饭后，就睡觉。" }
        ]
      }
    }
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "indigo",
    text: "我们‘到了’ (Tsuku) 之后，给我发个消息。",
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
        correctAnswer: ["ついたら", "着いたら"],
        explanation: "Tsuku → Tsuita (た形) + ra = Tsuitara (到了之后)。",
        placeholder: "输入条件形..."
      }
    }
  },
  {
    id: 9,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "如果‘做’ (Suru) 了好吃的咖喱，凛酱你会夸我吗？",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "する",
          hiragana: "suru",
          romaji: "suru",
          english: "做",
          group: 3
        },
        correctAnswer: ["したら"],
        explanation: "Suru → Shita (た形) + ra = Shitara (如果做了)。"
      }
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "那要看味道了。如果真的好吃 (Oishikattara)，我会考虑的。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
