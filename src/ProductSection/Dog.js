import React from 'react'
import { Data } from '../App'
import { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {  useNavigate } from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai'


const Dog = () => {
  const navigate=useNavigate()
  const {product}=useContext(Data)
 const dogProducts=product.filter((item)=>item.Animal==='Dog')

 return (
    <div className='d-flex flex-wrap m-4'>
      {dogProducts.map((item) => (
        <Card key={item.id} className='shadow p-3 mb-3 bg-body-tertiary rounded' style={{ maxWidth: '300px', minWidth: '200px', width: '100%', margin: '10px' }}>
          <Card.Img variant="top" src={item.Image} style={{ width: '100%', height: '15rem', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>{item.ProductName}</Card.Title>
            <Card.Text>
              <del>₹{item.OldPrice}</del>
              <h5>Price: ₹{item.Price}</h5>
              <div style={{ color: 'gold' }}>
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              </div>
            </Card.Text>
            <Button onClick={() => navigate(`/ViewProduct/${item.id}`)} variant="primary" style={{ width: '100%' }}>View Product</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Dog;