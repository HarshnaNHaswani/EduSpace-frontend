import { useVideos } from "context/videos-context";
import React from "react";
import { ScrollingVideoList } from "components/ScrollingVideoList";
import homeStyles from "./homeStyles.module.css";
import { VideoDataType } from "__types__/context/videosContext.types";
export const Home = (): JSX.Element => {
  const {
    videosState: { videos, loadState, error },
  } = useVideos();

  const latestContent = [...videos]
    .sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1))
    .slice(0, 5);

  const recentlyTrending = [...videos]
    .sort((a, b) => (a.views.lastSevenDays > b.views.lastSevenDays ? 1 : -1))
    .slice(0, 5);

  const mostWatched = [...videos]
    .sort((a, b) => (a.views.total > b.views.total ? 1 : -1))
    .slice(0, 5);

  const trending = [...videos]
    .sort((a, b) => (a.views.lastSixMonths > b.views.lastSixMonths ? 1 : -1))
    .slice(0, 5);

  const monthlyHits = [...videos]
    .sort((a, b) => (a.views.lastMonth > b.views.lastMonth ? 1 : -1))
    .slice(0, 5);

  return (
    <div>
      <>
        {loadState && <p>Loading......</p>}
        <section>
          <h3 className={`${homeStyles.heading}`}>Latest</h3>
          <ScrollingVideoList propKey={"latest"} videos={latestContent} />
        </section>
        <hr className={`${homeStyles.hr}`} />
        <section>
          <h3 className={`${homeStyles.heading}`}>Recently Trending</h3>
          <ScrollingVideoList
            propKey={"recentTrend"}
            videos={recentlyTrending}
          />
        </section>
        <hr className={`${homeStyles.hr}`} />

        <section>
          <h3 className={`${homeStyles.heading}`}>Consistently Trending</h3>
          <ScrollingVideoList
            propKey={"trend"}
            videos={trending}
          />
        </section>
        <hr className={`${homeStyles.hr}`} />

        <section>
          <h3 className={`${homeStyles.heading}`}>Monthly Hits</h3>
          <ScrollingVideoList
            propKey={"monthHits"}
            videos={monthlyHits}
          />
        </section>
        <hr className={`${homeStyles.hr}`} />
        <section>
          <h3 className={`${homeStyles.heading}`}>Most Watched</h3>
          <ScrollingVideoList propKey={"mostWatched"} videos={mostWatched} />
        </section>
      </>
    </div>
  );
};
