import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";

export const BtnNextTrack = ({ nextTrack }: { nextTrack: string }):JSX.Element => (
  <button
    // type="button"
    className={`btn btn-icon bg-secondary ${playerStyles.btn}`}
    disabled={!nextTrack}
    title="go to next track"
  >
    <span role="img" className={playerStyles.icon} aria-label="next-video">
      ⏭️
    </span>
  </button>
);
