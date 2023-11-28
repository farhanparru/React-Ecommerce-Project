import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Data } from '../App';


const AddProduct = () => {
  const { product, setproduct } = useContext(Data);
 const[fromData, setFromData]= useState({
    id:50,
    ProductName: "",
    OldPrice: "",
    Price: "",
    Image:"",
    Qty:"",
    Animal:"",
    Stock:"",
 });

 

const handleChange = (e) =>{
    const{name, value} = e.target;
      if(name==="ProductName"){
         setFromData({ 
            ...fromData,
            [name]: value.toUpperCase()
         })
      }else{
        setFromData({
            ...fromData,
            [name]:value,
        })
      }
      
}

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(fromData);
    setproduct([...product, { ...fromData, Id: fromData.id + 1 }]);
    console.log(product);
    
  }
  
  
  
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', paddingTop: '20px' }}>
    <h1>Add Product List </h1>
    <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3">
    <Form.Label>Product Name</Form.Label>
    <Form.Control
      type="text"
      name="ProductName"
      placeholder="Product Name"
      value={fromData.ProductName}
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Image URL</Form.Label>
    <Form.Control
      type="text"
      name="Image"
      placeholder="Image URL"
      value={fromData.Image}
      onChange={handleChange}
    />
  </Form.Group>

  <div className="row">
    <Form.Group className="col-md-6 mb-3">
      <Form.Label>Price</Form.Label>
      <Form.Control
        type="text"
        name="Price"
        placeholder="Price"
        value={fromData.Price}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="col-md-6 mb-3">
      <Form.Label>Old Price</Form.Label>
      <Form.Control
        type="text"
        name="OldPrice"
        placeholder="Old Price"
        value={fromData.OldPrice}
        onChange={handleChange}
      />
    </Form.Group>
  </div>

  <div className="row">
    <Form.Group className="col-md-6 mb-3">
      <Form.Label>Stock</Form.Label>
      <Form.Control
        type="text"
        name="Stock"
        placeholder="Stock"
        value={fromData.Stock}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="col-md-6 mb-3">
      <Form.Label>Animal</Form.Label>
      <Form.Control
        type="text"
        name="Animal"
        placeholder="Animal"
        value={fromData.Animal}
        onChange={handleChange}
      />
    </Form.Group>
  </div>

  <Form.Group className="mb-3">
    <Form.Label>Quantity</Form.Label>
    <Form.Control
      type="text"
      name="Qty"
      placeholder="Quantity"
      value={fromData.Qty}
      onChange={handleChange}
    />
  </Form.Group>

  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>

    </div>
  );
};

export default AddProduct;
