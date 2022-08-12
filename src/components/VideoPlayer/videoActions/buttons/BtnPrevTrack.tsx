import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";

export const BtnPrevTrack = ({ prevTrack }: { prevTrack: string }):JSX.Element => (
  <button
    // type="button"
    className={`btn btn-icon bg-secondary ${playerStyles.btn}`}
    // onClick={}
    disabled={!prevTrack}
    title="go to previous track"
  >
    <span role="img" className={playerStyles.icon} aria-label="previous-video">
      ⏮️
    </span>
  </button>
);
