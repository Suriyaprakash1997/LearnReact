import React, { useState } from "react";

const Welcome = React.memo(({ name }) => {
  console.log(name, "re-rendered");
  return (
    <div className="text-center mt-3">
      <h5 className="text-success">WELCOME <strong>{name}</strong></h5>
    </div>
  );
});

function ReactMemo() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isChild,setIsChild] = useState(false);

  const handleClick = () => {
    if(name.trim() === "") {
      alert("Please enter a name.");
      return;
    }
    setDisplayName(name);
    setIsChild(true);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow rounded-4 p-4" style={{ width: "100%", maxWidth: "420px" }}>
        <div className="card-header bg-primary text-white text-center rounded-3 mb-3">
          <h4 className="mb-0">🚀 React Memo Example</h4>
        </div>
        <div className="card-body">
          <label className="form-label fw-bold">Enter Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Type your name..."
          />
          <div className="d-grid">
            <button className="btn btn-outline-primary" onClick={handleClick}>
              Show Welcome Message
            </button>
          </div>
          {isChild && <Welcome name={displayName} />}
        </div>
      </div>
    </div>
  );
}

export default ReactMemo;
