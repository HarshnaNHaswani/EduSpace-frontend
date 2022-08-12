import axios from "axios";
import { AuthorizedGetType, AddType, RemoveType } from "__types__/services/services.types";
export const getAllHistoryVideosService = async ({ token }:AuthorizedGetType) =>
  await axios.get(
    `/api/user/history`,
    {
      headers: {
        authorization: token,
      },
    }
  );
  export const addVideotoHistoryService = async ({ token, video}:AddType) =>
  await axios.post(
    `/api/user/history`,
    {video},
    {
      headers: {
        authorization: token,
      },
    }
  );
  export const removeVideoFromHistoryService = async ({ token, videoId}:RemoveType) =>
  await axios.delete(
    `/api/user/history/${videoId}`,
    {
      headers: {
        authorization: token,
      },
    }
  );
  export const clearHistoryService = async ({ token}:AuthorizedGetType) =>
  await axios.delete(
    `/api/user/history/all`,
    {
      headers: {
        authorization: token,
      },
    }
  );