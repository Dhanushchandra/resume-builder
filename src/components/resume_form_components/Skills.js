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
    <>
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
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Skills;
