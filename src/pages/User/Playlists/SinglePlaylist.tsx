import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Playlist } from "components/Playlist";
import { TitleOnlyVideoCard } from "components/VideoCard/TitleOnlyVideoCard";
import { useUser } from "context/user-context";
import { Link, useParams } from "react-router-dom";
import playlistPageStyles from "./playlistPage.module.css";
export const SinglePlaylist = () => {
  const {
    userState: {
      user: { playlistsState },
      error,
      loading,
    },
    removeVideoFromPlaylist,
  } = useUser();

  const { id } = useParams();

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
            {currentPlaylist?.data?.videos.length ? (
              <section className={playlistPageStyles.playlistListing}>
                {currentPlaylist?.data?.videos.map((video) => (
                  <div
                    className={playlistPageStyles.cardWrapper}
                    key={`playlist-listing-${currentPlaylist.data._id}-${video._id}`}
                  >
                    <button
                      onClick={() =>
                        removeVideoFromPlaylist(
                          video._id,
                          currentPlaylist.data._id
                        )
                      }
                      className={playlistPageStyles.btnDelete}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                    <Link
                      to={`/user/playlists/${currentPlaylist.data._id}/videos/${video._id}`}
                    >
                      <TitleOnlyVideoCard video={video} />
                    </Link>
                  </div>
                ))}
              </section>
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
