const Personal = ({ personal, setPersonal, handleNext }) => {
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className=""></div>
          <button onClick={handleNext} className="btn btn-primary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personal;
