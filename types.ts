
export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  FILL_IN_BLANK = 'FILL_IN_BLANK',
  SHORT_ANSWER_KO = 'SHORT_ANSWER_KO',
  SHORT_ANSWER_EN = 'SHORT_ANSWER_EN',
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: string[];
  answer: string | string[];
}

export interface Quiz {
  id: string;
  title: string;
  passage: string;
  questions: Question[];
}
