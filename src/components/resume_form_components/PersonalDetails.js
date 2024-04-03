const Personal = ({ personal, setPersonal, handleNext }) => {
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
        defaultValue={personal.name}
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
        defaultValue={personal.phone}
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
        defaultValue={personal.email}
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
        defaultValue={personal.linkedin}
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
        defaultValue={personal.github}
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
        defaultValue={personal.address}
      ></textarea>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Personal;
