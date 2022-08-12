import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import { VideoRefType } from "__types__/components/videoPlayer.types";

export const BtnPlay = ({ videoRef }: { videoRef: VideoRefType }):JSX.Element => {
  const togglePlay = () => {
    if (videoRef?.current) {
      videoRef.current.paused
        ? videoRef.current.play()
        : videoRef.current.pause();
    }
  };

  return (
    <button
      // type="button"
      className={`btn btn-icon bg-secondary ${playerStyles.btn}`}
      onClick={togglePlay}
    >
      {videoRef.current?.paused ? (
        <>
          <span
            role="img"
            className={playerStyles.icon}
            aria-label="play"
            title="play"
          >
            ▶️
          </span>
        </>
      ) : (
        <>
          <span
            role="img"
            className={playerStyles.icon}
            aria-label="pause"
            title="pause"
          >
            ⏸
          </span>
        </>
      )}
    </button>
  );
};
