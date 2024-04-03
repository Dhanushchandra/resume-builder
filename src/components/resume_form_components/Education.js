const Education = ({
  education,
  handleBlur,
  setEducation,
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
      <div className="form-group">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <textarea
              className="form-control"
              rows={5}
              cols={50}
              onBlur={(e) => handleBlur(index, e.target.value, setEducation)}
              defaultValue={education[index]}
              placeholder="Enter about your education..."
            ></textarea>
            <button
              className="btn btn-danger mt-2"
              onClick={() => handleRemoveItem(index, setEducation)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        className="btn btn-warning mt-2"
        onClick={(e) => handleAddItem(setEducation, e)}
      >
        Add
      </button>
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

export default Education;
