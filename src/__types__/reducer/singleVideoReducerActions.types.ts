
export type SetLoadStateType = {
  type: "SET_LOAD_STATE";
  payload: { loadState: boolean; };
};

export type SetCanPlayType = {
  type: "SET_CAN_PLAY";
  payload: { canPlay: boolean; };
};
export type ToggleMuteType = {
  type: "TOGGLE_MUTE";
};
export type ToggleAutoplayType = {
  type: "TOGGLE_AUTOPLAY";
};
export type ToggleBroadMenuType = {
  type: "TOGGLE_BROAD_MENU";
};
export type ToggleOnRepeatType = {
  type: "TOGGLE_ON_REPEAT";
};
export type SetBroadMenuType = {
  type: "SET_BROAD_MENU";
  payload: { broadMenu: boolean; };
};
export type SetProgressType = {
  type: "SET_PROGRESS";
  payload: { newProgress: number; };
};
export type SetPlaybackSpeedType = {
  type: "SET_PLAYBACK_SPEED";
  payload: { newPlaybackSpeed: number; };
};
export type SetVolumeType = {
  type: "SET_VOLUME";
  payload: { newVolume: number; };
};
export type VideoActionType = SetLoadStateType |
  SetCanPlayType |
  ToggleMuteType |
  ToggleAutoplayType |
  ToggleBroadMenuType |
  SetBroadMenuType |
  ToggleOnRepeatType |
  SetProgressType |
  SetPlaybackSpeedType |
  SetVolumeType;
