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
    <>
      <h3>Education and certificate</h3>
      {education.map((edu, index) => (
        <div key={index}>
          <textarea
            rows={5}
            cols={50}
            onBlur={(e) => handleBlur(index, e.target.value, setEducation)}
            defaultValue={education[index]}
          ></textarea>
          <button onClick={() => handleRemoveItem(index, setEducation)}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={(e) => handleAddItem(setEducation, e)}>Add</button>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Education;
