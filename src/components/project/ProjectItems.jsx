const ProjectItems = ({ item }) => {
  return (
    <div className="projectCard">
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
