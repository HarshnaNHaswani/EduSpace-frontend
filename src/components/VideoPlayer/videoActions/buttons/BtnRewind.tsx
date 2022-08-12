import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import { VideoRefType } from "__types__/components/videoPlayer.types";

export const BtnRewind = ({ videoRef }: { videoRef: VideoRefType }):JSX.Element => {
  const progress = videoRef?.current?.currentTime ?? 0;

  const rewind = () => {
    if (progress === 0) return;
    if (videoRef && videoRef?.current) {
      videoRef.current.currentTime -= 6;
    }
  };
  return (
    <button
      // type="button"
      className={`btn btn-icon bg-secondary ${playerStyles.btn}`}
      onClick={rewind}
      disabled={progress === 0}
      title="rewind 5s"
    >
      <span role="img" className={playerStyles.icon} aria-label="rewind">
        ⏪
      </span>
    </button>
  );
};
