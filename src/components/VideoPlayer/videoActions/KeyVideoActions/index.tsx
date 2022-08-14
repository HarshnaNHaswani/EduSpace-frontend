import { VideoRefType } from "__types__/components/videoPlayer.types";
import {
  BtnPlay,
  BtnRewind,
  BtnForward,
} from "components/VideoPlayer/videoActions/buttons";
import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";

export const KeyVideoActions = ({
  videoRef,
}: {
  videoRef: VideoRefType;
}): JSX.Element => {
  return (
    <section className={playerStyles.keyVideoActions}>
      <BtnRewind key={"BtnRewind"} videoRef={videoRef} />
      <BtnPlay key={"BtnPlay"} videoRef={videoRef} />
      <BtnForward key={"BtnForward"} videoRef={videoRef} />
    </section>
  );
};
