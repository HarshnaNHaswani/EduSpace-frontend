import { useCategories } from "context/categories-context";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IdType } from "__types__/typeUtils/base.types";
import exploreStyles from "./explore.module.css";
export const Explore = () => {
  const { categories, loadState, error } = useCategories();
  const navigate = useNavigate();
  const cardClickHandler = (id: IdType) => {
    navigate(`/channels/${id}`);
  };
  return (
    <div>
      <h2>Explore</h2>

      {loadState && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loadState && !error && (
        <>
          {!(categories.length > 0) && (
            <p>
              <img
                src={`https://res.cloudinary.com/harshna/image/upload/v1659885582/vidLib/categoryIcon/undraw_void_-3-ggu_atiae1.svg`}
                alt=""
                className="icon icon-lg"
              />
              There are no categories
            </p>
          )}
          {categories.length > 0 && (
            <section className="card-container">
              {categories.map((category) => (
                <article
                  key={`categoryPage-${category._id}`}
                  className={`card ${exploreStyles.card}`}
                  title={category.categoryName}
                  onClick={() => cardClickHandler(category._id)}
                >
                  <img
                    src={category.icon}
                    alt={category.categoryName}
                    className={`${exploreStyles.icon} ${
                      category.icon.endsWith(".png") ? exploreStyles.png : ""
                    }`}
                  />
                  <h2 className="card-heading">{category.categoryName}</h2>
                  <p className={`card-content ${exploreStyles.content}`}>
                    {category.description}
                  </p>
                </article>
              ))}
            </section>
          )}
        </>
      )}
    </div>
  );
};
