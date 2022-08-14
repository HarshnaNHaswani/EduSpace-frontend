import { ToggleAutoPlay } from "components/VideoPlayer/BroadMenu/ToggleAutoPlay";
import { OutputVolume } from "components/VideoPlayer/BroadMenu/OutputVolume";
import { PlaybackSpeedController } from "components/VideoPlayer/BroadMenu/PlaybackSpeedController";
import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import {
  VideoDispatchType,
  VideoRefType,
  VideoStateType,
} from "__types__/components/videoPlayer.types";

export const BroadMenu = ({
  videoState: { broadMenu, volume, isAutoplay, playbackSpeed },
  videoDispatch,
  videoRef,
}: {
  videoRef: VideoRefType;
  videoDispatch: VideoDispatchType;
  videoState: VideoStateType;
}): JSX.Element => {
  const toggleBroadMenu = () => {
    videoDispatch({
      type: "TOGGLE_BROAD_MENU",
    });
  };
  return (
    <div className={playerStyles.broadmenu}>
      <section key={"broadmenuToggle"} className={playerStyles.toggleWrapper}>
        <button
          // type="button"
          className={`${playerStyles.btn} ${playerStyles.broadmenuToggle}  ${
            broadMenu ? playerStyles.invisible : playerStyles.visible
          }`}
          onClick={toggleBroadMenu}
        >
          &#8942;
        </button>
      </section>

      <div
        className={`${playerStyles.submenu} ${
          !broadMenu ? playerStyles.invisible : playerStyles.visible
        }`}
      >
        <OutputVolume
          key={"OutputVolume"}
          volume={volume}
          videoDispatch={videoDispatch}
          videoRef={videoRef}
        />
        <ToggleAutoPlay
          key={"ToggleAutoPlay"}
          isAutoplay={isAutoplay}
          videoDispatch={videoDispatch}
        />
        <PlaybackSpeedController
          key={"PlaybackSpeedController"}
          videoRef={videoRef}
          videoDispatch={videoDispatch}
          playbackSpeed={playbackSpeed}
        />
      </div>
    </div>
  );
};
