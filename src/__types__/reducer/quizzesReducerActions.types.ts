import { QuizzesDataType } from "__types__/context/quizzesContext.types";

export type SetQuizzesType = {
  type: "SET_QUIZZES";
  payload: {
    quizzesData: QuizzesDataType[];
  };
};
export type SetErrorType = {
  type: "SET_ERROR";
  payload: {
    error: string;
  };
};
export type SetLoadingTrueType = {
  type: "SET_LOADING_TRUE";
};

export type QuizzesActionType = SetQuizzesType | SetErrorType | SetLoadingTrueType