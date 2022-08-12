import { createContext, useContext, useReducer } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userReducer } from "reducers/user/userReducer";
import {
  addPlaylistService,
  addVideotoHistoryService,
  addVideoToPlaylistService,
  addVideotoWatchlaterService,
  dislikeVideoService,
  likeVideoService,
  removePlaylistService,
  removeVideoFromDislikeService,
  removeVideoFromHistoryService,
  removeVideoFromLikeService,
  removeVideoFromPlaylistService,
  removeVideoFromWatchlaterService,
} from "services";
import {
  PlaylistDataType,
  ProviderValueType,
  UserStateType,
} from "__types__/context/userContext.types";
import { VideoDataType } from "__types__/context/videosContext.types";
import { IdType, ProviderParamType } from "__types__/typeUtils/base.types";
import { useAuth } from "./auth-context";
export const initialState: UserStateType = {
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

const UserContext = createContext<ProviderValueType>(undefined);

const UserProvider = ({ children }: ProviderParamType) => {
  const {
    authData: { token },
  } = useAuth();
  const likeVideo = async (video: VideoDataType) => {
    try {
      userDispatch({ type: "LOAD_LIKES" });
      const response = await likeVideoService({ token, video });
      if (response.status === 201) {
        userDispatch({
          type: "UPDATE_LIKES",
          payload: { likes: response.data.likes },
        });
        userDispatch({
          type: "UPDATE_DISLIKES",
          payload: { dislikes: response.data.dislikes },
        });
      } else {
        userDispatch({
          type: "ERROR_LIKES",
          payload: { error: `${response.status}: ${response.statusText}` },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_LIKES",
        payload: { error: `An Error occurred` },
      });
      console.log(error);
    }
  };
  const removeVideoFromLikes = async (videoId: IdType) => {
    try {
      userDispatch({ type: "LOAD_LIKES" });
      const response = await removeVideoFromLikeService({ token, videoId });
      if (response.status === 200) {
        userDispatch({
          type: "UPDATE_LIKES",
          payload: { likes: response.data.likes },
        });
      } else {
        userDispatch({
          type: "ERROR_LIKES",
          payload: { error: `${response.status}: ${response.statusText}` },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_LIKES",
        payload: { error: `An Error occurred` },
      });
      console.log(error);
    }
  };
  const dislikeVideo = async (video: VideoDataType) => {
    try {
      userDispatch({ type: "LOAD_LIKES" });
      const response = await dislikeVideoService({ token, video });
      if (response.status === 201) {
        userDispatch({
          type: "UPDATE_LIKES",
          payload: { likes: response.data.likes },
        });
        userDispatch({
          type: "UPDATE_DISLIKES",
          payload: { dislikes: response.data.dislikes },
        });
      } else {
        userDispatch({
          type: "ERROR_DISLIKES",
          payload: { error: `${response.status}: ${response.statusText}` },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_DISLIKES",
        payload: { error: `An Error occurred` },
      });
      console.log(error);
    }
  };
  const removeVideoFromDislikes = async (videoId: IdType) => {
    try {
      userDispatch({ type: "LOAD_DISLIKES" });
      const response = await removeVideoFromDislikeService({ token, videoId });
      if (response.status === 200) {
        userDispatch({
          type: "UPDATE_DISLIKES",
          payload: { dislikes: response.data.dislikes },
        });
      } else {
        userDispatch({
          type: "ERROR_DISLIKES",
          payload: { error: `${response.status}: ${response.statusText}` },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_DISLIKES",
        payload: { error: `An Error occurred` },
      });
      console.log(error);
    }
  };
  const addVideoToWatchLater = async (video: VideoDataType) => {
    let success = false;
    try {
      userDispatch({ type: "LOAD_WATCHLATER" });
      const response = await addVideotoWatchlaterService({ token, video });
      if (response.status === 201) {
        userDispatch({
          type: "UPDATE_WATCHLATER",
          payload: { watchlater: response.data.watchlater },
        });
        success = true;
      } else {
        userDispatch({
          type: "ERROR_WATCHLATER",
          payload: { error: `${response.status}: ${response.statusText}` },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_WATCHLATER",
        payload: { error: `An Error occurred` },
      });
      console.log(error);
    } finally {
      return success;
    }
  };
  const removeVideoFromWatchlater = async (videoId: IdType) => {
    let success = false;
    try {
      userDispatch({ type: "LOAD_WATCHLATER" });
      const response = await removeVideoFromWatchlaterService({
        token,
        videoId,
      });
      if (response.status === 200) {
        userDispatch({
          type: "UPDATE_WATCHLATER",
          payload: { watchlater: response.data.watchlater },
        });
        success = true;
      } else {
        userDispatch({
          type: "ERROR_WATCHLATER",
          payload: { error: `${response.status}: ${response.statusText}` },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_WATCHLATER",
        payload: { error: `An Error occurred` },
      });
      console.log(error);
    } finally {
      return success;
    }
  };
  const addPlaylist = async (playlistName: string, video?: VideoDataType) => {
    try {
      const newPlaylist = {
        _id: "",
        name: playlistName,
        videos: video ? [{ ...video }] : [],
      };
      userDispatch({ type: "LOAD_PLAYLISTS" });
      const response = await addPlaylistService({
        token,
        playlist: newPlaylist,
      });
      if (response.status === 201) {
        userDispatch({
          type: "UPDATE_PLAYLISTS",
          payload: { playlistsData: response.data.playlists },
        });
      } else {
        userDispatch({
          type: "ERROR_PLAYLISTS",
          payload: {
            error: `${response.status}: ${response.statusText}`,
          },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_PLAYLISTS",
        payload: { error: `An Error occurred` },
      });
      console.log(error);
    }
  };
  const removePlaylist = async (playlistId: IdType) => {
    try {
      userDispatch({ type: "LOAD_PLAYLISTS" });
      const response = await removePlaylistService({
        token,
        playlistId,
      });
      if (response.status === 200) {
        userDispatch({
          type: "UPDATE_PLAYLISTS",
          payload: { playlistsData: response.data.playlists },
        });
      } else {
        userDispatch({
          type: "ERROR_PLAYLISTS",
          payload: {
            error: `${response.status}: ${response.statusText}`,
          },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_PLAYLISTS",
        payload: { error: `An Error occurred` },
      });
      console.log(error);
    }
  };
  const addVideoToPlaylist = async (
    video: VideoDataType,
    playlistId: IdType
  ) => {
    try {
      userDispatch({ type: "LOAD_PLAYLIST", payload: { id: playlistId } });
      const response = await addVideoToPlaylistService({
        token,
        playlistId,
        video,
      });
      if (response.status === 201) {
        userDispatch({
          type: "UPDATE_PLAYLIST",
          payload: { playlistData: response.data.playlist },
        });
      } else {
        userDispatch({
          type: "ERROR_PLAYLIST",
          payload: {
            id: playlistId,
            error: `${response.status}: ${response.statusText}`,
          },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_PLAYLIST",
        payload: { id: playlistId, error: `An Error occurred` },
      });
      console.log(error);
    }
  };
  const removeVideoFromPlaylist = async (
    videoId: IdType,
    playlistId: IdType
  ) => {
    try {
      userDispatch({ type: "LOAD_PLAYLIST", payload: { id: playlistId } });
      const response = await removeVideoFromPlaylistService({
        token,
        videoId,
        playlistId,
      });
      if (response.status === 200) {
        userDispatch({
          type: "UPDATE_PLAYLIST",
          payload: { playlistData: response.data.playlist },
        });
      } else {
        userDispatch({
          type: "ERROR_PLAYLIST",
          payload: {
            id: playlistId,
            error: `${response.status}: ${response.statusText}`,
          },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_PLAYLIST",
        payload: { id: playlistId, error: `An Error occurred` },
      });
      console.log(error);
    }
  };
  const addVideoToWatchHistory = async (video: VideoDataType) => {
    try {
      userDispatch({ type: "LOAD_HISTORY" });
      const response = await addVideotoHistoryService({ token, video });
      if (response.status === 201) {
        userDispatch({
          type: "UPDATE_HISTORY",
          payload: { history: response.data.history },
        });
      } else {
        userDispatch({
          type: "ERROR_HISTORY",
          payload: { error: `${response.status}: ${response.statusText}` },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_HISTORY",
        payload: { error: `An Error occurred` },
      });
      console.log(error);
    }
  };
  const removeVideoFromWatchHistory = async (videoId: IdType) => {
    try {
      userDispatch({ type: "LOAD_HISTORY" });
      const response = await removeVideoFromHistoryService({ token, videoId });
      if (response.status === 200) {
        userDispatch({
          type: "UPDATE_HISTORY",
          payload: { history: response.data.history },
        });
      } else {
        userDispatch({
          type: "ERROR_HISTORY",
          payload: { error: `${response.status}: ${response.statusText}` },
        });
      }
    } catch (error) {
      userDispatch({
        type: "ERROR_HISTORY",
        payload: { error: `An Error occurred` },
      });
      console.log(error);
    }
  };
  const [userState, userDispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider
      value={{
        userState,
        userDispatch,
        likeVideo,
        dislikeVideo,
        removeVideoFromDislikes,
        removeVideoFromLikes,
        addVideoToWatchLater,
        removeVideoFromWatchlater,
        addPlaylist,
        removePlaylist,
        addVideoToPlaylist,
        removeVideoFromPlaylist,
        addVideoToWatchHistory,
        removeVideoFromWatchHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
