import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Other validation checks or API requests for password reset

    // Reset form fields after successful submission
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
        
      <div className="container-fluid vh-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Forgot Password?</h5>
                <p className="card-text text-center">You can reset your password here.</p>
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="form-group">
                    <input 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email" 
                      name="email" 
                      placeholder="Email Address" 
                      className="form-control mb-3" 
                      type="email" 
                    />

                    <input 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password" 
                      name="password" 
                      placeholder="New Password" 
                      className="form-control mb-3" 
                      type="password" 
                    />

                    <input 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      id="confirmPassword" 
                      name="confirmPassword" 
                      placeholder="Confirm Password" 
                      className="form-control mb-3" 
                      type="password" 
                    />
                  </div>
                  <div className="form-group text-center">
                  <Link to="/Login"> <button 
                      className="btn btn-lg btn-primary" 
                      type="submit"
                    
                    >
                      Reset Password
                    </button></Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ForgetPassword;
