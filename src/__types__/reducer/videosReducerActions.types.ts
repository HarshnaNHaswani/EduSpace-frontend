import { VideoDataType } from "__types__/context/videosContext.types";

export type SetVideosType = {
  type: "SET_VIDEOS";
  payload: {
    videosData: VideoDataType[];
  };
};
export type SetErrorType = {
  type: "SET_ERROR";
  payload: {
    error: unknown;
  };
};
export type SetLoadingTrueType = {
  type: "SET_LOADING_TRUE";
};

export type VideosActionType = SetVideosType | SetErrorType | SetLoadingTrueType