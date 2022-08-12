import axios from "axios";
import { AuthorizedGetType, AddType, RemoveType } from  "__types__/services/services.types";

export const getAllWatchLaterVideosService = async ({ token }:AuthorizedGetType) =>
  await axios.get(
    `/api/user/watchlater`,
    {
      headers: {
        authorization: token,
      },
    }
  );
  export const addVideotoWatchlaterService = async ({ token, video}:AddType) =>
  await axios.post(
    `/api/user/watchlater`,
    {video},
    {
      headers: {
        authorization: token,
      },
    }
  );
  export const removeVideoFromWatchlaterService = async ({ token, videoId}:RemoveType) =>
  await axios.delete(
    `/api/user/watchlater/${videoId}`,
    {
      headers: {
        authorization: token,
      },
    }
  );