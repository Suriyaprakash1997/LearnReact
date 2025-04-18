import React from 'react'
import { useNavigate } from "react-router-dom";

const Master = () => {
      const navigate=useNavigate()
      const handleNavigate=(name,city)=>{
        navigate(`/user/${name}/${city}`)
    }
    const handleSearch=()=>{
        navigate(`/product?page=2&sort=price`)
    }
  return (
    <>
      <h1>Master</h1>
<input type='button' className='btn btn-primary' value="Suriya" onClick={()=>handleNavigate("Suriya","Theni")}/>
<input type='button' className='mx-2 btn btn-primary' value="Sathish" onClick={()=>handleNavigate("Sathish","Madurai")}/>
<input type='button' className='mx-2 btn btn-primary' value="Product" onClick={()=>handleSearch()}/>
    </>
  )
}

export default Master
