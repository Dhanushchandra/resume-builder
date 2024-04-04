import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

const Profile = ({ profile, setProfile, handleBack, handleNext }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isFormFilled = profile;
    setIsFormValid(isFormFilled);
  }, [profile]);

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
            <IoMdArrowBack />
          </button>
          <button
            onClick={handleNext}
            disabled={!isFormValid}
            className="btn btn-primary"
          >
            <GrLinkNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
