import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import { VideoDispatchType } from "__types__/components/videoPlayer.types";
export const BtnRepeat = ({
  videoDispatch,
}: {
  videoDispatch: VideoDispatchType;
}): JSX.Element => {
  const toggleOnRepeat = () => {
    videoDispatch({
      type: "TOGGLE_ON_REPEAT",
    });
  };
  return (
    <button
      // type="button"
      className={`btn btn-icon bg-secondary ${playerStyles.btn}`}
      onClick={toggleOnRepeat}
      title="repeat"
    >
      <span
        role="img"
        className={playerStyles.icon}
        aria-label="repeat"
        title={"big"}
      >
        🔁
      </span>
    </button>
  );
};
