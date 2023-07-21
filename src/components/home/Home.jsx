import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Home = ({ setActiveNav }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const { ref: contentRef, inView: inView2 } = useInView({
    rootMargin: "-250px",
  });

  useEffect(() => {
    if (inView2) {
      setActiveNav("#home");
    }
  }, [inView2, setActiveNav]);

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
        <div ref={contentRef} className="homeContent grid">
          <Social inView={inView} />
          <div className={inView ? "homeImg homeShift" : "homeImg"}> </div>
          <Data inView={inView} />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
