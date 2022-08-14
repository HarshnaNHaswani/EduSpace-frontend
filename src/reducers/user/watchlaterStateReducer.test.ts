import { initialState } from "context/user-context";
import {
  ErrorWatchlater,
  LoadWatchlater,
  UpdateWatchlater,
} from "__types__/reducer/userReducerActions.types";
import { userReducer } from "./userReducer";
describe("watchlater state actions", () => {
  test("should set watchlater loading to true", () => {
    const action: LoadWatchlater = {
      type: "LOAD_WATCHLATER",
    };
    const actualState = userReducer(initialState, action);

    const expectedState = {
      ...initialState,
      user: {
        ...initialState.user,
        watchlaterState: {
          ...initialState.user.watchlaterState,
          loadState: true,
        },
      },
    };
    expect(actualState).toEqual(expectedState);
  });
  test("should update watchlater data", () => {
    const action: UpdateWatchlater = {
      type: "UPDATE_WATCHLATER",
      payload: {
        watchlater: [
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
          watchlaterState: {
            ...initialState.user.watchlaterState,
            loadState: true,
          },
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
        dislikesState: {
          error: "",
          loadState: false,
          dislikes: [],
        },
        historyState: {
          error: "",
          loadState: false,
          history: [],
        },
        likesState: {
          error: "",
          loadState: false,
          likes: [],
        },
        watchlaterState: {
          error: "",
          loadState: false,
          watchlater: [
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
  test("should set watchlater error", () => {
    const action: ErrorWatchlater = {
      type: "ERROR_WATCHLATER",
      payload: {
        error: "500: Internal Server Error",
      },
    };
    const actualState = userReducer(
      {
        ...initialState,
        user: {
          ...initialState.user,
          watchlaterState: {
            ...initialState.user.watchlaterState,
            loadState: true,
          },
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
          error: "500: Internal Server Error",
          loadState: false,
        },
        dislikesState: {
          dislikes: [],
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
      },
      error: ``,
      loading: false,
    };
    expect(actualState).toEqual(expectedState);
  });
});
