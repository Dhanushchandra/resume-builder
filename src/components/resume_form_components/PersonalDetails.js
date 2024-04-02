const Personal = ({ setPersonal, handleNext }) => {
  return (
    <>
      <h3>Personal Details</h3>
      <label>Name:</label>
      <input
        type="text"
        onChange={(e) =>
          setPersonal((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
      />
      <br></br>
      <label>Phone:</label>
      <input
        type="text"
        onChange={(e) =>
          setPersonal((prev) => ({
            ...prev,
            phone: e.target.value,
          }))
        }
      />
      <br></br>
      <label>Email:</label>
      <input
        type="text"
        onChange={(e) =>
          setPersonal((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />
      <br></br>
      <label>Linked In:</label>
      <input
        type="text"
        onChange={(e) =>
          setPersonal((prev) => ({
            ...prev,
            linkedin: e.target.value,
          }))
        }
      />
      <br></br>
      <label>GitHub:</label>
      <input
        type="text"
        onChange={(e) =>
          setPersonal((prev) => ({
            ...prev,
            github: e.target.value,
          }))
        }
      />
      <br></br>
      <label>Address:</label>
      <textarea
        cols={40}
        rows={5}
        onChange={(e) =>
          setPersonal((prev) => ({
            ...prev,
            address: e.target.value,
          }))
        }
      >
        Enter you address
      </textarea>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Personal;
