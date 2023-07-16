import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Miscellaneous from "./Miscellaneous";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="sectionTitle">Skills</h2>
      <span className="sectionSubtitle"></span>

      <div className="skillsContainer container grid">
        <Frontend />
        <Backend />
        <Miscellaneous />
      </div>
    </section>
  );
};

export default Skills;
