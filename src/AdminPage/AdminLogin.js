import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (username === 'admin' && password === '123456') {
      navigate("/Adminhome");
      toast.success("Admin login Completed ")
    } else {
       toast.error("Invalid credentials. Please try again.")
    }
  };

  return (
    <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center'>
      <Card style={{ width: '80%', maxWidth: '400px' }} className='shadow p-3 mb-5 bg-body-tertiary rounded mx-auto'>
        <Card.Body style={{ height: "580px" }}>
          <Card.Text>
            <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
              <div>
                <form style={{ marginTop: "-200px" }} onSubmit={handleSubmit}>
                  <h1 className='text-primary text-center mb-4'>Admin Login</h1>
                  <div className="mb-3">
                    <label htmlFor="exampleInputusername" className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUsername"
                      aria-describedby="usernameHelp"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required 
                    />
                 
                    <div id="emailHelp" className="form-text">
                 
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="mb-3 form-check">
                  
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminLogin;
