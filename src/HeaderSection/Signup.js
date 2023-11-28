
import React, { useState, useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { Data } from '../App';
import {  toast } from 'react-toastify';
const Signup = () => {
const navigate = useNavigate();

  const { userData, setUserData } = useContext(Data);


  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    // from validation
    const userName = userNameRef.current.value;
    const emailId = emailRef.current.value;
    const password = passwordRef.current.value;
 
    setUserData(userName)
    if (!userName || !emailId || !password) {
        
        setErrorMessage('Please fill out the form');
       
        return;
      }
  
      const isEmailValid = /\S+@\S+\.\S+/.test(emailId);
      if (!isEmailValid) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }
  
      if (password.length < 6) {
        setErrorMessage('Password must be at least 6 characters long.');
        return;
      }
  
      if (userData.find((user) => user.userName === userName)) {
        setErrorMessage('Username already exists. Please choose a different one.');
        return;
      }
    

      const newUser = { userName: userName, emailId: emailId, password: password,cart:[] };
      setUserData([...userData, newUser]);
      console.log(userData);
      setErrorMessage('');
      
  toast.success("SuccessFull")
    navigate('/Login');
  };

  return (  
    <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center'>
      <Card style={{ width: '80%', maxWidth: '400px', height: 'auto' }} className='shadow p-3 mb-5 bg-body-tertiary rounded mx-auto'>
        <Card.Body>
          <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
            <form>
              <h1 className='text-danger text-center mb-4'>Signup Page</h1>
              <div className='mb-3'>
                <label htmlFor='exampleInputuserName' className='form-label'></label>
                <input
                  ref={userNameRef}
                  type='text'
                  className='form-control'
                  id='exampleInputuserName'
                  aria-describedby='userNameHelp'
                  placeholder='Enter User Name'
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'></label>
                <input
                  ref={emailRef}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Email Address'
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'></label>
                <input
                  ref={passwordRef}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Enter Password'
                />
              </div>

              <span style={{ color: 'red', margin: '10px' }}>{errorMessage}</span>

              <button
                type='submit'
                className='btn btn-danger w-100'
                style={{ marginBlockEnd: '-4rem' }}
                onClick={submit}
              >
                Sign Up
              </button>
            </form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Signup;
