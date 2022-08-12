import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import { VideoRefType } from "__types__/components/videoPlayer.types";

export const BtnFullScreen = ({ videoRef}:{videoRef: VideoRefType}):JSX.Element => {
  const handleFullScreen = () => {
    if (document.fullscreenEnabled) {
      if (videoRef?.current?.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef?.current?.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef?.current?.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef?.current?.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    } else {
      alert("fullscreen is disabled in your browser");
    }
  };

  return (
    <button
    // type="button"
      className={`btn btn-icon bg-secondary ${playerStyles.btn}`}
      onClick={handleFullScreen}
      title="fullScreen"
    >
      <span
        role="img"
        className={playerStyles.icon}
        aria-label="fullScreen"
        title={"big"}
      >
        {"🔍"}
      </span>
    </button>
  );
};
