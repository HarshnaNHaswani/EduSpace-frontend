import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import { VideoRefType } from "__types__/components/videoPlayer.types";

export const BtnForward = ({
  videoRef,
}: {
  videoRef: VideoRefType;
}): JSX.Element => {
  const forward = () => {
    if (videoRef?.current?.ended) return;
    if (videoRef?.current) videoRef.current.currentTime += 6;
  };
  return (
    <button
      className={`btn btn-icon bg-secondary ${playerStyles.btn}`}
      onClick={forward}
      disabled={videoRef.current?.ended}
    >
      <span role="img" className={playerStyles.icon} aria-label="forward">
        ⏩
      </span>
    </button>
  );
};
