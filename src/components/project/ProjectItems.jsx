import { useInView } from "react-intersection-observer";

const ProjectItems = ({ item }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={inView ? "projectCard projectCardTransit" : "projectCard"}
    >
      <img src={item.image} alt="" className="projectImg" />
      <h3 className="projectTitle">{item.title}</h3>
      <div className="projectDesc">{item.description}</div>
      <div className="projectLinkContainer">
        <a href={item.viewLink} className="projectButton" target="_blank">
          View Live <i className="bx bx-right-arrow-alt projectButtonIcon"></i>
        </a>
        <a href={item.codeLink} className="projectButton" target="_blank">
          View Code <i className="bx bx-right-arrow-alt projectButtonIcon"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
