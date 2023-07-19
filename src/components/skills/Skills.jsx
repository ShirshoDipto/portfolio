import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Miscellaneous from "./Miscellaneous";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = ({ setActiveNav }) => {
  const { ref: mainRef, inView } = useInView({
    threshold: 0,
  });
  const { ref: contentRef, inView: inView2 } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView2) {
      setActiveNav("#skills");
    }
  }, [inView2, setActiveNav]);

  return (
    <section className="skills section" id="skills">
      <h2 className="sectionTitle">Skills</h2>
      <span className="sectionSubtitle"></span>

      <div
        ref={mainRef}
        className={`skillsContainer container grid ${
          inView ? "skillsVisible" : ""
        }`}
      >
        <Frontend contentRef={contentRef} />
        <Backend />
        <Miscellaneous />
      </div>
    </section>
  );
};

export default Skills;
