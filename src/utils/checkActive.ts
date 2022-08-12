import layoutStyles from "components/BaseLayout/baselayout.module.css";

export const checkActive = ({ isActive }: { isActive: boolean }):string =>
  isActive ? layoutStyles.active : "";
