import { Playlist } from "components/Playlist";
import { VideoCard } from "components/VideoCard/BasicVideoCard.tsx";
import { useUser } from "context/user-context";

export const History = () => {
  const {
    userState: {
      user: { historyState },
      error,
      loading,
    },
    removeVideoFromWatchHistory,
  } = useUser();
  return (
    <div>
      <h2>Watch History</h2>
      {(error || historyState.error) && <p>{error ?? historyState.error}</p>}
      {(loading || historyState.loadState) && <p>Loading...</p>}

      {!error && !historyState.error && !loading && !historyState.loadState && (
        <>
          {historyState.history.length ? (
            <Playlist
              videos={historyState.history}
              key={`history`}
              keyVal={`history`}
              removeFn={removeVideoFromWatchHistory}
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
