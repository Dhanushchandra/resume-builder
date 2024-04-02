const Profile = ({ setProfile, handleBack, handleNext }) => {
  return (
    <>
      <h3>Profile</h3>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setProfile(() => e.target.value)}
      >
        tell about yourself
      </textarea>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Profile;
