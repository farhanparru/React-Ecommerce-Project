import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Side.css'; // Assuming this is the path to your CSS file

const SideBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='bg-white sidebar p-2'>
      <div className='m-2'>
        <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
        <span className='brand-name fs-4'>Farhan</span>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span>Dashboard</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-house me-3'></i>
          <span>Home</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-cart me-3'></i>
          <span onClick={() => handleNavigation('/AdminOder')}>Order</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-table me-3'></i>
          <span className='fs-5' onClick={() => handleNavigation('/AddProduct')}>Add Product</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-table me-3'></i>
          <span onClick={() => handleNavigation('/Productlist')}>Product List</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-people me-3'></i>
          <span onClick={() => handleNavigation('/UserData')}>Users</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-power me-3'></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
