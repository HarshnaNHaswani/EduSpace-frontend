import { Dispatch, MutableRefObject } from "react";
import { VideoActionType } from "__types__/reducer/singleVideoReducerActions.types";

export type VideoStateType = {
  broadMenu: boolean;
  playbackSpeed: number;
  volume: number;
  isMuted: boolean;
  isOnRepeat: boolean;
  isAutoplay: boolean;
  progress: number;
  prevTrack?: string;
  nextTrack?: string;
  loading: boolean;
  error: string;
  canPlay: boolean;
  additionalClass?: string;
};

export type VideoPlayerType = {
  src: string;
  size?: "xs" | "sm" | "md" | "lg";
  muted?: boolean;
  autoplay?: boolean;
  showControls?: boolean;
  prevTrack?: string;
  nextTrack?: string;
  videoType?: "mp4";
  additionalClass?: string;
};
interface MyHTMLVideoElement extends HTMLVideoElement {
  msRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
}
export type VideoType = MyHTMLVideoElement | null;
export type VideoRefType = MutableRefObject<VideoType>;
export type VideoDispatchType = Dispatch<VideoActionType>;
