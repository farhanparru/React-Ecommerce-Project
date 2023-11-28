import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hunder from '../Img/Group-21014@2x.webp';

import { Carousel } from 'react-bootstrap';

const Bennar = () => {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://img.freepik.com/free-psd/organic-pet-food-banner-template_23-2148457497.jpg?w=1380&t=st=1699944970~exp=1699945570~hmac=e50aca2620fd3eab6f925ba1298d97d0f019f4cd1d4ab46ba053fc4aea11e8f6"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://img.freepik.com/free-psd/flat-design-pets-template_23-2149342280.jpg?w=1380&t=st=1699945165~exp=1699945765~hmac=d956b5df1004428c433e78104e21bc2d4eede4a4d17fa4a721e456f578ea632a"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://img.freepik.com/premium-psd/pet-food-packaging-mockup-design_23-2150622338.jpg?w=1060"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <img style={{ height: "60vh", marginBottom: "-142px" }} src={Hunder} alt="Hunder" className="img-fluid" />
        <div className='text-center'>
          <h1 className='text-white uppercase' >PET FOOD DELIVERY</h1>
        </div>
      </div>
    </>
  );
}

export default Bennar;
