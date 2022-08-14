import { initialState } from "context/user-context";
import {
  ErrorHistory,
  LoadHistory, UpdateHistory
} from "__types__/reducer/userReducerActions.types";
import { userReducer } from "./userReducer";
describe("history state actions", () => {
  test("should set history loading to true", () => {
    const action: LoadHistory = {
      type: "LOAD_HISTORY",
    };
    const actualState = userReducer(initialState, action);

    const expectedState = {
      ...initialState,
      user: {
        ...initialState.user,
        historyState: { ...initialState.user.historyState, loadState: true },
      },
    };
    expect(actualState).toEqual(expectedState);
  });
  test("should update history data", () => {
    const action: UpdateHistory = {
      type: "UPDATE_HISTORY",
      payload: {
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
    };
    const actualState = userReducer(
      {
        ...initialState,
        user: {
          ...initialState.user,
          historyState: { ...initialState.user.historyState, loadState: true },
        },
      },
      action
    );

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
          error: "",
          loadState: false,
          playlists: [],
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
  test("should set history error", () => {
    const action: ErrorHistory = {
      type: "ERROR_HISTORY",
      payload: {
        error: "500: Internal Server Error",
      },
    };
    const actualState = userReducer(
      {
        ...initialState,
        user: {
          ...initialState.user,
          historyState: { ...initialState.user.historyState, loadState: true },
        },
      },
      action
    );

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
          error: "500: Internal Server Error",
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
