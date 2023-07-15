import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="sectionTitle">Qualification</h2>
      <span className="sectionSubtitle">My Personal Journey</span>

      <div className="qualificationContainer container">
        <div className="qualificationTabs">
          <div className="qualificationButton buttonFlex qualificationActive">
            <i className="uil uil-graduation-cap qualificationIcon"></i>
            Education
          </div>

          <div className="qualificationButton buttonFlex">
            <i className="uil uil-briefcase-alt qualificationIcon"></i>
            Experience
          </div>
        </div>

        <div className="qualificationSections">
          <div className="qualificationContent">
            <div className="qualificationData">
              <div>
                <h3 className="qualificationTitle"></h3>
                <span className="qualificationSubtitle"></span>
                <div className="qualificationCalender">
                  <i className="uil uil-calender-alt"></i> 2011 - present
                </div>
              </div>

              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
