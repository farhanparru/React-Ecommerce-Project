import React from 'react'
import './App.css';
import Profile from "./Img/user.png"
import email from "./Img/email.jpg"
import pass from "./Img/pass.png"
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Data } from './App';

const LoginPage = () => {
  const navigate = useNavigate()
  const {userData,setUserData}=useContext(Data)

  function goToSignup(){
    
    navigate("/Signup")
  }
  return (
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={Profile} alt="profile" className="profile"/>
          </div>
        </div>
        <div>
          <h1>Login Page</h1>
          <div>
            <img src={email} alt="email" className="email"/>
            <input type="text" placeholder="Enter User name" className="name"/>
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input type="password" placeholder="Enter Password" className="name"/>
          </div>
         <div className="login-button">
         <button>Login</button>
         </div>
           <p className="link">
           <span>Forgot password?</span> Or <a onClick={goToSignup} href='#'>Sign Up</a>
           </p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default LoginPage
