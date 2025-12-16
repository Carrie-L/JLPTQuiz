
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "凛酱，我在写露营日记！“今天去露营”用日语怎么写？Kyō wa kyanpu ni ikimasu？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko writing in a cute notebook with a pen.",
      imageCaption: "第 4.9 课：辞书形 (Dictionary Form)"
    }
  },
  {
    id: 2,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "日记通常用简体（普通体）。‘行きます’ (Ikimasu) 是敬体，简体是 ‘行く’ (Iku)。这就是动词的‘辞书形’（基本形）。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin holding a Japanese dictionary, explaining.",
      imageCaption: "敬体 vs 简体"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "辞书形是动词最原本的样子。在词典里查单词时用的就是这个形式。先看一类动词（五段）。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词 (五段)",
        content: ["将敬体(Masu形)前面的 'i段' 假名变成 'u段'", "去掉 'masu'"],
        examples: [
          { jp: "行きます (Ikimasu) → 行く (Iku)", cn: "去" },
          { jp: "飲みます (Nomimasu) → 飲む (Nomu)", cn: "喝" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "原来如此！那么 ‘書きます’ (Kakimasu - 写) 变成辞书形就是...",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "書きます",
          hiragana: "かきます",
          romaji: "kakimasu",
          english: "写 (敬体)",
          group: 1
        },
        correctAnswer: ["かく", "書く"],
        explanation: "Ki (き) 变成 Ku (く) = Kaku (写)。",
        placeholder: "输入辞书形..."
      }
    }
  },
  {
    id: 5,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "接下来是二类动词（一段）。这个很简单，去掉 ‘masu’，加上 ‘ru’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "二类动词 (一段)",
        content: ["去掉 'masu' (ます)", "加上 'ru' (る)"],
        examples: [
          { jp: "食べます (Tabemasu) → 食べる (Taberu)", cn: "吃" },
          { jp: "見ます (Mimasu) → 見る (Miru)", cn: "看" }
        ]
      }
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "你在日记里写‘睡觉’ (Nemasu) 的时候，要用辞书形。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "寝ます",
          hiragana: "ねます",
          romaji: "nemasu",
          english: "睡觉 (敬体)",
          group: 2
        },
        correctAnswer: ["ねる", "寝る"],
        explanation: "去掉 masu + ru = Neru (睡觉)。"
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "最后是三类动词（不规则）。‘します’ (Shimasu) 变成 ‘する’ (Suru)，‘来ます’ (Kimasu) 变成 ‘来る’ (Kuru)。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词 (不规则)",
        content: ["Shimasu → Suru (する)", "Kimasu → Kuru (くる)"],
        examples: [
          { jp: "勉強します → 勉強する", cn: "学习" },
          { jp: "来ます (Kimasu) → 来る (Kuru)", cn: "来" }
        ]
      }
    }
  },
  {
    id: 8,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "‘来ます’ (Kimasu) 的辞书形是... 让我选选看！",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "来ます",
          hiragana: "きます",
          romaji: "kimasu",
          english: "来 (敬体)",
          group: 3
        },
        options: ["きる (Kiru)", "くる (Kuru)", "こる (Koru)", "ける (Keru)"],
        correctAnswer: "くる (Kuru)",
        explanation: "Kimasu 的辞书形是 Kuru (くる)。"
      }
    }
  },
  {
    id: 9,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "太好了！日记写完了！‘今天去露营 (Kyanpu ni iku)，吃咖喱 (Kare o taberu)，很开心！’",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko showing her diary with a happy face.",
      imageCaption: "日记完成"
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "嗯。记住，和朋友说话时也可以用辞书形，这样更亲切。走吧 (Iku yo)。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
