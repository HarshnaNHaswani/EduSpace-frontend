import { VideoDispatchType } from "__types__/components/videoPlayer.types";

export const ToggleAutoPlay = ({ isAutoplay, videoDispatch }:{isAutoplay:boolean, videoDispatch:VideoDispatchType}):JSX.Element => {
  const toggleAutoplay = () => {
    videoDispatch({ type: "TOGGLE_AUTOPLAY" });
  };
  return (
    <section>
      <input
        type="checkbox"
        id="autoplay"
        checked={isAutoplay}
        onChange={toggleAutoplay}
      />
      <label htmlFor="autoplay">autoplay</label>
    </section>
  );
};
