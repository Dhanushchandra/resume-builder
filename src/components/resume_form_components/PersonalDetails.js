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
      personal.address;

    setIsFormValid(isFormFilled);
  }, [personal]);

  const handleInputChange = (e, field) => {
    const value = e.target.value;

    if (field === "name") {
      if (!/^[a-zA-Z\s]+$/.test(value)) {
        // Only allow alphabetic characters for name
        return; // Don't update state if name contains non-alphabetic characters
      }
      if (value.length > 50) {
        // Limit the name field to 50 characters
        return; // Don't update state if the name exceeds the limit
      }
      // You may add further validation if needed for the name field
    }

    if (
      field === "phone" &&
      !/^\d+$/.test(value) // Only allow numbers for phone
    ) {
      return; // Don't update state if phone contains non-numeric characters
    }
    if (
      (field === "linkedin" || field === "github") &&
      !isValidURL(value) // Validate URL for LinkedIn and GitHub
    ) {
      return; // Don't update state if URL is invalid
    }
    setPersonal((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Function to check if the URL is valid
  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

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
          onChange={(e) => handleInputChange(e, "name")}
          value={personal.name || ""}
        />
        <br />
        <label>Phone:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your phone"
          onChange={(e) => handleInputChange(e, "phone")}
          value={personal.phone || ""}
        />
        <br />
        <label>Email:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => handleInputChange(e, "email")}
          value={personal.email || ""}
        />
        <br />
        <label>Linked In:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your linked in link"
          onChange={(e) => handleInputChange(e, "linkedin")}
          value={personal.linkedin || ""}
        />
        <br />
        <label>GitHub:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your github in link"
          onChange={(e) => handleInputChange(e, "github")}
          value={personal.github || ""}
        />
        <br />
        <label>Address:</label>
        <textarea
          className="form-control"
          placeholder="Enter your address"
          cols={40}
          rows={5}
          onChange={(e) => handleInputChange(e, "address")}
          value={personal.address || ""}
        ></textarea>
        <br />
        <label>Profile Image:</label>
        <input
          type="file"
          className="form-control"
          onChange={handleImageChange}
          accept="image/*"
        />
        <br />
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
