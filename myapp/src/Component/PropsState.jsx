import { useState } from "react";
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
const PropsState=()=>{
    const[value,setValue]=useState('')
    return(
        <>
        <Greeting name="Suriya"/>
        <div className="row">
        <div className="col-4">
        <input  className="form-control" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <p className="mt-2">{value}</p>
        </div>
        </div>
        </>
    )
}
export default PropsState