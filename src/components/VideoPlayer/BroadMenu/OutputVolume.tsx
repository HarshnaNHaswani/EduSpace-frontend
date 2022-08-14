import { ChangeEventHandler } from "react";
import { VideoDispatchType, VideoRefType } from "__types__/components/videoPlayer.types";

export const OutputVolume = ({
  volume,
  videoDispatch,
  videoRef,
}: {
  videoRef: VideoRefType;
  volume: number;
  videoDispatch: VideoDispatchType;
}): JSX.Element => {
  const handleVolumeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    videoDispatch({
      type: "SET_VOLUME",
      payload: { newVolume: Number(value) },
    });
    if (videoRef?.current) {
      videoRef.current.volume = Number(value);
    }
  };

  return (
    <section>
      <label htmlFor="volume">Volume</label>
      <input
        type="range"
        min={0.0}
        max={1.0}
        step={0.05}
        id="volume"
        value={volume}
        onChange={handleVolumeChange}
      />
    </section>
  );
};
