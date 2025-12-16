
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "凛 (Rin)",
    speakerColor: "red",
    text: "紧急情况训练！如果遇到了野猪，你要怎么做？快跑 (Nigero)！别停下 (Tomaru na)！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin with a megaphone, acting like a drill sergeant. Nadeshiko looking startled.",
      imageCaption: "第 4.10 课：命令形 (Imperative Form)"
    }
  },
  {
    id: 2,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "诶诶？！野猪？在哪里？！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko looking around in panic.",
      imageCaption: "紧急指令"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "red",
    text: "是假想训练！在紧急时刻，为了简洁有力地传达指令，我们会使用‘命令形’。先看二类动词（一段）。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "二类动词 (一段)",
        content: ["去掉 'ru' (る)", "加上 'ro' (ろ)"],
        examples: [
          { jp: "逃げる (Nigeru) → 逃げろ (Nigero)", cn: "快逃！" },
          { jp: "見る (Miru) → 見ろ (Miro)", cn: "看！" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "red",
    text: "如果看到野猪，你要‘逃跑’ (Nigeru)。把它变成命令形！",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "逃げる",
          hiragana: "にげる",
          romaji: "nigeru",
          english: "逃跑",
          group: 2
        },
        correctAnswer: ["にげろ", "逃げろ"],
        explanation: "去掉 ru + ro = Nigero (快逃！)。",
        placeholder: "输入命令形..."
      }
    }
  },
  {
    id: 5,
    speaker: "凛 (Rin)",
    speakerColor: "red",
    text: "接下来是一类动词（五段）。把词尾的 ‘u段’ 变成 ‘e段’。不需要加其他东西。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词 (五段)",
        content: ["将词尾的 'u段' 假名变成 'e段'"],
        examples: [
          { jp: "行く (Iku) → 行け (Ike)", cn: "去！/ 滚！" },
          { jp: "待つ (Matsu) → 待て (Mate)", cn: "等一下！" },
          { jp: "止まる (Tomaru) → 止まれ (Tomare)", cn: "停下！" }
        ]
      }
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "red",
    text: "如果你跑得太快要撞树了，我会喊‘停下’ (Tomaru)。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "止まる",
          hiragana: "とまる",
          romaji: "tomaru",
          english: "停止",
          group: 1
        },
        correctAnswer: ["とまれ", "止まれ"],
        explanation: "ru (る) 变成 re (れ) = Tomare (停下！)。"
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "red",
    text: "最后是三类动词（不规则）。这两个必须死记。‘Suru’ 变成 ‘Shiro’，‘Kuru’ 变成 ‘Koi’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词 (不规则)",
        content: ["Suru → Shiro (しろ)", "Kuru → Koi (こい)"],
        examples: [
          { jp: "注意する → 注意しろ", cn: "注意！(小心)" },
          { jp: "来る (Kuru) → 来い (Koi)", cn: "过来！" }
        ]
      }
    }
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "red",
    text: "野猪走了。现在我叫你‘过来’ (Kuru)。用命令形。",
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
        options: ["くれ (Kure)", "こい (Koi)", "きろ (Kiro)", "こよ (Koyo)"],
        correctAnswer: "こい (Koi)",
        explanation: "Kuru 的命令形是 Koi (过来！)。有点粗鲁，要注意场合。"
      }
    }
  },
  {
    id: 9,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "呼... 凛酱的命令形好可怕。感觉像是在军队里一样！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko saluting clumsily.",
      imageCaption: "训练结束"
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "这是为了安全。平时不要乱用命令形，特别是对长辈。但在危险时刻，它能救命。休息吧 (Yasume)。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
