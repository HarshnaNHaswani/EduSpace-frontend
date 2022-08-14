import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmptyPlaylistCard } from "components/Playlist/EmptyPlaylistCard";
import { PlaylistCard } from "components/Playlist/PlaylistCard";
import { useUser } from "context/user-context";
import { Link, useNavigate } from "react-router-dom";
import playlistPageStyles from "./playlistPage.module.css";

export const Playlists = () => {
  const {
    userState: {
      user: { playlistsState },
      error,
      loading,
    },
    removePlaylist,
  } = useUser();
  const navigate = useNavigate();
  return (
    <div>
      <h2>Playlists</h2>
      {(error || playlistsState.error) && (
        <p>{error ?? playlistsState.error}</p>
      )}
      {(loading || playlistsState.loadState) && <p>Loading...</p>}

      {!error &&
        !playlistsState.error &&
        !loading &&
        !playlistsState.loadState && (
          <>
            {playlistsState.playlists?.length ? (
              <section className={playlistPageStyles.playlistListing}>
                {playlistsState.playlists.map((playlist) => (
                  <div className={playlistPageStyles.cardWrapper}
                  key={`liked-${playlist.data._id}`}
                  >
                    <button
                      onClick={() => removePlaylist(playlist.data._id)}
                      className={playlistPageStyles.btnDelete}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                    <Link
                      to={`/user/playlists/${playlist.data._id}`}
                    >
                      {playlist.data.videos.length ? (
                        <PlaylistCard playlist={playlist.data} />
                      ) : (
                        <EmptyPlaylistCard playlist={playlist.data} />
                      )}
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
                />{" "}
                No playlists Here
              </p>
            )}
          </>
        )}
    </div>
  );
};
