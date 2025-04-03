import HomeComponent from './Component/Home'
import UseStateComponent from "./Component/Hooks/useState";
import ComponentClass from "./Component/ComponentClass";
import ComponentFunctional from "./Component/ComponentFunctional";
import ImperativeDeclarative from "./Component/Imperative&Declarative";
import PropsState from "./Component/PropsState";
import UseRefComponent from "./Component/Hooks/useRef";
import User from './Component/User';
import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import  {AuthProvider}  from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="d-flex">
        {/* Sidebar */}
        <nav className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
          <h4>React App</h4>
          <ul className="nav flex-column">
            <li className="nav-item"><Link className="nav-link text-white" to="/HomeComponent">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/ComponentClass">Class Component</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/ComponentFunctional">Functional Component</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/ImperativeDeclarative">Imperative & Declarative</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/PropsState">Props State</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/UseStateComponent">Hook useState</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/useRefComponent">Hook useRef</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/user">User (useContext)</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/HomeComponent" element={<HomeComponent />} />
            <Route path="/ComponentClass" element={<ComponentClass />} />
            <Route path="/ComponentFunctional" element={<ComponentFunctional />} />
            <Route path="/PropsState" element={<PropsState />} />
            <Route path="/ImperativeDeclarative" element={<ImperativeDeclarative />} />
            <Route path="/UseStateComponent" element={<UseStateComponent />} />
            <Route path="/useRefComponent" element={<UseRefComponent />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
    </AuthProvider>

  );
}

export default App;
