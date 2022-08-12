import { QuizzesStateType } from "__types__/context/quizzesContext.types";
import {
  SetErrorType,
  SetLoadingTrueType,
  SetQuizzesType,
} from "__types__/reducer/quizzesReducerActions.types";
import { quizzesReducer } from "./quizzesReducer";

describe("test all quizzes reducer", () => {
  const initialState: QuizzesStateType = {
    quizzes: [],
    loadState: false,
    error: "",
  };
  test("should set loading true", () => {
    const action: SetLoadingTrueType = {
      type: "SET_LOADING_TRUE",
    };
    const expectedState = {
      quizzes: [],
      loadState: true,
      error: '',
    };
    expect(quizzesReducer(initialState, action)).toEqual(expectedState);
  });
  test("should set error", () => {
    const action: SetErrorType = {
      type: "SET_ERROR",
      payload: {
        error: "This is an error",
      },
    };
    const expectedState = {
      quizzes: [],
      loadState: false,
      error: "This is an error",
    };
    expect(quizzesReducer(initialState, action)).toEqual(expectedState);
  });
  test("should set all quizzes data", () => {
    const action: SetQuizzesType = {
      type: "SET_QUIZZES",
      payload: {
        quizzesData: [
          {
            _id: "1",
            title: "ES6 Basics",
            mcqs: [
              {
                question: "New way to write functions in ES6",
                options: [
                  {
                    text: "LET LOGNAME = (NAME) => CONSOLE.LOG(NAME);",
                    isRight: false,
                  },
                  {
                    text: "CONST LOGNAME = NAME => CONSOLE.LOG(NAME);",
                    isRight: true,
                  },
                  {
                    text: "FUNCTION LOGNAME(NAME) {CONSOLE.LOG(NAME);}",
                    isRight: false,
                  },
                ],
                optionType: "code",
                multipleAnswers: false,
                marks: 3,
              },
              {
                question: "How to destructure the array 'ARRAY = [14, 67]'",
                options: [
                  {
                    text: "CONST [NUM1, NUM2] = ARRAY;",
                    isRight: true,
                  },
                  {
                    text: "CONST NUM1, NUM2 = ARRAY;",
                    isRight: false,
                  },
                ],
                optionType: "code",
                multipleAnswers: false,
                marks: 1,
              },
              {
                question: "Return obj from an arrow function",
                options: [
                  {
                    text: 
                    "CONST GETOBJ = () => {NAME:'HARSHNA'};",
                    isRight: false,
                  },
                  {
                    text: 
                    "CONST GETOBJ = () => ({NAME:'HARSHNA'});",
                    isRight: true,
                  },
                ],
                optionType: "code",
                multipleAnswers: false,
                marks: 1,
              },
            ],
            quizCategory: ["1", "9"],
            negativeMarks: 0,
          },
          {
            _id: "2",
            title: "CSS Fundamentals",
            mcqs: [
              {
                question: "Which is not a relative unit",
                options: [
                  {
                    text: "em",
                    isRight: false,
                  },
                  {
                    text: "rem",
                    isRight: false,
                  },
                  {
                    text: "ex",
                    isRight: false,
                  },
                  {
                    text: "vmin",
                    isRight: false,
                  },
                  {
                    text: "hmax",
                    isRight: true,
                  },
                ],
                multipleAnswers: false,
                marks: 1,
              },
              {
                question: "Structure of Box Model from Out-to-In",
                options: [
                  {
                    text: "margin > padding > border > content",
                    isRight: false,
                  },
                  {
                    text: "content > padding > border > margin",
                    isRight: false,
                  },
                  {
                    text: "margin > border > padding > content",
                    isRight: true,
                  },
                  {
                    text: "content > border > padding > margin",
                    isRight: false,
                  },
                ],
                multipleAnswers: false,
                marks: 2,
              },
              {
                question: "Which of the following is not a flex child property",
                options: [
                  {
                    text: "order",
                    isRight: false,
                  },
                  {
                    text: "flex",
                    isRight: false,
                  },
                  {
                    text: "flex-flow",
                    isRight: true,
                  },
                ],
                multipleAnswers: false,
                marks: 1,
              },
            ],
            quizCategory: ["1", "9"],
            negativeMarks: 1,
          },
        ],
      },
    };
    const expectedState = {
      quizzes: [
        {
          _id: "1",
          title: "ES6 Basics",
          mcqs: [
            {
              question: "New way to write functions in ES6",
              options: [
                {
                  text: "LET LOGNAME = (NAME) => CONSOLE.LOG(NAME);",
                  isRight: false,
                },
                {
                  text: "CONST LOGNAME = NAME => CONSOLE.LOG(NAME);",
                  isRight: true,
                },
                {
                  text: "FUNCTION LOGNAME(NAME) {CONSOLE.LOG(NAME);}",
                  isRight: false,
                },
              ],
              optionType: "code",
              multipleAnswers: false,
              marks: 3,
            },
            {
              question: "How to destructure the array 'ARRAY = [14, 67]'",
              options: [
                {
                  text: "CONST [NUM1, NUM2] = ARRAY;",
                  isRight: true,
                },
                {
                  text: "CONST NUM1, NUM2 = ARRAY;",
                  isRight: false,
                },
              ],
              optionType: "code",
              multipleAnswers: false,
              marks: 1,
            },
            {
              question: "Return obj from an arrow function",
              options: [
                {
                  text: 
                  "CONST GETOBJ = () => {NAME:'HARSHNA'};",
                  isRight: false,
                },
                {
                  text: 
                  "CONST GETOBJ = () => ({NAME:'HARSHNA'});",
                  isRight: true,
                },
              ],
              optionType: "code",
              multipleAnswers: false,
              marks: 1,
            },
          ],
          quizCategory: ["1", "9"],
          negativeMarks: 0,
        },
        {
          _id: "2",
          title: "CSS Fundamentals",
          mcqs: [
            {
              question: "Which is not a relative unit",
              options: [
                {
                  text: "em",
                  isRight: false,
                },
                {
                  text: "rem",
                  isRight: false,
                },
                {
                  text: "ex",
                  isRight: false,
                },
                {
                  text: "vmin",
                  isRight: false,
                },
                {
                  text: "hmax",
                  isRight: true,
                },
              ],
              multipleAnswers: false,
              marks: 1,
            },
            {
              question: "Structure of Box Model from Out-to-In",
              options: [
                {
                  text: "margin > padding > border > content",
                  isRight: false,
                },
                {
                  text: "content > padding > border > margin",
                  isRight: false,
                },
                {
                  text: "margin > border > padding > content",
                  isRight: true,
                },
                {
                  text: "content > border > padding > margin",
                  isRight: false,
                },
              ],
              multipleAnswers: false,
              marks: 2,
            },
            {
              question: "Which of the following is not a flex child property",
              options: [
                {
                  text: "order",
                  isRight: false,
                },
                {
                  text: "flex",
                  isRight: false,
                },
                {
                  text: "flex-flow",
                  isRight: true,
                },
              ],
              multipleAnswers: false,
              marks: 1,
            },
          ],
          quizCategory: ["1", "9"],
          negativeMarks: 1,
        },
      ],
      loadState: false,
      error: '',
    };
    expect(quizzesReducer(initialState, action)).toEqual(expectedState);
  });
});
