import {
  faClock,
  faClockRotateLeft,
  faPhotoFilm,
  faQuestion,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "context/user-context";
import { Link } from "react-router-dom";

export const Profile = () => {
  const {
    userState: {
      error,
      loading,
      user: { info },
    },
  } = useUser();
  return (
    <div>
      <h2>Hi, {info.username.toUpperCase()}</h2>
      <p>Associated Email: {info.email}</p>
      <p>
        <small>Joined: {info.createdAt}</small>
        <small>Last Updated: {info.updatedAt}</small>
      </p>
      <Link to="/auth/update-password">Update Password</Link>

      <hr />
      <section className={'flex-col'}>
        <Link to="/user/liked-videos">
          <FontAwesomeIcon className={`icon`} icon={faThumbsUp} />
          <span>Liked Videos</span>
        </Link>
        <Link to="/user/watch-history">
          <FontAwesomeIcon className={`icon`} icon={faClockRotateLeft} />
          <span>History</span>
        </Link>
        <Link to="/user/playlists" className="">
          <FontAwesomeIcon className={`icon`} icon={faPhotoFilm} />
          <span>Playlists</span>
        </Link>

        <Link to="/user/watch-later" className="">
          <FontAwesomeIcon className={`icon`} icon={faClock} />
          <span>Watch Later</span>
        </Link>
        <Link to="/user/bookmarked-quizzes" className="">
          <FontAwesomeIcon className={`icon`} icon={faQuestion} />
          <span>Bookmarked Quizzes</span>
        </Link>
      </section>
    </div>
  );
};
