
import { ScriptStep } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "凛酱！我们要去露营了！这次我要大显身手，我要做咖喱饭！",
    viewType: "IMAGE",
    viewContent: {
      imagePrompt: "Nadeshiko raising a ladle excitedly with a camping pot. Rin looking calm beside a scooter.",
    },
  },
  {
    id: 2,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "哦？抚子你会做饭吗？在日语里，表达“能力”或“可能性”时，我们要用到动词的「可能态」(Potential Form)。",
    viewType: "IMAGE",
    viewContent: {
      imagePrompt: "A chalkboard appearing in the forest with Japanese verbs written on it.",
    },
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "首先是最简单的二类动词（Ru-verbs）。比如「食べる」(Taberu - 吃)。只需要去掉词尾的 `ru`，加上 `rareru`。",
    viewType: "GRAMMAR_EXPLAIN",
    viewContent: {
      grammarRule: `// 二类动词 (Group 2)
// 规则：去掉 ru + rareru

食べる (Taberu) 
  ⬇️
食べ (Tabe) + られる (rareru)
  ⬇️
食べられる (Taberareru) = 能吃`,
    },
  },
  {
    id: 4,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【手写练习】：抚子是个大胃王。请将「Taberu」变成可能态，表示“能吃”。(支持 汉字/平假名/Romaji)",
    viewType: "INTERACTIVE_LAB",
    viewContent: {
      interactiveConfig: { mode: "group2_drill" },
    },
  },
  {
    id: 5,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "嘿嘿，我不仅能吃，还能读懂地图哦！虽然字有点小……",
    viewType: "IMAGE",
    viewContent: {
      imagePrompt: "Nadeshiko squinting at a map. Rin pointing at a path.",
    },
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "「読む」(Yomu - 读) 是一类动词（U-verbs）。规则是：把词尾的 `u` 段假名变成 `e` 段，最后加上 `ru`。",
    viewType: "GRAMMAR_EXPLAIN",
    viewContent: {
      grammarRule: `// 一类动词 (Group 1)
// 规则：词尾 u -> e + ru

読む (Yomu)
  ⬇️ mu 变 me
読め (Yome) + る (ru)
  ⬇️
読める (Yomeru) = 能读`,
    },
  },
  {
    id: 7,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【手写练习】：请将「Yomu」变成可能态，表示“能读”。",
    viewType: "INTERACTIVE_LAB",
    viewContent: {
      interactiveConfig: { mode: "group1_drill" },
    },
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "不错。最后是两个特殊的家伙：三类动词（Irregular）。「する」(Suru - 做) 和 「くる」(Kuru - 来)。",
    viewType: "GRAMMAR_EXPLAIN",
    viewContent: {
      grammarRule: `// 三类动词 (Irregular)
// 规则：死记硬背！

する (Suru) ➡️ できる (Dekiru) = 能做
くる (Kuru) ➡️ こられる (Korareru) = 能来`,
    },
  },
  {
    id: 9,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【手写练习】：露营就是“Camp Suru”。如果要说“能露营”，应该怎么变？",
    viewType: "INTERACTIVE_LAB",
    viewContent: {
      interactiveConfig: { mode: "irregular_drill" },
    },
  },
  {
    id: 10,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "我学会了！现在我要大声宣布：“我能做咖喱！”",
    viewType: "IMAGE",
    viewContent: {
      imagePrompt: "Nadeshiko holding a plate of curry, sparkling background.",
    },
  },
  {
    id: 11,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【终极挑战】：动词是「作る」(Tsukuru - 制作，一类动词)。请写出它的可能态。",
    viewType: "INTERACTIVE_LAB",
    viewContent: {
      interactiveConfig: { mode: "sentence_build" },
    },
  },
  {
    id: 12,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "做得好，抚子。今晚的咖喱就拜托你了。（Tsukureru ne!）",
    viewType: "VICTORY",
    viewContent: {},
  },
];
