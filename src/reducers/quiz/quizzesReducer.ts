import { QuizzesStateType } from "__types__/context/quizzesContext.types";
import { QuizzesActionType } from "__types__/reducer/quizzesReducerActions.types";

export const quizzesReducer = (state:QuizzesStateType, action:QuizzesActionType):QuizzesStateType => {
  switch (action.type) {
    case "SET_QUIZZES": {
      return {
        ...state,
        error: '',
        loadState: false,
        quizzes: action.payload.quizzesData,
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        loadState: false,
        error: action.payload.error,
      }
    }
    case "SET_LOADING_TRUE": {
      return {
        ...state,
        loadState: true,
      };
    }
    default:
      return state;
  }
}