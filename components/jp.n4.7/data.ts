import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "呼......呼......好累啊......为什么我要在这个时间爬山啊！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko exhausted, climbing a steep hill at dawn.",
      imageCaption: "第 4.6 课：使役被动 (Causative Passive)"
    }
  },
  {
    id: 2,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "别抱怨了。如果不早起，就看不到那个景色了。是我让你来的，感谢我吧。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin pointing at a beautiful sunrise over Mt. Fuji.",
      imageCaption: "被...逼着做 (使役被动)"
    }
  },
  {
    id: 3,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "呜呜，我是被凛酱‘逼着来’ (Kosaserareta) 的！这就是‘使役被动形’吗？",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "什么是使役被动形？",
        content: ["表示‘不得不做某事’或‘被强迫做某事’。", "结合了‘使役’ (让...) 和 ‘被动’ (被...) 的含义。"],
        examples: [
          { jp: "母に野菜を食べさせられた。", cn: "被妈妈逼着吃了蔬菜。" },
          { jp: "部長に歌を歌わせられた。", cn: "被部长逼着唱了歌。" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "没错。先看二类动词（一段）。去掉 ‘ru’ 加上 ‘saserareru’。有点长，要耐心念。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "二类动词规则 (一段)",
        content: ["去掉 'ru' (る)", "加上 'saserareru' (させられる)"],
        examples: [
          { jp: "食べる (Taberu) → 食べさせられる", cn: "被逼着吃" },
          { jp: "起きる (Okiru) → 起きさせられる", cn: "被逼着起床" }
        ]
      }
    }
  },
  {
    id: 5,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "你今天早上是被我‘逼着起床’的。用 ‘起きる’ (Okiru) 的使役被动形。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "起きる",
          hiragana: "おきる",
          romaji: "okiru",
          english: "起床",
          group: 2
        },
        correctAnswer: ["おきさせられる", "起きさせられる"],
        explanation: "Okiru (去掉ru) + saserareru = Okisaserareru (被叫醒/被逼起床)。",
        placeholder: "输入平假名..."
      }
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "三类动词（不规则）。‘する’ 变成 ‘させられる’ (Saserareru)，‘くる’ 变成 ‘こさせられる’ (Kosaserareru)。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "三类动词规则 (不规则)",
        content: ["Suru → Saserareru (被逼做)", "Kuru → Kosaserareru (被逼来)"],
        examples: [
          { jp: "勉強する → 勉強させられる", cn: "被逼着学习" },
          { jp: "来る (Kuru) → 来させられる", cn: "被逼着来" }
        ]
      }
    }
  },
  {
    id: 7,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "所以我不仅是被逼着来 (Kosaserareta)，还要被逼着‘做’ (Suru) 准备运动吗？",
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
        options: ["しさせられる", "させられる", "さされる", "すらせる"],
        correctAnswer: "させられる",
        explanation: "Suru 变成 Saserareru (被逼做)。"
      }
    }
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "最后是一类动词（五段）。把 ‘u段’ 变成 ‘a段’，加上 ‘serareru’。但是！更常用的是缩略形：加上 ‘sareru’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "一类动词规则 (五段)",
        content: ["常用缩略形：u段 → a段 + sareru", "注意：以 'su' 结尾的词不能缩略"],
        examples: [
          { jp: "行く (Iku) → 行かされる (Ikasareru)", cn: "被逼着去" },
          { jp: "飲む (Nomu) → 飲まされる (Nomasareru)", cn: "被逼着喝 (被灌酒)" }
        ]
      }
    }
  },
  {
    id: 9,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "试试 ‘待つ’ (Matsu / 等待)。如果你在寒风中‘被迫等待’了很久...",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "待つ",
          hiragana: "まつ",
          romaji: "matsu",
          english: "等待",
          group: 1
        },
        correctAnswer: ["またされる", "待たされる"],
        explanation: "Tsu (つ) → Ta (た) + sareru = Matasareru (被逼等待)。"
      }
    }
  },
  {
    id: 10,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "虽然被逼着走 (Arukasareta) 了这么远，但是看到这个日出，感觉都值了！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko smiling broadly at the sunrise, forgetting her fatigue.",
      imageCaption: "值得的辛苦"
    }
  },
  {
    id: 11,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "是吧。不过下次别忘了带手电筒。我可不想‘被逼着’背你下山。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];