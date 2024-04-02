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
  const [step, setStep] = useState(1);
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

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleBlur = (index, value, setState) => {
    setState((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = value;
      return updatedState;
    });
  };

  const handleAddItem = (setState, e) => {
    e.preventDefault();
    setState((prevState) => [...prevState, ""]);
  };

  const handleRemoveItem = (index, setState) => {
    setState((prevState) => prevState.filter((_, i) => i !== index));
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Personal setPersonal={setPersonal} handleNext={handleNext} />
          </>
        );
      case 2:
        return (
          <>
            <Profile
              setProfile={setProfile}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </>
        );
      case 3:
        return (
          <>
            <Skills
              skills={skills}
              handleBlur={handleBlur}
              handleRemoveItem={handleRemoveItem}
              setSkills={setSkills}
              handleAddItem={handleAddItem}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </>
        );
      case 4:
        return (
          <>
            <Achievements
              achievements={achievements}
              handleBlur={handleBlur}
              setAchievements={setAchievements}
              handleRemoveItem={handleRemoveItem}
              handleAddItem={handleAddItem}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </>
        );
      case 5:
        return (
          <>
            <Projects
              projects={projects}
              handleBlur={handleBlur}
              setProjects={setProjects}
              handleRemoveItem={handleRemoveItem}
              handleAddItem={handleAddItem}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </>
        );
      case 6:
        return (
          <>
            <Education
              education={education}
              handleBlur={handleBlur}
              setEducation={setEducation}
              handleRemoveItem={handleRemoveItem}
              handleAddItem={handleAddItem}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </>
        );
      case 7:
        return (
          <>
            <Certification
              certifications={certifications}
              handleBlur={handleBlur}
              setCertifications={setCertifications}
              handleRemoveItem={handleRemoveItem}
              handleAddItem={handleAddItem}
              handleBack={handleBack}
              handleSubmit={handleSubmit}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>{renderCurrentStep()}</form>
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
