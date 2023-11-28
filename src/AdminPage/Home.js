import React, { useContext } from 'react'
import Nav from '../AdminPage/Nav'
import SideBar from './SideBar'
import { Data } from '../App'
const Home = ( {Toggle}) => {
  const {userData}=useContext(Data)
  return (
    <div className='px-3'>
      <Nav Toggle={Toggle} />
      <div className='container-fluid'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 my-2'>
          <div className='col'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>50</h3>
                <p className='fs-5'>Product</p>
              </div>
              <i className='bi bi-cart-plus p-3 fs-1'></i>
            </div>
          </div>
          <div className='col'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{userData.length}</h3>
                <p className='fs-5'>Sales</p>
              </div>
              <i className='bi bi-currency-exchange p-3 fs-1'></i>
            </div>
          </div>
          <div className='col'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>80</h3>
                <p className='fs-5'>Delivery</p>
              </div>
              <i className='bi bi-truck p-3 fs-1'></i>
            </div>
          </div>
          <div className='col'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{userData.length}</h3>
                <p className='fs-5'>Users</p>
              </div>
              <i className='bi bi-person p-3 fs-1'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;