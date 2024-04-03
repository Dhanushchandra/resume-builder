const Profile = ({ profile, setProfile, handleBack, handleNext }) => {
  return (
    <>
      <h3>Profile</h3>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setProfile(() => e.target.value)}
        defaultValue={profile}
      ></textarea>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Profile;
