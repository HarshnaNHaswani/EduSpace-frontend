import { VideoPlayer } from "components/VideoPlayer/index";
import React from "react";
import { useNavigate } from "react-router-dom";
import { VideoDataType } from "__types__/context/videosContext.types";
import videoCardStyles from "../videoCard.module.css";

type VideoCardType = {
  video: VideoDataType;
  additionalClass?: string;
  showControls?: boolean;
  muted?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  autoplay?: boolean;
}
export const VideoCard = ({
  video: { src, title, createdAt, creator, _id },
  additionalClass = "",
  showControls = true,
  muted = true,
  size = "sm",
  autoplay = false,
}: VideoCardType) => {
  const navigate = useNavigate();
  return (
    <div className={videoCardStyles[additionalClass]}>
      <VideoPlayer
        src={src}
        showControls={showControls}
        muted={muted}
        autoplay={autoplay}
        size={size}
        additionalClass={"center-self"}
      />
      <section className={`${videoCardStyles.content}`}>
        <h4>{title}</h4>
        {creator && <small>{creator}</small>}
        {createdAt && <small>{createdAt}</small>}
        <button
          className={`${videoCardStyles.btn}`}
          onClick={() => {
            navigate(`/videos/${_id}`);
          }}
        >
          Play Video
        </button>
      </section>
    </div>
  );
};
