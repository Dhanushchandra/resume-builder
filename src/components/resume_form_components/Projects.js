import { AiOutlinePlus } from "react-icons/ai";
import { ImBin } from "react-icons/im";

const Projects = ({
  projects,
  handleBlur,
  setProjects,
  handleRemoveItem,
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
      <div>
        <h3>Projects</h3>
        {projects.map((project, index) => (
          <div key={index}>
            <textarea
              className="form-control mt-4"
              rows={5}
              cols={50}
              onBlur={(e) => handleBlur(index, e.target.value, setProjects)}
              defaultValue={projects[index]}
              placeholder="Enter about your project..."
            ></textarea>
            <button
              className="btn btn-danger  mt-1 d-block mx-auto"
              onClick={() => handleRemoveItem(index, setProjects)}
            >
              <ImBin />
            </button>
          </div>
        ))}
      </div>
      <button
        className="btn  mt-4 d-block mx-auto"
        onClick={(e) => handleAddItem(setProjects, e)}
      >
        <AiOutlinePlus
          style={{
            fontSize: "44px",
            color: "orange",
            fontWeight: "600",
          }}
        />
      </button>{" "}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
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

export default Projects;
