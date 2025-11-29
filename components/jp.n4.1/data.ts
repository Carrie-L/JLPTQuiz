import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "抚子，把这些食材整理一下。动词和食材一样，要分好类才能进行下一步的‘料理’（变形）。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin pointing at three different camping baskets labelled 1, 2, 3.",
      imageCaption: "第 4.1 课：动词的分类"
    }
  },
  {
    id: 2,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "了解！分类我最拿手了！只要看长相就能分出来吗？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko confidently holding a daikon radish.",
      imageCaption: "三类动词 (Irregular)"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "嗯。首先是‘三类动词’（不规则）。这个篮子里只有两个特别的家伙：‘来る’ (Kuru) 和 ‘する’ (Suru)。不需要理由，记住它们就好。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词 (不规则动词)",
        content: ["只有两个词", "变化不规则，必须死记硬背"],
        examples: [
          { jp: "する (Suru)", cn: "做 / 干 (Do)" },
          { jp: "来る (Kuru)", cn: "来 (Come)" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "来试着把它们挑出来。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CLASSIFICATION,
        targetVerb: {
          kanji: "する",
          hiragana: "suru",
          english: "做",
          group: 3
        },
        correctAnswer: 3,
        explanation: "Suru 和 Kuru 永远是三类！"
      }
    }
  },
  {
    id: 5,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "接下来是‘二类动词’（一段动词）。它们看起来很整齐。特征是：以 ‘る’ (ru) 结尾，并且 ‘ru’ 前面的音是 ‘i段’ 或 ‘e段’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "二类动词 (一段动词)",
        content: ["必须以 'ru' (る) 结尾", "倒数第二个假名是 'i' 段或 'e' 段"],
        examples: [
          { jp: "食べる (Taberu)", cn: "吃 (be-ru → e段)" },
          { jp: "見る (Miru)", cn: "看 (mi-ru → i段)" }
        ]
      }
    }
  },
  {
    id: 6,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "就像 ‘Taberu’ 的 ‘be’ 是 e 段音！好，我来找找看。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CLASSIFICATION,
        targetVerb: {
          kanji: "寝る",
          hiragana: "ねる",
          english: "睡觉",
          group: 2
        },
        correctAnswer: 2,
        explanation: "以 ru 结尾，前一个音 ne 是 e 段。所以是二类。"
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "最后是‘一类动词’（五段动词）。剩下的基本都在这里。它们通常以 ‘u, ku, su, tsu, nu, mu, bu’ 等结尾。如果不以 ‘ru’ 结尾，那肯定是一类。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词 (五段动词)",
        content: ["不是以 'ru' 结尾的动词", "或者以 'ru' 结尾，但前面是 'a, u, o' 段"],
        examples: [
          { jp: "飲む (Nomu)", cn: "喝 (不是 ru 结尾)" },
          { jp: "会う (Au)", cn: "见面 (不是 ru 结尾)" },
          { jp: "乗る (Noru)", cn: "乘坐 (ru 前是 o 段)" }
        ]
      }
    }
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "试试这个。‘飲む’ (Nomu)。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CLASSIFICATION,
        targetVerb: {
          kanji: "飲む",
          hiragana: "のむ",
          english: "喝",
          group: 1
        },
        correctAnswer: 1,
        explanation: "结尾是 mu，不是 ru，所以绝对是一类。"
      }
    }
  },
  {
    id: 9,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "小心陷阱。有些词虽然满足二类的样子（以 ru 结尾，前音是 i/e），但其实是一类动词（例外词）。比如 ‘帰る’ (Kaeru / 回家)。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CLASSIFICATION,
        targetVerb: {
          kanji: "帰る",
          hiragana: "かえる",
          english: "回家 (例外!)",
          group: 1
        },
        correctAnswer: 1,
        explanation: "Kaeru 是著名的例外词，属于一类动词！"
      }
    }
  },
  {
    id: 10,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "分类完成！现在可以把这些动词扔进锅里煮了吗？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko looking at a pot full of dancing hiragana.",
      imageCaption: "准备活用！"
    }
  },
  {
    id: 11,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "别急。分类只是第一步。不过做得不错。今天可以吃寿喜烧了。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];