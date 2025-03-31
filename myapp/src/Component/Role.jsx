import React,{ useState,useEffect } from "react";
import CustomDatatable from "./CustomDatatable";
const Role=()=>{
    const [data,setData]=useState([])
    const pageRequest={
        PageIndex:1,
         PageSize:10,
          SorlCol:'RoleName',
          SortOrder:'asc',
          SearchString:''
    }
    useEffect(()=>{
        GetData()
    },[])
    const GetData=async ()=>{
        fetch("http://localhost:3000/api/roles",{pageRequest})
        .then(response => response.json())
        .then((data) =>{
            setData(data.data)
        } )
        .catch(error => console.error("Error fetching roles:", error));
    }
    const handleEdit=(id)=>{
alert("RoleId:"+id)
    }
    const handleDelete=(id)=>{
        alert("RoleId:"+id)
    }
    return(
        <>
        <form>
        <div className="row">
        <div className="col-3"> 
        <label className="form-label">Role</label>
        <input className="form-control" type="text"/>
        </div>
        <div className="col-3 mt-4"> 
       <input type="button" className="btn btn-primary" value="Save"/>
        </div>
        </div>
        </form>
         {/* <div className="row">
            <div className="col-3">

          
            <label className="form-label">Role</label>
         <select className="form-control">
            <option defaultValue={''} value={''} disabled selected>---select---</option>
              {data.map((item) => (
    <option key={item._id} value={item._id}>
      {item.RoleName}
    </option>
  ))}
        </select>
        </div>
        </div> */}
<div className="my-4">
<CustomDatatable row={data} handleEdit={handleEdit} handleDelete={handleDelete}/>
</div>
        </>
    )
}
export default  React.memo(Role);