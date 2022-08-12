import { VideoStateType } from "__types__/components/videoPlayer.types";
import { videoReducer } from "./singleVideoReducer";
import { SetBroadMenuType, SetCanPlayType, SetLoadStateType, SetPlaybackSpeedType, SetProgressType, SetVolumeType, ToggleAutoplayType, ToggleBroadMenuType, ToggleMuteType, ToggleOnRepeatType } from "__types__/reducer/singleVideoReducerActions.types";

describe("video state ations", () => {
  const initialState:VideoStateType = {
    broadMenu: false,
    playbackSpeed: 1.0,
    volume: 0.75,
    isMuted: false,
    isOnRepeat: false,
    isAutoplay: false,
    progress: 0,
    prevTrack: '',
    nextTrack: '',
    loading: false,
    error: "",
    canPlay: true,
  };
  test("should set the load state", () => {
    const action:SetLoadStateType = {
      type: "SET_LOAD_STATE",
      payload: {
        loadState: true
        }
      }
    const actualState = videoReducer(initialState,action)

    const expectedState = {
      broadMenu: false,
      playbackSpeed: 1.0,
      volume: 0.75,
      isMuted: false,
      isOnRepeat: false,
      isAutoplay: false,
      progress: 0,
      prevTrack: '',
      nextTrack: '',
      loading: true,
      error: "",
      canPlay: true,
    };

    expect(actualState).toEqual(expectedState);
})
  test("should set browser can play video type", () => {
    const action:SetCanPlayType = {
      type: "SET_CAN_PLAY",
      payload: {
        canPlay: false
        }
      }
    const actualState = videoReducer(initialState,action)

    const expectedState = {
      broadMenu: false,
      playbackSpeed: 1.0,
      volume: 0.75,
      isMuted: false,
      isOnRepeat: false,
      isAutoplay: false,
      progress: 0,
      prevTrack: '',
      nextTrack: '',
      loading: false,
      error: "",
      canPlay: false,
    };

    expect(actualState).toEqual(expectedState);
})
  test("should toggle mute", () => {
    const action:ToggleMuteType = {
      type: "TOGGLE_MUTE",
      }
    const actualState = videoReducer(initialState,action)

    const expectedState = {
      broadMenu: false,
      playbackSpeed: 1.0,
      volume: 0.75,
      isMuted: true,
      isOnRepeat: false,
      isAutoplay: false,
      progress: 0,
      prevTrack: '',
      nextTrack: '',
      loading: false,
      error: "",
      canPlay: true,
    };
    expect(actualState).toEqual(expectedState);
})
  test("should toggle autoplay", () => {
    const action:ToggleAutoplayType = {
      type: "TOGGLE_AUTOPLAY",
      }
    const actualState = videoReducer(initialState,action)

    const expectedState = {
      broadMenu: false,
      playbackSpeed: 1.0,
      volume: 0.75,
      isMuted: false,
      isOnRepeat: false,
      isAutoplay: true,
      progress: 0,
      prevTrack: '',
      nextTrack: '',
      loading: false,
      error: "",
      canPlay: true,
    };
    expect(actualState).toEqual(expectedState);
})
  test("should toggle broadMenu display", () => {
    const action:ToggleBroadMenuType = {
      type: "TOGGLE_BROAD_MENU",
      }
    const actualState = videoReducer(initialState,action)

    const expectedState = {
      broadMenu: true,
      playbackSpeed: 1.0,
      volume: 0.75,
      isMuted: false,
      isOnRepeat: false,
      isAutoplay: false,
      progress: 0,
      prevTrack: '',
      nextTrack: '',
      loading: false,
      error: "",
      canPlay: true,
    };
    expect(actualState).toEqual(expectedState);
})
  test("should set broadMenu display", () => {
    const action:SetBroadMenuType = {
      type: "SET_BROAD_MENU",
      payload:{
        broadMenu:true
      }
    }
    const actualState = videoReducer(initialState,action)

    const expectedState = {
      broadMenu: true,
      playbackSpeed: 1.0,
      volume: 0.75,
      isMuted: false,
      isOnRepeat: false,
      isAutoplay: false,
      progress: 0,
      prevTrack: '',
      nextTrack: '',
      loading: false,
      error: "",
      canPlay: true,
    };
    expect(actualState).toEqual(expectedState);
})

test("should toggle video repeat/loop", () => {
  const action:ToggleOnRepeatType = {
    type: "TOGGLE_ON_REPEAT",
    }
  const actualState = videoReducer(initialState,action)

  const expectedState = {
    broadMenu: false,
    playbackSpeed: 1.0,
    volume: 0.75,
    isMuted: false,
    isOnRepeat: true,
    isAutoplay: false,
    progress: 0,
    prevTrack: '',
    nextTrack: '',
    loading: false,
    error: "",
    canPlay: true,
  };
  expect(actualState).toEqual(expectedState);
})

test("should set video progress (in seconds)", () => {
  const action:SetProgressType = {
    type: "SET_PROGRESS",
    payload:{
      newProgress: 118
    }
  }
  const actualState = videoReducer(initialState,action)

  const expectedState = {
    broadMenu: false,
    playbackSpeed: 1.0,
    volume: 0.75,
    isMuted: false,
    isOnRepeat: false,
    isAutoplay: false,
    progress: 118,
    prevTrack: '',
    nextTrack: '',
    loading: false,
    error: "",
    canPlay: true,
  };
  expect(actualState).toEqual(expectedState);
})
test("should set video playback speed", () => {
  const action:SetPlaybackSpeedType = {
    type: "SET_PLAYBACK_SPEED",
    payload:{
      newPlaybackSpeed: 1.50
    }
  }
  const actualState = videoReducer(initialState,action)

  const expectedState = {
    broadMenu: false,
    playbackSpeed: 1.50,
    volume: 0.75,
    isMuted: false,
    isOnRepeat: false,
    isAutoplay: false,
    progress: 0,
    prevTrack: '',
    nextTrack: '',
    loading: false,
    error: "",
    canPlay: true,
  };
  expect(actualState).toEqual(expectedState);
})
test("should set video playback volume", () => {
  const action:SetVolumeType = {
    type: "SET_VOLUME",
    payload:{
      newVolume: 0.50
    }
  }
  const actualState = videoReducer(initialState,action)

  const expectedState = {
    broadMenu: false,
    playbackSpeed: 1.0,
    volume: 0.50,
    isMuted: false,
    isOnRepeat: false,
    isAutoplay: false,
    progress: 0,
    prevTrack: '',
    nextTrack: '',
    loading: false,
    error: "",
    canPlay: true,
  };
  expect(actualState).toEqual(expectedState);
})
})