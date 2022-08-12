import { v4 as uuid } from "uuid";

export const quizzes = [
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
  {
    _id: "3",
    title: "ReactJS 1",
    mcqs: [
      {
        question: "For controlled components in react",
        options: [
          {
            text: "Source of truth is DOM",
            isRight: false,
          },
          {
            text: "Source of truth can be anything",
            isRight: false,
          },
          {
            text: "Source of truth is component state",
            isRight: true,
          },
        ],
        multipleAnswers: false,
        marks: 1,
      },
      {
        question: "Component importing React from 'react' is",
        options: [
          {
            text: "stateless",
            isRight: true,
          },
          {
            text: "stateful",
            isRight: false,
          },
          {
            text: "pure",
            isRight: false,
          },
        ],
        multipleAnswers: false,
        marks: 1,
      },
      {
        question:
          "Which of the following is used to pass data to a component from outside",
        options: [
          {
            text: "props",
            isRight: true,
          },
          {
            text: "cotext",
            isRight: true,
          },
          {
            text: "state",
            isRight: false,
          },
        ],
        multipleAnswers: true,
        marks: 1,
      },
      {
        question: "What is state in React",
        options: [
          {
            text: "A persistant storage",
            isRight: false,
          },
          {
            text: "An internal data store of a component",
            isRight: true,
          },
        ],
        multipleAnswers: false,
        marks: 1,
      },
      {
        question:
          "Which of the following is the correct data flow sequence of flux concept",
        options: [
          {
            text: "Action > Dispatcher > View > Store",
            isRight: false,
          },
          {
            text: "Action > Dispatcher > Store > View",
            isRight: true,
          },
          {
            text: "Action > Store > Dispatcher > View",
            isRight: false,
          },
        ],
        multipleAnswers: false,
        marks: 1,
      },
    ],
    quizCategory: ["1", "9"],
    negativeMarks: 0,
  },
];
