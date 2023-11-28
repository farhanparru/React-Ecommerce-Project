import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {  useNavigate } from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai'
import { useContext } from 'react';
import { Data } from '../App';

const Catgeroy = () => {


     
    const navigate=useNavigate()
    /*  Product Data Access Using A useContext*/
     const {product}=useContext(Data)



  return (
    <div className='d-flex flex-wrap m-4'>
    {product.map((item)=>(
        <>
      <Card  className='shadow p-3 mb-5 bg-body-tertiary rounded  m-2 d-flex align-items-center'>
      <Card.Img variant="top" src={item.Image} style={{width:"15rem", height:"15rem"}} />
      <Card.Body>
        <Card.Title>{item.ProductName}</Card.Title>
        <Card.Text></Card.Text>
        <del>₹{item.OldPrice}</del>
         
         
         <h5>Price₹:{item.Price}</h5>
         <div style={{color:"gold"}}>
         <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
         </div>
          
       
         <Button onClick={()=>navigate(`/ViewProduct/${item.id}`)} variant="primary" style={{margin:"36px", height:"50px", width:"130px" }}>View Product</Button>
  
      </Card.Body>
    </Card>
    </>
  ))}
  </div> 
  )
}

export default Catgeroy
