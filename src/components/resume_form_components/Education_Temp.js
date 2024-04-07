import "./css/style.css";

import { AiOutlinePlus } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

const EducationTemp = ({
  education,
  handleBlur,
  setEducation,
  handleRemoveItem,
  handleAddItem,
  handleBack,
  handleNext,
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
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="row">
            <div className="col-10 edu-inp">
              {/* <textarea
                className="form-control mt-4"
                rows={5}
                cols={50}
                onBlur={(e) => handleBlur(index, e.target.value, setEducation)}
                defaultValue={education[index]}
                placeholder="Enter about your education..."
              ></textarea> */}
              {/* <input
                type="text"
                className="form-control"
                placeholder={"Degree"}
              /> */}
              <select className="form-select">
                <option>MCA</option>
                <option>MTech</option>
                <option>MBA</option>
                <option>MSC</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder={"Start Year"}
              />
              <input
                type="text"
                className="form-control"
                placeholder={"Completion Year"}
              />
              <input
                type="text"
                className="form-control"
                placeholder={"Percentage"}
              />
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <button
                className="btn btn-danger  mt-1 d-block mx-auto"
                onClick={() => handleRemoveItem(index, setEducation)}
              >
                <ImBin />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn  mt-4 d-block mx-auto"
        onClick={(e) => handleAddItem(setEducation, education, e)}
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
        <button onClick={handleBack} className="btn btn-danger">
          <IoMdArrowBack />
        </button>
        <button onClick={handleNext} className="btn btn-primary">
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default EducationTemp;
