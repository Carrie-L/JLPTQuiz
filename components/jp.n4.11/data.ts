
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "凛 (Rin)",
    speakerColor: "yellow",
    text: "抚子！不要乱跑！(Hashiru na!) 这里是悬崖边，很危险。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin holding Nadeshiko back from a cliff edge. Warning tape visible.",
      imageCaption: "第 4.11 课：禁止形 (Prohibitive Form)"
    }
  },
  {
    id: 2,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "哇！吓了一跳... 凛酱刚才说 ‘Hashiru na’？是叫我不要跑吗？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko looking down the cliff, scared.",
      imageCaption: "禁止做某事"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "yellow",
    text: "没错。‘禁止形’用来强烈地禁止某人做某事。规则非常简单：动词辞书形 + ‘na’ (な)。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "禁止形规则 (所有动词)",
        content: ["动词辞书形 (基本形) + 'na' (な)"],
        examples: [
          { jp: "食べる (Taberu) → 食べるな (Taberuna)", cn: "不许吃！" },
          { jp: "行く (Iku) → 行くな (Ikuna)", cn: "不许去！" },
          { jp: "来る (Kuru) → 来るな (Kuruna)", cn: "不许来！" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "yellow",
    text: "地上有不明蘑菇。‘不许吃’ (Taberu)。用禁止形说。",
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
        correctAnswer: ["たべるな", "食べるな"],
        explanation: "辞书形 Taberu + na = Taberuna (不许吃)。",
        placeholder: "输入禁止形..."
      }
    }
  },
  {
    id: 5,
    speaker: "凛 (Rin)",
    speakerColor: "yellow",
    text: "前面有蛇。‘不许靠近’ (Chikazuku)。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "近づく",
          hiragana: "ちかづく",
          romaji: "chikazuku",
          english: "靠近",
          group: 1
        },
        correctAnswer: ["ちかづくな", "近づくな"],
        explanation: "Chikazuku + na = Chikazukuna (别靠近)。"
      }
    }
  },
  {
    id: 6,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "好可怕... 我绝对不会靠近的！那如果我想叫别人‘不要睡觉’ (Neru) 呢？",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "寝る",
          hiragana: "ねる",
          romaji: "neru",
          english: "睡觉",
          group: 2
        },
        options: ["ねない (Nenai)", "ねるな (Neruna)", "ねろ (Nero)", "ねな (Nena)"],
        correctAnswer: "ねるな (Neruna)",
        explanation: "辞书形 Neru + na = Neruna (不许睡)。"
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "yellow",
    text: "最后是三类动词。规则也是一样的。‘Suru’ 变成 ‘Suruna’，‘Kuru’ 变成 ‘Kuruna’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词规则",
        content: ["Suru → Suruna (するな)", "Kuru → Kuruna (くるな)"],
        examples: [
          { jp: "心配するな (Shinpai suruna)", cn: "别担心" },
          { jp: "こっちに来るな (Kuru na)", cn: "别过来" }
        ]
      }
    }
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "yellow",
    text: "我在生火，很危险。‘不许做’ (Suru) 恶作剧。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "する",
          hiragana: "suru",
          romaji: "suru",
          english: "做",
          group: 3
        },
        correctAnswer: ["するな"],
        explanation: "Suru + na = Suruna (不许做)。",
        placeholder: "输入禁止形..."
      }
    }
  },
  {
    id: 9,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "明白了！但是凛酱，不要那么凶嘛 (Okoru na)。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko pouting slightly but safe.",
      imageCaption: "安全第一"
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "这是为了你好。记住，在危险的时候，语气一定要强硬。别忘了 (Wasureruna)。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
