import { AiOutlinePlus } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

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
          <div key={index} className="row">
            <div className="col-10">
              <textarea
                className="form-control mt-4"
                rows={5}
                cols={50}
                onBlur={(e) => handleBlur(index, e.target.value, setProjects)}
                defaultValue={projects[index]}
                placeholder="Enter about your project..."
              ></textarea>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <button
                className="btn btn-danger  mt-1 d-block mx-auto"
                onClick={() => handleRemoveItem(index, setProjects)}
              >
                <ImBin />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn  mt-4 d-block mx-auto"
        onClick={(e) => handleAddItem(setProjects, projects, e)}
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
          <IoMdArrowBack />
        </button>
        <button onClick={handleNext} className="btn btn-primary">
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default Projects;
