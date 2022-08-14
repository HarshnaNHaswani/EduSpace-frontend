import { initialState } from "context/user-context";
import {
  ErrorPlaylist,
  ErrorPlaylists,
  LoadPlaylist,
  LoadPlaylists,
  UpdatePlaylist,
  UpdatePlaylists,
} from "__types__/reducer/userReducerActions.types";
import { userReducer } from "./userReducer";
describe("playlists state actions", () => {
  test("should set playlists loading to true", () => {
    const action: LoadPlaylists = {
      type: "LOAD_PLAYLISTS",
    };
    const actualState = userReducer(initialState, action);

    const expectedState = {
      ...initialState,
      user: {
        ...initialState.user,
        playlistsState: {
          ...initialState.user.playlistsState,
          loadState: true,
        },
      },
    };
    expect(actualState).toEqual(expectedState);
  });
  test("should update playlists data", () => {
    const action: UpdatePlaylists = {
      type: "UPDATE_PLAYLISTS",
      payload: {
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
      },
    };
    const actualState = userReducer(
      {
        ...initialState,
        user: {
          ...initialState.user,
          playlistsState: {
            ...initialState.user.playlistsState,
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
        dislikesState: {
          error: "",
          loadState: false,
          dislikes: [],
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
        playlistsState: {
          error: "",
          loadState: false,
          playlists: [
            {
              loadState: false,
              error: "",
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
      },
      error: ``,
      loading: false,
    };
    expect(actualState).toEqual(expectedState);
  });
  test("should set playlists error", () => {
    const action: ErrorPlaylists = {
      type: "ERROR_PLAYLISTS",
      payload: {
        error: "500: Internal Server Error",
      },
    };
    const actualState = userReducer(
      {
        ...initialState,
        user: {
          ...initialState.user,
          playlistsState: {
            ...initialState.user.playlistsState,
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
        dislikesState: {
          dislikes: [],
          error: "",
          loadState: false,
        },
        watchlaterState: {
          watchlater: [],
          error: "",
          loadState: false,
        },
        playlistsState: {
          playlists: [],
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

  test("should set playlist loading to true", () => {
    const action: LoadPlaylist = {
      type: "LOAD_PLAYLIST",
      payload: {
        id: "1",
      },
    };
    const actualState = userReducer(
      {
        ...initialState,
        user: {
          ...initialState.user,
          playlistsState: {
            ...initialState.user.playlistsState,
            playlists: [
              {
                data: { _id: "1", name: "xy", videos: [] },
                error: "",
                loadState: false,
              },
            ],
          },
        },
      },
      action
    );

    const expectedState = {
      ...initialState,
      user: {
        ...initialState.user,
        playlistsState: {
          ...initialState.user.playlistsState,
          playlists: [
            {
              data: { _id: "1", name: "xy", videos: [] },
              error: "",
              loadState: true,
            },
          ],
        },
      },
    };
    expect(actualState).toEqual(expectedState);
  });
  test("should update playlist data", () => {
    const action: UpdatePlaylist = {
      type: "UPDATE_PLAYLIST",
      payload: {
        playlistData: {
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
    };
    const actualState = userReducer(
      {
        ...initialState,
        user: {
          ...initialState.user,
          playlistsState: {
            ...initialState.user.playlistsState,
            playlists: [
              {
                data: { _id: "1", name: "xy", videos: [] },
                error: "",
                loadState: true,
              },
            ],
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
        dislikesState: {
          error: "",
          loadState: false,
          dislikes: [],
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
        playlistsState: {
          error: "",
          loadState: false,
          playlists: [
            {
              loadState: false,
              error: "",
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
      },
      error: ``,
      loading: false,
    };
    expect(actualState).toEqual(expectedState);
  });
  test("should set playlists error", () => {
    const action: ErrorPlaylist = {
      type: "ERROR_PLAYLIST",
      payload: {
        id: "1",
        error: "500: Internal Server Error",
      },
    };
    const actualState = userReducer(
      {
        ...initialState,
        user: {
          ...initialState.user,
          playlistsState: {
            ...initialState.user.playlistsState,
            playlists: [
              {
                data: { _id: "1", name: "xy", videos: [] },
                error: "",
                loadState: true,
              },
            ],
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
        dislikesState: {
          dislikes: [],
          error: "",
          loadState: false,
        },
        watchlaterState: {
          watchlater: [],
          error: "",
          loadState: false,
        },
        playlistsState: {
          playlists: [
            {
              data: {
                _id: "1",
                name: "xy",
                videos: [],
              },
              error: "500: Internal Server Error",
              loadState: false,
            },
          ],
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
