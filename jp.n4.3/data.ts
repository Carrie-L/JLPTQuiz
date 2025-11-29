
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
    text: "你是想说「つけてください」(Please light it) 吧？请求别人做某事，要用动词的「て形」(Te-form)。",
    viewType: "IMAGE",
    viewContent: {
      imagePrompt: "Rin lighting a campfire. The fire illuminates her face warmly.",
    },
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "二类动词（Ru-verbs）最简单。和可能态一样，直接去掉 `ru`，加上 `te`。",
    viewType: "GRAMMAR_EXPLAIN",
    viewContent: {
      grammarRule: `// 二类动词 (Group 2)
// 规则：去掉 ru + te

見る (Miru) - 看
  ⬇️
見 (Mi) + て (te)
  ⬇️
見て (Mite) = 看...`,
    },
  },
  {
    id: 4,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【手写练习】：请将「Miru」(看) 变成て形。比如「看着星星」的“看”。",
    viewType: "INTERACTIVE_LAB",
    viewContent: {
      interactiveConfig: { mode: "group2_te" },
    },
  },
  {
    id: 5,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "那是简单的！但是「待つ」(Matsu - 等待) 呢？我想让你「等一下」。",
    viewType: "IMAGE",
    viewContent: {
      imagePrompt: "Nadeshiko running to get something, waving hand.",
    },
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "一类动词（U-verbs）比较复杂，要看词尾。凡是 `u` `tsu` `ru` 结尾的，变成促音 `tte`。",
    viewType: "GRAMMAR_EXPLAIN",
    viewContent: {
      grammarRule: `// 一类动词 (Group 1 - 促音变)
// 规则：u, tsu, ru ➡️ tte

待つ (Matsu) - 等
  ⬇️ tsu 变 tte
待って (Matte) = 等等...

(例：待ってください)`,
    },
  },
  {
    id: 7,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【手写练习】：露营要搭帐篷。「立つ」(Tatsu - 站立/建立) 的て形是什么？",
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
      grammarRule: `// 一类动词 (Group 1 - 音变)

書く (Kaku) ➡️ 書いて (Kaite)
泳ぐ (Oyogu) ➡️ 泳いで (Oyoide)

読む (Yomu) ➡️ 読んで (Yonde)
遊ぶ (Asobu) ➡️ 遊んで (Asonde)
死ぬ (Shinu) ➡️ 死んで (Shinde)`,
    },
  },
  {
    id: 9,
    speaker: "系统提示",
    speakerColor: "green",
    text: "【手写练习】：写日记的「書く」(Kaku - 写)。请变成て形。",
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
    text: "【终极挑战】：喝东西的「飲む」(Nomu)。请变成て形，说“请喝”。",
    viewType: "INTERACTIVE_LAB",
    viewContent: {
      interactiveConfig: { mode: "challenge_mixed" },
    },
  },
  {
    id: 12,
    speaker: "凛 (Rin)",
    speakerColor: "blue",
    text: "喝吧 (Nonde)。今晚的星星很漂亮呢。",
    viewType: "VICTORY",
    viewContent: {},
  },
];
