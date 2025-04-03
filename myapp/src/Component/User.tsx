import React from "react"
import { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

import { useAuth } from "../context/AuthContext"
interface userModel{
    Name:String
}
const User=()=>{
    const navigate=useNavigate()
    const location = useLocation();
    const{user}=useAuth();
    const handleNavigate=()=>{
        navigate('/HomeComponent')
    }
    useEffect(()=>{
          console.log("Location:",location);

    },[])
    return(
        <>
         <h1>User</h1>
         <p>Welcome, {user.userName}</p>
         <button className="btn btn-primary" onClick={handleNavigate}> Navigate</button>
        </>
    )
}

export default User