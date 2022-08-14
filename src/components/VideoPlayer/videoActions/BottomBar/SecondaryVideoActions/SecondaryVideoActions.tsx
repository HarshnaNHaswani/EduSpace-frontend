import { BtnFullScreen, BtnMute, BtnNextTrack, BtnPlay, BtnPrevTrack, BtnRepeat } from "components/VideoPlayer/videoActions/buttons";
import {
  VideoDispatchType,
  VideoRefType,
  VideoStateType
} from "__types__/components/videoPlayer.types";
import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";

export const OtherVideoActions = ({
  videoDispatch,
  videoState: { isMuted, prevTrack, nextTrack },
  videoRef,
}: {
  videoDispatch: VideoDispatchType;
  videoState: VideoStateType;
  videoRef: VideoRefType;
}): JSX.Element => {
  return (
    <section className={playerStyles.otherVideoActions}>
      <section className={playerStyles.actionWrapper} key={"actionWrapperLeft"}>
        <BtnPrevTrack prevTrack={prevTrack ?? ''} key={"btnPrevTrack"} />
        <BtnPlay key={"btnPlay"} videoRef={videoRef} />
        <BtnNextTrack key={"btnNextTrack"} nextTrack={nextTrack ?? ''} />
      </section>

      <section
        className={playerStyles.actionWrapper}
        key={"actionWrapperRight"}
      >
        <BtnMute
          videoDispatch={videoDispatch}
          isMuted={isMuted}
          key={"btnMute"}
        />
        <BtnRepeat videoDispatch={videoDispatch} key={"btnRepeat"} />
        <BtnFullScreen videoRef={videoRef} key={"btnFullScreen"} />
      </section>
    </section>
  );
};
