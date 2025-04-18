import React from "react"
import { useEffect } from "react";
import { useNavigate,useLocation,useParams } from "react-router-dom";

import { useAuth } from "../context/AuthContext"
interface userModel{
    Name:String
}
const User=()=>{
    const navigate=useNavigate()
    const {name,city}=useParams()
    const location = useLocation();
    const{user}=useAuth();
    const handleNavigate=()=>{
        navigate('/master')
    }
    useEffect(()=>{
          console.log("Location:",location);

    },[])
    return(
        <>
         <h1>User</h1>
         {name&&
           <p>Welcome, {name} from {city}</p>
         }
       
         <button className="btn btn-primary" onClick={handleNavigate}> Navigate</button>
        </>
    )
}

export default User