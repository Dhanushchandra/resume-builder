import { AiOutlinePlus } from "react-icons/ai";
import { ImBin } from "react-icons/im";

const Certification = ({
  certifications,
  handleBlur,
  setCertifications,
  handleRemoveItem,
  handleAddItem,
  handleBack,
  handleSubmit,
  disabled,
}) => {
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
      <div className="form-group">
        <h3>Certification</h3>
        {certifications.map((cert, index) => (
          <div key={index}>
            <textarea
              className="form-control mt-4"
              rows={5}
              cols={50}
              onBlur={(e) => {
                handleBlur(index, e.target.value, setCertifications);
              }}
              defaultValue={certifications[index]}
              placeholder="Enter about your certification..."
            ></textarea>
            <button
              className="btn btn-danger  mt-1 d-block mx-auto"
              onClick={() => handleRemoveItem(index, setCertifications)}
            >
              <ImBin />
            </button>
          </div>
        ))}
      </div>
      <button
        className="btn  mt-4 d-block mx-auto"
        onClick={(e) => handleAddItem(setCertifications, e)}
      >
        <AiOutlinePlus
          style={{
            fontSize: "44px",
            color: "orange",
            fontWeight: "600",
          }}
        />
      </button>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={handleBack}
          disabled={disabled}
          className="btn btn-danger"
        >
          Back
        </button>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Certification;
