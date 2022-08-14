import { OtherVideoActions } from "components/VideoPlayer/videoActions/BottomBar/SecondaryVideoActions/SecondaryVideoActions";
import { ProgressBar } from "components/VideoPlayer/videoActions/BottomBar/videoProgress/ProgressBar";
import playerStyles from "components/VideoPlayer/videoStyles/index.module.css";
import { VideoDispatchType, VideoRefType, VideoStateType } from "__types__/components/videoPlayer.types";

export const BottomBar = ({
  videoState,
  videoDispatch,
  videoRef,
}: {
  videoState: VideoStateType;
  videoDispatch: VideoDispatchType;
  videoRef: VideoRefType;
}): JSX.Element => {
  return (
    <section className={playerStyles.bottomBar}>
      <ProgressBar
        key={"progressBar"}
        videoRef={videoRef}
        videoDispatch={videoDispatch}
      />

      <OtherVideoActions
        videoState={videoState}
        key={"otherVideoActions"}
        videoDispatch={videoDispatch}
        videoRef={videoRef}
      />
    </section>
  );
};
