import { Playlist } from "components/Playlist";
import { useUser } from "context/user-context";
import { useParams } from "react-router-dom";

export const SinglePlaylistVideo = () => {
  const {
    userState: {
      user: { playlistsState },
      error,
      loading,
    },
    removeVideoFromPlaylist,
  } = useUser();

  const { id, videoId } = useParams();

  console.log(id, videoId);

  const currentPlaylist = playlistsState.playlists.find(
    (playlist) => playlist.data._id === id?.toString()
  );

  return (
    <div>
      <h2>
        Playlist: <span>{currentPlaylist?.data?.name}</span>
      </h2>
      {(error || playlistsState.error || currentPlaylist?.error) && (
        <p>{error ?? playlistsState.error ?? currentPlaylist?.error}</p>
      )}
      {(loading || playlistsState.loadState || currentPlaylist?.loadState) && (
        <p>Loading...</p>
      )}

      {!error &&
        !playlistsState.error &&
        !currentPlaylist?.error &&
        !loading &&
        !playlistsState.loadState &&
        !currentPlaylist?.loadState && (
          <>
            {!currentPlaylist?.data._id && <p>Playlist Not Found</p>}
            {currentPlaylist?.data.videos.length ? (
              <Playlist
                videos={currentPlaylist.data.videos}
                key={`playlist-${currentPlaylist.data._id}`}
                keyVal={`playlist-${currentPlaylist.data._id}`}
                removeFn={(videoId) =>
                  removeVideoFromPlaylist(videoId, currentPlaylist.data._id)
                }
                start={videoId}
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
