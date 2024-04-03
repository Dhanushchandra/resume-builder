const Certification = ({
  certifications,
  handleBlur,
  setCertifications,
  handleRemoveItem,
  handleAddItem,
  handleBack,
  handleSubmit,
}) => {
  return (
    <>
      <h3>Certification</h3>
      {certifications.map((cert, index) => (
        <div key={index}>
          <textarea
            rows={5}
            cols={50}
            onBlur={(e) => {
              handleBlur(index, e.target.value, setCertifications);
            }}
            defaultValue={certifications[index]}
          ></textarea>
          <button onClick={() => handleRemoveItem(index, setCertifications)}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={(e) => handleAddItem(setCertifications, e)}>Add</button>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Certification;
