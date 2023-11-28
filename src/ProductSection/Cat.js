import React from 'react';
import { Data } from '../App';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Cat = () => {
  const navigate = useNavigate();
  const { product } = useContext(Data);
  const catProducts = product.filter((item) => item.Animal === 'Cat');
  console.log(catProducts);

  return (
    <div className='container-fluid d-flex flex-wrap justify-content-center m-4'>
      {catProducts.map((item) => (
        <Card
          key={item.id}
          style={{ width: '18rem' }}
          className='shadow p-3 mb-5 bg-body-tertiary rounded m-2 d-flex align-items-center'
        >
          <Card.Img variant='top' src={item.Image} style={{ width: '15rem', height: '15rem' }} />
          <Card.Body>
            <Card.Title>{item.ProductName}</Card.Title>
            <Card.Text></Card.Text>
            <del>{item.OldPrice}</del>
            <h5>Price ₹: {item.Price}</h5>
            <div style={{ color: 'gold' }}>
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
            </div>
            <Button
              onClick={() => navigate(`/ViewProduct/${item.id}`)}
              variant='primary'
              style={{ margin: '10px', height: '50px', width: '100%' }}
            >
              View Product
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cat;
