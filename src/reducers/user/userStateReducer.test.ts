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
  test("should set user loading to true", () => {
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
  test("should set user data", () => {
    const action: SetUserType = {
      type: "SET_USER",
      payload: {
        userData: {
          _id: "abc123",
          username: "John",

          email: "JKeller@gmail.com",
          password: "Jkeller123",
          createdAt: "2022-06-12",
          updatedAt: "2022-06-24",
        },
        userLists: {
          playlistsData: [
            {
              _id: "1",
              name: "xyz",
              videos: [
                {
                  _id: "1",
                  title: "Design Basics",
                  description: "Web Tech Foundation",
                  creator: "Pexels",
                  createdAt: "2022-01-31",
                  likes: 5,
                  dislikes: 3,
                  views: {
                    lastSevenDays: 13,
                    lastMonth: 15,
                    lastSixMonths: 150,
                    total: 512,
                  },
                  category: ["1", "9"],
                  src: "https://res.cloudinary.com/harshna/video/upload/v1656740975/vidLib/Pexels_Videos_1580507_cn8ya6.mp4",
                  poster: "",
                  relatedQuizzes: ["2"],
                  comments: [
                    {
                      userId: "fykffh8rmijpo",
                      comment: "this was good",
                    },
                  ],
                },
              ],
            },
          ],
          watchlater: [],
          history: [
            {
              _id: "1",
              title: "Design Basics",
              description: "Web Tech Foundation",
              creator: "Pexels",
              createdAt: "2022-01-31",
              likes: 5,
              dislikes: 3,
              views: {
                lastSevenDays: 13,
                lastMonth: 15,
                lastSixMonths: 150,
                total: 512,
              },
              category: ["1", "9"],
              src: "https://res.cloudinary.com/harshna/video/upload/v1656740975/vidLib/Pexels_Videos_1580507_cn8ya6.mp4",
              poster: "",
              relatedQuizzes: ["2"],
              comments: [
                {
                  userId: "fykffh8rmijpo",
                  comment: "this was good",
                },
              ],
            },
          ],
          likes: [],
          dislikes: [],
        },
      },
    };
    const actualState = userReducer({ ...initialState, loading: true }, action);

    const expectedState = {
      user: {
        info: {
          _id: "abc123",
          username: "John",
          email: "JKeller@gmail.com",
          password: "Jkeller123",
          createdAt: "2022-06-12",
          updatedAt: "2022-06-24",
        },
        playlistsState: {
          error: "",
          loadState: false,
          playlists: [
            {
              error: "",
              loadState: false,
              data: {
                _id: "1",
                name: "xyz",
                videos: [
                  {
                    _id: "1",
                    title: "Design Basics",
                    description: "Web Tech Foundation",
                    creator: "Pexels",
                    createdAt: "2022-01-31",
                    likes: 5,
                    dislikes: 3,
                    views: {
                      lastSevenDays: 13,
                      lastMonth: 15,
                      lastSixMonths: 150,
                      total: 512,
                    },
                    category: ["1", "9"],
                    src: "https://res.cloudinary.com/harshna/video/upload/v1656740975/vidLib/Pexels_Videos_1580507_cn8ya6.mp4",
                    poster: "",
                    relatedQuizzes: ["2"],
                    comments: [
                      {
                        userId: "fykffh8rmijpo",
                        comment: "this was good",
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
        watchlaterState: {
          error: "",
          loadState: false,
          watchlater: [],
        },
        likesState: {
          error: "",
          loadState: false,
          likes: [],
        },
        dislikesState: {
          error: "",
          loadState: false,
          dislikes: [],
        },
        historyState: {
          error: "",
          loadState: false,
          history: [
            {
              _id: "1",
              title: "Design Basics",
              description: "Web Tech Foundation",
              creator: "Pexels",
              createdAt: "2022-01-31",
              likes: 5,
              dislikes: 3,
              views: {
                lastSevenDays: 13,
                lastMonth: 15,
                lastSixMonths: 150,
                total: 512,
              },
              category: ["1", "9"],
              src: "https://res.cloudinary.com/harshna/video/upload/v1656740975/vidLib/Pexels_Videos_1580507_cn8ya6.mp4",
              poster: "",
              relatedQuizzes: ["2"],
              comments: [
                {
                  userId: "fykffh8rmijpo",
                  comment: "this was good",
                },
              ],
            },
          ],
        },
      },
      error: ``,
      loading: false,
    };
    expect(actualState).toEqual(expectedState);
  });
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
        playlistsState: {
          playlists: [],
          error: "",
          loadState: false,
        },
        watchlaterState: {
          watchlater: [],
          error: "",
          loadState: false,
        },
        historyState: {
          history: [],
          error: "",
          loadState: false,
        },
        likesState: {
          likes: [],
          error: "",
          loadState: false,
        },
        dislikesState: {
          dislikes: [],
          error: "",
          loadState: false,
        },
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
        playlistsState: {
          playlists: [],
          error: "",
          loadState: false,
        },
        watchlaterState: {
          watchlater: [],
          error: "",
          loadState: false,
        },
        historyState: {
          history: [],
          error: "",
          loadState: false,
        },
        likesState: {
          likes: [],
          error: "",
          loadState: false,
        },
        dislikesState: {
          dislikes: [],
          error: "",
          loadState: false,
        },
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
        playlistsState: {
          playlists: [],
          error: "",
          loadState: false,
        },
        watchlaterState: {
          watchlater: [],
          error: "",
          loadState: false,
        },
        historyState: {
          history: [],
          error: "",
          loadState: false,
        },
        likesState: {
          likes: [],
          error: "",
          loadState: false,
        },
        dislikesState: {
          dislikes: [],
          error: "",
          loadState: false,
        },
      },
      error: ``,
      loading: false,
    };
    expect(actualState).toEqual(expectedState);
  });
});
