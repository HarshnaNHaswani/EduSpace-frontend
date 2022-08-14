import { VideosStateType } from "__types__/context/videosContext.types";
import { VideosActionType } from "__types__/reducer/videosReducerActions.types";

export const vidoesReducer = (state:VideosStateType, action:VideosActionType):VideosStateType => {
  switch (action.type) {
    case "SET_VIDEOS": {
      return {
        ...state,
        error: {},
        loadState: false,
        videos: action.payload.videosData,
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        loadState: false,
        error: action.payload.error,
      }
    }
    case "SET_LOADING_TRUE": {
      return {
        ...state,
        loadState: true,
      };
    }
    default:
      return state;
  }
};
