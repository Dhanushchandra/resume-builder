import { useState } from "react";
import ResumeDisplay from "../resume_display/ResumeDisplay";
import Profile from "../resume_form_components/Profile";
import Skills from "../resume_form_components/Skills";
import Achievements from "../resume_form_components/Achievements";
import Projects from "../resume_form_components/Projects";
import Education from "../resume_form_components/Education";
import Certification from "../resume_form_components/Certification";
import Personal from "../resume_form_components/PersonalDetails";

const ResumeForm2 = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [submitted, setSubmitted] = useState(false);
  const [personal, setPersonal] = useState({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    address: "",
  });
  const [profile, setProfile] = useState("");
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setDisabled(true);
  };

  const handleBlur = (index, value, setState) => {
    setState((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = value;
      return updatedState;
    });
  };

  // const handleAddItem = (setState, e) => {
  //   e.preventDefault();
  //   setState((prevState) => [...prevState, ""]);
  // };

  const handleAddItem = (setState, items, e) => {
    e.preventDefault();
    if (items.length === 0 || items[items.length - 1].trim() !== "") {
      setState((prevState) => [...prevState, ""]);
    }
  };

  const handleRemoveItem = (index, setState) => {
    setState((prevState) => prevState.filter((_, i) => i !== index));
  };

  const renderCurrentStep = () => {
    switch (activeTab) {
      case "personal":
        return (
          <Personal
            personal={personal}
            setPersonal={setPersonal}
            handleNext={() => setActiveTab("profile")}
          />
        );
      case "profile":
        return (
          <Profile
            profile={profile}
            setProfile={setProfile}
            handleBack={() => setActiveTab("personal")}
            handleNext={() => setActiveTab("skills")}
          />
        );
      case "skills":
        return (
          <Skills
            skills={skills}
            handleBlur={handleBlur}
            handleRemoveItem={handleRemoveItem}
            setSkills={setSkills}
            handleAddItem={handleAddItem}
            handleBack={() => setActiveTab("profile")}
            handleNext={() => setActiveTab("achievements")}
          />
        );
      case "achievements":
        return (
          <Achievements
            achievements={achievements}
            handleBlur={handleBlur}
            setAchievements={setAchievements}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
            handleBack={() => setActiveTab("skills")}
            handleNext={() => setActiveTab("projects")}
          />
        );
      case "projects":
        return (
          <Projects
            projects={projects}
            handleBlur={handleBlur}
            setProjects={setProjects}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
            handleBack={() => setActiveTab("achievements")}
            handleNext={() => setActiveTab("education")}
          />
        );
      case "education":
        return (
          <Education
            education={education}
            handleBlur={handleBlur}
            setEducation={setEducation}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
            handleBack={() => setActiveTab("projects")}
            handleNext={() => setActiveTab("certifications")}
          />
        );
      case "certifications":
        return (
          <Certification
            certifications={certifications}
            handleBlur={handleBlur}
            setCertifications={setCertifications}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
            handleBack={() => setActiveTab("education")}
            handleSubmit={handleSubmit}
            disabled={disabled}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div className={`container`}>
        <ul
          className="nav nav-tabs mt-4"
          style={{
            display: submitted ? "none" : "flex",
            justifyContent: "center",
          }}
        >
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "personal" ? "active" : ""}`}
              onClick={() => setActiveTab("personal")}
              style={{
                backgroundColor:
                  activeTab === "personal" ? "#6C757D" : "initial",
                color: activeTab === "personal" ? "#ffffff" : "initial",
              }}
            >
              Personal
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
              style={{
                backgroundColor:
                  activeTab === "profile" ? "#6C757D" : "initial",
                color: activeTab === "profile" ? "#ffffff" : "initial",
              }}
            >
              Profile
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
              style={{
                backgroundColor: activeTab === "skills" ? "#6C757D" : "initial",
                color: activeTab === "skills" ? "#ffffff" : "initial",
              }}
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "achievements" ? "active" : ""
              }`}
              onClick={() => setActiveTab("achievements")}
              style={{
                backgroundColor:
                  activeTab === "achievements" ? "#6C757D" : "initial",
                color: activeTab === "achievements" ? "#ffffff" : "initial",
              }}
            >
              Achievements
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "projects" ? "active" : ""}`}
              onClick={() => setActiveTab("projects")}
              style={{
                backgroundColor:
                  activeTab === "projects" ? "#6C757D" : "initial",
                color: activeTab === "projects" ? "#ffffff" : "initial",
              }}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "education" ? "active" : ""
              }`}
              onClick={() => setActiveTab("education")}
              style={{
                backgroundColor:
                  activeTab === "education" ? "#6C757D" : "initial",
                color: activeTab === "education" ? "#ffffff" : "initial",
              }}
            >
              Education
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "certifications" ? "active" : ""
              }`}
              onClick={() => setActiveTab("certifications")}
              style={{
                backgroundColor:
                  activeTab === "certifications" ? "#6C757D" : "initial",
                color: activeTab === "certifications" ? "#ffffff" : "initial",
              }}
            >
              Certifications
            </button>
          </li>
        </ul>
        <div className="tab-content">
          {submitted ? null : (
            <div className="tab-pane fade show active">
              <form style={{ width: "600px", margin: "auto" }}>
                {renderCurrentStep()}
              </form>
            </div>
          )}
        </div>
      </div>
      {submitted && (
        <ResumeDisplay
          personal={personal}
          profile={profile}
          skills={skills}
          achievements={achievements}
          projects={projects}
          education={education}
          certifications={certifications}
        />
      )}
    </div>
  );
};

export default ResumeForm2;
