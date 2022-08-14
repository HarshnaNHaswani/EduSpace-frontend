import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PlaylistDataType } from "__types__/context/userContext.types";
import playlistStyles from "./playlist.module.css";

export const EmptyPlaylistCard = ({playlist}: {playlist: PlaylistDataType}) => {
  return (
    <div
      className={`${playlistStyles.playlistCard} ${playlistStyles.emptyPlaylist}`}
    >
      <FontAwesomeIcon
        icon={faVideo}
        className={playlistStyles.emptyPlaylistIcon}
      />
      <h2 className={""}>{playlist.name}</h2>
    </div>
  );
};
