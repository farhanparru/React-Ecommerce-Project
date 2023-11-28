import React, { useRef, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import { Data } from '../App';

const LoginExam = () => {
  const navigate = useNavigate();
  const { userData, setLoging,setnewUser } = useContext(Data);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    const usern = usernameRef.current.value;
    const passw = passwordRef.current.value;


    // alreday exitintg user  next time same enter  erorr message
    const existingUser = users.find((existing) => existing === usern);
    if (existingUser) {
      toast.error('Username is already taken');
    } else {
    /*   This cod Check  user exit provied */
      const userExists = userData.find((item) => item.userName === usern && item.password === passw);
      
      if (userExists) {
        toast.success('Login Successfully');
        setLoging(true);
        navigate('/');
        setnewUser(userExists);
      } else {
        toast.error('Login Failed');
      }
      setUsername(usern);
      setUsers([...users, usern]);
      setLoggedIn(true);
    }
  };

  return (
    <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center'>
      <Card style={{ width: '80%', maxWidth: '400px' }} className='shadow p-3 mb-5 bg-body-tertiary rounded mx-auto'>
        <Card.Body style={{ height: '580px' }}>
          <Card.Text>
            <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
              <div>
                <form style={{ marginTop: '-200px' }}>
                  <h1 className='text-primary text-center mb-4'>Login Page</h1>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputusername' className='form-label'>
                      Username
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='exampleInputUsername'
                      aria-describedby='usernameHelp'
                      ref={usernameRef}
                      value={username}             
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <div id='emailHelp' className='form-text'>
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputPassword1' className='form-label'>
                      Password
                    </label>
                    <input type='password' className='form-control' id='exampleInputPassword1' ref={passwordRef} />
                  </div>
                  <div className='mb-3 form-check'>
                    <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                    <label className='form-check-label' htmlFor='exampleCheck1'>
                      Check me out
                    </label>
                  </div>
                  <div className='text-center mb-3'>
                    <span>Do you already have an account? </span>
                    <Link to='/Signup'>Sign Up</Link>
                  </div>
                  <div className='text-center mb-3'>
                   <span><Link to="/ForgetPassword">ForgetPassword</Link></span>
                   

                  </div>
                  <button onClick={handleLogin} type='submit' className='btn btn-primary w-100'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginExam;
