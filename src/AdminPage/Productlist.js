import React, { useContext, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Data } from '../App';
import { useNavigate } from 'react-router-dom';


const ProductList = ({ products }) => {
  const maxCardWidth = '540px'; 
  const maxCardHeight = '400px';
   
  const {product,setproduct}=useContext(Data)
  const navigate = useNavigate("")

 // productlist a specific product delete function
  const handleDelete=(id)=>{
    const UpdateList=product.filter((item)=>item.id!==id)
    setproduct(UpdateList)
  }
 
  return (
    <section style={{ backgroundColor: '#eee' }}>
  <div className="container py-5">
    <h1 className="text-center mb-4">PRODUCT LIST</h1>
    <div className="row justify-content-center">
      {products.map((item) => (
        <div key={item.id} className="col-md-12 col-lg-6 col-xl-4 mb-4">
          <div className="card border rounded-3 shadow-sm" style={{ maxWidth: '300px' }}>
            <div className="card-body">
              <div className="text-center mb-3">
                <div className="bg-image hover-zoom">
                  <img src={item.Image} className="w-100" alt="" />
                  <div className="hover-overlay">
                    <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                  </div>
                </div>
              </div>
              <h5 className="text-center">{item.ProductName}</h5>
              <div className="text-center mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-center">
                <h4>${item.Price}</h4>
                <span className="text-danger"><s>${item.OldPrice}</s></span>
                <p className="text-success">Free shipping</p>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-danger btn-sm me-2" type="button" onClick={() => handleDelete(item.id)}>Delete</button>
                <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => navigate(`/EditProduct/${item.id}`)}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ProductList;
