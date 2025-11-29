
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "凛酱，看这张照片！那时候的咖喱面真的很好吃呢~(回忆中)",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko holding a photo album, pointing at a picture of them eating noodles.",
      imageCaption: "第 4.8 课：た形 (Past Tense)"
    }
  },
  {
    id: 2,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "嗯，确实很好吃 (Oishikatta)。当我们谈论“过去发生的事情”时，就要用到动词的‘た形’（过去式）。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin looking at the album with a gentle smile.",
      imageCaption: "过去的动作"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "‘た形’ (Ta-form) 的变形规则和 ‘て形’ (Te-form) 完全一样。只需要把 ‘te’ 换成 ‘ta’，‘de’ 换成 ‘da’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "变形秘诀",
        content: ["规则与 'て形' 完全相同！", "te (て) → ta (た)", "de (で) → da (だ)"],
        examples: [
          { jp: "食べて (Tabete) → 食べた (Tabeta)", cn: "吃了" },
          { jp: "飲んで (Nonde) → 飲んだ (Nonda)", cn: "喝了" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "先从二类动词（一段）开始。去掉 ‘ru’ 加上 ‘ta’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "二类动词规则 (一段)",
        content: ["去掉 'ru' (る)", "加上 'ta' (た)"],
        examples: [
          { jp: "食べる (Taberu) → 食べた (Tabeta)", cn: "吃了" },
          { jp: "見る (Miru) → 見た (Mita)", cn: "看了" }
        ]
      }
    }
  },
  {
    id: 5,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "也就是把 ‘Tabete’ 变成 ‘Tabeta’！这张照片里，我们‘吃了’火锅！",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "食べる",
          hiragana: "たべる",
          romaji: "taberu",
          english: "吃",
          group: 2
        },
        correctAnswer: ["たべた", "食べた"],
        explanation: "去掉 ru + ta = Tabeta (吃了)。",
        placeholder: "输入平假名..."
      }
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "接下来是一类动词（五段）。还记得口诀吗？‘u, tsu, ru’ 变成 ‘tta’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词：促音变",
        content: ["u, tsu, ru (う/つ/る) → tta (った)"],
        examples: [
          { jp: "買う (Kau) → 買った (Katta)", cn: "买了" },
          { jp: "待つ (Matsu) → 待った (Matta)", cn: "等了" },
          { jp: "乗る (Noru) → 乗った (Notta)", cn: "坐了(车)" }
        ]
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "那天我们‘坐了’ (Noru) 电车去露营场。试着变形。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "乗る",
          hiragana: "のる",
          romaji: "noru",
          english: "乘坐",
          group: 1
        },
        correctAnswer: ["のった", "乗った"],
        explanation: "ru 变成 tta = Notta (坐了)。"
      }
    }
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "然后是鼻音变：‘mu, bu, nu’ 变成 ‘nda’。以及 ‘ku’ 变成 ‘ita’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词：拨音变 & イ音变",
        content: ["mu, bu, nu → nda (んだ)", "ku → ita (いた)", "gu → ida (いだ)"],
        examples: [
          { jp: "飲む (Nomu) → 飲んだ (Nonda)", cn: "喝了" },
          { jp: "書く (Kaku) → 書いた (Kaita)", cn: "写了" }
        ]
      }
    }
  },
  {
    id: 9,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "啊！这张照片！我在帐篷里‘喝了’ (Nomu) 超好喝的热可可！",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "飲む",
          hiragana: "のむ",
          romaji: "nomu",
          english: "喝",
          group: 1
        },
        options: ["のんだ (Nonda)", "のいた (Noita)", "のった (Notta)", "のみた (Nomita)"],
        correctAnswer: "のんだ (Nonda)",
        explanation: "mu 变成 nda = Nonda (喝了)。"
      }
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "最后是三类动词。‘suru’ 变成 ‘shita’，‘kuru’ 变成 ‘kita’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词 (不规则)",
        content: ["suru → shita (した)", "kuru → kita (きた)"],
        examples: [
          { jp: "勉強する → 勉強した", cn: "学习了" },
          { jp: "来る (Kuru) → 来た (Kita)", cn: "来了" }
        ]
      }
    }
  },
  {
    id: 11,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "虽然那天很冷，但凛酱还是‘来了’ (Kuru)！真是太好了。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "来る",
          hiragana: "くる",
          romaji: "kuru",
          english: "来",
          group: 3
        },
        correctAnswer: ["きた", "来た"],
        explanation: "Kuru 变成 Kita (来了)。"
      }
    }
  },
  {
    id: 12,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "嗯。那次露营很开心 (Tanoshikatta)。下次...再去吧。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
