import { useEffect, useReducer, useRef } from "react";
import { BroadMenu } from "./BroadMenu";
import { Loader } from "./Loader";
import { Video } from "./Video/Video";
import {
  VideoPlayerType,
  VideoStateType,
  VideoType,
} from "__types__/components/videoPlayer.types";
import { BottomBar, KeyVideoActions } from "./videoActions";
import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import { videoReducer } from "reducers/singleVideo/singleVideoReducer";

export const VideoPlayer = ({
  src,
  size = "sm",
  showControls = true,
  muted = true,
  autoplay = false,
  prevTrack = "",
  nextTrack = "",
  videoType = "mp4",
  additionalClass = "",
}: VideoPlayerType): JSX.Element => {
  const videoRef = useRef<VideoType>(null);

  const initialState: VideoStateType = {
    broadMenu: false,
    playbackSpeed: 1.0,
    volume: 0.75,
    isMuted: muted ?? false,
    isOnRepeat: false,
    isAutoplay: autoplay ?? false,
    additionalClass,
    progress: 0,
    prevTrack,
    nextTrack,
    loading: false,
    error: "",
    canPlay: true,
  };

  const playerSizeClass =
    size.toLowerCase() === "lg"
      ? { wrapper: "videoPlayerWrapperLg", player: "videoPlayerLg" }
      : size.toLowerCase() === "md"
      ? { wrapper: "videoPlayerWrapperMd", player: "videoPlayerMd" }
      : size.toLowerCase() === "xs"
      ? { wrapper: "videoPlayerWrapperXs", player: "videoPlayerXs" }
      : { wrapper: "videoPlayerWrapperSm", player: "videoPlayerSm" };

  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  useEffect(() => {
    if (
      videoRef &&
      videoRef?.current &&
      !videoRef.current.canPlayType(`video/${videoType}`)
    )
      videoDispatch({ type: "SET_CAN_PLAY", payload: { canPlay: false } });
  }, []);

  useEffect(() => {
    if (videoRef && videoRef.current && videoRef.current.readyState >= 3)
      videoDispatch({ type: "SET_LOAD_STATE", payload: { loadState: false } });
    if (
      videoRef &&
      !videoState.loading &&
      (videoRef?.current?.readyState ?? 0) < 3
    )
      videoDispatch({ type: "SET_LOAD_STATE", payload: { loadState: true } });
  }, [videoRef.current?.readyState, videoState.loading]);
  if (!videoState.canPlay) {
    return <p>Your browser does not support {videoType}.</p>;
  }
  return (
    <div
      className={`
      ${additionalClass}
      ${playerStyles.videoPlayerWrapper} 
      ${playerStyles[playerSizeClass.wrapper]} 
      ${
        (videoRef?.current?.videoHeight ?? 0) >
        (videoRef?.current?.videoWidth ?? 0)
          ? playerStyles.portraitVideoPlayerWrapper
          : ""
      }`}
      key={"videoPlayerWrapper"}
    >
      <div
        key={"videoPlayer"}
        className={`${playerStyles.videoPlayer} ${
          playerStyles[playerSizeClass.player]
        }`}
        onMouseLeave={() =>
          videoDispatch({
            type: "SET_BROAD_MENU",
            payload: { broadMenu: false },
          })
        }
      >
        <Video
          src={src}
          videoRef={videoRef}
          key={"video"}
          videoState={videoState}
          videoDispatch={videoDispatch}
        />
        {showControls && (
          <>
            <Loader
              key={"loader"}
              className={
                videoState.loading
                  ? playerStyles.visible
                  : playerStyles.invisible
              }
            />
            <BroadMenu
              videoState={videoState}
              key={"broadMenu"}
              videoDispatch={videoDispatch}
              videoRef={videoRef}
            />
            <KeyVideoActions key={"keyVideoActions"} videoRef={videoRef} />

            <BottomBar
              key={"bottomBar"}
              videoState={videoState}
              videoDispatch={videoDispatch}
              videoRef={videoRef}
            />
          </>
        )}
      </div>
    </div>
  );
};
