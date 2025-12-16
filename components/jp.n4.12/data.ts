
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "凛酱！既然考试结束了，我们来决定下次的露营计划吧！(Kimeyō!)",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko spreading a map on the table, eyes sparkling.",
      imageCaption: "第 4.12 课：意向形 (Volitional Form)"
    }
  },
  {
    id: 2,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "好啊。‘意向形’ 用来表示‘吧！’（提议）或者‘打算做’（意志）。在普通体对话里很常用。先看二类动词（一段）。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin holding a pen, looking at the map.",
      imageCaption: "让我们做...吧！"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "fuchsia",
    text: "二类动词很简单：去掉 ‘ru’ (る)，加上 ‘yō’ (よう)。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "二类动词 (一段)",
        content: ["去掉 'ru' (る)", "加上 'yō' (よう)"],
        examples: [
          { jp: "食べる (Taberu) → 食べよう (Tabeyō)", cn: "吃吧！/ 打算吃" },
          { jp: "見る (Miru) → 見よう (Miyō)", cn: "看吧！/ 打算看" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "那我要说‘吃吧’ (Taberu)！我要吃担担饺子锅！",
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
        correctAnswer: ["たべよう", "食べよう"],
        explanation: "去掉 ru + yō = Tabeyō (吃吧/打算吃)。",
        placeholder: "输入意向形..."
      }
    }
  },
  {
    id: 5,
    speaker: "凛 (Rin)",
    speakerColor: "fuchsia",
    text: "接下来是一类动词（五段）。把词尾的 ‘u段’ 假名变成 ‘o段’ 假名，然后加上 ‘u’ (う)。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词 (五段)",
        content: ["词尾 'u段' → 'o段'", "加上 'u' (う)"],
        examples: [
          { jp: "行く (Iku) → 行こう (Ikō)", cn: "走吧！/ 去吧！" },
          { jp: "飲む (Nomu) → 飲もう (Nomō)", cn: "喝吧！" },
          { jp: "待つ (Matsu) → 待とう (Matō)", cn: "等吧！" }
        ]
      }
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "fuchsia",
    text: "我们‘去’ (Iku) 本栖湖吧。试着变形。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "行く",
          hiragana: "いく",
          romaji: "iku",
          english: "去",
          group: 1
        },
        correctAnswer: ["いこう", "行こう"],
        explanation: "Ku (く) 变成 Ko (こ) + u (う) = Ikō (去吧)。"
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "fuchsia",
    text: "三类动词（不规则）。‘Suru’ 变成 ‘Shiyō’，‘Kuru’ 变成 ‘Koyō’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词 (不规则)",
        content: ["Suru → Shiyō (しよう)", "Kuru → Koyō (こよう)"],
        examples: [
          { jp: "キャンプする → キャンプしよう", cn: "露营吧！" },
          { jp: "来る (Kuru) → 来よう (Koyō)", cn: "来吧（表示意志）" }
        ]
      }
    }
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "fuchsia",
    text: "那么，这次我们慢慢‘做’ (Suru) 准备吧。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "する",
          hiragana: "suru",
          romaji: "suru",
          english: "做",
          group: 3
        },
        options: ["しろう (Shirō)", "しよう (Shiyō)", "さよう (Sayō)", "すよう (Suyō)"],
        correctAnswer: "しよう (Shiyō)",
        explanation: "Suru 变成 Shiyō (做吧)。"
      }
    }
  },
  {
    id: 9,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "好！决定了！一定要玩得开心 (Tanoshimō)！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko and Rin high-fiving over the map.",
      imageCaption: "计划通"
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "嗯，一起努力吧 (Gambarō)。在此之前，先把作业写完。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
