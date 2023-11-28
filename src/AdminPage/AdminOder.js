import React, { useContext } from 'react';
import { Data } from '../App';
import { AiFillStar } from 'react-icons/ai';
import SideBar from './SideBar';
const AdminOrder = () => {
  const {sales} = useContext(Data)
  return (
    <div>
    <h1>User Oder Product list</h1>
    
     {sales.map((item,index)=>
      <div   key={item.id ||index}className="card mb-3" style={{ maxWidth: '540px' }} >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.Image} className="img-fluid rounded-start" alt="Note Piture  " />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-title">{item.ProductName}</p>
              <p className="card-text">
              Price: ${item.Price}
              </p>
             
              <p className="card-text">
              <s>${item.OldPrice}</s>
              <div style={{ color: 'gold' }}>
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
            </div>
                <small className="text-muted"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
     )} 
      
    </div>
  );
};

export default AdminOrder;
