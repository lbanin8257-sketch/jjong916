import { Quiz, QuestionType } from './types';

// 중요: 이 URL을 실제 Google Apps Script 웹 앱 URL로 교체해야 합니다.
// Google Sheet 및 Apps Script 설정 방법은 문서를 참조하세요.
export const SPREADSHEET_URL = 'https://script.google.com/macros/s/AKfycbxMylEgpxrlDA4jB4HFfk0sDaT68iVuWem_jrWLXnzrR0pnC10Nms36HEbZU_RN0ZwWug/exec';

export const quizzes: Quiz[] = [
  {
    id: 'quiz1',
    title: 'Who is Better?',
    passage: `Tom and Jane are very good friends. They love to compare many things. Tom is taller than Jane. But Jane is faster than Tom. Tom has a dog named Max, and Jane has a cat named Lucy. Max is bigger than Lucy. Lucy is lighter than Max. Tom says, "Max is stronger than Lucy!" Jane replies, "That's not right! Lucy is smarter than Max!" They always have fun comparing them.`,
    questions: [
      {
        id: 1,
        type: QuestionType.MULTIPLE_CHOICE,
        text: '글의 내용과 일치하는 것을 고르세요. (객관식)',
        options: [
          'Jane is taller than Tom.',
          'Tom is faster than Jane.',
          'Max is smaller than Lucy.',
          'Lucy is lighter than Max.',
          'Tom thinks Lucy is smarter than Max.',
        ],
        answer: 'Lucy is lighter than Max.',
      },
      {
        id: 2,
        type: QuestionType.TRUE_FALSE,
        text: '글의 내용과 일치하면 T, 일치하지 않으면 F를 쓰세요: Tom has a cat.',
        answer: 'F',
      },
      {
        id: 3,
        type: QuestionType.TRUE_FALSE,
        text: '글의 내용과 일치하면 T, 일치하지 않으면 F를 쓰세요: Tom says, "Max is stronger than Lucy!"',
        answer: 'T',
      },
      {
        id: 4,
        type: QuestionType.FILL_IN_BLANK,
        text: '빈칸에 알맞은 단어를 글에서 찾아 쓰세요: Jane is ______ than Tom.',
        answer: 'faster',
      },
      {
        id: 5,
        type: QuestionType.SHORT_ANSWER_KO,
        text: '톰은 맥스가 루시보다 무엇이 더 낫다고 생각했나요? (서술형 - 우리말)',
        answer: ['힘이 더 세다', '힘이 세다', '더 강하다', 'stronger'],
      },
      {
        id: 6,
        type: QuestionType.SHORT_ANSWER_EN,
        text: 'Which animal is heavier, Max or Lucy? (서술형 - 영어)',
        answer: 'Max is heavier than Lucy.',
      },
    ],
  },
  {
    id: 'quiz2',
    title: 'Pets\' Day Out',
    passage: `Lily and Sam are friends. They have pets. Lily has a cat named Mimi. Sam has a dog named Toto. Toto is bigger than Mimi. Mimi is smaller than Toto. Toto likes to run fast. But Mimi is faster than Toto sometimes! Sam says, "My dog, Toto, is stronger than Mimi!" Lily replies, "That's not right! Mimi is smarter than Toto." They love to talk about their pets. They think their pets are the best!`,
    questions: [
      {
        id: 1,
        type: QuestionType.MULTIPLE_CHOICE,
        text: '글의 내용과 일치하는 것을 고르세요. (객관식)',
        options: [
          'Toto is smaller than Mimi.',
          'Mimi is heavier than Toto.',
          'Mimi is faster than Toto.',
          'Sam thinks Mimi is stronger than Toto.',
          'Lily thinks Toto is smarter than Mimi.',
        ],
        answer: 'Mimi is faster than Toto.',
      },
      {
        id: 2,
        type: QuestionType.TRUE_FALSE,
        text: '글의 내용과 일치하면 T, 일치하지 않으면 F를 쓰세요: Sam has a cat named Mimi.',
        answer: 'F',
      },
      {
        id: 3,
        type: QuestionType.TRUE_FALSE,
        text: '글의 내용과 일치하면 T, 일치하지 않으면 F를 쓰세요: Toto is bigger than Mimi.',
        answer: 'T',
      },
      {
        id: 4,
        type: QuestionType.FILL_IN_BLANK,
        text: '빈칸에 알맞은 단어를 글에서 찾아 쓰세요: Mimi is ______ than Toto.',
        answer: 'smaller',
      },
      {
        id: 5,
        type: QuestionType.SHORT_ANSWER_KO,
        text: '릴리는 미미가 토토보다 무엇이 더 낫다고 생각했나요? (서술형 - 우리말)',
        answer: ['더 똑똑하다', '똑똑하다', 'smarter'],
      },
      {
        id: 6,
        type: QuestionType.SHORT_ANSWER_EN,
        text: 'Which animal is stronger, Mimi or Toto? (서술형 - 영어)',
        answer: 'Toto is stronger than Mimi.',
      },
    ],
  },
  {
    id: 'quiz3',
    title: 'Mike and Emily\'s Things',
    passage: `Mike and Emily are good friends. They like to show their new things. Mike has a red bike. Emily has a blue bike. Mike's bike is bigger than Emily's bike. But Emily's bike is faster than Mike's bike. They also have art boxes for drawing. Emily's art box is heavier than Mike's art box. Mike says, "My art box is better than yours!" Emily replies, "That's not right! My art box is newer than yours." They enjoy comparing their things.`,
    questions: [
      {
        id: 1,
        type: QuestionType.MULTIPLE_CHOICE,
        text: '글의 내용과 일치하는 것을 고르세요. (객관식)',
        options: [
          'Emily\'s bike is bigger than Mike\'s bike.',
          'Mike\'s bike is faster than Emily\'s bike.',
          'Mike\'s art box is heavier than Emily\'s art box.',
          'Emily\'s bike is faster than Mike\'s bike.',
          'Emily thinks Mike\'s art box is better.',
        ],
        answer: 'Emily\'s bike is faster than Mike\'s bike.',
      },
      {
        id: 2,
        type: QuestionType.TRUE_FALSE,
        text: '글의 내용과 일치하면 T, 일치하지 않으면 F를 쓰세요: Mike\'s bike is blue.',
        answer: 'F',
      },
      {
        id: 3,
        type: QuestionType.TRUE_FALSE,
        text: '글의 내용과 일치하면 T, 일치하지 않으면 F를 쓰세요: Emily thinks her art box is newer.',
        answer: 'T',
      },
      {
        id: 4,
        type: QuestionType.FILL_IN_BLANK,
        text: '빈칸에 알맞은 단어를 글에서 찾아 쓰세요: Mike\'s bike is ______ than Emily\'s bike.',
        answer: 'bigger',
      },
      {
        id: 5,
        type: QuestionType.SHORT_ANSWER_KO,
        text: 'Mike는 자기 미술가방에 대해 뭐라고 말했나요? (서술형 - 우리말)',
        answer: ['더 낫다', 'better'],
      },
      {
        id: 6,
        type: QuestionType.SHORT_ANSWER_EN,
        text: 'Which art box is lighter, Mike\'s or Emily\'s? (서술형 - 영어)',
        answer: 'Mike\'s art box is lighter than Emily\'s.',
      },
    ],
  },
  {
    id: 'quiz4',
    title: 'Who is Faster?',
    passage: `Max is a dog. Squeaky is a squirrel. They live in the same park. Max loves to run. Squeaky loves to climb trees. Squeaky is faster than Max when climbing trees. But Max is faster than Squeaky on the ground. Squeaky says, "I am a better climber than you!" Max replies, "That's not right! I am a better runner!" They always have fun comparing their skills. They are good friends.`,
    questions: [
      {
        id: 1,
        type: QuestionType.MULTIPLE_CHOICE,
        text: '글의 내용과 일치하는 것을 고르세요. (객관식)',
        options: [
          'Max is faster than Squeaky when climbing trees.',
          'Squeaky is slower than Max when climbing trees.',
          'Max is faster than Squeaky on the ground.',
          'Squeaky thinks Max is a better climber.',
          'Max and Squeaky are not friends.',
        ],
        answer: 'Max is faster than Squeaky on the ground.',
      },
      {
        id: 2,
        type: QuestionType.TRUE_FALSE,
        text: '글의 내용과 일치하면 T, 일치하지 않으면 F를 쓰세요: Max likes to climb trees.',
        answer: 'F',
      },
      {
        id: 3,
        type: QuestionType.TRUE_FALSE,
        text: '글의 내용과 일치하면 T, 일치하지 않으면 F를 쓰세요: Squeaky thinks he is a better climber than Max.',
        answer: 'T',
      },
      {
        id: 4,
        type: QuestionType.FILL_IN_BLANK,
        text: '빈칸에 알맞은 단어를 글에서 찾아 쓰세요: Squeaky is ______ than Max when climbing trees.',
        answer: 'faster',
      },
      {
        id: 5,
        type: QuestionType.SHORT_ANSWER_KO,
        text: 'Max가 좋아하는 것은 무엇인가요? (서술형 - 우리말)',
        answer: ['달리기', '달리는 것', 'run'],
      },
      {
        id: 6,
        type: QuestionType.SHORT_ANSWER_EN,
        text: 'Which is a better climber, Max or Squeaky? (서술형 - 영어)',
        answer: 'Squeaky is a better climber than Max.',
      },
    ],
  },
  {
    id: 'quiz5',
    title: 'Which Car is Heavier?',
    passage: `Mr. Kim has a red sports car. Its name is Flash. Mr. Lee has a big yellow truck. Its name is Jumbo. Flash is very fast. But Jumbo is very strong. Jumbo is heavier than Flash. Flash is lighter than Jumbo. Mr. Kim says, "My car, Flash, is faster than your truck!" Mr. Lee replies, "That's not right! My truck is bigger than your car and it is heavier!" They love to compare their vehicles. They both think their vehicle is the best!`,
    questions: [
      {
        id: 1,
        type: QuestionType.MULTIPLE_CHOICE,
        text: '글의 내용과 일치하는 것을 고르세요. (객관식)',
        options: [
          'Flash is heavier than Jumbo.',
          'Jumbo is faster than Flash.',
          'Mr. Kim says his truck is bigger.',
          'Flash is lighter than Jumbo.',
          'Mr. Lee agrees that Flash is faster.',
        ],
        answer: 'Flash is lighter than Jumbo.',
      },
      {
        id: 2,
        type: QuestionType.TRUE_FALSE,
        text: '글의 내용과 일치하면 T, 일치하지 않으면 F를 쓰세요: Flash is very strong.',
        answer: 'F',
      },
      {
        id: 3,
        type: QuestionType.TRUE_FALSE,
        text: '글의 내용과 일치하면 T, 일치하지 않으면 F를 쓰세요: Mr. Lee thinks Jumbo is lighter than Flash.',
        answer: 'F',
      },
      {
        id: 4,
        type: QuestionType.FILL_IN_BLANK,
        text: '빈칸에 알맞은 단어를 글에서 찾아 쓰세요: Jumbo is ______ than Flash.',
        answer: ['heavier', 'bigger'],
      },
      {
        id: 5,
        type: QuestionType.SHORT_ANSWER_KO,
        text: 'Mr. Kim은 자기 차, Flash에 대해 뭐라고 말했나요? (서술형 - 우리말)',
        answer: ['더 빠르다', '빠르다', 'faster'],
      },
      {
        id: 6,
        type: QuestionType.SHORT_ANSWER_EN,
        text: 'Which vehicle is heavier, Flash or Jumbo? (서술형 - 영어)',
        answer: 'Jumbo is heavier than Flash.',
      },
    ],
  },
];
