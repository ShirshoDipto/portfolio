import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section className="home section" id="home">
      <div
        ref={ref}
        className={
          inView
            ? "homeContainer container grid homeVisible"
            : "homeContainer container grid"
        }
      >
        <div className="homeContent grid">
          <Social inView={inView} />
          <div className={inView ? "homeImg homeShift" : "homeImg"}></div>
          <Data inView={inView} />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
