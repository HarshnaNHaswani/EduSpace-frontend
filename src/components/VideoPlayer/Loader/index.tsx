import playerStyles from "./loaderStyles.module.css";
import Loading from "assets/loading.gif";

export const Loader = ({ className}:{className: string}):JSX.Element => {
  return (
    <section className={`${playerStyles.loadWrapper} ${className}`}>
      <img src={Loading} alt="loading....." />
      <p>Loading.....</p>
    </section>
  );
};
