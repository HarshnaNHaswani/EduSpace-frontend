import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";

export function ToggleMenu({
  menu,
  setMenu,
  classes,
  title = "",
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
  classes: string;
  title?: string;
}) {
  return (
    <button
      title={title ?? "Menu"}
      onClick={() => {
        setMenu((prev: boolean) => !prev);
      }}
      className={classes}
    >
      <FontAwesomeIcon icon={menu ? faXmark : faBars} />
    </button>
  );
}

