import React,{useEffect,useState} from 'react'
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material';
import { Edit, Delete, AddShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { GetAll,DeleteProduct } from '../ProductService';
const Products = () => {
    const navigate=useNavigate()
const [data,setData]=useState([]) 
useEffect(()=>{
  GetList()
     },[])
    function GetList(){
      GetAll()
      .then((res)=>{
        setData(res.data)
      })
      .catch((err)=>{
          console.log(err)
      })
    }
const handleEdit=(id)=>{
  navigate('/addproduct/'+id) 
}
const handleDelete=(id)=>{
  DeleteProduct(id)
  .then((res)=>{
    var data=res.data;
    console.log(data)
    GetList()
  })
  .catch((err)=>{
    console.log(err)
  })
}
  return (
    <>
   <div className='row'>
{data.map((item)=>(
  <>
 <Card
      sx={{
        width: 300,
        m: 2,
        borderRadius: 4,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>

      <CardContent>
        <Typography variant="h6" component="div" noWrap title={item.title}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${item.price}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-around', pb: 2 }}>
        <IconButton color="primary" aria-label="edit" onClick={()=>handleEdit(item.id)}>
          <Edit />
        </IconButton>
        <IconButton color="error" aria-label="delete" onClick={()=>handleDelete(item.id)}>
          <Delete />
        </IconButton>
        <IconButton color="success" aria-label="add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>

  </>

))
}
</div>
    </>
  )
}

export default Products
