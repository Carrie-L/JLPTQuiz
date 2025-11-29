import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "抚子，听好了。今天要在露营前学会动词的‘ない形’（Nai-form）。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin Shima reading a book by the campfire, cool atmosphere.",
      imageCaption: "第 4.3 课：ない形 (Nai Form)"
    }
  },
  {
    id: 2,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "诶——？可是我想先煮咖喱面！如果不吃东西的话……不吃……啊！‘不吃’就是ない形吗？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko looking excited holding a cup of noodles.",
      imageCaption: "敬体 vs 简体"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "反应很快嘛。‘食べません’ (Tabemasen) 是敬体，而简体就是 ‘食べない’ (Tabenai)。这在普通对话里很常用。先从二类动词（一段动词）开始。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "二类动词规则 (一段动词)",
        content: ["去掉词尾的 'ru' (る)", "加上 'nai' (ない)"],
        examples: [
          { jp: "食べる (Taberu) → 食べない (Tabenai)", cn: "吃 → 不吃" },
          { jp: "見る (Miru) → 見ない (Minai)", cn: "看 → 不看" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "抚子，把 ‘寝る’ (Neru / 睡觉) 变成ない形试试。如果做不对，今晚就没有火锅吃。",
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
        correctAnswer: ["ねない", "寝ない"],
        explanation: "去掉 'ru' 加上 'nai'。"
      }
    }
  },
  {
    id: 5,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "为了火锅！这点小事难不倒我！‘寝ない’！接下来呢？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko fired up.",
      imageCaption: "二类动词已掌握！"
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "接下来是两个不规则动词（三类动词）。只能死记硬背。‘する’ (Suru) 变成 ‘しない’ (Shinai)，‘くる’ (Kuru) 变成 ‘こない’ (Konai)。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词规则 (不规则)",
        content: ["整个词发生变化"],
        examples: [
          { jp: "する (Suru) → しない (Shinai)", cn: "做 → 不做" },
          { jp: "くる (Kuru) → こない (Konai)", cn: "来 → 不来" }
        ]
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "特别注意 ‘くる’ (Kuru)。虽然汉字还是写作 ‘来’，但在否定形中读音变了。选出正确的那个。",
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
        options: ["きない (Kinai)", "くない (Kunai)", "こない (Konai)", "けない (Kenai)"],
        correctAnswer: "こない (Konai)",
        explanation: "Kuru 是不规则的！它变成 Konai。"
      }
    }
  },
  {
    id: 8,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "Konai... Konai... 记住了！如果不来 (Konai) 露营的话就太可惜了！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko nodding.",
      imageCaption: "三类动词完成"
    }
  },
  {
    id: 9,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "最后是最麻烦的一类动词（五段动词）。要把结尾的 ‘u段’ 音变成 ‘a段’ 音，再加 ‘nai’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词规则 (五段动词)",
        content: ["将词尾的 'u段' 假名变成 'a段' 假名", "加上 'nai' (ない)"],
        examples: [
          { jp: "いく (Iku) → いかない (Ikanai)", cn: "去 → 不去" },
          { jp: "よむ (Yomu) → よまない (Yomanai)", cn: "读 → 不读" }
        ]
      }
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "试试 ‘飲む’ (Nomu / 喝)。‘Mu’ 变成 ‘Ma’。虽然这里只有茶，但也要学会说‘不喝’。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "飲む",
          hiragana: "のむ",
          romaji: "nomu",
          english: "喝",
          group: 1
        },
        correctAnswer: ["のまない", "飲まない"],
        explanation: "Mu (む) 变成 Ma (ま) + nai。",
        placeholder: "输入平假名或汉字..."
      }
    }
  },
  {
    id: 11,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "还有一个陷阱。如果动词是以 ‘u’ (う) 结尾的，比如 ‘買う’ (Kau)，它要变成 ‘Wa’ (わ)，而不是 ‘A’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词例外：以 'u' 结尾",
        content: ["以 'u' (う) 结尾的动词变成 'wa' (わ)", "注意：不是 'a' (あ)"],
        examples: [
          { jp: "買う (Kau) → 買わない (Kawanai)", cn: "买 → 不买" },
          { jp: "会う (Au) → 会わない (Awanai)", cn: "见面 → 不见面" }
        ]
      }
    }
  },
  {
    id: 12,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "明白了！‘Kau’ 变成 ‘Kawanai’！这就像如果不买 (Kawanai) 食材就没法做饭一样重要！",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "会う",
          hiragana: "あう",
          romaji: "au",
          english: "见面",
          group: 1
        },
        correctAnswer: ["あわない", "会わない"],
        explanation: "因为它以 'u' 结尾，所以变成 'wa' + nai。"
      }
    }
  },
  {
    id: 13,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "不错嘛。看来下次露营你可以负责看路标了。今天就到这里。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];