
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "露营结束了。现在是‘年末年始’ (Nenmatsu Nenshi)，我们来神社初诣（Hatsumode）。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin and Nadeshiko in kimonos/warm clothes standing in front of a snowy shrine gate.",
      imageCaption: "第 4.18 课：N3 词汇 (Feelings & Memories)"
    }
  },
  {
    id: 2,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "哇！人好多！这一年发生了很多事，充满了各种‘回忆’ (Omoide) 呢！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Crowd at the shrine, Nadeshiko looking excited.",
      imageCaption: "回顾过去"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "是啊。先记住这个词：‘年末年始’。指的是年底到新年的这段时间。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "N3 词汇：时间",
        content: ["年末年始 (ねんまつねんし)", "指 12月28日~1月3日 左右的假期"],
        examples: [
          { jp: "年末年始は実家に帰ります。", cn: "年末年初回老家。" },
          { jp: "年末年始の休み。", cn: "年终假期。" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "试着拼写一下‘年末年始’的读音。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "年末年始",
          hiragana: "ねんまつねんし",
          romaji: "nenmatsu nenshi",
          english: "年末年初",
          group: 0
        },
        correctAnswer: ["ねんまつねんし"],
        explanation: "Nenmatsu (年末) + Nenshi (年始)。",
        placeholder: "输入平假名..."
      }
    }
  },
  {
    id: 5,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "看着这些照片，‘感情’ (Kanjō) 一下子涌上来了！特别是第一次看到富士山的时候。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "N3 词汇：情感",
        content: ["感情 (かんじょう) - Emotion/Feeling", "思い出 (おもいで) - Memory"],
        examples: [
          { jp: "感情を込めて歌う。", cn: "充满感情地歌唱。" },
          { jp: "いい思い出になった。", cn: "成为了美好的回忆。" }
        ]
      }
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "你总是‘感情’丰富。来，选出‘感情’的正确读音。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "感情",
          hiragana: "かんじょう",
          romaji: "kanjou",
          english: "感情/情绪",
          group: 0
        },
        options: ["かんじょう (Kanjou)", "かんじょ (Kanjo)", "かんしょう (Kanshou)", "かんのう (Kannou)"],
        correctAnswer: "かんじょう (Kanjou)",
        explanation: "注意长音：Kan-jou。"
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "新的一年，我们要‘接受’ (Ukeireru) 新的挑战。不管是好的还是坏的。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "N3 词汇：动词",
        content: ["受け入れる (うけいれる)", "意思：接受、接纳、收容"],
        examples: [
          { jp: "現実を受け入れる。", cn: "接受现实。" },
          { jp: "留学生を受け入れる。", cn: "接纳留学生。" }
        ]
      }
    }
  },
  {
    id: 8,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "即使是冬天的寒冷，我也能‘接受’！只要有火锅！",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "受け入れる",
          hiragana: "うけいれる",
          romaji: "ukeireru",
          english: "接受",
          group: 0
        },
        correctAnswer: ["うけいれる"],
        explanation: "Uke (受) + Ireru (入) = Ukeireru。",
        placeholder: "输入平假名..."
      }
    }
  },
  {
    id: 9,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "想到明年还能一起露营，我的‘胸’ (Mune) 口就热热的！充满了期待！",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "胸",
          hiragana: "むね",
          romaji: "mune",
          english: "胸/心/内心",
          group: 0
        },
        options: ["むね (Mune)", "のど (Nodo)", "はら (Hara)", "かた (Kata)"],
        correctAnswer: "むね (Mune)",
        explanation: "胸 (Mune) 常用来比喻内心感受，如‘胸がいっぱい’ (百感交集)。"
      }
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "那就好。为了创造更多‘回忆’ (Omoide)，明年也请多关照。新年快乐。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
