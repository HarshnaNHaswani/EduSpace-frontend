import { VideoStateType } from "__types__/components/videoPlayer.types";
import { VideoActionType } from "__types__/reducer/singleVideoReducerActions.types";
export const videoReducer = (state:VideoStateType, action:VideoActionType):VideoStateType => {
  switch (action.type) {
    case "SET_LOAD_STATE":
      return {
        ...state,
        loading: action.payload.loadState
      };
    case "SET_CAN_PLAY":
      return {
        ...state,
        canPlay: action.payload.canPlay
      };
    case "TOGGLE_MUTE":
      return {
        ...state,
        isMuted: !state.isMuted
      };
    case "TOGGLE_AUTOPLAY":
      return {
        ...state,
        isAutoplay: !state.isAutoplay
      };
    case "TOGGLE_BROAD_MENU":
      return {
        ...state,
        broadMenu: !state.broadMenu
      };
    case "SET_BROAD_MENU":
      return {
        ...state,
        broadMenu: action.payload.broadMenu
      };
    case "TOGGLE_ON_REPEAT":
      return {
        ...state,
        isOnRepeat: !state.isOnRepeat
      };
    case "SET_PROGRESS": {
      return {
        ...state,
        progress: action.payload.newProgress
      };
    }
    case "SET_PLAYBACK_SPEED": {
      return {
        ...state,
        playbackSpeed: action.payload.newPlaybackSpeed
      };
    }
    case "SET_VOLUME": {
      return {
        ...state,
        volume: action.payload.newVolume
      };
    }
    default:
      return state;
  }
};
