import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import searchStyles from "./search.module.css";
type SearchProps = {
  shrinkSize: boolean;
  searchKey: string;
};
export const Search = ({ searchKey, shrinkSize = true }: SearchProps) => {
  const [isFocussed, setIsFocussed] = useState(false);
  const [searchBarWidth, setSearchBarWidth] = useState("16rem");

  useEffect(() => {
    if (shrinkSize)
      isFocussed ? setSearchBarWidth("16rem") : setSearchBarWidth("4rem");
  }, [isFocussed]);
  return (
    <div
      className={`form-item ${searchStyles.searchInputWrapper}`}
      style={{ width: searchBarWidth }}
      onFocus={() => setIsFocussed(true)}
      onBlur={() => setIsFocussed(false)}
    >
      <input
        type="text"
        name="search"
        id={`search-${searchKey}`}
        className="form-input"
        placeholder="search"
        aria-label="search"
        minLength={3}
      />
      <section
        className={`${searchStyles.searchActions} ${
          isFocussed ? "" : searchStyles.hidden
        }`}
      >
        <button
          title="clear search"
          className={`btn btn-icon ${searchStyles.clearSearch}`}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button className={`btn btn-icon ${searchStyles.btnSearch}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </section>
    </div>
  );
};
