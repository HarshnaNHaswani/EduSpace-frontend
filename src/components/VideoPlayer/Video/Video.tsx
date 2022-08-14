import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import { useAuth } from "context/auth-context";
import { useUser } from "context/user-context";
import { useVideos } from "context/videos-context";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  VideoDispatchType,
  VideoRefType,
  VideoStateType,
} from "__types__/components/videoPlayer.types";

export const Video = ({
  src,
  videoRef,
  videoState: { isMuted, isOnRepeat, isAutoplay },
  videoDispatch,
}: {
  src: string;
  videoRef: VideoRefType;
  videoState: VideoStateType;
  videoDispatch: VideoDispatchType;
}): JSX.Element => {
  const {
    authData: { isAuth },
  } = useAuth();
  const {
    videosState: { videos },
  } = useVideos();
  const { id } = useParams() ?? "";
  const {
    addVideoToWatchHistory,
    userState: {
      user: {
        historyState: { history },
      },
    },
  } = useUser();
  const [isInHistory, setInHistory] = useState(false);

  const handleOnTimeUpdate = () => {
    const newProgress = videoRef?.current?.currentTime ?? 0;
    videoDispatch({ type: "SET_PROGRESS", payload: { newProgress } });

    if (
      !isInHistory &&
      isAuth &&
      newProgress >= (videoRef?.current?.duration ?? 1) * 0.2
    ) {
      const video = videos.find((video) => video._id === id);
      if (video) {
        setInHistory(true);
        addVideoToWatchHistory(video);
      }
    }
  };

  useEffect(() => {
    if (isAuth) {
      if (history.some((video) => video._id === id)) setInHistory(true);
    }
  }, [isAuth]);
  return (
    <video
      src={src}
      ref={videoRef}
      preload="metadata"
      muted={isMuted}
      loop={isOnRepeat}
      autoPlay={isAutoplay}
      className={`${playerStyles.video} video`}
      onTimeUpdate={handleOnTimeUpdate}
    ></video>
  );
};
