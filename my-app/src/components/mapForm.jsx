import React, { useState } from "react";

function MyFormComponent({ onSubmitData }) {
  const [name, setName] = useState("");
  const [acres, setAcres] = useState("");

  function handleStateChange(event) {
    setName(event.target.value);
  }

  function handleAcresChange(event) {
    setAcres(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name && acres) {
      onSubmitData({ state: name, acres: Number(acres) });
    }
    setName(""); // Clear inputs after submission
    setAcres("");
  }

  return (
    <div className="container" style={{ marginTop: 70 }}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleStateChange}
          type="text"
          placeholder="Enter the state"
          name="state"
          value={name}
        />
        <input
          onChange={handleAcresChange}
          type="text"
          placeholder="Area of land affected"
          value={acres}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyFormComponent;
