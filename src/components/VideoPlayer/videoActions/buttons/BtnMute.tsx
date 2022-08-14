import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import { VideoDispatchType } from "__types__/components/videoPlayer.types";

export const BtnMute = ({
  isMuted,
  videoDispatch,
}: {
  isMuted: boolean;
  videoDispatch: VideoDispatchType;
}):JSX.Element => {
  const toggleMute = () => {
    videoDispatch({ type: "TOGGLE_MUTE" });
  };

  return (
    <button
      className={`btn btn-icon bg-secondary ${playerStyles.btn}`}
      onClick={toggleMute}
    >
      {isMuted ? (
        <>
          <span
            role="img"
            className={playerStyles.icon}
            aria-label="UnMute"
            title="UnMute"
          >
            🔇
          </span>
        </>
      ) : (
        <>
          <span
            role="img"
            className={playerStyles.icon}
            aria-label="mute"
            title="mute"
          >
            🔈
          </span>
        </>
      )}
    </button>
  );
};
