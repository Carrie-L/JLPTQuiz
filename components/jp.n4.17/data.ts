
import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "凛 (Rin)",
    speakerColor: "zinc",
    text: "抚子，露营结束后，我们要写一份简单的‘活动记录’。为了显得客观正式，不要只用口语，试着用 ‘～ことができる’。",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Rin sitting at a desk with a notebook and pen, wearing glasses.",
      imageCaption: "第 4.17 课：～ことができる (Formal Potential)"
    }
  },
  {
    id: 2,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "记录？好正式啊！‘Koto ga dekiru’ 是什么意思？和 ‘Reru/Rareru’ 不一样吗？",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko looking curiously at Rin's notebook.",
      imageCaption: "书面语 vs 口语"
    }
  },
  {
    id: 3,
    speaker: "凛 (Rin)",
    speakerColor: "zinc",
    text: "意思是一样的，都表示‘能做某事’。但 ‘～ことができる’ 语气更郑重，适合书面语。而且变形超级简单：辞书形 + ‘koto ga dekiru’。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "～ことができる 规则",
        content: ["动词辞书形 (基本形) + 'koto ga dekiru' (ことができる)", "含义：能做... / 可以做..."],
        examples: [
          { jp: "泳ぐ (Oyogu) → 泳ぐことができる", cn: "能游泳" },
          { jp: "使う (Tsukau) → 使うことができる", cn: "可以使用" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "凛 (Rin)",
    speakerColor: "zinc",
    text: "比如‘看’ (Miru)。口语是 ‘Mireru’，但书面记录要写 ‘Miru koto ga dekiru’。试试写这句：在这里‘能看到’富士山。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "見る",
          hiragana: "みる",
          romaji: "miru",
          english: "看",
          group: 2
        },
        correctAnswer: ["みることができる", "見ることができる"],
        explanation: "辞书形 Miru + koto ga dekiru。",
        placeholder: "输入..."
      }
    }
  },
  {
    id: 5,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "好长啊！但是感觉变聪明了！那如果说‘能预约’ (Yoyaku suru) 呢？",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "予約する",
          hiragana: "よやくする",
          romaji: "yoyaku suru",
          english: "预约",
          group: 3
        },
        correctAnswer: ["よやくすることができる", "予約することができる"],
        explanation: "Suru 也是直接加 koto ga dekiru。不用变成 dekiru！"
      }
    }
  },
  {
    id: 6,
    speaker: "凛 (Rin)",
    speakerColor: "zinc",
    text: "注意：如果是‘Yoyaku dekiru’ (口语/直接可能态)，‘suru’ 会消失。但在 ‘koto ga dekiru’ 句型里，‘suru’ 要保留。",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "Suru动词的区别",
        content: ["口语 (Pot.): 予約できる (Yoyaku dekiru)", "正式 (Formal): 予約することができる (Yoyaku suru koto ga dekiru)"],
        examples: [
          { jp: "運転する → 運転できる", cn: "(口语) 能开车" },
          { jp: "運転する → 運転することができる", cn: "(正式) 具备驾驶能力" }
        ]
      }
    }
  },
  {
    id: 7,
    speaker: "凛 (Rin)",
    speakerColor: "zinc",
    text: "再来一个。在这个露营场，‘可以使用’ (Tsukau) 免费WiFi。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "使う",
          hiragana: "つかう",
          romaji: "tsukau",
          english: "使用",
          group: 1
        },
        options: ["つかえることができる", "つかうことができる", "つかうができる", "つかうことできる"],
        correctAnswer: "つかうことができる",
        explanation: "Tsukau (辞书形) + koto ga dekiru。不要把动词本身变成可能态！"
      }
    }
  },
  {
    id: 8,
    speaker: "抚子 (Nadeshiko)",
    speakerColor: "pink",
    text: "我明白了！就是把动作变成名词 (koto)，然后说‘这个事情是可能的’ (ga dekiru)！",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Nadeshiko having a lightbulb moment.",
      imageCaption: "名词化原理"
    }
  },
  {
    id: 9,
    speaker: "凛 (Rin)",
    speakerColor: "zinc",
    text: "理解得很透彻。最后，我们在记录里写上：‘能度过’ (Suguosu) 愉快的时光。",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "過ごす",
          hiragana: "すごす",
          romaji: "sugosu",
          english: "度过 (时间)",
          group: 1
        },
        correctAnswer: ["すごすことができる", "過ごすことができる"],
        explanation: "Sugosu + koto ga dekiru。",
        placeholder: "输入..."
      }
    }
  },
  {
    id: 10,
    speaker: "凛 (Rin)",
    speakerColor: "zinc",
    text: "很好。这份记录很完美。下次露营也能 (Iku koto ga dekiru) 顺利进行了。",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];
