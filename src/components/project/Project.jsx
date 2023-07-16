import "./project.css";
import Projects from "./Projects";

const Project = () => {
  return (
    <section className="projectSection" id="project">
      <h2 className="sectionTitle">Projects</h2>
      <span className="sectionSubtitle">Most Recent</span>

      <Projects />
    </section>
  );
};

export default Project;
