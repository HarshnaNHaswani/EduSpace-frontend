import { initialState } from "context/user-context";
import {
  ChangePasswordType,
  ResetUserDataType,
  SetErrorType,
  SetLoadingTrueType,
  SetUserType,
} from "__types__/reducer/userReducerActions.types";
import { userReducer } from "./userReducer";
describe("user state actions", () => {
  test("should set loading to true", () => {
    const action: SetLoadingTrueType = {
      type: "SET_LOADING_TRUE",
    };
    const actualState = userReducer(initialState, action);

    const expectedState = {
      ...initialState,
      loading: true,
    };
    expect(actualState).toEqual(expectedState);
  });
  // test("should set user data", () => {
  //   const action: SetUserType = {
  //     type: "SET_USER",
  //     payload: {
  //       userData: {
  //         _id: "abc123",
  //         username: "John",

  //         email: "JKeller@gmail.com",
  //         password: "Jkeller123",
  //         createdAt: "2022-06-12",
  //         updatedAt: "2022-06-24",
  //       },
  //       userLists: {
  //         playlists: [
  //           {
  //             _id: '1',
  //             name: "xyz",
  //             videos: [
  //               {
  //                 _id: "1",
  //                 title: "Design Basics",
  //                 description: "Web Tech Foundation",
  //                 creator: "Pexels",
  //                 createdAt: "2022-01-31",
  //                 likes: 5,
  //                 dislikes: 3,
  //                 views: {
  //                   lastSevenDays: 13,
  //                   lastMonth: 15,
  //                   lastSixMonths: 150,
  //                   total: 512,
  //                 },
  //                 category: ["1", "9"],
  //                 src: "https://res.cloudinary.com/harshna/video/upload/v1656740975/vidLib/Pexels_Videos_1580507_cn8ya6.mp4",
  //                 poster: "",
  //                 relatedQuizzes: ["2"],
  //                 comments: [
  //                   {
  //                     userId: "fykffh8rmijpo",
  //                     comment: "this was good",
  //                   },
  //                 ],
  //               },
  //             ],
  //           },
  //         ],
  //         watchlater: [],
  //         history: [
  //           {
  //             _id: "1",
  //             title: "Design Basics",
  //             description: "Web Tech Foundation",
  //             creator: "Pexels",
  //             createdAt: "2022-01-31",
  //             likes: 5,
  //             dislikes: 3,
  //             views: {
  //               lastSevenDays: 13,
  //               lastMonth: 15,
  //               lastSixMonths: 150,
  //               total: 512,
  //             },
  //             category: ["1", "9"],
  //             src: "https://res.cloudinary.com/harshna/video/upload/v1656740975/vidLib/Pexels_Videos_1580507_cn8ya6.mp4",
  //             poster: "",
  //             relatedQuizzes: ["2"],
  //             comments: [
  //               {
  //                 userId: "fykffh8rmijpo",
  //                 comment: "this was good",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     },
  //   };
  //   const actualState = userReducer({ ...initialState, loading: true }, action);

  //   const expectedState = {
  //     user: {
  //       info: {
  //         _id: "abc123",
  //         username: "John",
  //         email: "JKeller@gmail.com",
  //         password: "Jkeller123",
  //         createdAt: "2022-06-12",
  //         updatedAt: "2022-06-24",
  //       },
  //       playlistsState: {
  //         error: "",
  //         loadState: false,
  //         playlists: [
  //           {
  //             name: "xyz",
  //             videos: [
  //               {
  //                 _id: "1",
  //                 title: "Design Basics",
  //                 description: "Web Tech Foundation",
  //                 creator: "Pexels",
  //                 createdAt: "2022-01-31",
  //                 likes: 5,
  //                 dislikes: 3,
  //                 views: {
  //                   lastSevenDays: 13,
  //                   lastMonth: 15,
  //                   lastSixMonths: 150,
  //                   total: 512,
  //                 },
  //                 category: ["1", "9"],
  //                 src: "https://res.cloudinary.com/harshna/video/upload/v1656740975/vidLib/Pexels_Videos_1580507_cn8ya6.mp4",
  //                 poster: "",
  //                 relatedQuizzes: ["2"],
  //                 comments: [
  //                   {
  //                     userId: "fykffh8rmijpo",
  //                     comment: "this was good",
  //                   },
  //                 ],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       watchlaterState: {
  //         error: "",
  //         loadState: false,
  //         watchlater: [],
  //       },
  //       historyState: {
  //         error: "",
  //         loadState: false,
  //         history: [
  //           {
  //             _id: "1",
  //             title: "Design Basics",
  //             description: "Web Tech Foundation",
  //             creator: "Pexels",
  //             createdAt: "2022-01-31",
  //             likes: 5,
  //             dislikes: 3,
  //             views: {
  //               lastSevenDays: 13,
  //               lastMonth: 15,
  //               lastSixMonths: 150,
  //               total: 512,
  //             },
  //             category: ["1", "9"],
  //             src: "https://res.cloudinary.com/harshna/video/upload/v1656740975/vidLib/Pexels_Videos_1580507_cn8ya6.mp4",
  //             poster: "",
  //             relatedQuizzes: ["2"],
  //             comments: [
  //               {
  //                 userId: "fykffh8rmijpo",
  //                 comment: "this was good",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     },
  //     error: ``,
  //     loading: false,
  //   };
  //   expect(actualState).toEqual(expectedState);
  // });
  test("should change user password", () => {
    const action: ChangePasswordType = {
      type: "CHANGE_PASSWORD",
      payload: {
        newPassword: "myNewPass",
        updatedAt: "2022-06-30",
      },
    };

    const actualState = userReducer({ ...initialState, loading: true }, action);

    const expectedState = {
      user: {
        info: {
          _id: "",
          username: "",
          email: "",
          password: "myNewPass",
          createdAt: "",
          updatedAt: "2022-06-30",
        },
        playlists: [],
        watchlater: [],
        history: [],
      },
      error: ``,
      loading: false,
    };
    expect(actualState).toEqual(expectedState);
  });
  test("should set user error", () => {
    const action: SetErrorType = {
      type: "SET_ERROR",
      payload: {
        error: "500: Internal Server Error",
      },
    };

    const actualState = userReducer({ ...initialState, loading: true }, action);

    const expectedState = {
      user: {
        info: {
          _id: "",
          username: "",
          email: "",
          password: "",
          createdAt: "",
          updatedAt: "",
        },
        playlists: [],
        watchlater: [],
        history: [],
      },
      error: `500: Internal Server Error`,
      loading: false,
    };
    expect(actualState).toEqual(expectedState);
  });
  test("should reset user data", () => {
    const action: ResetUserDataType = {
      type: "RESET_USER_DATA",
    };

    const actualState = userReducer({ ...initialState, loading: true }, action);

    const expectedState = {
      user: {
        info: {
          _id: "",
          username: "",
          email: "",
          password: "",
          createdAt: "",
          updatedAt: "",
        },
        playlists: [],
        watchlater: [],
        history: [],
      },
      error: `500: Internal Server Error`,
      loading: false,
    };
    expect(actualState).toEqual(expectedState);
  });
});
