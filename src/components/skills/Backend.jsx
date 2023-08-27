import exIcon from "../../assets/expressIcon.png";

const Backend = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">Backend</h3>

      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <i class="bx bxl-nodejs"></i>

            <div>
              <h3 className="skillsName">NodeJS</h3>
              <span className="skillsLevel">Proficient</span>
            </div>
          </div>

          <div className="skillsData">
            {/* <i class="bx bx-badge-check"></i> */}
            <div className="expressIcon">
              <img src={exIcon} alt="" className="expressIconImg" />
            </div>

            <div>
              <h3 className="skillsName">ExpressJS</h3>
              <span className="skillsLevel">Proficient</span>
            </div>
          </div>

          <div className="skillsData">
            <i class="bx bxl-mongodb"></i>

            <div>
              <h3 className="skillsName">MongoDB</h3>
              <span className="skillsLevel">Proficient</span>
            </div>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsData">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skillsName">REST API</h3>
              <span className="skillsLevel">Proficient</span>
            </div>
          </div>

          <div className="skillsData">
            <i class="bx bxl-python"></i>

            <div>
              <h3 className="skillsName">Python</h3>
              <span className="skillsLevel">Basic</span>
            </div>
          </div>

          <div className="skillsData">
            <i class="bx bxl-c-plus-plus"></i>

            <div>
              <h3 className="skillsName">C++</h3>
              <span className="skillsLevel">Prior Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
