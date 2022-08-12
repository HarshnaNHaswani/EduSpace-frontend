import { VideoPlayer } from "components/VideoPlayer";
import { useCategories } from "context/categories-context";
import { useQuizzes } from "context/quizzes-context";
import { VideoDataType } from "__types__/context/videosContext.types";
import videoCardStyles from "../videoCard.module.css";
import detailedVideoCardStyles from "./detailedVideoCard.module.css";
import { PrimaryVideoContent } from "./PrimaryVideoContent";
import { VideoComments } from "./VideoComments";
import { VideoQuizzes } from "./VideoQuizzes";
import { VideoTags } from "./VideoTags";

export const DetailedVideoCard = ({ video }: { video: VideoDataType }) => {
  const { error: categoriesError } = useCategories();

  const {
    quizzesState: { error: quizzesError },
  } = useQuizzes();

  return (
    <div className={detailedVideoCardStyles.detailedCard}>
      <VideoPlayer
        src={video.src}
        showControls={true}
        muted={false}
        autoplay={true}
        size={"lg"}
        additionalClass={"center-self"}
      />
      <section
        className={`${videoCardStyles.content} ${detailedVideoCardStyles.content}`}
      >
        <PrimaryVideoContent video={video}></PrimaryVideoContent>

        <hr className="horizontal-rule " />
        <ul className="list list-inline" key={`video-data-${video._id}`}>
          <li className="list-item" key={"views"}>
            Views: {video?.views.total}
          </li>
          <li className="list-item" key={"likes"}>
            Likes: {video?.likes}
          </li>
          <li className="list-item" key={"dislikes"}>
            DisLikes: {video?.dislikes}
          </li>
        </ul>
        <hr className="horizontal-rule " />
        <VideoComments video={video}></VideoComments>
        <hr className="horizontal-rule " />
        {!categoriesError && <VideoTags video={video}></VideoTags>}
        <hr className="horizontal-rule " />
        {!quizzesError && <VideoQuizzes video={video}></VideoQuizzes>}
      </section>
    </div>
  );
};
