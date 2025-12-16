
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "我们要回家了。沿着这条路‘直走’ (Massugu iku)，‘就会’看到车站。这里就要用到 ‘～と’。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin pointing down a straight road at sunset.",
      imageCaption: "第 4.15 课：条件形 ～と (Natural Consequence)"
    }
  },
  {
    id: 2,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "～と？和之前的 ‘たら’、‘ば’ 有什么区别吗？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko tilting her head, holding a map.",
      imageCaption: "必然的结果"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "slate",
    text: "‘～と’ 表示‘一...就...’。通常用于表达自然法则、机械操作的结果，或者指路。即‘只要A发生，B必然发生’。规则非常简单：辞书形 + ‘to’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "条件形 ～と 规则",
        content: ["动词辞书形 (基本形) + 'to' (と)"],
        examples: [
          { jp: "行く (Iku) → 行くと (Iku to)", cn: "一去就... / 往...走就..." },
          { jp: "押す (Osu) → 押すと (Osu to)", cn: "一按就... (机器启动)" },
          { jp: "春になる (Haru ni naru) → 春になると", cn: "一到春天就..." }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "slate",
    text: "比如指路：‘往右拐’ (Magaru) 就会看到。试着把 ‘Magaru’ 变成 ～と 形。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "曲がる",
          hiragana: "まがる",
          romaji: "magaru",
          english: "拐弯",
          group: 1
        },
        correctAnswer: ["まがると", "曲がると"],
        explanation: "辞书形 Magaru + to = Magaru to (一拐弯就.../如果拐弯)。",
        placeholder: "输入条件形..."
      }
    }
  },
  {
    id: 5,
    speaker: "凛 (Rin)",
    speakerColor: "slate",
    text: "机械操作也是。‘按’ (Osu) 这个按钮，灯就会亮。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "押す",
          hiragana: "おす",
          romaji: "osu",
          english: "按 (按钮)",
          group: 1
        },
        correctAnswer: ["おすと", "押すと"],
        explanation: "Osu + to = Osu to (一按就)。这是机械的必然反应。"
      }
    }
  },
  {
    id: 6,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "原来如此！就像‘冬天来了，春天就会来’一样，是不可改变的事实！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko imagining seasons changing from snow to sakura.",
      imageCaption: "自然规律"
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "slate",
    text: "没错。‘下雪’ (Furu) 就会堆积起来。这也是自然规律。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "降る",
          hiragana: "ふる",
          romaji: "furu",
          english: "下 (雪)",
          group: 1
        },
        options: ["ふると (Furu to)", "ふった (Futta)", "ふれば (Fureba)", "ふり (Furi)"],
        correctAnswer: "ふると (Furu to)",
        explanation: "Furu + to = Furu to (一下雪就...)。"
      }
    }
  },
  {
    id: 8,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "那... 如果我和凛酱‘在一起’ (Iru)，就会很开心！这也是必然的！",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "居る",
          hiragana: "いる",
          romaji: "iru",
          english: "在 (人/动物)",
          group: 2
        },
        correctAnswer: ["いると", "居ると"],
        explanation: "Iru + to = Iru to (如果在一起.../一在一起就...)。"
      }
    }
  },
  {
    id: 9,
    speaker: "凛 (Rin)",
    speakerColor: "teal",
    text: "......是吗。那就没办法了。下次如果不忙 (Isogashikunai to)，再一起来吧。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin smiling gently, sunset background.",
      imageCaption: "约定"
    }
  },
  {
    id: 10,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "嗯！约定好了！动词变形特训，大成功！",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
