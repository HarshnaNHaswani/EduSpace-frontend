import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Liked Videos are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting videos from user's likes or dislikes.
 * send GET Request at
 * /api/user/likes
 * /api/user/dislikes
 * */
export const getLikedVideosHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    return new Response(200, {}, { likes: user.likes });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
export const getDislikedVideosHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    return new Response(200, {}, { dislikes: user.dislikes });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding videos to user's likes or dislikes.
 * send POST Request at
 * /api/user/likes
 * /api/user/dislikes
 * body contains {video}
 * */

export const addItemToLikedVideos = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const { video } = JSON.parse(request.requestBody);
    if (user.likes.some((item) => item._id === video._id)) {
      return new Response(
        409,
        {},
        {
          errors: ["The video is already in your liked videos"],
        }
      );
    }
    //remove from dislikes
    const filteredDislikes = user.dislikes.filter(
      (item) => video._id !== item._id
    );
    this.db.users.update({ dislikes: filteredDislikes });

    user.likes.push(video);

    return new Response(
      201,
      {},
      { likes: user.likes, dislikes: filteredDislikes }
    );
  }
  return new Response(
    404,
    {},
    {
      errors: ["The email you entered is not Registered. Not Found error"],
    }
  );
};
export const addItemToDislikedVideos = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const { video } = JSON.parse(request.requestBody);
    if (user.dislikes.some((item) => item._id === video._id)) {
      return new Response(
        409,
        {},
        {
          errors: ["The video is already in your disliked videos"],
        }
      );
    }
    //remove from likes
    const filteredLikes = user.likes.filter((item) => video._id !== item._id);
    this.db.users.update({ likes: filteredLikes });

    user.dislikes.push(video);

    return new Response(
      201,
      {},
      { dislikes: user.dislikes, likes: filteredLikes }
    );
  }
  return new Response(
    404,
    {},
    {
      errors: ["The email you entered is not Registered. Not Found error"],
    }
  );
};

/**
 * This handler handles removing videos from user's likes or dislikes.
 * send DELETE Request at
 *  /api/user/likes/:videoId,
 *  /api/user/dislikes/:videoId
 * */

export const removeItemFromLikedVideos = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const videoId = request.params.videoId;
    const filteredLikes = user.likes.filter((item) => item._id !== videoId);
    this.db.users.update({ likes: filteredLikes });
    return new Response(200, {}, { likes: filteredLikes });
  }
  return new Response(
    404,
    {},
    { errors: ["The user you request does not exist. Not Found error."] }
  );
};
export const removeItemFromDislikedVideos = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const videoId = request.params.videoId;
    const filteredDislikes = user.dislikes.filter(
      (item) => item._id !== videoId
    );
    this.db.users.update({ dislikes: filteredDislikes });
    return new Response(200, {}, { dislikes: filteredDislikes });
  }
  return new Response(
    404,
    {},
    { errors: ["The user you request does not exist. Not Found error."] }
  );
};
