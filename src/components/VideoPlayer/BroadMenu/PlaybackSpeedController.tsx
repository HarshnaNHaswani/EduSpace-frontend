import { ChangeEventHandler } from "react";
import { VideoDispatchType, VideoRefType } from "__types__/components/videoPlayer.types";

export const PlaybackSpeedController = ({
  videoRef,
  videoDispatch,
  playbackSpeed,
}: {
  videoRef: VideoRefType;
  videoDispatch: VideoDispatchType;
  playbackSpeed: number;
}): JSX.Element => {
  const handleSpeedChange: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    videoDispatch({
      type: "SET_PLAYBACK_SPEED",
      payload: { newPlaybackSpeed: Number(value) },
    });
    if (videoRef?.current) {
      videoRef.current.playbackRate = Number(value);
    }
  };
  return (
    <section>
      <label htmlFor="playback-speed">speed:</label>

      <select
        onChange={handleSpeedChange}
        id="playback-speed"
        title="playback-speed"
        value={playbackSpeed}
      >
        <option value={0.5}>0.50x</option>
        <option value={0.75}>0.75x</option>
        <option value={1.0}>1.00x</option>
        <option value={1.25}>1.25x</option>
        <option value={1.5}>1.50x</option>
        <option value={1.75}>1.75x</option>
        <option value={2.0}>2.00x</option>
      </select>
    </section>
  );
};
