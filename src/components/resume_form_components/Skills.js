import { AiOutlinePlus } from "react-icons/ai";
import { ImBin } from "react-icons/im";

const Skills = ({
  skills,
  handleBlur,
  handleRemoveItem,
  setSkills,
  handleAddItem,
  handleBack,
  handleNext,
}) => {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "20px",
        marginTop: "30px",
        marginBottom: "30px",
        borderRadius: "10px",
      }}
    >
      <h3>Add Skills</h3>
      {skills.map((skill, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              marginTop: "10px",
            }}
          >
            <input
              className="form-control"
              type="text"
              onBlur={(e) => handleBlur(index, e.target.value, setSkills)}
              defaultValue={skills[index]}
              placeholder="Enter your skill"
            />
            <button
              className="btn btn-danger"
              style={{
                marginLeft: "5px",
              }}
              onClick={() => handleRemoveItem(index, setSkills)}
            >
              <ImBin />
            </button>
          </div>
        </div>
      ))}
      <button
        className="btn  mt-4 d-block mx-auto"
        onClick={(e) => handleAddItem(setSkills, skills, e)}
      >
        <AiOutlinePlus
          style={{
            fontSize: "44px",
            color: "orange",
            fontWeight: "600",
          }}
        />
      </button>
      <div
        style={{
          display: "flex",
          marginTop: "30px",
          justifyContent: "space-between",
        }}
      >
        <button onClick={handleBack} className="btn btn-danger">
          Back
        </button>
        <button onClick={handleNext} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default Skills;
