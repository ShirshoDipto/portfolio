import { projectsData } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = ({ contentRef }) => {
  // const [projects, setProjects] = useState([]);
  // const [item, setItem] = useState({ name: "All" });
  // const [active, setActive] = useState(0);

  // useEffect(() => {
  //   if (item.name === "All") {
  //     setProjects(projectsData);
  //   } else {
  //     const newProjects = projectsData.filter((project) => {
  //       return project.category.includes(item.name);
  //     });

  //     setProjects(newProjects);
  //   }
  // }, [item]);

  return (
    <div>
      {/* <div className="projectFilters">
        {projectsNav.map((item, index) => {
          return (
            <span
              key={index}
              className={
                active === index ? "activeProject projectItem" : "projectItem"
              }
              onClick={(e) => {
                setItem({ name: e.target.textContent });
                setActive(index);
              }}
            >
              {item.name}
            </span>
          );
        })}
      </div> */}

      <div ref={contentRef} className="projectContainer container grid">
        {projectsData.map((item) => {
          return <ProjectItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
