import { VideoDataType } from '__types__/context/videosContext.types';
import { IdType } from '__types__/typeUtils/base.types';

export type InitializeDataType = {
  type: 'INITIALIZE_DATA';
  payload: {
    _id: IdType;
  };
};

export type SetVideoDataType = {
  type: 'SET_VIDEO_DATA';
  payload: {
    video: VideoDataType;
  };
};

export type SetVideoErrorType = {
  type: 'SET_VIDEO_ERROR';
  payload: {
    _id: IdType;
    error: string;
  };
};
// type SetVideoLoadingTrueType={
//   type: 'SET_VIDEO_LOADING_TRUE',
//   payload: {
//     _id: IdType
//   }
// }
export type OpenVideosActionType = InitializeDataType | SetVideoDataType | SetVideoErrorType;
