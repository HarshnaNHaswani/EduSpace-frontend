import { Dispatch } from "react";
import {
  UpdateDislikes,
  UpdateLikes,
  UserActionType,
} from "__types__/reducer/userReducerActions.types";
import { EmailType, IdType, TextType } from "../typeUtils/base.types";
import { VideoDataType } from "./videosContext.types";

export type UserDataType = {
  _id: IdType;
  username: TextType;
  email: EmailType;
  password: TextType;
  createdAt: string;
  updatedAt: string;
};

export type PlaylistDataType = {
  _id: IdType;
  name: string;
  videos: VideoDataType[] | [];
};
export type PlaylistType = {
  data: PlaylistDataType;
  loadState: boolean;
  error: string;
};
export type UserStateType = {
  user: {
    info: UserDataType;
    watchlaterState: {
      error: string;
      loadState: boolean;
      watchlater: VideoDataType[] | [];
    };
    historyState: {
      error: string;
      loadState: boolean;
      history: VideoDataType[] | [];
    };
    likesState: {
      error: string;
      loadState: boolean;
      likes: VideoDataType[] | [];
    };
    dislikesState: {
      error: string;
      loadState: boolean;
      dislikes: VideoDataType[] | [];
    };
    playlistsState: {
      error: string;
      loadState: boolean;
      playlists: PlaylistType[] | [];
    };
  };
  loading: boolean;
  error: string;
};

export type ProviderValueType =
  | {
      userState: UserStateType;
      userDispatch: Dispatch<UserActionType>;
      likeVideo: (video: VideoDataType) => void;
      dislikeVideo: (video: VideoDataType) => void;
      removeVideoFromLikes: (videoId: IdType) => void;
      removeVideoFromDislikes: (videoId: IdType) => void;
      addVideoToWatchLater: (video: VideoDataType) => Promise<boolean>;
      removeVideoFromWatchlater: (videoId: IdType) => Promise<boolean>;
      addVideoToWatchHistory: (video: VideoDataType) => void;
      removeVideoFromWatchHistory: (videoId: IdType) => void;
      addPlaylist: (playlistName: string, video?: VideoDataType) => void;
      removePlaylist: (playlistId: IdType) => void;
      addVideoToPlaylist: (video: VideoDataType, playlistId: IdType) => void;
      removeVideoFromPlaylist: (videoId: IdType, playlistId: IdType) => void;
    }
  | undefined;
