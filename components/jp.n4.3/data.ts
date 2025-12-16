
import { ScriptStep } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "天黑了呢~ 凛酱，能不能帮我生火？(Fire... doing?)",
    viewType: "IMAGE",
    viewContent: {
      imagePrompt: "Night scene. Nadeshiko holding firewood, looking at Rin with puppy eyes. A dark blue starry sky.",
    },
  },
  {
    id: 2,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "你是想说「つけてください」(请点火) 吧？请求别人做某事，要用动词的「て形」。",
    viewType: "IMAGE",
    viewContent: {
      imagePrompt: "Rin lighting a campfire. The fire illuminates her face warmly.",
    },
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "二类动词（一段动词）最简单。和可能态一样，直接去掉 `る`，加上 `て`。",
    viewType: "GRAMMAR_EXPLAIN",
    viewContent: {
      grammarRule: `// 二类动词 (一段)
// 规则：去掉 る + て

見る (みる) - 看
  ⬇️
見 (み) + て
  ⬇️
見て (みて) = 看...`,
    },
  },
  {
    id: 4,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【手写练习】：请将「見る」(看) 变成て形。比如「看着星星」的“看”。",
    viewType: "INTERACTIVE_LAB",
    viewContent: {
      interactiveConfig: { mode: "group2_te" },
    },
  },
  {
    id: 5,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "那是简单的！但是「待つ」(まつ - 等待) 呢？我想让你「等一下」。",
    viewType: "IMAGE",
    viewContent: {
      imagePrompt: "Nadeshiko running to get something, waving hand.",
    },
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "一类动词（五段动词）比较复杂，要看词尾。凡是 `u` `tsu` `ru` (う/つ/る) 结尾的，变成促音 `って`。",
    viewType: "GRAMMAR_EXPLAIN",
    viewContent: {
      grammarRule: `// 一类动词 (促音变)
// 规则：う, つ, る ➡️ って

待つ (まつ) - 等
  ⬇️ つ 变 って
待って (まって) = 等等...

(例：待ってください)`,
    },
  },
  {
    id: 7,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【手写练习】：露营要搭帐篷。「立つ」(たつ - 站立/建立) 的て形是什么？",
    viewType: "INTERACTIVE_LAB",
    viewContent: {
      interactiveConfig: { mode: "group1_tte" },
    },
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "接下来是 `ku` 变 `ite`，`gu` 变 `ide`。还有 `mu` `bu` `nu` 变 `nde`。",
    viewType: "GRAMMAR_EXPLAIN",
    viewContent: {
      grammarRule: `// 一类动词 (音变)

書く (かく) ➡️ 書いて (かいて)
泳ぐ (およぐ) ➡️ 泳いで (およいで)

読む (よむ) ➡️ 読んで (よんで)
遊ぶ (あそぶ) ➡️ 遊んで (あそんで)
死ぬ (しぬ) ➡️ 死んで (しんで)`,
    },
  },
  {
    id: 9,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【手写练习】：写日记的「書く」(かく - 写)。请变成て形。",
    viewType: "INTERACTIVE_LAB",
    viewContent: {
      interactiveConfig: { mode: "group1_ite_nde" },
    },
  },
  {
    id: 10,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "好复杂... 不过为了喝到热可可，我要努力记住！",
    viewType: "IMAGE",
    viewContent: {
      imagePrompt: "Nadeshiko holding a steaming mug of hot chocolate.",
    },
  },
  {
    id: 11,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【终极挑战】：喝东西的「飲む」(のむ)。请变成て形，说“请喝”。",
    viewType: "INTERACTIVE_LAB",
    viewContent: {
      interactiveConfig: { mode: "challenge_mixed" },
    },
  },
  {
    id: 12,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "喝吧 (のんで)。今晚的星星很漂亮呢。",
    viewType: "VICTORY",
    viewContent: {},
  },
];
