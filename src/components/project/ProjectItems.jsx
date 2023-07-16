const ProjectItems = ({ item }) => {
  return (
    <div className="projectCard">
      <img src={item.image} alt="" className="projectImg" />
      <h3 className="projectTitle">{item.title}</h3>
      <a href="#" className="projectButton">
        Demo <i className="bx bx-right-arrow-alt projectButtonIcon"></i>
      </a>
    </div>
  );
};

export default ProjectItems;
