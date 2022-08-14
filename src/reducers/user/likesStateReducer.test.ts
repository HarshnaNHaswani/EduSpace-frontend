import { initialState } from "context/user-context";
import {
  ErrorLikes, LoadLikes, UpdateLikes
} from "__types__/reducer/userReducerActions.types";
import { userReducer } from "./userReducer";
describe("likes state actions", () => {
  test("should set likes loading to true", () => {
    const action: LoadLikes = {
      type: "LOAD_LIKES",
    };
    const actualState = userReducer(initialState, action);

    const expectedState = {
      ...initialState,
      user: {
        ...initialState.user,
        likesState: { ...initialState.user.likesState, loadState: true },
      },
    };
    expect(actualState).toEqual(expectedState);
  });
  test("should update likes data", () => {
    const action: UpdateLikes = {
      type: "UPDATE_LIKES",
      payload: {
        likes: [
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
          likesState: { ...initialState.user.likesState, loadState: true },
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
        dislikesState: {
          error: "",
          loadState: false,
          dislikes: [],
        },
        likesState: {
          error: "",
          loadState: false,
          likes: [
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
  test("should set likes error", () => {
    const action: ErrorLikes = {
      type: "ERROR_LIKES",
      payload: {
        error: "500: Internal Server Error",
      },
    };
    const actualState = userReducer(
      {
        ...initialState,
        user: {
          ...initialState.user,
          likesState: { ...initialState.user.likesState, loadState: true },
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
        likesState: {
          likes: [],
          error: "500: Internal Server Error",
          loadState: false,
        },
        historyState: {
          history: [],
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
