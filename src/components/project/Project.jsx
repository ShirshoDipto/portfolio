import { useInView } from "react-intersection-observer";
import "./project.css";
import Projects from "./Projects";
import { useEffect } from "react";

const Project = ({ setActiveNav }) => {
  const { ref: contentRef, inView: inView2 } = useInView({
    rootMargin: "-250px",
  });

  useEffect(() => {
    if (inView2) {
      setActiveNav("#project");
    }
  }, [inView2, setActiveNav]);

  return (
    <section className="project section" id="project">
      <h2 className="sectionTitle">Projects</h2>
      <span className="sectionSubtitle">Most Notable</span>

      <Projects contentRef={contentRef} />
    </section>
  );
};

export default Project;
