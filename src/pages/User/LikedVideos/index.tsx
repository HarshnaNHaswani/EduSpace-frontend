import { Playlist } from "components/Playlist";
import { VideoCard } from "components/VideoCard/BasicVideoCard.tsx";
import { useUser } from "context/user-context";
import React from "react";

export const LikedVideos = () => {
  const {
    userState: {
      user: { likesState },
      error,
      loading,
    },
    removeVideoFromLikes
  } = useUser();
  return (
    <div>
      <h2>Liked Videos</h2>
      {(error || likesState.error) && <p>{error ?? likesState.error}</p>}
      {(loading || likesState.loadState) && <p>Loading...</p>}

      {!error && !likesState.error && !loading && !likesState.loadState && (
        <>
          {likesState.likes.length ? (
            <Playlist
              videos={likesState.likes}
              key={`likes`}
              keyVal={`likes`}
              removeFn={removeVideoFromLikes}
            />
          ) : (
            <p>
              <img
                src={`https://res.cloudinary.com/harshna/image/upload/v1659885582/vidLib/categoryIcon/undraw_void_-3-ggu_atiae1.svg`}
                alt=""
                className="icon icon-lg"
              />
              No Videos Here
            </p>
          )}
        </>
      )}
    </div>
  );
};
