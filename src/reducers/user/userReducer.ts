import { UserStateType } from "__types__/context/userContext.types";
import { UserActionType } from "__types__/reducer/userReducerActions.types";

export const userReducer = (
  state: UserStateType,
  action: UserActionType
): UserStateType => {
  switch (action.type) {
    case "SET_USER": {
      const { watchlater, playlistsData, history, likes, dislikes } =
        action.payload.userLists;
      return {
        ...state,
        user: {
          ...state.user,
          info: {
            ...action.payload.userData,
          },
          playlistsState: {
            ...state.user.playlistsState,
            playlists: playlistsData.map((playlistData) => ({
              data: { ...playlistData },
              error: "",
              loadState: false,
            })),
          },
          watchlaterState: {
            ...state.user.watchlaterState,
            watchlater,
          },
          historyState: {
            ...state.user.historyState,
            history,
          },
          likesState: {
            ...state.user.likesState,
            likes,
          },
          dislikesState: {
            ...state.user.dislikesState,
            dislikes,
          },
        },
        error: "",
        loading: false,
      };
    }
    case "CHANGE_PASSWORD": {
      return {
        ...state,
        user: {
          ...state.user,
          info: {
            ...state.user.info,
            password: action.payload.newPassword,
            updatedAt: action.payload.updatedAt,
          },
        },
        error: "",
        loading: false,
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case "SET_LOADING_TRUE": {
      return {
        ...state,
        loading: true,
      };
    }
    case "RESET_USER_DATA": {
      return {
        user: {
          info: {
            _id: "",
            username: "",
            email: "",
            password: "",
            createdAt: "",
            updatedAt: "",
          },
          playlistsState: { error: "", loadState: false, playlists: [] },
          watchlaterState: { error: "", loadState: false, watchlater: [] },
          historyState: { error: "", loadState: false, history: [] },
          likesState: { error: "", loadState: false, likes: [] },
          dislikesState: { error: "", loadState: false, dislikes: [] },
        },
        error: ``,
        loading: false,
      };
    }
    case "LOAD_HISTORY": {
      return {
        ...state,
        user: {
          ...state.user,
          historyState: {
            ...state.user.historyState,
            loadState: true,
          },
        },
      };
    }
    case "LOAD_LIKES": {
      return {
        ...state,
        user: {
          ...state.user,
          likesState: {
            ...state.user.likesState,
            loadState: true,
          },
        },
      };
    }
    case "LOAD_DISLIKES": {
      return {
        ...state,
        user: {
          ...state.user,
          dislikesState: {
            ...state.user.dislikesState,
            loadState: true,
          },
        },
      };
    }
    case "LOAD_WATCHLATER": {
      return {
        ...state,
        user: {
          ...state.user,
          watchlaterState: {
            ...state.user.watchlaterState,
            loadState: true,
          },
        },
      };
    }
    case "LOAD_PLAYLISTS": {
      return {
        ...state,
        user: {
          ...state.user,
          playlistsState: {
            ...state.user.playlistsState,
            loadState: true,
          },
        },
      };
    }
    case "LOAD_PLAYLIST": {
      return {
        ...state,
        user: {
          ...state.user,
          playlistsState: {
            ...state.user.playlistsState,
            playlists: state.user.playlistsState.playlists.map((playlist) =>
              playlist.data._id === action.payload.id
                ? { ...playlist, loadState: true, error: "" }
                : playlist
            ),
          },
        },
      };
    }
    case "UPDATE_HISTORY": {
      return {
        ...state,
        user: {
          ...state.user,
          historyState: {
            ...state.user.historyState,
            history: action.payload.history,
            loadState: false,
            error: "",
          },
        },
      };
    }
    case "UPDATE_LIKES": {
      return {
        ...state,
        user: {
          ...state.user,
          likesState: {
            ...state.user.likesState,
            loadState: false,
            error: "",
            likes: action.payload.likes,
          },
        },
      };
    }
    case "UPDATE_DISLIKES": {
      return {
        ...state,
        user: {
          ...state.user,
          dislikesState: {
            ...state.user.dislikesState,
            loadState: false,
            error: "",
            dislikes: action.payload.dislikes,
          },
        },
      };
    }
    case "UPDATE_WATCHLATER": {
      return {
        ...state,
        user: {
          ...state.user,
          watchlaterState: {
            ...state.user.watchlaterState,
            loadState: false,
            error: "",
            watchlater: action.payload.watchlater,
          },
        },
      };
    }
    case "UPDATE_PLAYLISTS": {
      return {
        ...state,
        user: {
          ...state.user,
          playlistsState: {
            ...state.user.playlistsState,
            loadState: false,
            error: "",
            playlists: action.payload.playlistsData.map((playistData) => ({
              data: { ...playistData },
              error: "",
              loadState: false,
            })),
          },
        },
      };
    }
    case "UPDATE_PLAYLIST": {
      return {
        ...state,
        user: {
          ...state.user,
          playlistsState: {
            ...state.user.playlistsState,
            loadState: false,
            error: "",
            playlists: state.user.playlistsState.playlists.map((playlist) =>
              playlist.data._id === action.payload.playlistData._id
                ? {
                    ...playlist,
                    data: { ...action.payload.playlistData },
                    loadState: false,
                  }
                : playlist
            ),
          },
        },
      };
    }
    case "ERROR_HISTORY": {
      return {
        ...state,
        user: {
          ...state.user,
          historyState: {
            ...state.user.historyState,
            loadState: false,
            error: action.payload.error,
          },
        },
      };
    }
    case "ERROR_LIKES": {
      return {
        ...state,
        user: {
          ...state.user,
          likesState: {
            ...state.user.likesState,
            loadState: false,
            error: action.payload.error,
          },
        },
      };
    }
    case "ERROR_DISLIKES": {
      return {
        ...state,
        user: {
          ...state.user,
          dislikesState: {
            ...state.user.dislikesState,
            loadState: false,
            error: action.payload.error,
          },
        },
      };
    }
    case "ERROR_WATCHLATER": {
      return {
        ...state,
        user: {
          ...state.user,
          watchlaterState: {
            ...state.user.watchlaterState,
            loadState: false,
            error: action.payload.error,
          },
        },
      };
    }
    case "ERROR_PLAYLISTS": {
      return {
        ...state,
        user: {
          ...state.user,
          playlistsState: {
            ...state.user.playlistsState,
            loadState: false,
            error: action.payload.error,
          },
        },
      };
    }
    case "ERROR_PLAYLIST": {
      return {
        ...state,
        user: {
          ...state.user,
          playlistsState: {
            ...state.user.playlistsState,
            playlists: state.user.playlistsState.playlists.map((playlist) =>
              playlist.data._id === action.payload.id
                ? { ...playlist, error: action.payload.error, loadState: false }
                : playlist
            ),
          },
        },
      };
    }
    default:
      return state;
  }
};
