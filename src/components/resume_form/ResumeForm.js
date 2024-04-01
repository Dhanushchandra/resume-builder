import { useState } from "react";
import ResumeDisplay from "../resume_display/ResumeDisplay";

const ResumeForm = () => {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Personal Details</h3>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
        <br></br>
        <label>Phone:</label>
        <input
          type="text"
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              phone: e.target.value,
            }))
          }
        />
        <br></br>
        <label>Email:</label>
        <input
          type="text"
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <br></br>
        <label>Linked In:</label>
        <input
          type="text"
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              linkedin: e.target.value,
            }))
          }
        />
        <br></br>
        <label>GitHub:</label>
        <input
          type="text"
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              github: e.target.value,
            }))
          }
        />
        <br></br>
        <label>Address:</label>
        <textarea
          cols={40}
          rows={5}
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              address: e.target.value,
            }))
          }
        >
          Enter you address
        </textarea>
        <br></br>
        <h3>Profile</h3>
        <textarea
          cols={50}
          rows={5}
          onChange={(e) => setProfile(() => e.target.value)}
        >
          tell about yourself
        </textarea>

        <h3>Add Skills</h3>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              onBlur={(e) => handleBlur(index, e.target.value, setSkills)}
            />
            <button onClick={() => handleRemoveItem(index, setSkills)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={(e) => handleAddItem(setSkills, e)}>Add</button>

        <h3>Achivements</h3>

        {achievements.map((achievement, index) => (
          <div key={index}>
            <textarea
              rows={5}
              cols={50}
              onBlur={(e) => handleBlur(index, e.target.value, setAchievements)}
            />
            <button onClick={() => handleRemoveItem(index, setAchievements)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={(e) => handleAddItem(setAchievements, e)}>Add</button>

        <h3>Projects</h3>
        {projects.map((project, index) => (
          <div key={index}>
            <textarea
              rows={5}
              cols={50}
              onBlur={(e) => handleBlur(index, e.target.value, setProjects)}
            ></textarea>
            <button onClick={() => handleRemoveItem(index, setProjects)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={(e) => handleAddItem(setProjects, e)}>Add</button>

        <h3>Education and certificate</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <textarea
              rows={5}
              cols={50}
              onBlur={(e) => handleBlur(index, e.target.value, setEducation)}
            ></textarea>
            <button onClick={() => handleRemoveItem(index, setEducation)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={(e) => handleAddItem(setEducation, e)}>Add</button>

        <h3>Certification</h3>
        {certifications.map((cert, index) => (
          <div key={index}>
            <textarea
              rows={5}
              cols={50}
              onBlur={(e) => {
                handleBlur(index, e.target.value, setCertifications);
              }}
            ></textarea>
            <button onClick={() => handleRemoveItem(index, setCertifications)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={(e) => handleAddItem(setCertifications, e)}>
          Add
        </button>
        <br></br>
        <button type="submit">Submit</button>
      </form>
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

export default ResumeForm;
