import { VideoPlayer } from "components/VideoPlayer";
import React from "react";
import { VideoDataType } from "__types__/context/videosContext.types";
import videoCardStyles from "../videoCard.module.css";
import titleOnlyVideoCardStyles from "./titleOnlyVideoCard.module.css";

export const TitleOnlyVideoCard = ({
  video: { src, title, creator, views, createdAt },
}: {
  video: VideoDataType;
}) => {
  return (
    <div className={titleOnlyVideoCardStyles.titleOnlyCard}>
      <VideoPlayer src={src} showControls={false} size="xs" />
      <article
        className={`${videoCardStyles.content} ${titleOnlyVideoCardStyles.content}`}
      >
        <h2 className={titleOnlyVideoCardStyles.heading}>{title}</h2>
        <small className={titleOnlyVideoCardStyles.text}>{creator}</small>
        <small className={titleOnlyVideoCardStyles.text}>
          {views.total} views | {createdAt}
        </small>
      </article>
    </div>
  );
};
