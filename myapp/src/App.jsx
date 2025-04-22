import HomeComponent from './Component/Home'
import UseStateComponent from "./Component/Hooks/useState";
import ComponentClass from "./Component/ComponentClass";
import ComponentFunctional from "./Component/ComponentFunctional";
import ImperativeDeclarative from "./Component/Imperative&Declarative";
import PropsState from "./Component/PropsState";
import UseRefComponent from "./Component/Hooks/useRef";
import User from './Component/User';
import ControlledComponent from './Component/ControlledComponent';
import UNcontrolledComponent from './Component/UNcontrolledComponent';
import ValidationComponent from './Component/Form Validation/Validation';
import FruitCheckboxList from './Component/task';
import UserCard from './Component/ListKeys';
import Promises from './Component/Promises/Promises';
import RandomUserCard from './Component/TodoComponent';
import SWRRandomUserCard from './Component/SWRRandomUserCard';
import Master from './Component/Master';
import Products from './Component/Products';
import ItemListManager from './Component/ListManager';
import AddProduct from './Component/AddProduct';  
import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import  {AuthProvider}  from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
    <Router>
      <div className="d-flex">
        {/* Sidebar */}
        <nav className="bg-dark text-white p-3 vh-200" style={{ width: "250px" }}>
          <h4>React App</h4>
          <ul className="nav flex-column">
            <li className="nav-item"><Link className="nav-link text-white" to="/HomeComponent">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/ComponentClass">Class Component</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/ComponentFunctional">Functional Component</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/ImperativeDeclarative">Imperative & Declarative</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/PropsState">Props State</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/UseStateComponent">Hook useState</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/useRefComponent">Hook useRef</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={`/user`}>User (useContext)</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/ControlledComponent">Controlled Component</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/UNcontrolledComponent">Un controlled Component</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/ValidationComponent">Form Validation</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/FruitCheckboxList">Fruits List</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/UserCard">List & Keys</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/Promises">Promises</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/RandomUserCard">Todo(Fetch Methods)</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/SWRRandomUserCard">RandomUserCard SWR</Link></li>
            <li className="nav-item"><NavLink to="/master" className={({ isActive }) => isActive ? "active" : "nonactive"}>Master</NavLink></li>
            <li className="nav-item"><NavLink to="/product" className={({ isActive }) => isActive ? "active" : "nonactive"}>Product</NavLink></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/ItemListManager">Item List</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route  path="/HomeComponent" element={<HomeComponent />} />
            <Route path="/ComponentClass" element={<ComponentClass />} />
            <Route path="/ComponentFunctional" element={<ComponentFunctional />} />
            <Route path="/PropsState" element={<PropsState />} />
            <Route path="/ImperativeDeclarative" element={<ImperativeDeclarative />} />
            <Route path="/UseStateComponent" element={<UseStateComponent />} />
            <Route path="/useRefComponent" element={<UseRefComponent />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/:name/:city" element={<User />} />
            <Route path="/ControlledComponent" element={<ControlledComponent />} />
            <Route path="/UNcontrolledComponent" element={<UNcontrolledComponent />} />
            <Route path="/ValidationComponent" element={<ValidationComponent />} />
            <Route path="/FruitCheckboxList" element={<FruitCheckboxList />} />
            <Route path="/UserCard" element={<UserCard />} />
            <Route path="/Promises" element={<Promises />} />
            <Route path="/RandomUserCard" element={<RandomUserCard />} />
            <Route path="/SWRRandomUserCard" element={<SWRRandomUserCard />} />
            <Route path="/master" element={<Master />} />
            <Route path="/product" element={<Products />} />
            <Route path="/ItemListManager" element={<ItemListManager />} />
            <Route path="/addproduct/:id?" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
    </AuthProvider>

  );
}

export default App;
