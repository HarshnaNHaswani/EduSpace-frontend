import { IdType, TextType } from "__types__/typeUtils/base.types";
import {
  PlaylistDataType,
  UserDataType,
} from "__types__/context/userContext.types";
import { VideoDataType } from "__types__/context/videosContext.types";

export type SetUserType = {
  type: "SET_USER";
  payload: {
    userData: UserDataType;
    userLists: {
      playlistsData: PlaylistDataType[] | [];
      watchlater: VideoDataType[] | [];
      history: VideoDataType[] | [];
      likes: VideoDataType[] | [];
      dislikes: VideoDataType[] | [];
    };
  };
};
export type ChangePasswordType = {
  type: "CHANGE_PASSWORD";
  payload: {
    newPassword: TextType;
    updatedAt: string;
  };
};
export type SetErrorType = {
  type: "SET_ERROR";
  payload: {
    error: string;
  };
};
export type SetLoadingTrueType = {
  type: "SET_LOADING_TRUE";
};
export type ResetUserDataType = {
  type: "RESET_USER_DATA";
};
export type UpdatePlaylists = {
  type: "UPDATE_PLAYLISTS";
  payload: {
    playlistsData: PlaylistDataType[] | [];
  };
};
export type UpdatePlaylist = {
  type: "UPDATE_PLAYLIST";
  payload: {
    playlistData: PlaylistDataType;
  };
};
export type UpdateWatchlater = {
  type: "UPDATE_WATCHLATER";
  payload: {
    watchlater: VideoDataType[] | [];
  };
};
export type UpdateHistory = {
  type: "UPDATE_HISTORY";
  payload: {
    history: VideoDataType[] | [];
  };
};
export type UpdateLikes = {
  type: "UPDATE_LIKES";
  payload: {
    likes: VideoDataType[] | [];
  };
};
export type UpdateDislikes = {
  type: "UPDATE_DISLIKES";
  payload: {
    dislikes: VideoDataType[] | [];
  };
};
export type LoadHistory = {
  type: "LOAD_HISTORY";
};
export type LoadLikes = {
  type: "LOAD_LIKES";
};
export type LoadDisikes = {
  type: "LOAD_DISLIKES";
};
export type LoadPlaylist = {
  type: "LOAD_PLAYLIST";
  payload: {
    id: IdType;
  };
};
export type LoadPlaylists = {
  type: "LOAD_PLAYLISTS";
};
export type LoadWatchlater = {
  type: "LOAD_WATCHLATER";
};
export type ErrorHistory = {
  type: "ERROR_HISTORY";
  payload: {
    error: string;
  };
};
export type ErrorLikes = {
  type: "ERROR_LIKES";
  payload: {
    error: string;
  };
};
export type ErrorDisikes = {
  type: "ERROR_DISLIKES";
  payload: {
    error: string;
  };
};
export type ErrorPlaylist = {
  type: "ERROR_PLAYLIST";
  payload: {
    id: IdType;
    error: string;
  };
};
export type ErrorPlaylists = {
  type: "ERROR_PLAYLISTS";
  payload: {
    error: string;
  };
};
export type ErrorWatchlater = {
  type: "ERROR_WATCHLATER";
  payload: {
    error: string;
  };
};

export type UserActionType =
  | SetUserType
  | ChangePasswordType
  | SetErrorType
  | SetLoadingTrueType
  | ResetUserDataType
  | UpdateDislikes
  | UpdateHistory
  | UpdateLikes
  | UpdatePlaylist
  | UpdatePlaylists
  | UpdateWatchlater
  | LoadHistory
  | LoadDisikes
  | LoadLikes
  | LoadPlaylist
  | LoadPlaylists
  | LoadWatchlater
  | ErrorDisikes
  | ErrorHistory
  | ErrorLikes
  | ErrorPlaylist
  | ErrorPlaylists
  | ErrorWatchlater;
