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
    <>
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
      <button onClick={(e) => handleAddItem(setProjects, e)}>Add</button>{" "}
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Projects;
