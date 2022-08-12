import { VideoCard } from "components/VideoCard/BasicVideoCard.tsx";
import { useCategories } from "context/categories-context";
import { useVideos } from "context/videos-context";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./filterVideosByCategory.module.css";
export const FilterVideosByCategory = () => {
  const { id } = useParams() ?? "";
  const [isValidError, setIsValidError] = useState(false);
  const {
    videosState: { error, loadState, videos },
  } = useVideos();

  const { categories } = useCategories();
  const category = categories?.find((category) => category._id === id);
  useEffect(() => {
    if (error && !isValidError) {
      if (typeof error === "object" && Object.keys(error).length)
        setIsValidError(true);
      if (typeof error === "string") setIsValidError(true);
    }
    if (
      error &&
      isValidError &&
      typeof error === "object" &&
      !Object.keys(error).length
    )
      setIsValidError(false);

    if (!error) setIsValidError(false);
  }, [error]);

  const thisCategoryVideos = id?.length
    ? videos.filter((video) => video.category.includes(id))
    : [];
  return (
    <div>
      {category && (
        <>
          <h2 className="heading">
            <img src={category.icon} alt="" className="icon" />
            {category.categoryName}
          </h2>
        </>
      )}

      <>
        {loadState && <p>Loading...</p>}
        {isValidError && <p>An error occurred</p>}
        {!loadState && !isValidError && (
          <>
            {!thisCategoryVideos.length && (
              <p>
                Nothing here Yet
                <img
                  src={`https://res.cloudinary.com/harshna/image/upload/v1659885582/vidLib/categoryIcon/undraw_void_-3-ggu_atiae1.svg`}
                  alt=""
                  className="icon icon-lg"
                />
              </p>
            )}
            {thisCategoryVideos.length > 0 && (
              <section className="card-container">
                {thisCategoryVideos.map((video) => (
                  <article className={styles.categoryVideoCard} key={`category-${id}-video-${video._id}`}>
                    <VideoCard video={video} showControls={false} size="xs" />
                  </article>
                ))}
              </section>
            )}
          </>
        )}
      </>
    </div>
  );
};
