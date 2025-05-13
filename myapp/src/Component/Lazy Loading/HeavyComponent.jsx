// HeavyComponent.js

import React from 'react';

function HeavyComponent() {
//    const [Loading, setLoading] = useState(false)
  const items = new Array(5).fill("🐘 Heavy Content");


//   if (Loading) {
//     return <div className="card">Loading...</div>;
//   }

  return (
    <div className="card heavy">
      <h2>Heavy Component</h2>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default HeavyComponent;
