import { createContext, useContext, useEffect, useReducer } from "react";
import { quizzesReducer } from "reducers/quiz/quizzesReducer";
import { getAllQuizzesService } from "services";
import { QuizzesValueType } from "__types__/context/quizzesContext.types";

import { ProviderParamType } from "__types__/typeUtils/base.types";

const initialState = {
  quizzes: [],
  loadState: false,
  error: ''
};

const QuizzesContext = createContext<QuizzesValueType>(undefined);

const QuizzesProvider = ({ children }: ProviderParamType) => {
  const [quizzesState, quizzesDispatch] = useReducer(quizzesReducer, initialState);
  useEffect(() => {
    (async () => {
      try {
        quizzesDispatch({ type: "SET_LOADING_TRUE" });
        const response = await getAllQuizzesService();
        if (response.status == 200) {
          quizzesDispatch({
            type: "SET_QUIZZES",
            payload: { quizzesData: response.data.quizzes },
          });
        }
        else {
          quizzesDispatch({type: 'SET_ERROR', payload:{error: `error: ${response.status} - ${response.statusText}`}})
        }
      } catch (error) {
        quizzesDispatch({type: 'SET_ERROR', payload:{error: `An error occurred` }})
        console.log(error);
      }
    })();
  }, []);
  return (
    <QuizzesContext.Provider value={{ quizzesState }}>
      {children}
    </QuizzesContext.Provider>
  );
};

const useQuizzes = () => {
  const context = useContext(QuizzesContext);
  if (context === undefined) {
    throw new Error("useQuizzes must be used within a QuizzesProvider");
  }
  return context;
};

export { QuizzesProvider, useQuizzes };
