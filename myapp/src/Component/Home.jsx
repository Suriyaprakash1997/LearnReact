import React from 'react';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate('/user')
}
  return (
    <div>
        <h1>React Learning</h1>
        <p>Accelerate your skills through collaborative learning with internal teams.</p>
          <h2>Empowering Our Teams</h2>
          <p>
            Our internal sessions bring together expert developers to share insights on best practices in React.
          </p>
          <button className="btn btn-primary" onClick={handleNavigate}> Navigate</button>
    </div>
  );
};

export default Home;
