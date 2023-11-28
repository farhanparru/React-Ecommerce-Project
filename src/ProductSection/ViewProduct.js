import React, { useContext } from 'react';
import { Data } from '../App';
import { useParams, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const ViewProduct = () => {
  /* UseContext Data  is uset to access context provider*/
  const { product, cart, setcart, userData,newUser } = useContext(Data);
  /* Use Params URL parameter */
  const { id } = useParams();
  /*   This conditoion uset to find a specific product */
  const findView = product.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  const addCart = () => {
/*  check if a particular item identified by its already present*/
   const isInCart = cart.some((item)=> item.id === parseInt(id))

   if(isInCart){
    toast.error("Item already added to cart")
    return
   }

    if (!userData.length) {
      toast.error("You need to log in before adding items to the cart.");
      
      navigate('/Login');
      return;
    }
    setcart((prev) => [...prev, { ...findView, productprice: findView.price }]);
    newUser.cart.push(findView)
    toast.success("'Item added to cart!'");
    console.log(newUser);
  };

  return (
    <div className='mt-5 d-flex justify-content-center align-items-center'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={findView.Image} style={{ height: '15rem', objectFit: 'cover' }} />
        <Card.Body>
          <h3 className='btn-dark text-center'>Price ₹: {findView.Price}</h3>
          <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '24px' }}>
            {findView.ProductName}
          </Card.Title>
          <div className='d-flex justify-content-center'>
            <Button onClick={addCart} className='bg-success' style={{ width: '150px' }}>
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewProduct;