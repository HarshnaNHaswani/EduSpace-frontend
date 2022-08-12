import axios from "axios";
import { AuthorizedGetType, AddType, RemoveType } from  "__types__/services/services.types";

export const getAllLikedVideosService = async ({ token }:AuthorizedGetType) =>
  await axios.get(
    `/api/user/likes`,
    {
      headers: {
        authorization: token,
      },
    }
  );
export const likeVideoService = async ({ token, video}:AddType) =>
  await axios.post(
    `/api/user/likes`,
    {video},
    {
      headers: {
        authorization: token,
      },
    }
  );
  export const removeVideoFromLikeService = async ({ token, videoId}:RemoveType) =>
  await axios.delete(
    `/api/user/likes/${videoId}`,
    {
      headers: {
        authorization: token,
      },
    }
  );
// -----------------------------------------------
export const getAllDislikedVideosService = async ({ token }:AuthorizedGetType) =>
  await axios.get(
    `/api/user/dislikes`,
    {
      headers: {
        authorization: token,
      },
    }
  );
export const dislikeVideoService = async ({ token, video}:AddType) =>
  await axios.post(
    `/api/user/dislikes`,
    {video},
    {
      headers: {
        authorization: token,
      },
    }
  );
  export const removeVideoFromDislikeService = async ({ token, videoId}:RemoveType) =>
  await axios.delete(
    `/api/user/dislikes/${videoId}`,
    {
      headers: {
        authorization: token,
      },
    }
  );
