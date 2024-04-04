import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";

const Personal = ({ personal, setPersonal, handleNext }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];

      setPersonal((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  useEffect(() => {
    // Create an object URL for the file
    if (personal.image) {
      const url = URL.createObjectURL(personal.image);
      setImageUrl(url);

      // Clean up the object URL on unmount
      return () => URL.revokeObjectURL(url);
    }
  }, [personal.image]);

  useEffect(() => {
    // Validate form fields
    const isFormFilled =
      personal.name &&
      personal.phone &&
      personal.email &&
      personal.linkedin &&
      personal.github &&
      personal.address &&
      personal.image;
    setIsFormValid(isFormFilled);
  }, [personal]);

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
      <img
        style={{
          display: imageUrl ? "block" : "none",
        }}
        src={imageUrl}
        alt="Failed"
        width={100}
        height={100}
      />
      <h3 className="text-center">Personal Details</h3>
      <div className="form-group">
        <label>Name:</label>
        <input
          className="form-control"
          placeholder="Enter your name"
          type="text"
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          defaultValue={personal.name}
        />
        <br></br>
        <label>Phone:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your phone"
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              phone: e.target.value,
            }))
          }
          defaultValue={personal.phone}
        />
        <br></br>
        <label>Email:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          defaultValue={personal.email}
        />
        <br></br>
        <label>Linked In:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your linded in link"
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              linkedin: e.target.value,
            }))
          }
          defaultValue={personal.linkedin}
        />
        <br></br>
        <label>GitHub:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your github in link"
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              github: e.target.value,
            }))
          }
          defaultValue={personal.github}
        />
        <br></br>
        <label>Address:</label>
        <textarea
          className="form-control"
          placeholder="Enter your address"
          cols={40}
          rows={5}
          onChange={(e) =>
            setPersonal((prev) => ({
              ...prev,
              address: e.target.value,
            }))
          }
          defaultValue={personal.address}
        ></textarea>
        <br></br>

        <label>Profile Image:</label>
        <input
          type="file"
          className="form-control"
          onChange={handleImageChange}
          accept="image/*"
        />

        <br></br>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className=""></div>
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

export default Personal;
