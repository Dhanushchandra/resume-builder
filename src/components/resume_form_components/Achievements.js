const Achievements = ({
  achievements,
  handleBlur,
  setAchievements,
  handleRemoveItem,
  handleAddItem,
  handleBack,
  handleNext,
}) => {
  return (
    <>
      <h3>Achievements</h3>
      {achievements.map((achievement, index) => (
        <div key={index}>
          <textarea
            rows={5}
            cols={50}
            onBlur={(e) => handleBlur(index, e.target.value, setAchievements)}
            defaultValue={achievements[index]}
          />
          <button onClick={() => handleRemoveItem(index, setAchievements)}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={(e) => handleAddItem(setAchievements, e)}>Add</button>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Achievements;
