import React from "react";

function ImperativeExample() {
  React.useEffect(() => {
    const imperativeContainer = document.getElementById("imperative-container");
    const button = document.createElement("button");
    button.textContent = "Click Me (JS)";
    button.className = "imperative-button";
    button.addEventListener("click", function () {
      alert("Imperative Button Clicked!");
    });
    imperativeContainer.appendChild(button);

    return () => {
      button.remove();
    };
  }, []);

  return <div id="imperative-container" className="section"></div>;
}

function DeclarativeExample() {
  return (
    <div className="section">
      <h2>Declarative Programming (React)</h2>
      <button className="declarative-button" onClick={() => alert("Declarative Button Clicked!")}> 
        Click Me (React)
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="section">
        <h2>Imperative Programming (Vanilla JS)</h2>
        <ImperativeExample />
      </div>
      <DeclarativeExample />
    </div>
  );
}

export default App;
