import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DogData } from "./ProductSection/ProductData";
import LoginExam from "./HeaderSection/LoginExam";
import Head from "./HeaderSection/Head";
import Dog from "./ProductSection/Dog";
import ViewProduct from "./ProductSection/ViewProduct";
import { createContext } from "react";
import { useState } from "react";
import Cat from "./ProductSection/Cat";
import Cart from "./ProductSection/Cart";
import Bennar from "./ProductSection/Bennar";
import Signup from "./HeaderSection/Signup";
import Payment from "./ProductSection/Payment";
import Catgeroy from "./ProductSection/Catgeroy";
import Footer from "./HeaderSection/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminLogin from "./AdminPage/AdminLogin";
import AdminHome from "./AdminPage/AdminHome";
import UserNewComponent from "./AdminPage/UserNewComponent";
import ProductList from "./AdminPage/Productlist";
import AddProduct from "./AdminPage/AddProduct";
import EditProduct from "./AdminPage/EditProduct";
import AdminOder from "./AdminPage/AdminOder";
import ForgetPassword from "./HeaderSection/ForgetPassword";
export const Data = createContext();
function App() {
  const [product, setproduct] = useState(DogData);
  const [cart, setcart] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loging, setLoging] = useState(false);
  const [sales,setSales]= useState([])

  const [newUser,setnewUser] = useState([])
  
  const handleSignUp = (data) => {
    setUserData(data);
  };
  return (
    <div>
      <Data.Provider
        value={{ product, setproduct, cart, setcart, userData, setUserData,loging,setLoging,sales,setSales,newUser,setnewUser}}  >
        <Head />
        <Routes>
          <Route path="/" element={<Bennar />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<LoginExam />} />
          <Route path="/Dog" element={<Dog />} />
          <Route path="/ViewProduct/:id" element={<ViewProduct />} />
          <Route path="/Cat" element={<Cat />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/HomeImg" element={<Bennar />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/All Catgeroy" element={<Catgeroy />} />
          <Route path="/Admin" element={<AdminLogin />} />
          <Route path="Adminhome" element={<AdminHome />} />
          <Route path="/UserData" element={<UserNewComponent />} />
          <Route  path="/Productlist"element={<ProductList products={product} />}/>
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/EditProduct/:id" element={<EditProduct />} />
          <Route path="/AdminOder" element={<AdminOder />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />}/>
        </Routes>
        <Footer />
      </Data.Provider>
      <ToastContainer />

    
    </div>
  );
}

export default App;
