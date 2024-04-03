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
              className="form-control"
              rows={5}
              cols={50}
              onBlur={(e) => handleBlur(index, e.target.value, setProjects)}
              defaultValue={projects[index]}
              placeholder="Enter about your project..."
            ></textarea>
            <button
              className="btn btn-danger mt-2"
              onClick={() => handleRemoveItem(index, setProjects)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        className="btn btn-warning mt-2"
        onClick={(e) => handleAddItem(setProjects, e)}
      >
        Add
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
