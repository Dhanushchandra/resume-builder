const Profile = ({ profile, setProfile, handleBack, handleNext }) => {
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
      <h3 className="text-center">Profile</h3>
      <div className="form-group">
        <textarea
          className="form-control"
          cols={50}
          rows={5}
          onChange={(e) => setProfile(() => e.target.value)}
          defaultValue={profile}
          placeholder="Enter about yourself.."
        ></textarea>
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
    </div>
  );
};

export default Profile;
