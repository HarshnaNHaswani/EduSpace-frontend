import { VideoPlayer } from "components/VideoPlayer";
import React from "react";
import { PlaylistDataType } from "__types__/context/userContext.types";
import playlistStyles from "./playlist.module.css";

export const PlaylistCard = ({ playlist }: { playlist: PlaylistDataType }) => {
  return (
    <article className={playlistStyles.playlistCard}>
      <VideoPlayer
        src={playlist.videos[0].src}
        showControls={false}
        size="xs"
        additionalClass="playlist-card-video-player"
      />
      <h2 className={""}>{playlist.name}</h2>
    </article>
  );
};
