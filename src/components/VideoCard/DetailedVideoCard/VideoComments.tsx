import { useState } from "react";
import { VideoDataType } from "__types__/context/videosContext.types";
import videoCardStyles from "../videoCard.module.css";
import detailedVideoCardStyles from "./detailedVideoCard.module.css";

export function VideoComments({ video }: { video: VideoDataType }) {
  const [comment, setComment] = useState("");
  const commentInputChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setComment(event.target.value);
  };
  return (
    <section className={detailedVideoCardStyles.commentBox}>
      <h5>{video?.comments.length ?? 0} Comments</h5>
      <section className={`${detailedVideoCardStyles.commentInputSection}`}>
        <label htmlFor="comment-input">Share your feedback</label>
        <textarea
          name="comment-input"
          id="comment-input"
          minLength={1}
          maxLength={200}
          value={comment}
          onChange={commentInputChangeHandler}
          rows={4}
          cols={50}
        />
        <button
          className={`${videoCardStyles.btn} ${detailedVideoCardStyles.btn}`}
        >
          Comment
        </button>
      </section>
      <hr className="horizontal-rule " />
      {!(video?.comments.length > 0) && (
        <h6>Be the first one to write a comment</h6>
      )}
      <ul className="list" key={`comments-${video._id}`}>
        {video?.comments.map((comment, index) => (
          <li
            className="list-item"
            key={`comments-${video._id}-${comment.userId}-${index}`}
          >
            <span className="user-name">{comment.userId}</span>
            {comment.comment}
          </li>
        ))}
      </ul>
    </section>
  );
}
