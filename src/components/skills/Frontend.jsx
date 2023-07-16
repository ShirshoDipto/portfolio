const Frontend = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">Frontend</h3>

      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <i class="bx bxl-html5"></i>

            <div>
              <h3 className="skillsName">HTML</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>

          <div className="skillsData">
            <i class="bx bxl-css3"></i>

            <div>
              <h3 className="skillsName">CSS</h3>
              <span className="skillsLevel">Basic</span>
            </div>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsData">
            <i class="bx bxl-javascript"></i>

            <div>
              <h3 className="skillsName">JavaScript</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>

          <div className="skillsData">
            <i class="bx bxl-react"></i>

            <div>
              <h3 className="skillsName">ReactJS</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
