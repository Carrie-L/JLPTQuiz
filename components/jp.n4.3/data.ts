import { ScriptStep, ViewType, LabMode } from './types';

export const scriptData: ScriptStep[] = [
  {
    id: 1,
    speaker: "Yuki Sensei",
    speakerColor: "teal",
    text: "Konnichiwa, Ken-san! Today we're diving into the 'Nai-form' (ない形). It's the casual, plain way to say 'no' or 'not doing' something.",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "A friendly anime teacher standing in front of a chalkboard with Hiragana characters.",
      imageCaption: "Lesson 4.3: The Nai Form"
    }
  },
  {
    id: 2,
    speaker: "Ken",
    speakerColor: "orange",
    text: "Casual negative? So instead of saying 'Tabemasen' (I won't eat), I can use this form?",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "A student looking curious holding a bento box.",
      imageCaption: "Polite vs. Casual"
    }
  },
  {
    id: 3,
    speaker: "Yuki Sensei",
    speakerColor: "teal",
    text: "Exactly! 'Tabemasen' becomes 'Tabenai'. It's essential for casual conversation and many grammar structures. Let's start with Group 2 (Ru-verbs) because they are the easiest.",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "Group 2 (Ru-verbs) Rule",
        content: ["Drop the 'ru' (る)", "Add 'nai' (ない)"],
        examples: [
          { jp: "食べる (Taberu) → 食べない (Tabenai)", en: "Eat → Not eat" },
          { jp: "見る (Miru) → 見ない (Minai)", en: "See → Not see" }
        ]
      }
    }
  },
  {
    id: 4,
    speaker: "Yuki Sensei",
    speakerColor: "teal",
    text: "Give it a try, Ken. Transform 'Neru' (To sleep) into the Nai-form.",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "寝る",
          hiragana: "ねる",
          romaji: "neru",
          english: "To sleep",
          group: 2
        },
        correctAnswer: "ねない",
        explanation: "Drop 'ru' and add 'nai'. Simple!"
      }
    }
  },
  {
    id: 5,
    speaker: "Ken",
    speakerColor: "orange",
    text: "That was easy! Just chop off the tail. What about the Irregular verbs (Group 3)?",
    viewType: ViewType.IMAGE,
    viewContent: {
      imagePrompt: "Ken looking confident.",
      imageCaption: "Group 2 is mastered!"
    }
  },
  {
    id: 6,
    speaker: "Yuki Sensei",
    speakerColor: "teal",
    text: "There are only two irregular verbs. You just have to memorize them. 'Suru' becomes 'Shinai', and 'Kuru' becomes 'Konai'.",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "Group 3 (Irregular) Rule",
        content: ["Change the entire stem."],
        examples: [
          { jp: "する (Suru) → しない (Shinai)", en: "Do → Not do" },
          { jp: "くる (Kuru) → こない (Konai)", en: "Come → Not come" }
        ]
      }
    }
  },
  {
    id: 7,
    speaker: "Yuki Sensei",
    speakerColor: "teal",
    text: "Be careful with 'Kuru'. Even though it's spelled with the kanji 来 (ku), the reading changes to 'Ko' in the negative form.",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.QUIZ_MCQ,
        targetVerb: {
          kanji: "来る",
          hiragana: "くる",
          romaji: "kuru",
          english: "To come",
          group: 3
        },
        options: ["きない (Kinai)", "くない (Kunai)", "こない (Konai)", "けない (Kenai)"],
        correctAnswer: "こない (Konai)",
        explanation: "Kuru is irregular! It becomes Konai."
      }
    }
  },
  {
    id: 8,
    speaker: "Yuki Sensei",
    speakerColor: "teal",
    text: "Now for the tricky ones: Group 1 (U-verbs). For these, we shift the final 'u' vowel sound to an 'a' vowel sound, then add 'nai'.",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "Group 1 (U-verbs) Rule",
        content: ["Change 'u' sound to 'a' sound", "Add 'nai'"],
        examples: [
          { jp: "いく (Iku) → いかない (Ikanai)", en: "Go → Not go" },
          { jp: "よむ (Yomu) → よまない (Yomanai)", en: "Read → Not read" }
        ]
      }
    }
  },
  {
    id: 9,
    speaker: "Yuki Sensei",
    speakerColor: "teal",
    text: "Let's try 'Nomu' (To drink). 'Mu' becomes 'Ma'. So...",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.TYPING,
        targetVerb: {
          kanji: "飲む",
          hiragana: "のむ",
          romaji: "nomu",
          english: "To drink",
          group: 1
        },
        correctAnswer: "のまない",
        explanation: "Mu (む) shifts to Ma (ま) + nai.",
        placeholder: "Type in Hiragana..."
      }
    }
  },
  {
    id: 10,
    speaker: "Yuki Sensei",
    speakerColor: "teal",
    text: "One very important exception for Group 1! If the verb ends in a lone 'u' (う) character, like 'Kau' (To buy), it changes to 'Wa' (わ), not 'A'.",
    viewType: ViewType.GRAMMAR_EXPLAIN,
    viewContent: {
      grammarRule: {
        title: "Group 1 Exception: Ending in 'u'",
        content: ["Verbs ending in 'u' (う) change to 'wa' (わ)", "NOT 'a' (あ)"],
        examples: [
          { jp: "買う (Kau) → 買わない (Kawanai)", en: "Buy → Not buy" },
          { jp: "会う (Au) → 会わない (Awanai)", en: "Meet → Not meet" }
        ]
      }
    }
  },
  {
    id: 11,
    speaker: "Ken",
    speakerColor: "orange",
    text: "Got it. So 'Kau' is 'Kawanai'. Let me prove I understand!",
    viewType: ViewType.INTERACTIVE_LAB,
    viewContent: {
      interactiveConfig: {
        mode: LabMode.CONJUGATION,
        targetVerb: {
          kanji: "会う",
          hiragana: "あう",
          romaji: "au",
          english: "To meet",
          group: 1
        },
        correctAnswer: "あわない",
        explanation: "Since it ends in 'u', it becomes 'wa' + nai."
      }
    }
  },
  {
    id: 12,
    speaker: "Yuki Sensei",
    speakerColor: "teal",
    text: "Excellent work, Ken! You've mastered the basics of the Nai-form. Keep practicing these shifts!",
    viewType: ViewType.VICTORY,
    viewContent: {}
  }
];