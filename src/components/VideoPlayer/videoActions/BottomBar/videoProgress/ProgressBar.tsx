import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import {
  VideoRefType,
  VideoDispatchType,
} from "__types__/components/videoPlayer.types";
import { getHHMMSS } from "utils/getHHMMSS";
import { ChangeEventHandler } from "react";

export const ProgressBar = ({
  videoRef,
  videoDispatch,
}: {
  videoDispatch: VideoDispatchType;
  videoRef: VideoRefType;
}): JSX.Element => {
  const progress = Math.round(videoRef?.current?.currentTime ?? 0);
  const videoDuration = Math.round(videoRef?.current?.duration ?? 0);
  const handleProgressChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newProgress = Number(event?.target?.value);
    if (videoRef?.current && videoRef?.current?.currentTime) {
      videoRef.current.currentTime = newProgress;
    }
    videoDispatch({ type: "SET_PROGRESS", payload: { newProgress } });
  };

  return (
    <section className={playerStyles.progress} key={"progress"}>
      <>
        <input
          type="range"
          name="video-progress"
          id="video-progress"
          className={playerStyles.progressBar}
          min="0"
          value={progress}
          max={videoDuration ? videoDuration : 0}
          title="video-progress"
          placeholder=""
          onChange={handleProgressChange}
        />
        <section className={playerStyles.progressData} key={"progressData"}>
          <span className={playerStyles.left}>{getHHMMSS(progress)}</span> /
          <span className={playerStyles.right}>{getHHMMSS(videoDuration)}</span>
        </section>
      </>
    </section>
  );
};
