import React from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom';
const Products = () => {
    const navigate=useNavigate()
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
  const sort = searchParams.get('sort');
  const handleNavigate=()=>{
    navigate('/master')
}
  return (
    <>
    {/* <h4>Products</h4>
    {page&&
      <p>Page: {page}, Sort by: {sort}</p>
    }
     <button className="btn btn-primary" onClick={handleNavigate}> Navigate</button> */}
     <div className='card'>
     <div className='card-header'>
<h4>Cources</h4>
</div>
<div className='card-body'>
<div className='d-flex'>

</div>
</div>
     </div>
    </>
  )
}

export default Products
