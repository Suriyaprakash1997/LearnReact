import React,{useState,useEffect} from 'react'
import { useNavigate,useLocation,useParams } from "react-router-dom";
import { Get,UpdateProduct } from '../ProductService';
import {
    Box,
    TextField,
    Button,
    MenuItem,
    Typography,
    Paper,
  } from '@mui/material';
  
  const categories = ["men's clothing", 'jewelery', 'electronics', 'women s clothing', 'Sports'];
const AddProduct = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
        if(id){
            Get(id)
            .then((res)=>

                setProduct(res.data)
            )
        }
    },[])
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image:''
      });
    
      const handleChange = (e) => {
        setProduct({
          ...product,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

      console.log("product:",product)
      handleUpdate(product);
      };
      function handleUpdate(values){
        const updatedData={
            title:values.title,
            price:values.price,
            description:values.description,
            category:values.category,
            image:values.image
        }
        UpdateProduct(id,values)
        .then((res)=>{
            console.log(res.data)
            navigate('/product')
        })
        .catch((err)=>{
            console.log(err)
        })
      }
  return (
    <>
   <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: 'auto', mt: 4 }}>
    <Box className="d-flex justify-content-between align-items-center mb-4">
    <Typography variant="h5" gutterBottom>
        {id ? 'Update Product' : 'Add New Product'}
      </Typography>
      <Button variant="contained" type="submit" color="primary" onClick={()=>navigate('/product')}>
         Back
        </Button>
    </Box>
  

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Product Name"
          name="title"
          value={product.title}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
          required
        />

        <TextField
          select
          label="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          fullWidth
          required
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Image Url"
          name="image"
          value={product.image}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button variant="contained" type="submit" color="primary">
          Add Product
        </Button>
      </Box>
    </Paper>
    </>
  )
}

export default AddProduct
