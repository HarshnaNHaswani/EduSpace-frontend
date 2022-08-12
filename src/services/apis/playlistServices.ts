import axios from "axios";
import { AuthorizedGetType,  RemoveType, GetItemType, AddToPlaylistType, RemoveFromPlaylistType, AddPlaylistType } from "__types__/services/services.types";

export const getAllPlaylistsService = async ({ token }:AuthorizedGetType) =>
  await axios.get(
    `/api/user/playlists`,
    {
      headers: {
        authorization: token,
      },
    }
  );
export const addPlaylistService = async ({ token, playlist  }: AddPlaylistType) =>
  await axios.post(
    `/api/user/playlists`,
    {playlist},
    {
      headers: {
        authorization: token,
      },
    }
  );
  export const removePlaylistService = async ({ token, playlistId}:RemoveType) =>
  await axios.delete(
    `/api/user/playlists/${playlistId}`,
    {
      headers: {
        authorization: token,
      },
    }
  );
export const getPlaylistService = async ({ token, playlistId}:GetItemType) =>
  await axios.get(
    `/api/user/playlists/${playlistId}`,
    {
      headers: {
        authorization: token,
      },
    }
  );
export const addVideoToPlaylistService = async ({ token, playlistId, video}:AddToPlaylistType) =>
  await axios.post(
    `/api/user/playlists/${playlistId}`,
    {video},
    {
      headers: {
        authorization: token,
      },
    }
  );
  export const removeVideoFromPlaylistService = async ({ token, playlistId, videoId}:RemoveFromPlaylistType) =>
  await axios.delete(
    `/api/user/playlists/${playlistId}/${videoId}`,
    {
      headers: {
        authorization: token,
      },
    }
  );