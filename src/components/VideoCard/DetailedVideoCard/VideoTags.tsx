import { useCategories } from "context/categories-context";
import { VideoDataType } from "__types__/context/videosContext.types";

export function VideoTags({ video }: { video: VideoDataType }) {
  const { categories, loadState } = useCategories();
  return (
    <section>
      <h5>Related Tags</h5>
      {loadState && <p>Loading Tags......</p>}
      {!loadState && (
        <ul className="list list-inline" key={`tags`}>
          {video?.category.map((categoryId) =>
            categories.map(
              (currentCategory) =>
                currentCategory._id === categoryId && (
                  <li
                    className="list-item"
                    key={`tags-${video._id}-${categoryId}`}
                  >
                    {currentCategory.categoryName} .{" "}
                  </li>
                )
            )
          )}
        </ul>
      )}
    </section>
  );
}
