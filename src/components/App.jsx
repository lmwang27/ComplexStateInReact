import React, { useState } from "react";

function App() {
  const [fullName, setFName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const name = event.target.name;
    if (name === "fName") {
      setFName({ fName: newValue, lName: fullName.lName });
    } else {
      setFName({ fName: fullName.fName, lName: newValue });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
