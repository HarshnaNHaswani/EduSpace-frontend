import { IdType } from "__types__/typeUtils/base.types";

export type QuizzesDataType = {
  _id: IdType;
  title: string;
  mcqs: {
    question: string;
    options: {
      text: string;
      isRight: boolean;
    }[];
    optionType?: "code" | "";
    multipleAnswers: boolean;
    marks: number;
  }[];
  quizCategory: IdType[];
  negativeMarks: number;
};
export type QuizzesStateType = {
  quizzes: [] | QuizzesDataType[];
  loadState: boolean;
  error: string;
};
export type QuizzesValueType =
  | {
      quizzesState: QuizzesStateType;
    }
  | undefined;
