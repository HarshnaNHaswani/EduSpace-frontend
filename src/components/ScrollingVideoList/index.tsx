import React from "react";
import { VideoDataType } from "__types__/context/videosContext.types";
import scrollingListStyles from "./scrollingVideoList.module.css";
import { VideoCard } from "../VideoCard/BasicVideoCard.tsx";

export const ScrollingVideoList = ({
  videos,
  propKey: key,
}: {
  videos: VideoDataType[];
  propKey: string;
}) => {
  return (
    <nav className="nav nav-scrolling" key={key}>
      <ul
        className={`list list-inline ${scrollingListStyles.list}`}
        key={key + "list"}
      >
        {videos.map((video) => {
          return (
            <li
              className={`list-item ${scrollingListStyles.listItem}`}
              key={key + video._id}
            >
              <VideoCard video={video} showControls={false}></VideoCard>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
