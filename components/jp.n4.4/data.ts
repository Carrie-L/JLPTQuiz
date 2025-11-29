import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "好痛！好痛！凛酱，有蚊子咬我！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko crying with a mosquito bite on her arm, outdoors.",
      imageCaption: "第 4.4 课：被动形 (Passive)"
    }
  },
  {
    id: 2,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "别乱动。这里是草丛，当然有蚊子。这时候就要用‘被动形’（受身形）来表达‘被...做了...’。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin applying medicine to Nadeshiko's arm, calm expression.",
      imageCaption: "被...做了 (受身)"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "比如‘刺す’ (Sasu / 刺、咬) 变成被动形就是 ‘刺される’ (Sasareru / 被咬)。先从一类动词（五段）开始。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词规则 (五段)",
        content: ["将词尾的 'u段' 假名变成 'a段'", "加上 'reru' (れる)"],
        examples: [
          { jp: "刺す (Sasu) → 刺される (Sasareru)", cn: "刺 → 被刺/被咬" },
          { jp: "踏む (Fumu) → 踏まれる (Fumareru)", cn: "踩 → 被踩" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "试试看。‘踏む’ (Fumu / 踩)。如果我在帐篷里不小心踩了你的脚...用被动形说。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "踏む",
          hiragana: "ふむ",
          romaji: "fumu",
          english: "踩",
          group: 1
        },
        correctAnswer: ["ふまれる", "踏まれる"],
        explanation: "Mu (む) 变成 Ma (ま) + reru。",
        placeholder: "输入平假名或汉字..."
      }
    }
  },
  {
    id: 5,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "‘踏まれる’ (Fumareru)！被凛酱踩的话...我也许可以原谅！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko looking happy despite imagining being stepped on.",
      imageCaption: "M属性觉醒？"
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "......。接下来是二类动词（一段）。这个很简单，去掉 ‘ru’ 加上 ‘rareru’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "二类动词规则 (一段)",
        content: ["去掉词尾的 'ru' (る)", "加上 'rareru' (られる)"],
        examples: [
          { jp: "食べる (Taberu) → 食べられる (Taberareru)", cn: "吃 → 被吃" },
          { jp: "見る (Miru) → 見られる (Mirareru)", cn: "看 → 被看" }
        ]
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "说到 ‘食べる’... 昨天我买的高级布丁，你知道去哪了吗？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin staring intensely at Nadeshiko, dark aura.",
      imageCaption: "消失的布丁"
    }
  },
  {
    id: 8,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "啊！那个...那个是...因为看起来太好吃了，所以就不小心...",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "食べる",
          hiragana: "たべる",
          romaji: "taberu",
          english: "吃",
          group: 2
        },
        correctAnswer: ["たべられる", "食べられる"],
        explanation: "去掉 ru 加上 rareru。我的布丁被吃掉了 (Taberareta)。"
      }
    }
  },
  {
    id: 9,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "果然是被你吃了 (Taberareta)。作为惩罚，今天的洗碗工作归你了。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin pointing at a pile of dishes.",
      imageCaption: "惩罚游戏"
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "最后是三类动词（不规则）。‘する’ 变成 ‘される’ (Sareru)，‘くる’ 变成 ‘こられる’ (Korareru)。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词规则 (不规则)",
        content: ["整个词发生变化", "注意 '来' 的读音变化"],
        examples: [
          { jp: "する (Suru) → される (Sareru)", cn: "做 → 被做" },
          { jp: "来る (Kuru) → こられる (Korareru)", cn: "来 → 被来 (被打扰)" }
        ]
      }
    }
  },
  {
    id: 11,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "‘被来’ (Korareru) 是什么意思？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko looking confused.",
      imageCaption: "受害被动"
    }
  },
  {
    id: 12,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "通常表示‘有人来了，导致我不方便’。比如，我想一个人静静露营，结果被奇怪的人找上门了。",
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
        options: ["きられる (Kirareru)", "くられる (Kurareru)", "こられる (Korareru)", "かられる (Karareru)"],
        correctAnswer: "こられる (Korareru)",
        explanation: "Kuru 变成 Korareru。表示‘被来了’（通常是麻烦事）。"
      }
    }
  },
  {
    id: 13,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "嘿嘿，我是那个‘奇怪的人’吗？虽然被骂了 (Shikarareta)，但能和凛酱一起露营还是很开心！",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];