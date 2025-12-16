
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "啊～露营好开心啊！虽然要结束了，但我还想去很多地方！我想看海！(Umi ga mitai!)",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko and Rin packing up the tent as the sun sets.",
      imageCaption: "第 4.16 课：条件形 ～なら (Conditional Context)"
    }
  },
  {
    id: 2,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "想看海的话 (Umi ga mitai nara)，伊豆是个不错的地方。这里用 ‘～なら’ 表示‘承接话题’。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin holding a guidebook of Izu Peninsula.",
      imageCaption: "承接话题"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "‘～なら’ 用法很广。动词（简体）、形容词、名词都可以直接接 ‘nara’。表示‘如果是关于...的话’，后面通常接建议或意见。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "条件形 ～なら 规则",
        content: ["普通形 (动/形/名) + 'nara' (なら)"],
        examples: [
          { jp: "行くなら (Iku nara)", cn: "如果要像你说的那样去的话..." },
          { jp: "寒いなら (Samui nara)", cn: "如果冷的话 (就穿衣服)..." },
          { jp: "温泉なら (Onsen nara)", cn: "如果是说温泉的话..." }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "你说‘想去’ (Ikitai)。如果‘想去’的话，我们可以计划一下。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "行きたい",
          hiragana: "いきたい",
          romaji: "ikitai",
          english: "想去",
          group: 1
        },
        correctAnswer: ["いきたいなら", "行きたいなら"],
        explanation: "Ikitai (想去) + nara = Ikitai nara (如果想去的话)。",
        placeholder: "输入条件形..."
      }
    }
  },
  {
    id: 5,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "我也很怕冷 (Samui)。如果是冬天 (Fuyu) 露营的话，要准备什么呢？",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "冬",
          hiragana: "ふゆ",
          romaji: "fuyu",
          english: "冬天 (名词)",
          group: 3
        },
        correctAnswer: ["ふゆなら", "冬なら"],
        explanation: "名词直接加 nara。Fuyu nara (如果是冬天的话)。"
      }
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "如果是冬天 (Fuyu nara)，必须带暖宝宝。还有，如果‘不吃’ (Tabenai) 热的东西，身体会受不了。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "食べない",
          hiragana: "たべない",
          romaji: "tabenai",
          english: "不吃 (简体)",
          group: 2
        },
        options: ["たべないなら (Tabenai nara)", "たべるなら (Taberu nara)", "たべなら (Tabenara)", "たべたなら (Tabeta nara)"],
        correctAnswer: "たべないなら (Tabenai nara)",
        explanation: "否定形 Tabenai 也可以直接加 nara。"
      }
    }
  },
  {
    id: 7,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "那如果‘有’ (Aru) 温泉的话，就更完美了！",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "ある",
          hiragana: "ある",
          romaji: "aru",
          english: "有/在",
          group: 1
        },
        correctAnswer: ["あるなら"],
        explanation: "Aru + nara = Aru nara (如果有的话)。",
        placeholder: "输入条件形..."
      }
    }
  },
  {
    id: 8,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "嗯。如果是温泉 (Onsen nara)，我也想去。只要有钱 (Okane ga aru nara)...",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin looking at her wallet with a wry smile.",
      imageCaption: "现实问题"
    }
  },
  {
    id: 9,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "如果是和凛酱一起 (Rin-chan to nara)，去哪里都很开心！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko smiling brightly at Rin. Sunset glow.",
      imageCaption: "最重要的事"
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "......是吗。那，下次再去吧。我们回家。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
