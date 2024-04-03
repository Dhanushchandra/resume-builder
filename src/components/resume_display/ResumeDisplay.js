import "./resumedisplay.css";

const ResumeDisplay = ({
  personal,
  profile,
  skills,
  achievements,
  projects,
  education,
  certifications,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h1 className="text-center">Resume</h1>
      <div
        className="print-container"
        style={{
          width: "800px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          className="container  p-5"
          style={{
            fontSize: "12px",
          }}
        >
          {/* Personal Details */}
          <div className="row">
            <h1>{personal.name}</h1>
            <div className="row">
              <div className="col">
                {personal.phone} | {personal.email}
              </div>
            </div>
            <div className="row">
              <div>
                <a href={personal.linkedin}>{personal.linkedin}</a> |
              </div>
              <div>
                <a href={personal.github}>{personal.github}</a>{" "}
              </div>
            </div>
            <div className="row">
              <div>{personal.address}</div>
            </div>
          </div>
          <hr></hr>
          {/* Profile */}
          <div className="row">
            <h6>PROFILE</h6>
            <p>{profile}</p>
          </div>
          <hr></hr>
          {/* Skills */}
          <div className="row">
            <h6>SKILLS</h6>
            <div className="row">
              <div className="col">
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr></hr>
          {/* Achievements */}
          <div className="row">
            <h6>ACHIEVEMENTS</h6>
            <div className="col">
              {achievements.map((achiev, index) => (
                <p key={index}>{achiev}</p>
              ))}
            </div>
          </div>
          <hr></hr>
          {/* PROJECTS */}
          <div className="row">
            <h6>PROJECTS</h6>
            <div className="col">
              {projects.map((project, index) => (
                <p key={index}>{project}</p>
              ))}
            </div>
          </div>
          <hr></hr>
          {/* EDUCATION */}
          <div className="row">
            <h6>EDUCATION</h6>
            <div className="col">
              {education.map((edu, index) => (
                <p key={index}>{edu}</p>
              ))}
            </div>
          </div>
          <hr></hr>
          {/* CERTIFICATION */}
          <div className="row">
            <h6>CERTIFICATION</h6>
            <div className="col">
              {certifications.map((certi, index) => (
                <p key={index}>{certi}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Print Button */}
      <div className="row">
        <div className="col text-center mb-4">
          <button className="btn btn-primary" onClick={handlePrint}>
            Print Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeDisplay;
