import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "Yuki 老师",
    speakerColor: "teal",
    text: "你好，健！今天我们来学习动词的‘ない形’（Nai-form）。这是表示‘不’或‘未做某事’的简体形式。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "A friendly anime teacher standing in front of a chalkboard with Hiragana characters.",
      imageCaption: "第 4.3 课：ない形 (Nai Form)"
    }
  },
  {
    id: 2,
    speaker: "健 (Ken)",
    speakerColor: "orange",
    text: "简体否定？所以比起说‘食べません’ (Tabemasen)，我可以用这个形式？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "A student looking curious holding a bento box.",
      imageCaption: "敬体 vs 简体"
    }
  },
  {
    id: 3,
    speaker: "Yuki 老师",
    speakerColor: "teal",
    text: "没错！‘食べません’ 会变成 ‘食べない’。这在日常对话和许多语法结构中非常重要。我们先从二类动词（一段动词）开始，因为它们最简单。",
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
    speaker: "Yuki 老师",
    speakerColor: "teal",
    text: "试一试吧，健。把 ‘寝る’ (Neru / 睡觉) 变成ない形。",
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
        explanation: "去掉 'ru' 加上 'nai'。很简单！"
      }
    }
  },
  {
    id: 5,
    speaker: "健 (Ken)",
    speakerColor: "orange",
    text: "太简单了！就像切掉尾巴一样。那三类动词（不规则动词）呢？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Ken looking confident.",
      imageCaption: "二类动词已掌握！"
    }
  },
  {
    id: 6,
    speaker: "Yuki 老师",
    speakerColor: "teal",
    text: "不规则动词只有两个。你只需要死记硬背。‘する’ (Suru) 变成 ‘しない’ (Shinai)，‘くる’ (Kuru) 变成 ‘こない’ (Konai)。",
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
    speaker: "Yuki 老师",
    speakerColor: "teal",
    text: "注意 ‘くる’ (Kuru)。虽然汉字写作 ‘来’ (ku)，但在否定形中读音变成了 ‘Ko’。",
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
    speaker: "Yuki 老师",
    speakerColor: "teal",
    text: "现在来看最难的部分：一类动词（五段动词）。对于这些动词，我们要把结尾的 ‘u段’ 音变成 ‘a段’ 音，然后加上 ‘nai’。",
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
    id: 9,
    speaker: "Yuki 老师",
    speakerColor: "teal",
    text: "让我们试试 ‘飲む’ (Nomu / 喝)。‘Mu’ 变成 ‘Ma’。所以...",
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
    id: 10,
    speaker: "Yuki 老师",
    speakerColor: "teal",
    text: "一类动词有一个非常重要的例外！如果动词以 ‘u’ (う) 结尾，比如 ‘買う’ (Kau)，它要变成 ‘Wa’ (わ)，而不是 ‘A’。",
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
    id: 11,
    speaker: "健 (Ken)",
    speakerColor: "orange",
    text: "明白了。所以 ‘Kau’ 是 ‘Kawanai’。让我来证明我懂了！",
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
    id: 12,
    speaker: "Yuki 老师",
    speakerColor: "teal",
    text: "干得好，健！你已经掌握了ない形的基础。继续保持练习！",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];