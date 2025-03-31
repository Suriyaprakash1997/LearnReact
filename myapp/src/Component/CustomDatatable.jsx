const CustomDatatable=(props)=>{
    const{row,handleEdit,handleDelete}=props;
    return(
        <>
        <div>
            <table className="table table-bordered table-striped" style={{width:'100%'}}>
<thead>
    <tr>
<th>Role Name</th>
<th>Action</th>
    </tr>

</thead>
<tbody>
{...row.map((item)=>(
    <tr>
        <td> {item.RoleName}</td>
        <td>
            <input type="button" value="Edit" onClick={()=>handleEdit(item._id)} className="mx-2 btn btn-primary"/>
            <input type="button" value="Delete" onClick={()=>handleDelete(item._id)} className="btn btn-danger"/>
        </td>
      
        </tr>
))}
</tbody>
            </table>
        </div>
        </>
    )
}
export default CustomDatatable