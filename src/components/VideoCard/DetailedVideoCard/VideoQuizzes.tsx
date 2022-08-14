import { useQuizzes } from "context/quizzes-context";
import { VideoDataType } from "__types__/context/videosContext.types";

export function VideoQuizzes({ video }: { video: VideoDataType }) {
  const {
    quizzesState: { quizzes, loadState },
  } = useQuizzes();
  return (
    <section>
      <h5>Related Quizzes</h5>
      {loadState && <p>Loading Quizzes......</p>}
      {!loadState && (
        <ul className="list list-bulleted" key={`quizzes-${video._id}`}>
          {video?.relatedQuizzes.map((quizId) =>
            quizzes?.map((currentQuiz) => {
              if (currentQuiz._id === quizId)
                return (
                  <li
                    className={`list-item`}
                    key={`quizzes-${video._id}-${quizId}`}
                  >
                    {currentQuiz.title}
                  </li>
                );
            })
          )}
        </ul>
      )}
    </section>
  );
}
