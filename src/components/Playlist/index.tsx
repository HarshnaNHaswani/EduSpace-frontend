import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DetailedVideoCard } from "components/VideoCard/DetailedVideoCard";
import { TitleOnlyVideoCard } from "components/VideoCard/TitleOnlyVideoCard";
import React, { useEffect, useState } from "react";
import { VideoDataType } from "__types__/context/videosContext.types";
import { IdType } from "__types__/typeUtils/base.types";
import playlistStyles from "./playlist.module.css";
export const Playlist = ({
  videos,
  keyVal,
  start = "",
  removeFn,
}: {
  videos: VideoDataType[];
  keyVal: string;
  start?: IdType;
  removeFn:
    | ((videoId: IdType) => void)
    | ((videoId: IdType) => Promise<boolean>);
}) => {
  const initialState = {
    _id: "",
    title: "",
    description: "",
    creator: "",
    likes: 0,
    dislikes: 0,
    views: {
      lastSevenDays: 0,
      lastMonth: 0,
      lastSixMonths: 0,
      total: 0,
    },
    src: "",
    poster: "",
    category: [],
    relatedQuizzes: [],
    comments: [],
    createdAt: "",
  };
  console.log(initialState, videos, start);

  const [currentVideo, setCurrentVideo] = useState<VideoDataType>(initialState);
  useEffect(() => {
    setCurrentVideo(videos.find((video) => video._id === start) ?? videos[0]);
  }, []);

  return (
    <div className={playlistStyles.playlistGridContainer}>
      <article className={playlistStyles.currentVideo}>
        {Object.keys(currentVideo).length > 0 && (
          <DetailedVideoCard video={currentVideo} />
        )}
      </article>
      <ul className={playlistStyles.videoList} key={`playlist-${keyVal}`}>
        {videos.map((video) => (
          <li
            onClick={() => setCurrentVideo(video)}
            key={`listItem-${video._id}-${keyVal}`}
            className={`${playlistStyles.cardWrapper} ${
              video._id === currentVideo._id
                ? playlistStyles.currentVideoCard
                : ""
            }`}
          >
            <button
              onClick={() => removeFn(video._id)}
              className={playlistStyles.btnDelete}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <TitleOnlyVideoCard video={video} />
          </li>
        ))}
      </ul>
    </div>
  );
};
