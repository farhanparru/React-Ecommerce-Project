import React, { useContext, useState } from 'react';
import { Data } from '../App';
import {  useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const EditProduct = () => {
  const navigate = useNavigate()
  const { product, setproduct } = useContext(Data);
 
  const { id } = useParams();
  const editproduct = product.find((item) => item.id === parseInt(id));
  console.log(editproduct);
  const [productName, setProductName] = useState(editproduct.ProductName);
  const [price, setPrice] = useState(editproduct.Price);
  const [image, setImage] = useState(editproduct.Image);
  const [oldPrice, setOldPrice] = useState(editproduct.OldPrice);
  const [animal, setAnimal] = useState(editproduct.Animal);
  const [qty, setQty] = useState(editproduct.Qty);
  const [stock, setStock] = useState(editproduct.Stock);

  const handleSave = (e) => {
    e.preventDefault();
    const updates = {
      ...editproduct,
      ProductName:productName,
      Price: price, 
      Image: image,
      OldPrice: oldPrice, 
      Stock: stock, 
      Qty: qty, 
      Animal: animal,
    };

    const updatedProduct = product.map((item) =>
      item.id === parseInt(id) ? updates : item
    );
    
    console.log(updatedProduct);
    setproduct(updatedProduct);
    toast.success("Edit SuccessFull")
    navigate ("/Productlist")
  };
   
   
  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
    <div className="card" style={{ maxWidth: '500px', width: '100%' }}>
    <div className="card-body">
     <h1>Edit Product list</h1>
      <form style={{ maxWidth: '500px', width: '100%' }}>
        <div className="row g-3">
          <div className="col-md-6">
            <input type="text" 
            className="form-control" 
            placeholder='ProductName'
            name='ProductName'
            defaultValue={editproduct.ProductName}
            onChange={(e)=>setProductName(e.target.value)}
             />
          </div>
          <div className="col-md-12">
            <input type="text"
               className="form-control"
               placeholder='Image Url  '
               name='Image'
                defaultValue={editproduct.Image}
                onChange={(e)=> setImage(e.target.value)}
              />
          </div>
          <div className="col-md-6">
            <input type="text"
             className="form-control"
             placeholder='Price'
               name='Price'
                defaultValue={editproduct.Price}
                onChange={(e)=> setPrice (e.target.value)}
              />
          </div>
          <div className="col-md-6">
            <input type="text"
             className="form-control" 
            placeholder='OldPrice'
             name='OldPrice'
             defaultValue={editproduct.OldPrice}
             onChange={(e)=> setOldPrice (e.target.value)}
              />
          </div>
          <div className="col-md-6">
            <input type="text"
             className="form-control"
             placeholder='Stock'
              name='Stock'
                defaultValue={editproduct.Stock}
                onChange={(e)=> setStock (e.target.value) }
              />
          </div>
          <div className="col-md-6">
            <input type="text"
             className="form-control" 
             placeholder='Qty'
             name='Qty'
             defaultValue={editproduct.Qty}
             onChange={(e)=> setQty (e.target.value)}
              />
          </div>
          <div className="col-md-6">
            <input type="text" 
            className="form-control" 
           placeholder='Animal'
            name='Animal'
              defaultValue={editproduct.Animal}
              onChange={(e)=> setAnimal (e.target.value)}
            />
          </div>
        </div>
        
        <div className="mt-3">
          <button type="submit" className="btn btn-primary me-2" onClick={handleSave}>Save</button>
          <button type="button" className="btn btn-secondary"  onClick={()=>  navigate("/Productlist")} >Cancel</button>
        </div>
        
      </form>
      </div>
      </div>
    </div>
  );
};

export default EditProduct;
