import React from "react";
// import { initialState } from "context/user-context";
import { Playlist } from "components/Playlist";
import { UserStateType } from "__types__/context/userContext.types";
import { useUser } from "context/user-context";

export const WatchLater = () => {
  const {
    userState: {
      user: { watchlaterState },
      error,
      loading,
    },
    removeVideoFromWatchlater
  } = useUser();

  const { watchlater } = watchlaterState;
  return (
    <div>
      <h2>Watch Later</h2>
      {(loading || watchlaterState.loadState) && <p>loading...</p>}
      {(error || watchlaterState.error) && (
        <p>{error ?? watchlaterState.error}</p>
      )}

      {!error && !loading && (
        <>
          {!watchlater.length && (
            <p>
              <img
                src={`https://res.cloudinary.com/harshna/image/upload/v1659885582/vidLib/categoryIcon/undraw_void_-3-ggu_atiae1.svg`}
                alt=""
                className="icon icon-lg"
              />
              No Videos Added
            </p>
          )}
          {watchlater.length > 0 && (
            <Playlist
              videos={watchlater}
              key={`watchlater`}
              keyVal={"watchlater"}
              removeFn={removeVideoFromWatchlater}
            />
          )}
        </>
      )}
    </div>
  );
};
