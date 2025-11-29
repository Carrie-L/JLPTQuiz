import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "凛酱~ 我肚子饿了！我可以吃那个布丁吗？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko looking with puppy eyes at a pudding.",
      imageCaption: "第 4.5 课：使役形 (Causative)"
    }
  },
  {
    id: 2,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "不行。还没搭好帐篷呢。想吃东西的话，就要先干活。我要让你工作 (Hatarakaseru)。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin crossing arms, stern but teaching mode.",
      imageCaption: "让/使...做 (使役)"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "‘使役形’表示‘让某人做某事’，或者‘允许某人做某事’。先看二类动词（一段）：去掉 ‘ru’ 加上 ‘saseru’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "二类动词规则 (一段)",
        content: ["去掉词尾的 'ru' (る)", "加上 'saseru' (させる)"],
        examples: [
          { jp: "食べる (Taberu) → 食べさせる (Tabesaseru)", cn: "吃 → 让...吃 (喂)" },
          { jp: "見る (Miru) → 見させる (Misaseru)", cn: "看 → 让...看 (展示)" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "所以我只要乖乖干活，凛酱就会‘让我吃’ (Tabesaseru) 那个布丁吗？",
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
        correctAnswer: ["たべさせる", "食べさせる"],
        explanation: "去掉 ru + saseru = Tabesaseru (让我吃/喂我)。"
      }
    }
  },
  {
    id: 5,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "没错。接下来是三类动词（不规则）。‘する’ 变成 ‘させる’ (Saseru)，‘くる’ 变成 ‘こさせる’ (Kosaseru)。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词规则 (不规则)",
        content: ["Suru → Saseru", "Kuru → Kosaseru"],
        examples: [
          { jp: "勉強する (Benkyou suru) → 勉強させる", cn: "学习 → 逼...学习" },
          { jp: "来る (Kuru) → 来させる (Kosaseru)", cn: "来 → 让...来 (叫来)" }
        ]
      }
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "如果惠那（Ena）不肯来露营，我就强行‘让她来’。用哪个？",
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
        options: ["きさせる (Kisaseru)", "くさせる (Kusaseru)", "こさせる (Kosaseru)", "けさせる (Kesaseru)"],
        correctAnswer: "こさせる (Kosaseru)",
        explanation: "Kuru 变成 Kosaseru (让...来)。"
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "最后是一类动词（五段）。要把 ‘u段’ 变成 ‘a段’，然后加上 ‘seru’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词规则 (五段)",
        content: ["词尾 'u段' → 'a段'", "加上 'seru' (せる)"],
        examples: [
          { jp: "行く (Iku) → 行かせる (Ikaseru)", cn: "去 → 让...去" },
          { jp: "飲む (Nomu) → 飲ませる (Nomaseru)", cn: "喝 → 让...喝 (劝酒)" }
        ]
      }
    }
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "现在，我要让你‘拿’ (Motsu) 行李了。变形成使役形。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "持つ",
          hiragana: "もつ",
          romaji: "motsu",
          english: "拿 / 持有",
          group: 1
        },
        correctAnswer: ["もたせる", "持たせる"],
        explanation: "Tsu (つ) 变成 Ta (た) + seru = Motaseru。",
        placeholder: "输入平假名或汉字..."
      }
    }
  },
  {
    id: 9,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "嘿咻...嘿咻... 凛酱真是斯巴达教育 (Strict)！但是为了布丁，我会努力被你‘逼着跑’ (走らせる) 的！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko carrying camping gear, sweating but smiling.",
      imageCaption: "为了布丁"
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "别说的那么难听。我是让你‘享受’露营的乐趣。好了，帐篷搭完了。给你布丁。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];