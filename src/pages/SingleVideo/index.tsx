import { DetailedVideoCard } from "components/VideoCard/DetailedVideoCard";
import { VideoPlayer } from "components/VideoPlayer";
import { useCategories } from "context/categories-context";
import { useOpenVideos } from "context/open-videos-context";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  InitialVideoDataType,
  OpenVideoType,
} from "__types__/context/openVideosContext.types";

export const SingleVideo = () => {
  const { id } = useParams();
  const {
    categories,
    error: categoriesError,
    loadState: categoriesLoadState,
  } = useCategories();
  const { openVideos, getVideo } = useOpenVideos();
  // const initialState: InitialVideoDataType = {
  //   _id: id ?? "",
  //   title: "",
  //   description: "",
  //   creator: "",
  //   createdAt: "",
  //   likes: 0,
  //   dislikes: 0,
  //   views: {
  //     lastSevenDays: 0,
  //     lastMonth: 0,
  //     lastSixMonths: 0,
  //     total: 0,
  //   },
  //   category: [],
  //   src: "",
  //   poster: "",
  //   relatedQuizzes: [],
  //   comments: [],
  // };
  const [video, setVideo] = useState<OpenVideoType>();
  useEffect(() => {
    if (id) {
      getVideo(id);
    }
  }, []);
  useEffect(() => {
    openVideos.forEach((video) => {
      if (video.videoData._id === id) setVideo(video);
    });
  }, [openVideos]);
  return (
    <div>
      {video?.loading && <p>Loading...</p>}
      {video?.error && <p>error...</p>}
      {!video?.error && !video?.loading && video?.videoData &&(
        <DetailedVideoCard video={video?.videoData} />
    )}
    </div>
  );
};
