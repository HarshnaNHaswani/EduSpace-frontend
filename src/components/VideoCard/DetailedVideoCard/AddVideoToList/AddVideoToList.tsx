import {
  faCirclePlus,
  faCross,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "context/auth-context";
import { initialState, useUser } from "context/user-context";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VideoDataType } from "__types__/context/videosContext.types";
import { IdType } from "__types__/typeUtils/base.types";
import addVideoToListStyles from "./addVideoToList.module.css";
// TODO: increase/decrease likes/dislikes count from video
export function AddVideoToList({ video }: { video: VideoDataType }) {
  const {
    userState: {
      user: { watchlaterState, playlistsState },
    },
    addPlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    addVideoToWatchLater,
    removeVideoFromWatchlater,
  } = useUser();
  const {
    authData: { isAuth },
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isInWatchLater, setInWatchlater] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [hidePlaylist, setHidePlaylist] = useState({
    container: true,
    input: true,
  });
  const isVideoInPlaylist = (videos: VideoDataType[]) =>
    videos?.some((currentVideo) => currentVideo._id === video._id);

  const toggleInWatchLater = async () => {
    if (isInWatchLater) {
      const response = await removeVideoFromWatchlater(video._id);
      if (response) setInWatchlater(false);
      //else toast failure
    } else {
      const response = await addVideoToWatchLater(video);
      if (response) setInWatchlater(true);
      //else toast failure
    }
  };

  const toggleInPlaylist = (
    event: React.ChangeEvent<HTMLInputElement>,
    playlistId: IdType
  ) => {
    if (event.target.checked) {
      addVideoToPlaylist(video, playlistId);
      //else toast failure
    } else {
      removeVideoFromPlaylist(video._id, playlistId);
      //else toast failure
    }
  };

  const addVideoToListHandler = () => {
    if (!isAuth) {
      navigate("/auth/login", { state: { from: location } });
    } else setHidePlaylist((prev) => ({ ...prev, container: false }));
  };

  const addNewPlaylistHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      if (!newPlaylistName.trim()) return;
      addPlaylist(newPlaylistName, video);
    }
    if (event.key === "Enter" || event.key === "Escape") {
      setNewPlaylistName("");
      setHidePlaylist((prev) => ({ ...prev, input: true }));
    }
  };

  useEffect(() => {
    if (
      watchlaterState?.watchlater?.some(
        (watchlaterVideo) => watchlaterVideo._id === video._id
      )
    ) {
      if (!isInWatchLater) setInWatchlater(true);
    } else if (isInWatchLater) setInWatchlater(false);
  }, [watchlaterState?.watchlater]);

  return (
    <article className={addVideoToListStyles.mainContainer}>
      <button onClick={addVideoToListHandler}>
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
      <div
        className={`${
          hidePlaylist.container ? addVideoToListStyles.hide : ""
        } ${addVideoToListStyles.playlistContainer}`}
      >
        <button className={addVideoToListStyles.btnClose}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() =>
              setHidePlaylist((prev) => ({
                ...prev,
                input: true,
                container: true,
              }))
            }
          />
        </button>
        <fieldset>
          <legend>Add Video To Playlist</legend>
          <p>
            <input
              type="checkbox"
              name="choice-watchlater"
              id="choice-watchlater"
              checked={isInWatchLater}
              onChange={toggleInWatchLater}
            />
            <label htmlFor="choice-watchlater">Watch later</label>
          </p>
          {playlistsState?.playlists?.map((playlist) => (
            <p key={`${video._id}-choice-playlist-${playlist.data._id}`}>
              <input
                type="checkbox"
                name={`${video._id}-choice-playlist`}
                id={`${video._id}-choice-playlist-${playlist.data._id}`}
                checked={isVideoInPlaylist(playlist.data.videos)}
                onChange={(event) => toggleInPlaylist(event, playlist.data._id)}
              />
              <label
                htmlFor={`${video._id}-choice-playlist-${playlist.data._id}`}
              >
                {playlist.data.name}
              </label>
            </p>
          ))}
        </fieldset>
        <button className={hidePlaylist.input ? "" : addVideoToListStyles.hide}>
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() =>
              setHidePlaylist((prev) => ({ ...prev, input: false }))
            }
          />
        </button>

        <input
          type="text"
          name="new-list-name"
          id="new-list-name"
          placeholder="enter playlist name"
          className={hidePlaylist.input ? addVideoToListStyles.hide : ""}
          value={newPlaylistName}
          onChange={(event) => setNewPlaylistName(event.target.value)}
          onKeyDown={addNewPlaylistHandler}
        />
      </div>
    </article>
  );
}
