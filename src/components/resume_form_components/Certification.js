const Certification = ({
  certifications,
  handleBlur,
  setCertifications,
  handleRemoveItem,
  handleAddItem,
  handleBack,
  handleSubmit,
  disabled,
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
        <h3>Certification</h3>
        {certifications.map((cert, index) => (
          <div key={index}>
            <textarea
              className="form-control"
              rows={5}
              cols={50}
              onBlur={(e) => {
                handleBlur(index, e.target.value, setCertifications);
              }}
              defaultValue={certifications[index]}
              placeholder="Enter about your certification..."
            ></textarea>
            <button
              className="btn btn-danger mt-2"
              onClick={() => handleRemoveItem(index, setCertifications)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        className="btn btn-warning mt-2"
        onClick={(e) => handleAddItem(setCertifications, e)}
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
        <button
          onClick={handleBack}
          disabled={disabled}
          className="btn btn-danger"
        >
          Back
        </button>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Certification;
