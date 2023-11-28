import React, { useEffect, useState } from 'react'
import { useContext} from 'react'
import { Data } from '../App'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Cart = (index) => {
  /*   Data passing useContext*/
    const{cart,setcart,product,setSales,newUser}=useContext(Data);
    console.log(cart);

/*    differnt users specific cart*/
const [userCredentials,setUserCredentials]= useState([]);
useEffect(()=>{
  setUserCredentials(newUser.cart)
},[]) ; 
console.log(userCredentials,"new");


    /* Product Remove Condition Using A filter*/
  const removeTask = (x)=>{
    const newTask = userCredentials.filter((item)=> item.id !==x)
    setUserCredentials(newTask)
    newUser.cart = newTask
  }

     const navigate=useNavigate()
/*  Add to total price the product  */
 const reducer =cart.reduce((acc,curr)=> acc += curr?.Price,0);

const incr=(x)=>{
  const productprice=product.find((item)=>item.id ===x );
  const updatecart=cart.map((item)=>{
   if(item.id===x){
    if(item.Qty<9){
      item.Qty+=1;
      item.Price=parseFloat(productprice.Price)*item.Qty
      console.log(item.Qty);
    }return item;
}

     
});setUserCredentials(updatecart)
}
const decr=(x)=>{
  const productprice=product.find((item)=>item.id ===x );
  const updatecart=cart.map((item)=>{
   if(item.id===x){
    if(item.Qty>1){
      item.Qty-=1;
      item.Price=parseFloat(productprice.Price)*item.Qty
      console.log(item.Qty);
    }return item;

    }
     
});setUserCredentials(updatecart)

}
/* User Oder in Show Admin Side*/
const UserOder =()=>{
  setSales([...cart])
  setUserCredentials([])
}
return (
    <div className="d-flex flex-wrap justify-content-center">
      {userCredentials.map((item) => (
        <div key={item.id} className='m-3' style={{ height: "55vh" }}>
   <Card className='shadow' style={{ width: '18rem', height: '100%' }}>
    <Card.Img variant="top" src={item.Image} style={{ height: '15rem', objectFit: 'cover' }} />
    <Card.Body className='d-flex flex-column justify-content-between'>
      <div>
        <Card.Title className='text-center mb-0' style={{ fontWeight: 'bold', fontSize: '24px' }}>
          {item.ProductName}
        </Card.Title>
        <div className='d-flex justify-content-center align-items-center mt-2'>
          <Button onClick={() => incr(item.id)} className='bg-light text-dark me-2'>+</Button>
          <p className='mb-0'>{item.Qty}</p>
          <Button onClick={() => decr(item.id)} className='bg-light text-dark ms-2'>-</Button>
        </div>
        <h4 className='btn-dark text-center mt-3'>₹{item.Price}</h4>
      </div>
      <div className='d-flex justify-content-center'>
        <Button variant="primary" className='me-2' onClick={() => {
          navigate("/Payment");
          UserOder();
        }}>Buy</Button>
        <Button onClick={()=> removeTask(item.id)} className='bg-danger'>Remove</Button>
      </div>
    </Card.Body>
  </Card>
</div>

      ))}
      <div className='text-danger' style={{ margin: '20px' }}>ADD TOTAL PRICE ₹: {reducer}</div>
    </div>
  );
};

export default Cart;