import {
  faThumbsDown as dislike,
  faThumbsUp as like,
} from "@fortawesome/free-regular-svg-icons";
import {
  faThumbsDown as disliked,
  faThumbsUp as liked,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "context/auth-context";
import { useUser } from "context/user-context";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VideoDataType } from "__types__/context/videosContext.types";
import videoCardStyles from "../videoCard.module.css";
import { AddVideoToList } from "./AddVideoToList/AddVideoToList";
import detailedVideoCardStyles from "./detailedVideoCard.module.css";
export function PrimaryVideoContent({ video }: { video: VideoDataType }) {
  const {
    userState: {
      user: { likesState, dislikesState },
    },
    likeVideo,
    dislikeVideo,
    removeVideoFromDislikes,
    removeVideoFromLikes,
  } = useUser();
  const {
    authData: { isAuth },
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const [icon, setIcon] = useState({
    like: false,
    dislike: false,
  });
  const likeButtonHandler = (likedVideo: VideoDataType) => {
    if (!isAuth) {
      icon.like
        ? localStorage.setItem("removedLike", JSON.stringify(likedVideo))
        : localStorage.setItem("liked", JSON.stringify(likedVideo));

      navigate("/auth/login", { state: { from: location } });
    } else {
      if (icon.like) {
        removeVideoFromLikes(likedVideo._id);
        if (likedVideo.src === video.src)
          setIcon((prev) => ({ ...prev, like: false }));
      }
      if (!icon.like) {
        likeVideo(likedVideo);
        if (likedVideo.src === video.src)
          setIcon((prev) => ({ ...prev, like: true, dislike: false }));
      }
    }
  };
  const dislikeButtonHandler = (dislikedVideo: VideoDataType) => {
    if (!isAuth) {
      icon.dislike
        ? localStorage.setItem("removedDislike", JSON.stringify(dislikedVideo))
        : localStorage.setItem("disliked", JSON.stringify(dislikedVideo));
      navigate("/auth/login", { state: { from: location } });
    } else {
      if (icon.dislike) {
        removeVideoFromDislikes(dislikedVideo._id);
        if (dislikedVideo.src === video.src)
          setIcon((prev) => ({ ...prev, dislike: false }));
      }
      if (!icon.dislike) {
        dislikeVideo(dislikedVideo);
        if (dislikedVideo.src === video.src)
          setIcon((prev) => ({ ...prev, like: false, dislike: true }));
      }
    }
  };
  useEffect(() => {
    if (isAuth) {
      if (
        likesState.likes.some((currentVideo) => video._id === currentVideo._id)
      )
        setIcon((prev) => ({ ...prev, like: true, dislike: false }));
      if (
        dislikesState.dislikes.some(
          (currentVideo) => video._id === currentVideo._id
        )
      )
        setIcon((prev) => ({ ...prev, dislike: true, like: false }));
    }

    const dislikedVideo = JSON.parse(localStorage.getItem("disliked") ?? "{}");
    const likedVideo = JSON.parse(localStorage.getItem("liked") ?? "{}");
    const removedFromLike = JSON.parse(
      localStorage.getItem("removedLike") ?? "{}"
    );
    const removedFromDislike = JSON.parse(
      localStorage.getItem("removedDislike") ?? "{}"
    );

    if (Object.keys(dislikedVideo).length) {
      localStorage.removeItem("disliked");
      dislikeButtonHandler(dislikedVideo);
    }
    if (Object.keys(likedVideo).length) {
      localStorage.removeItem("liked");
      likeButtonHandler(likedVideo);
    }
    if (Object.keys(removedFromLike).length) {
      localStorage.removeItem("removedLike");
      likeButtonHandler(removedFromLike);
    }
    if (Object.keys(removedFromDislike).length) {
      localStorage.removeItem("removedDislike");
      likeButtonHandler(removedFromDislike);
    }
    if (!isAuth) {
      setIcon({
        like: false,
        dislike: false,
      });
    }
  }, [isAuth]);
  return (
    <div className={`${detailedVideoCardStyles.primaryContent}`}>
      <section className={`${videoCardStyles.videoData}`}>
        <h4>{video.title}</h4>
        {video.creator && <small>{video.creator}</small>}
        {video.createdAt && <small>{video.createdAt}</small>}
      </section>
      <section className={`${detailedVideoCardStyles.videoActions}`}>
        <button onClick={() => likeButtonHandler(video)}>
          <FontAwesomeIcon icon={icon.like ? liked : like} />
        </button>
        <button onClick={() => dislikeButtonHandler(video)}>
          <FontAwesomeIcon icon={icon.dislike ? disliked : dislike} />
        </button>
        <AddVideoToList video={video} />
      </section>
    </div>
  );
}
// const likeButtonHandler = () => {
//   if (icon.like) {
//     //remove item from like
//   } else {
//     //add item to like
//     // changed in mirageJs👇
//     // if item in dislike, remove from dislike
//   }
// };
// const dislikeButtonHandler = () => {
//   if (icon.dislike) {
//     //remove item from dislike
//   } else {
//     //add item to dislike
//     // if item in like, remove from like
//   }
// };
