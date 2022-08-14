import { initialState } from "context/user-context";
import {
  ErrorDisikes,
  LoadDisikes,
  UpdateDislikes,
} from "__types__/reducer/userReducerActions.types";
import { userReducer } from "./userReducer";
describe("dislikes state actions", () => {
  test("should set dislikes loading to true", () => {
    const action: LoadDisikes = {
      type: "LOAD_DISLIKES",
    };
    const actualState = userReducer(initialState, action);

    const expectedState = {
      ...initialState,
      user: {
        ...initialState.user,
        dislikesState: { ...initialState.user.dislikesState, loadState: true },
      },
    };
    expect(actualState).toEqual(expectedState);
  });
  test("should update dislikes data", () => {
    const action: UpdateDislikes = {
      type: "UPDATE_DISLIKES",
      payload: {
        dislikes: [
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
          dislikesState: {
            ...initialState.user.dislikesState,
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
        watchlaterState: {
          error: "",
          loadState: false,
          watchlater: [],
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
        dislikesState: {
          error: "",
          loadState: false,
          dislikes: [
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
  test("should set dislikes error", () => {
    const action: ErrorDisikes = {
      type: "ERROR_DISLIKES",
      payload: {
        error: "500: Internal Server Error",
      },
    };
    const actualState = userReducer(
      {
        ...initialState,
        user: {
          ...initialState.user,
          dislikesState: {
            ...initialState.user.dislikesState,
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
          error: "",
          loadState: false,
        },
        dislikesState: {
          dislikes: [],
          error: "500: Internal Server Error",
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
